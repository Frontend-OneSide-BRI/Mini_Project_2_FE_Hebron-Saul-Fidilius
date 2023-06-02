import Navbar from "./Navbar"
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="min-h-screen bg-violet-100">{children}</div>
      <Footer />
    </div>
  )
}
export default Layout
