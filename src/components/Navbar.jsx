import {useState} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes, FaInstagram } from 'react-icons/fa'

function Navbar() {
        
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const location = useLocation()
    const activePath = (location.pathname === '/')

  return (
    <div className='relative px-4 lg:px-0 w-full'>
        <div className='flex md:bg-[#] justify-between content my-10 px-5 rounded-2xl items-center'>
            <NavLink to='/'>
                <div className={activePath ? 'text-right uppercase text-[#fff]' : 'text-right uppercase text-[#d47699]'}>
                    <h2 className='tracking-tighter -mr-1 text-sm'>Coached by</h2>
                    <h1 className='font-extrabold text-4xl tracking-[-0.07em] -mt-[11px]'>Jamie</h1>
                </div>
            </NavLink>
            <div>
                <div className='hidden md:flex'>
                    <ul  className={activePath ? 'nav-menu-white' : 'nav-menu-pink'}>
                        <Link to='about' className={activePath ? 'nav-btn' : 'hidden'} smooth={true} duration={500}><li>About Me</li></Link>
                        <Link to='personal' className={activePath ? 'nav-btn' : 'hidden'} smooth={true} duration={500}><li>Coaching</li></Link>
                        <Link to='challenge' className={activePath ? 'nav-btn' : 'hidden'} smooth={true} duration={500}><li>Programs</li></Link>
                        <Link to='faq' className={activePath ? 'nav-btn' : 'hidden'} smooth={true} duration={500}><li>faq</li></Link>
                        <ul className='flex mx-4'>
                            <li className='px-2 py-3 duration-300'><a href='https://www.instagram.com/coachedbyjamie/'><FaInstagram size={15} /></a></li>
                        </ul>
                        <NavLink to={activePath ? '/contact' : '/'} className={!activePath ? 'btn-primary mr-0' : 'btn-secondary mr-0'}><li>{activePath ? 'Enquire' : 'Back Home'}</li></NavLink>
                        { /* 
                        <NavLink to='/login' className={({isActive}) => (isActive ? 'btn-primary-active' : 'btn-primary')}><li>Login</li></NavLink>
                        <NavLink to='/signup' className={({isActive}) => (isActive ? 'btn-primary-active' : 'btn-primary-active')}><li>Join Now</li></NavLink>    
                        */ }                    
                    </ul>
                </div>
                <div className='flex md:hidden'>
                    <ul className={activePath ? 'nav-menu-white' : 'nav-menu-pink'}>
                        <NavLink to={activePath ? '/contact' : '/'} className={!activePath ? 'btn-primary mr-0' : 'btn-secondary mr-0'}><li>{activePath ? 'Enquire' : 'Back Home'}</li></NavLink>
                    </ul>
                </div>
                {/*<div onClick={handleClick} className='md:hidden relative z-10 cursor-pointer border-2 border-[#fff] hover:bg-[#fff] text-[#fff] hover:text-[#000] transition-colors duration-300 rounded-full p-4 shadow-2xl'>
                    {!nav ? <GiHamburgerMenu size={20} /> : <FaTimes size={20} />}
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar