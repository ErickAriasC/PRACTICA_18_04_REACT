import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaWhatsapp,FaFacebookF,FaInstagram   } from "react-icons/fa";

import './Footer.css'


export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <nav className='nav_footer'>
                    <ul className='ul_footer'>
                        <ItemNavbar content={<FaWhatsapp />} styles='whatsapp' />
                        <ItemNavbar content={<FaFacebookF />} styles='facebook' />
                        <ItemNavbar content={<FaInstagram />} styles='instagram' />
                    </ul>
                </nav>
            </footer>
        </>
    )
}
