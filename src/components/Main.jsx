import hero from '../assets/hero-main.png'
import { Link } from 'react-scroll'
import { FaInstagram } from 'react-icons/fa'

function Main() {
  return (
    <>
        <div className='flex w-full h-screen justify-center items-center -mt-[129px]'>
          <div className='blur-overlay absolute top-0 -z-10 w-screen h-[400px]'></div>
            <div className='absolute -z-20'>
              <img src={hero} alt='flex' className='object-cover object-top xl:object-center sm: w-screen h-screen' />
            </div>
            <a href='https://www.instagram.com/coachedbyjamie/'>
              <div className='fixed bottom-0 right-0 text-[#fff] m-10 shadow-2xl z-20'>
                  <p className='bg-[#d47699] rounded-full p-4'><FaInstagram  size={25}/></p>
              </div>
            </a>
            <div className='content-faq text-center'>
              <h1 className='font-extrabold text-[#fff] text-5xl sm:text-7xl italic tracking-tighter uppercase -ml-20'>Lift Heavy</h1>
              <h1 className='font-extrabold text-[#FFC8DD] text-5xl sm:text-7xl italic tracking-tighter uppercase ml-8 sm:ml-20 -mt-3 sm:-mt-4'>Live Healthy</h1>
              <h1 className='font-extrabold text-[#BDE0FE] text-5xl sm:text-7xl italic tracking-tighter uppercase sm:ml-20 -mt-3 sm:-mt-4'>Be Happy</h1>
              <div>
                <Link to='personal' smooth={true} duration={500}><button className='mt-10 uppercase font-bold text-sm btn-secondary px-8 py-4'>Get Started</button></Link>
              </div>
            </div>
        </div>
    </>
  )
}

export default Main