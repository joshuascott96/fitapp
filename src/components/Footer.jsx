import { FaInstagram, FaFacebook } from 'react-icons/fa'
function Footer() {
  return (
    <>
        <div className="flex flex-col bg-[#ffc8dd] items-center space-y-7 sm:space-y-0  justify-between p-6 sm:flex-row text-[#d47699]">
          <div>
            <h2 className='text-[#d47699] font-extrabold p-2 border-4 border-[#d47699] text-base'>CBJ</h2>
          </div>
          <p className="text-center text-xs font-bold">© Copyright 2022 Coached By Jamie. All Rights Reserved.</p>
          <ul className='flex mx-4'>
            <li className='px-2 py-3'><a href='https://www.instagram.com/coachedbyjamie/'><FaInstagram size={15} /></a></li>
          </ul>
        </div>
    </>
  )
}

export default Footer