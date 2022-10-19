import { FaCheck } from 'react-icons/fa'

function Success() {
  return (
    <div className='content h-screen w-full flex justify-center'>
        <div className='py-4 text-[#d47699] text-center'>
            <div className='inline-block p-10 rounded-full justify-center my-14 border-8 border-[#d47699]'>
                <FaCheck size={60} />
            </div>
            <h2 className='font-extrabold text-7xl'>Thank you!</h2>
            <p className='pt-10'>Your coaching enquiry form submission was a success! I will get back to you ASAP within 48 hours.</p>
        </div>
    </div>
  )
}

export default Success