import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const RootLayout = () => {
  return (

    <main>
      < Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default RootLayout