import { useState, useEffect } from "react"

import { getData } from "../utils/getData"
import CardPhoto from "../components/CardPhoto"

const categories = [
  "All",
  "Nature",
  "Travel",
  "Architecture",
  "Street",
  "Textures & Patterns",
]

function Gallery() {
  const [data, setData] = useState(null)
  const [filter, setFilter] = useState(null)
  const [keyword, setKeyword] = useState("")
  const [category, setCategory] = useState("All")

  useEffect(() => {
    getData("./data/data.json", setData)
  }, [])

  const filterByCategory = (category) => {
    const newData = data.filter((d) => {
      if (category === "All") return d

      return category === d.category
    })

    setFilter(newData)
    setCategory(category)
  }

  const filterByKeyword = () => {
    const newData = data.filter((d) => {
      if (keyword === "") return d

      return (
        d.title.toLowerCase().includes(keyword.toLowerCase()) ||
        d.desc.toLowerCase().includes(keyword.toLowerCase())
      )
    })

    setCategory("")
    setFilter(newData)
  }

  const navCategory =
    "w-full md:w-auto p-3 text-purple-300 font-semibold cursor-pointer border-2 border-transparent hover:bg-slate-300 hover:text-purple-800 hover:border-purple-600 duration-300"

  const navCategoryActive =
    "w-full md:w-auto p-3 font-semibold cursor-pointer border-2 border-purple-600 bg-slate-300 text-purple-800"

  return (
    <>
      <div className="relative h-60 md:h-80 bg-heroImage bg-fixed border-y-4 border-purple-300 hidden md:block" />
      <div className="container mx-auto px-[2%]">
        <nav className=" bg-slate-950 md:-mt-52 mt-10 flex justify-evenly items-center flex-col lg:flex-row rounded-lg lg:rounded-full py-2 md:sticky top-20 z-10">
          <ul className="flex justify-center items-center px-[2%] gap-8 w-full md:w-auto flex-col md:flex-row">
            {categories.map((d, i) => (
              <li
                className={category === d ? navCategoryActive : navCategory}
                onClick={() => filterByCategory(d)}
                key={i}
              >
                {d}
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="border-none outline-none py-2 px-4 rounded-full bg-violet-100 text-purple-800 font-semibold w-2/3 lg:w-auto mt-2 lg:mt-0"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyUp={filterByKeyword}
            placeholder="find something..."
          />
        </nav>

        <div className="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-40 lg:mt-60 mt-10">
          {filter ? (
            !!filter.length ? (
              filter.map((data, i) => (
                <CardPhoto
                  key={i}
                  data={data}
                  imgSpotlight="w-full aspect-square"
                />
              ))
            ) : (
              <h2 className="text-xl">
                Oops! We Could Not Find Matching Keyword{" "}
                <span className="font-bold">"{keyword}"</span>
              </h2>
            )
          ) : (
            data &&
            data.map((data, i) => (
              <CardPhoto
                key={i}
                data={data}
                imgSpotlight="w-full aspect-square"
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}
export default Gallery
