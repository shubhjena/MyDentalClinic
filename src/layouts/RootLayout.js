import { Outlet } from 'react-router-dom'
import Nav from '../pages/Nav'
import Footer from '../pages/Footer'

function RootLayout() {
  return (
    <div>
        <Nav/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout
