import coaching from '../assets/coaching.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

function Personal() {
  return (
    <>
      <div name='personal' className='w-full md:h-screen bg-[#ffc8dd] grid lg:grid-cols-2'>
        <div className='w-full md:h-screen flex md:items-center'>
          <div className='text-[#d47699] text-left px-10'>
            <div className='py-14 sm:py-20 md:py-0'>
              <h2 className='font-extrabold text-3xl lg:text-4xl'>Personal Online Coaching</h2>
              <p className="pt-6">One-On-One Personalised Online Coaching is designed for the individual who is looking for a fully comprehensive personalised workout and nutrition program. This program will assist you in completely transforming your lifestyle one block at a time. </p>
              <p className='pt-6'>Whats included?</p>
              <ul className='mt-4 pl-4 border-[#a587b7] border-l-4 space-y-2'>
                <li>Weekly Check-Ins</li>
                <li>Individualised nutrition program tailored to your goals</li>
                <li>Individualised workout programming</li>
                <li>Full Workout App access</li>
                <li>24/7 Contact Support with Me!</li>
              </ul>
              <div className='mt-8'>
                <p>Interested? fill out the form below and ill get in touch!</p>
                <div className='flex justify-center sm:justify-start'>
                  <NavLink to='/contact'><button className='mt-8 uppercase font-bold text-sm btn-primary px-8 py-4 '>Enquiry Form</button></NavLink>
                </div>
             </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex'>
          <img src={coaching} alt='flex' className='object-cover w-full h-[400px] md:h-screen' />
        </div>
    </div>
</>
  )
}

export default Personal