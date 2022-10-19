import {Link, Navigate} from 'react-router-dom'
function Contact() {
  return (
    <>
          <div className='flex w-full my-8 bg-[#ffc8dd]'>
            <div className='content-contact'>
                <div className='text-center text-[#d47699]'>
                    <div className='p-10'>
                        <h2 className='font-extrabold text-4xl'>Coaching Enquiry Form</h2>
                        <p className="text-sm pt-3">Please fill out the form below as accurately as possible. I will respond via email as soon as possible!</p>
                    </div>
                </div>
                <div className='mt-4 p-8 text-[#d47699] card'>
                  <form method='POST' action='https://getform.io/f/cff878ae-3a16-4465-ae19-ce97c2224351'>
                    <div className='sm:grid grid-cols-2 gap-4'>
                      <h3 className='col-span-2 pb-2 font-bold border-b-2 text-[#b092c2] border-[#b092c2]'>Personal Details</h3>
                      <div className='mt-2 sm:mt-0'>
                        <label for='first-name' className="text-xs">First Name</label>
                          <input
                            className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                            type="text" 
                            placeholder='Jane' 
                            autoComplete='name'
                            name='First Name'
                          />
                      </div>
                      <div>
                        <label for='last-name' className="text-xs">Last Name</label>
                          <input
                            className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                            type="text" 
                            placeholder='Doe' 
                            autoComplete='name'
                            name='Last Name'
                          />
                      </div>
                      <div>
                        <label for='email' className="text-xs">Email</label>
                          <input
                            className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                            type="email" 
                            placeholder='janedoe@email.com' 
                            autoComplete='email'
                            name='Email'
                          />
                      </div>
                      <div>
                        <label for='mobile' className="text-xs">Mobile Number</label>
                          <input
                            className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                            type="text" 
                            placeholder='04-0000-0000' 
                            autoComplete='phone number'
                            name='Mobile Number'
                          />
                      </div>
                      <h3 className='col-span-2 mt-6 pb-2 font-bold border-b-2 text-[#b092c2] border-[#b092c2]'>Your Fitness Experience & Goals</h3>
                      <div className='mt-2 sm:mt-0'>
                        <label for='Fitness Experience' className="text-xs">Fitness Experience</label>
                          <input
                            className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                            type="text" 
                            placeholder='Eg. Beginner Weights'
                            name='Fitness Experience'
                          />
                      </div>
                      <div>
                        <label for='training frequency' className="text-xs">How many times p/week can you train</label>
                          <input
                            className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                            type="text" 
                            placeholder='4 times' 
                            name='Training Frequency'
                          />
                      </div>
                      <div className='col-span-2'>
                        <label for='fitness goals' className="text-xs">What are your Fitness Goals? Short & Long Term</label>
                        <textarea name='Goals' rows='3' placeholder='Eg. Deadlift 100kg & Gain Lean Muscle Mass' className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]"></textarea>
                      </div>
                      <div className='col-span-2'>
                        <label for='injuries' className="text-xs">Any current or previous injuries that i need to be aware of?</label>
                        <textarea name='Injuries' rows='3' placeholder='Eg. Sore back when squatting' className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]"></textarea>
                      </div>
                      <div className='col-span-2'>
                        <label for='additional info' className="text-xs">Anything else you would like to include?</label>
                        <textarea name='Additional Notes' rows='3' placeholder='Eg. Occasional programmed running' className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]"></textarea>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <button className="w-full py-3 font-bold duration-300 bg-[#c9a6dd] hover:bg-[#b092c2] text-[#fff] rounded-lg">Submit</button>
                    </div>
                  </form>
              </div>
              <p className='text-xs my-6 px-2 text-center text-[#d47699]'><span className='font-bold'>Disclaimer:</span> The information you provide in this form will be held securely, and only be used to tailor a personal workout program to your needs. None of the information you provide will be disseminated publicly without your written consent prior. This could only be for testimonials, with your prior consent.</p>
            </div>
        </div>
    </>
  )
}

export default Contact