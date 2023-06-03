function CardPhoto({ data, imgSpotlight, containerSpotlight }) {
  return (
    <div
      className={
        "mb-4 relative group w-full overflow-hidden cursor-pointer " +
        (containerSpotlight && containerSpotlight)
      }
    >
      <img
        src={data.image}
        alt={data.title}
        className={
          "group-hover:scale-125 duration-300 " + (imgSpotlight && imgSpotlight)
        }
      />
      <div className="hidden group-hover:flex absolute inset-0 p-[5%] bg-photoItem flex-col justify-end ">
        <p className="text-white font-semibold truncate bg-[#00000044]">
          {data.title}
        </p>
        <p className="text-white text-sm bg-[#00000044]">{data.desc}</p>
      </div>
    </div>
  )
}
export default CardPhoto
