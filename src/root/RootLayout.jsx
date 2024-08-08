import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "@/components/navbar/Header"
import Navbar from "@/components/navbar/Navbar"

const RootLayout = () => {
  return (

    <main>
      < Header />
      < Navbar />
        <Outlet />
        <Footer />
    </main>
  )
}

export default RootLayout