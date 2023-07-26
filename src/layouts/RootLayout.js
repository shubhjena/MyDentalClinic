import { Outlet } from 'react-router-dom'
import Nav from '../pages/Nav'
import Footer from '../pages/Footer'

function RootLayout() {
  return (
    <div>
        <Nav/>
        <main className='mt-16'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default RootLayout
