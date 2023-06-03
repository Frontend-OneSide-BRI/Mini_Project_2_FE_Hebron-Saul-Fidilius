function CardPhoto({ data, imgSpotlight, containerSpotlight }) {
  return (
    <div
      className={
        "mb-4 relative group w-full " +
        (containerSpotlight && containerSpotlight)
      }
    >
      <img
        src={data.image}
        alt={data.title}
        className={imgSpotlight && imgSpotlight}
      />
      <div className="hidden group-hover:flex absolute inset-0 p-[5%] bg-photoItem flex-col justify-end">
        <p className="text-white font-semibold truncate">{data.title}</p>
        <p className="text-white text-sm">{data.desc}</p>
      </div>
    </div>
  )
}
export default CardPhoto
