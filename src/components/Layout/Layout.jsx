import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
return (
    <>
    <div className='min-h-screen flex flex-col'>
    <Navbar />
    <main className='flex-grow'>
        <Outlet>
        
    </Outlet>
    </main>
    <Footer/>
    </div>
    </>
)
}