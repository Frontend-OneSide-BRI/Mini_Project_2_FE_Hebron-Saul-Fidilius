import { useState } from "react"

import DetailPhoto from "./DetailPhoto"

function CardPhoto({ data, imgSpotlight, containerSpotlight }) {
  const [isActive, setIsActive] = useState(false)

  const viewDetail = () => {
    setIsActive(true)
    if (typeof window != "undefined" && window.document) {
      document.body.classList.add("overflow-hidden")
    }
  }

  return (
    <div
      onClick={viewDetail}
      className={"w-full " + (containerSpotlight && containerSpotlight)}
    >
      <div className="mb-4 relative group w-full overflow-hidden cursor-pointer">
        <img
          src={data.image}
          alt={data.title}
          className={
            "group-hover:scale-125 duration-300 " +
            (imgSpotlight && imgSpotlight)
          }
        />
        <div className="hidden group-hover:flex absolute inset-0 p-[5%] bg-photoItem flex-col justify-end ">
          <div className="text-white bg-[#00000044] p-2">
            <p className=" font-semibold truncate ">{data.title}</p>
            <p className=" text-sm ">{data.desc}</p>
          </div>
        </div>
      </div>

      {isActive && <DetailPhoto data={data} setIsActive={setIsActive} />}
    </div>
  )
}
export default CardPhoto
