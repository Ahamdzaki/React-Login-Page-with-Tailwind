export default function App(){
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-rose-100">
        <div className="relative flex flex-col m-6 bg-white  shadow-2xl rounded-2xl space-y-10 md:flex-row md:m-0 md:space-y-0">
          
          {/* left side */}
          <div className="p-6 md:p-20">
            <h2 className="text-4xl font-bold mb-5">Login</h2>
            <p className="max-w-sm mb-12 font-light font-sans text-gray-600">Login in your account to upload and download your videos, images, musics and ... </p>
            <input type="email" placeholder="Enter your email address" className="w-full p-4 border border-gray-300 rounded-md placeholder:font-thin placeholder:font-sans" />
            {/* middle part */}
            <div className="mt-6 hover:cursor-pointer flex flex-col space-y-3 items-center justify-between   md:flex-row md:space-y-0">
              <p className="font-thin text-cyan-700 font-sans text-sm">Forgot Password</p>
              <button className="w-full md:w-auto border p-4 rounded-lg font-sans font text-white bg-cyan-600
               hover:bg-opacity-90 translate hover:-translate-y-0.5 duration-500
              ">
                <span>Next</span>
              </button>
            </div>
            <div className="mt-12 border-b border-gray-300"></div>
            <p className="font-serif text-sm font-light text-gray-300 py-6 text-center">Or login with</p>
            {/* bottom */}
            
            <div className="flex flex-col px-4 space-y-3 md:space-y-0 md:space-x-4 md:flex-row  justify-center">
              <button className="py-2 px-5 border border-gray-300 rounded-sm translate hover:translate-y-0.5 duration-300">Facebook</button>
              <button className="py-2 px-5 border border-gray-300 rounded-sm translate hover:translate-y-0.5 duration-300">Google</button>
            </div>
          </div>
          
          {/* right side */}
          <div>
            <img src="/src/img/zaki.jpg" className="w-[620px] hidden rounded-r-2xl md:block" alt="" />
          </div>
          
          <div className="absolute -top-5 right-6 md:-top-10 cursor-pointer md:hidden">
            <p>x</p>
          </div>
          
        </div>
      </div>
              
    </>  
  )
}