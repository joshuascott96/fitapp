import { FaPlus } from 'react-icons/fa'

function Faq() {

  return (
    <>
        <div name='faq' className='flex w-full py-8 bg-[#ffc8dd]'>
            <div className='content flex flex-col justify-center'>
                <div className='text-center text-[#d47699]'>
                    <div className='p-10'>
                        <h2 className='font-extrabold text-4xl'>Frequently Asked Questions</h2>
                        <p className="text-sm pt-3">Have a queston? Hopefully i can answer it for you below! If not, please dont hesitate to reach out and ask.</p>
                    </div>
                </div>
                <div>
	                <div className="flex flex-col justify-center text-[#d47699] px-4 pb-8 md:p-8">
		                <div className="space-y-4">
                            <details className="w-full group border-[#d47699] border-2 rounded-lg">
                                <summary className="p-6 text-lg font-bold cursor-pointer list-none flex justify-between items-center">How are the programs delivered?<span className='ml-4'><FaPlus className='transition group-open:-rotate-45 duration-300'/></span></summary>
                                <p className="px-6 py-6 pt-2 ml-4 -mt-4 text-sm">Each coaching package includes full unrestricted access to my coaching application. Inside this application, each client is able to view their full workout program, and track every workout as they train. Individuals are able to input their reps and weight for each exervise and in-turn, effectively progressively overload each workout.</p>
                            </details>
                            <details className="w-full group border-[#d47699] border-2 rounded-lg" open="">
                                <summary className="p-6 text-lg font-bold cursor-pointer list-none flex justify-between items-center">How often do the challenges start, can i start ASAP?<span className='ml-4'><FaPlus className='transition group-open:-rotate-45 duration-300'/></span></summary>
                                <p className="px-6 py-6 pt-2 ml-4 -mt-4 text-sm">Every challenge starts on the first monday of each month. But this can also be worked on a case by case basis, please let me know in our onboarding chat if you would like to alter the starting date. I will send out your starting information pack at least 48 hours before the starting date.</p>
                            </details>
                            <details className="w-full group border-[#d47699] border-2 rounded-lg">
                                <summary className="p-6 text-lg font-bold cursor-pointer list-none flex justify-between items-center">Are the programs unique to me?<span className='ml-4'><FaPlus className='transition group-open:-rotate-45 duration-300'/></span></summary>
                                <p className="px-6 py-6 pt-2 ml-4 -mt-4 text-sm">Absolutely, each program is built and catered to each individuals needs. I will mould the program around the answers that you provide in your enquiry form and any additional information you may wish to provide in our onboarding conversation.</p>
                            </details>
                            <details className="w-full group border-[#d47699] border-2 rounded-lg" open="">
                                <summary className="p-6 text-lg font-bold cursor-pointer list-none flex justify-between items-center">Are the programs updated at all once started?<span className='ml-4'><FaPlus className='transition group-open:-rotate-45 duration-300'/></span></summary>
                                <p className="px-6 py-6 pt-2 ml-4 -mt-4 text-sm">Yes! After every check-in that we conduct, i will review the results that i see in the training application and make adjustments accordinly. Additionally, if you decide that a particular workout or exercise i have programmed for you isn't working for you, for whatever reason, i can make ammendments accordingly.</p>
                            </details>
                            <details className="w-full group border-[#d47699] border-2 rounded-lg">
                                <summary className="p-6 text-lg font-bold cursor-pointer list-none flex justify-between items-center">Do you provide nutrition guidance and meal plans?<span className='ml-4'><FaPlus className='transition group-open:-rotate-45 duration-300'/></span></summary>
                                <p className="px-6 py-6 pt-2 ml-4 -mt-4 text-sm">Whilst i dont directly create a meal plan for each individual, you will recieve my nutrition information pack. In this pack, and with my guidance, i will give you your macronutrient split and you can mould your nutrition plan to this as you desire. I am a huge advocate for flexible dieting, I believe that by teaching you how to create your own meal plan and nutrition needs, i am benefiting you far more as you are able to eat whatever you like, whenever, and keep it within your daily macro goals.</p>
                            </details>
		                </div>
	                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq