import { useState, useEffect } from "react";
import { House } from "../../../types/house";
import Card from "../Card";

export default function CardDeck() {

  const [homes, setHomes] = useState<House[]>([]);
  const [isLoading, setIsLoading] = useState(true); 

  const fetchData = async (url: string) => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        const error: NodeJS.ErrnoException  = new Error ('An error occured while fetching the house data');
        throw error;
      }

      const data = await res.json();
      setHomes(data);
      setIsLoading(false); 
    } catch (error: any) {
        throw error;
    }
  }

  useEffect(() => {
    fetchData('/api/homesAPI/homes')
  }, [])

    if (isLoading) {
      return <div>isLoading</div>
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
