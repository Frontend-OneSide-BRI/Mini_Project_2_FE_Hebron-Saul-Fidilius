import { NavLink } from "react-router-dom"

function Navbar() {
  const handleActive = (isActive) => {
    const active = "text-purple-300 font-semibold"
    const notActive = "text-zinc-300 font-semibold hover:text-white"

    return isActive ? active : notActive
  }

  return (
    <header className="bg-slate-950 sticky border-b-1 border-b-purple-500">
      <div className="container mx-auto py-2 md:py-4 md:px-[2%] flex justify-center md:justify-between">
        <h1 className="text-xl font-semibold text-white hidden md:block">
          Photo <span className="text-purple-300 font-bold">Collection</span>
        </h1>
        <nav className="flex justify-between gap-8 md:gap-6">
          <NavLink to="/" className={({ isActive }) => handleActive(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => handleActive(isActive)}
          >
            Gallery
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
export default Navbar
