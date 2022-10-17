import { NavLink } from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'

function Packages() {
  return (
    <>
        <div name='challenge' className='flex w-full md:h-screen justify-center text-[#d47699] my-10 sm:my-0 bg-[#ffbed6]'>
            <div className='text-center md:grid md:grid-rows-4'>
                <div className='content px-10 my-auto pt-8 sm:pt-8 sm:py-12 md:p-14 row-span-1'>
                    <h2 className='font-extrabold text-3xl lg:text-4xl'>Challenges</h2>
                    <p className="text-sm pt-3">All packages are 100% tailored to each individual using the information provided in the Coaching Enquiry Form. Each package also includes check-ins and progressive updates as you make progress along with a nutrition guide to help you crush it in the kitchen.</p>
                </div>
                <div className='row-span-3 mt-8'>
                    <div className='md:grid grid-cols-2 h-full'>
                        <div className='text-left p-14 bg-running scale bg-center bg-cover text-[#fff]'>
                            <h2 className='font-bold text-3xl'>6 Week Program</h2>
                            <p className='text-xs opacity-70'>Short Term Motivation Blaster</p>
                            <p className="text-sm pt-6">For the person who is looking for a challenge for some motivation, accountability and action to challenge your daily habits whilst transforming your body</p>
                            <ul className='mt-6 space-y-2 border-l-4 border-[#ffffff75] pl-4 mb-8 sm:mb-0'>
                                <li>Half way point Check In</li>
                                <li>Nutrition Information pack</li>
                                <li>Individualised workout programming for 6 weeks</li>
                                <li>Full Workout App access</li>
                                <li>24/7 Contact Support with Me!</li>
                            </ul>
                            <div className='absolute right-0 bottom-0 m-8 flex items-center space-x-2'> 
                                <p className='hidden sm:flex text-xs uppercase font-bold'>Enquire Now!</p><NavLink className='' to='/contact'><button className='p-3 border-2 border-[#fff] rounded-full hover:bg-[#fff] hover:text-[#000] duration-300'><FiArrowRight size={20} /></button></NavLink>
                            </div>
                        </div>
                        <div className="text-left bg-flex scale bg-center bg-cover p-14 text-[#fff]">
                            <h2 className='font-bold text-3xl'>12 Week Program</h2>
                            <p className='text-xs opacity-70'>Long Term Foundations Builder</p>
                            <p className="text-sm pt-6">For the person who is looking for a challenge with a specific goal in mind of weight loss or muscle gain. Full programming and nutrition tailored to your goal</p>
                            <ul className='mt-6 space-y-2 border-l-4 border-[#ffffff75] pl-4 mb-8 sm:mb-0'>
                                <li>Check-Ins every four weeks</li>
                                <li>Individualised nutirion targets</li>
                                <li>Individualised workout programming for 12 weeks</li>
                                <li>3 different training blocks</li>
                                <li>Full Workout App access</li>
                                <li>24/7 Contact Support with Me!</li>
                            </ul>
                            <div className='absolute right-0 bottom-0 m-8 flex items-center space-x-2'> 
                                <p className='hidden sm:flex text-xs uppercase font-bold'>Enquire Now!</p><NavLink className='' to='/contact'><button className='p-3 border-2 border-[#fff] rounded-full hover:bg-[#fff] hover:text-[#000] duration-300'><FiArrowRight size={20} /></button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Packages