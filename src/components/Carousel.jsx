import { useState } from "react"

const data = [
  {
    img: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: "Capture the Moments",
    paragraph: "A Stunning Collection of Photographs",
  },
  {
    img: "https://images.pexels.com/photos/3454270/pexels-photo-3454270.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: "Our Exquisite Photo Collection",
    paragraph: "Preserving the Past, Celebrating the Present",
  },
  {
    img: "https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&w=1600",
    caption: "Infinite Stories, One Frame at a Time",
    paragraph: "Explore Our Enchanting Photo Collection",
  },
]

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const lastIndex = data.length - 1

  const nextSlide = () => {
    if (currentSlide === data.length - 1) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide((currentSlide) => currentSlide + 1)
    }
  }
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.length - 1)
    } else {
      setCurrentSlide((currentSlide) => currentSlide - 1)
    }
  }

  return (
    <div className="h-60 md:h-80 border-y-4 border-purple-300">
      <div className="relative h-full overflow-x-hidden">
        {data.map((d, i) => {
          const { img, caption, paragraph } = d
          let position = "translate-x-full"

          if (i === currentSlide) {
            position = "opacity-100 bg-bottom"
          }

          if (
            i === currentSlide - 1 ||
            (currentSlide === 0 && i === lastIndex)
          ) {
            position = "-translate-x-full"
          }

          return (
            <div
              key={i}
              className={
                "absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover  bg-fixed opacity-0 duration-1000 " +
                position
              }
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute hidden sm:block left-1/2 -translate-x-1/2 bottom-4 bg-[#00000044] rounded-md py-4 px-8">
                <h5 className="text-purple-200 text-lg lg:text-2xl font-semibold lg:font-bold">
                  {caption}
                </h5>
                <p className="text-purple-200 text-sm lg:text-lg italic">
                  {paragraph}
                </p>
              </div>
            </div>
          )
        })}
        <div className="absolute top-1/2 -translate-y-1/2 w-full z-20">
          <div className="relative h-10">
            <button
              className="aspect-square h-full rounded-full bg-white hover:bg-purple-200 absolute left-2 text-2xl font-bold border border-purple-300"
              onClick={prevSlide}
            >
              <p className="aspect-square">&#60;</p>
            </button>
            <button
              className="aspect-square h-full rounded-full bg-white hover:bg-purple-200 absolute right-2 text-2xl font-bold border border-purple-300"
              onClick={nextSlide}
            >
              <p className="aspect-square">&#62;</p>
            </button>
          </div>
        </div>

        {/* <div
          className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${data[currentSlide].img})` }}
        />
        <div className="absolute hidden sm:block left-1/2 -translate-x-1/2 bottom-4 bg-[#00000044] rounded-md py-4 px-8">
          <h5 className="text-purple-200 text-lg lg:text-2xl font-semibold lg:font-bold">
            {data[currentSlide].caption}
          </h5>
          <p className="text-purple-200 text-sm lg:text-lg italic">
            {data[currentSlide].paragraph}
          </p>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 w-full">
          <div className="relative h-10">
            <button
              className="aspect-square h-full rounded-full bg-white hover:bg-purple-200 absolute left-2 text-2xl font-bold border border-purple-300"
              onClick={prevSlide}
            >
              <p className="aspect-square">&#60;</p>
            </button>
            <button
              className="aspect-square h-full rounded-full bg-white hover:bg-purple-200 absolute right-2 text-2xl font-bold border border-purple-300"
              onClick={nextSlide}
            >
              <p className="aspect-square">&#62;</p>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default Carousel
