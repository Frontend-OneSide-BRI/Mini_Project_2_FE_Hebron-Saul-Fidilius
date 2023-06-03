import { NavLink, useLocation } from "react-router-dom"

function Navbar() {
  const { pathname, hash } = useLocation()

  const handleActive = (isActive) => {
    const active = "text-purple-300 font-semibold"
    const notActive = "text-zinc-300 font-semibold hover:text-white"

    return isActive ? active : notActive
  }

  return (
    <header className="bg-slate-950 sticky top-0 border-b-2 border-b-purple-500 z-50">
      <div className="container mx-auto py-2 md:py-4 md:px-[2%] flex justify-center md:justify-between">
        <h1 className="text-xl font-semibold text-white hidden md:block">
          Photo <span className="text-purple-300 font-bold">Collection</span>
        </h1>
        <nav className="flex justify-between gap-8 md:gap-6">
          <NavLink to="/" className={({ isActive }) => handleActive(isActive)}>
            Home
          </NavLink>
          {pathname === "/" && (
            <>
              <a
                href="#spotlight"
                className={handleActive(hash === "#spotlight")}
              >
                Spotlight
              </a>
              <a
                href="#collection"
                className={handleActive(hash === "#collection")}
              >
                Collection
              </a>
            </>
          )}
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
