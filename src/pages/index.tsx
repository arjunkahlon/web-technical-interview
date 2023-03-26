import type { NextPage } from "next"
import { useState, useEffect } from "react"
import CardDeck from "../components/Deck"
import Auth from "../components/Auth"
import { UserClient } from "../../types/user"

const Home: NextPage = () => {

  const [user, setUser] = useState<UserClient | null>(null);

  const handleSignIn = (user: UserClient) => {
    setUser(user);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      handleSignIn(user);
    }
  }, [])

  return user
    ? < CardDeck />
    : <Auth handleSignIn = {handleSignIn}/>
}

export default Home