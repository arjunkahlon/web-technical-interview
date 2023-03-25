import type { NextPage } from "next"
import CardDeck from "../components/Deck"

const Home: NextPage = () => {
  return (
    <div className="flex-row flex">
      <CardDeck />
    </div>
  )
}

export default Home


