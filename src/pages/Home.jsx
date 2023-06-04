import { useState, useEffect } from "react"
import Masonry from "react-masonry-css"

import CardPhoto from "../components/CardPhoto"
import Carousel from "../components/Carousel"
import { getData } from "../utils/getData"

const breakpointObj = {
  default: 5,
  1200: 3,
  1000: 2,
  500: 1,
}

function getSpotlightRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())

  return shuffled.slice(0, num)
}

function Home() {
  const [data, setData] = useState(null)
  const [spotlight, setSpotlight] = useState(null)

  useEffect(() => {
    getData("./data/data.json", setData)
  }, [])

  useEffect(() => {
    if (data) {
      const newSpotlight = getSpotlightRandom(data, 4)
      setSpotlight(newSpotlight)
    }
  }, [data])

  return (
    <>
      <Carousel />
      <section
        id="spotlight"
        className="container mx-auto py-10 md:py-16 px-[2%] md:px-0 xl:px-[2%] border-b-2 border-slate-200"
      >
        <h2 className="text-2xl font-semibold mb-4">Spotlight</h2>
        <div className="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {spotlight &&
            spotlight.map((data) => (
              <CardPhoto
                key={data.title}
                data={data}
                imgSpotlight="w-full aspect-square"
                containerSpotlight="hidden [&:nth-child(1)]:block md:[&:nth-child(2)]:block lg:[&:nth-child(3)]:block xl:[&:nth-child(4)]:block"
              />
            ))}
        </div>
      </section>
      <section
        id="collection"
        className="container mx-auto py-10 md:py-16 px-[2%] md:px-0 xl:px-[2%]"
      >
        <h2 className="text-2xl font-semibold mb-4">Collection</h2>
        <Masonry
          breakpointCols={breakpointObj}
          className="flex w-auto -ml-4"
          columnClassName="pl-4 bg-clip-border"
        >
          {data &&
            data.map((data) => <CardPhoto key={data.title} data={data} />)}
        </Masonry>
      </section>
    </>
  )
}
export default Home
