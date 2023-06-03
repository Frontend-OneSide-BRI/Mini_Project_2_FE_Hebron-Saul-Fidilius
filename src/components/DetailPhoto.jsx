import { useEffect, useRef } from "react"

function DetailPhoto({ data, setIsActive }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])

  const closeModal = (e) => {
    e.stopPropagation()
    setIsActive(false)

    document.body.classList.remove("overflow-hidden")
  }

  const handleKeyUp = (e) => e.key === "Escape" && closeModal(e)

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-[#000000cc] z-50 flex justify-center items-start overflow-auto pt-4"
      onClick={closeModal}
      tabIndex={-1}
      onKeyUp={handleKeyUp}
      ref={ref}
    >
      <div
        className="w-auto bg-white p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute right-0 top-0 p-2 bg-rose-500 z-50 rounded-full md:translate-x-1/2 md:-translate-y-1/2 w-8 h-8 flex justify-center items-center cursor-pointer text-white font-bold"
          onClick={closeModal}
        >
          X
        </span>
        <div className="relative w-full mb-2">
          <img src={data.image} alt={data.title} className="w-full" />
          <div className="absolute top-0 right-0 px-2 py-1 rounded-full bg-violet-100 m-2">
            <p className="font-semibold text-purple-800">{data.category}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-purple-800">{data.title}</h3>
        <h5 className="text-purple-500 font-semibold">{data.desc}</h5>
      </div>
    </div>
  )
}
export default DetailPhoto
