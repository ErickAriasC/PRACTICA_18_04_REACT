import './Navbar.css'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='ul_nav'>
            <ItemNavbar content= 'Quienes Somos'styles='quienes_somos' />
            <ItemNavbar content= 'Acerca de nosotros' styles='acercaDe'/>
            <ItemNavbar content= 'FAQ' styles='faq'/>
        </ul>
    </nav>
  )
}
