import { Logotipo } from '../../UI/Logotipo/Logotipo'
import { Navbar } from '../../UI/Navbar/Navbar'


import './Header.css'

 export const Header = () => {
   return (
    <>
    <header className='header-page'>
    <Logotipo/>
    <Navbar/>
    </header>
    </>
)
 }
 