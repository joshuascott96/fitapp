import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
        <div className='flex w-full'>
            <div className='content my-8'>
                <div className='text-center card max-w-md mx-auto text-[#d47699]'>
                    <div className='px-10 py-8'>
                        <h2 className='font-bold text-3xl'>Member Login</h2>
                        <p className="text-sm pt-3">Welcome back!</p>
                        <Link to='/'>
                            <button className="w-full py-3 mt-4 font-bold btn-primary">
                                Login in with Google
                            </button>
                        </Link>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/4 border-b border-[#FFC8DD] opacity-70 lg:w-1/4"></span>
                            <p className="text-xs">or login with email</p>
                            <span className="w-1/4 border-b border-[#FFC8DD] opacity-70 lg:w-1/4"></span>
                        </div>
                        <div className="mt-4 space-y-3 text-left">
                            <div>
                                <label for='email' className="text-xs">Email Address</label>
                                <input
                                    className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                                    type="email" 
                                    placeholder='Email Address' 
                                    autoComplete='email'
                                />
                            </div>
                            <div>
                                <label for='password' className="text-xs">Password</label>
                                <input
                                    className="w-full px-4 py-4 mt-1 text-sm bg-[#f8f8f8] text-[#777] rounded-lg focus:outline-[#777]" 
                                    type="email" 
                                    placeholder='Password' 
                                    autoComplete='email'
                                />
                            </div>
                            <div>
                                <label className="cursor-pointer flex items-center justify-end">
                                    <span className="text-xs mr-2">Remember me</span>
                                    <input type="checkbox"/>
                                 </label>
                                <Link to='/'>
                                    <button className="flex w-full py-3 items-center justify-center mt-4 font-bold duration-300 bg-[#c9a6dd] hover:bg-[#b092c2] text-[#fff] rounded-lg">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b border-[#FFC8DD] opacity-70 lg:w-1/5"></span>
                            <p className="text-xs">Not a member yet? <Link to='/signup'><span className='underline pl-2'>Join Now!</span></Link></p>
                            <span className="w-1/5 border-b border-[#FFC8DD] opacity-70 lg:w-1/5"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login