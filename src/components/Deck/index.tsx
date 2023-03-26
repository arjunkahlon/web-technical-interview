import { useState, useEffect } from "react";
import Card from "../Card";
import { House } from "../../../types/house";


export default function CardDeck() {

  const [homes, setHomes] = useState<House[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadErr, setLoadErr] = useState(false); 

  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        const error: NodeJS.ErrnoException  = new Error ('An error occured while fetching the house data');
        setLoadErr(true);
      } else {
        const data = await res.json();
        setHomes(data);
        setIsLoading(false); 
      }
    } catch (error: any) {
        setLoadErr(true);
    }
  }

  useEffect(() => {
    fetchData('/api/homesAPI/homes')
  }, [])

    if (isLoading) {
      return (
        <div className="flex flex-row">
          <div className="grid-cols-1 mx-auto">
            <div className="p-4 ">
              <h2 className="text-primary text-2xl">Loading Homes...</h2>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="flex flex-row">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
            {homes.map((home, index) => <Card home={home} key={index}/>)}
          </div>
        </div>
      )
    }
}
