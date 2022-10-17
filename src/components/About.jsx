import about from '../assets/abouttt.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

function About() {
  return (
    <>
        <div name='about' className='w-full md:h-screen grid md:grid-cols-2 bg-[#ffbed6] overflow-hidden'>
            <div className='bg-[#f5b5cd]'>
              <img src={about} alt='flex' className='object-cover object-top md:object-center w-full h-80 md:h-screen' />
            </div>
            <div className='w-full md:h-screen flex md:items-center'>
              <div className='text-[#d47699] text-left px-10'>
                  <div className='py-14 sm:py-20 md:py-0'>
                    <h2 className='font-extrabold text-3xl lg:text-5xl'>Hi there, I'm Jamie!</h2>
                    <p className='pt-10'>I am the coach and founder of Coached By Jamie. I am a certified personal trainer with a passion for fitness and living a healthy lifestyle. Join me on your fitness journey and let me unlock your potential to feel empowered, confident and strong.</p>
                    <p className='pt-10'>I am currently offering my potential clients either, month-to-month, 6 week or 12 week workout and nutrition packages. Each of these are personally tailored to each individual and their needs.  </p>
                    <div className='space-x-4 mt-6 flex justify-center sm:justify-start'>
                        <Link to='personal' smooth={true} duration={500}><button className='mt-10 uppercase font-bold btn-primary text-sm px-8 py-4'>Packages</button></Link>
                        <NavLink to='/contact'><button className='mt-10 uppercase font-bold text-xs px-4 py-4 text-[#d47699] hover:border-b-2 hover:border-[#d47699] duration-300'>Enquiry Form</button></NavLink>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default About