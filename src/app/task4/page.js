'use client'
import { FaSearch, FaStore } from 'react-icons/fa';
import './style.css'

const Task = () => {
    return (
       <>
       <div className='bg-gradient-to-r from-purple-200 via-blue-200 to-pink-300 h-screen p-12 overflow:hidden'>
          <div className='h-[88vh] border-4 border-black rounded-[30px] overflow-hidden'>
             <nav className='flex flex-row justify-between p-7 sm:px-[40px] md:px-[90px] lg:px-[150px]'>
                <div className='text-2xl font-bold'>
                   Xenotix
                </div>
                <div className='flex flex-row gap-10'>
                   <FaSearch size={18}/>
                   <FaStore size={18}/>
                </div>
             </nav>
             <nav className='flex flex-row justify-between items-center p-3 sm:px-[40px] md:px-[87px] lg:px-[150px] relative'>
                <div className='flex flex-col gap-2 font-semibold'>
                  <h1 className='headingXL1 heading1 headingLG1 headingMD1'>Explore</h1>
                  <h1 className='headingXL2 heading2 headingLG2 headingMD2'>Collection</h1>
                  <h1 className='headingXL3 heading3 headingLG3 headingMD3'>Account</h1>
                </div>
                <div className='hidden1 absolute top-[30px] left-[460px] hidden md:flex flex-col justify-center items-center rounded-full h-[200px] w-[200px] bg-gradient-to-r from-rose-100 via-purple-100 to-pink-200'>
                  <img src='/hand.png' height={40} width={40} />
                  <h1>Hello</h1>
                  <h1>William</h1>
                </div>
                <div className='flex flex-row gap-10 font-bold'>
                   View More 
                </div>
             </nav>
             <div className='flex flex-row justify-center w-full text-center last text-2xl font-semibold text-blue-500 '>
             Got a Startup Idea? 
             </div>
             <div className='sm:px-[40px] md:px-[100px] lg:px-[230px] md:flex flex-row md:gap-[10px] lg:gap-[380px] mt-[60px] items-center xl:overflow:hidden'>
             <div className='hidden md:flex flex-col gap-10 justify-center '>

                   <div className='flex flex-col gap-1 text-4xl font-bold w-[270px] text-with-border'>
                      <h1 className='signup1 signupXL1  signupLG1 signupMD1'>Lets turn it 
                      </h1> 
                      <h1 className='signup2 signupXL2 signupLG2 signupMD2'>into reality</h1> 
                   </div>
                   <a href="https://www.xenotix.co.in/" className='text-center signup3 signupXL3 signupLG3 signupMD3 p-2 bg-black text-white font-semibold w-[120px] rounded-[11px]' target="_blank" rel="noopener noreferrer">Explore Us</a>

                </div>
                <div className='relative md:mt-[-280px] sm:mt-[90px] z-20 '>
                   <div className='box box1 boxXL1 boxLG1 leftyrighty sm:top-40 sm:left-[-150px] md:top-0 md:left-0 absolute sm:h-[120px] sm:w-[120px] xl:h-[250px] xl:w-[250px] 2xl:h-[310px] 2xl:w-[310px] bg-red-300 md:rotate-[30deg]'>
                     <img src='https://images.pexels.com/photos/383557/pexels-photo-383557.jpeg?auto=compress&cs=tinysrgb&w=600'
                     className='h-full w-full object-cover' /> 
                   </div>
                   <div className='box box2 boxXL2 boxLG2 leftydowny absolute sm:top-0 sm:left-[-150px] md:top-0 md:left-0 sm:h-[120px] sm:w-[120px] xl:h-[250px] xl:w-[250px] 2xl:h-[310px] 2xl:w-[310px] bg-pink-100 md:rotate-[20deg]'>
                    <img src='https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=600' 
                    className='h-full w-full object-cover' /> 
                   </div>
                   <div className='box box3 boxXL3 boxLG3 rightylefty absolute sm:top-40 sm:left-[580px] md:top-0 md:left-0 sm:h-[120px] sm:w-[120px] xl:h-[250px] xl:w-[250px] 2xl:h-[310px] 2xl:w-[310px] bg-blue-100 md:rotate-[10deg]'>
                   <img src='https://images.pexels.com/photos/255387/pexels-photo-255387.jpeg?auto=compress&cs=tinysrgb&w=600'  
                   className='h-full w-full object-cover' />
                   </div>
                   <div className='box box4 boxXL4 boxLG4 rightydowny sm:top-0 sm:left-[580px] md:top-0 md:left-0 absolute sm:h-[120px] sm:w-[120px] xl:h-[250px] xl:w-[250px] 2xl:h-[310px] 2xl:w-[310px] bg-yellow-100 md:rotate-[0deg]'>
                     <img 
                         src='https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=600' 
                         className='h-full w-full object-cover' 
                     />
                   </div>
                </div>

                {/*  */}
                <div className='hidden md:block md:relative mt-[-280px] ml-[450px]'>
                   
                   <div className='boxy boxy1 boxyXL1 boxyLG1 md:absolute sm:h-[120px] sm:w-[120px] xl:h-[250px] xl:w-[250px] 2xl:h-[310px] 2xl:w-[310px] bg-blue-100' style={{transform:'rotate(10deg)'}}>
                   <img src='https://images.pexels.com/photos/255387/pexels-photo-255387.jpeg?auto=compress&cs=tinysrgb&w=600'  
                   style={{ height: '100%', width: '100%', objectFit: 'cover' }}  />
                   </div>
                   <div className='boxy boxy2 boxyXL2 boxyLG2 md:absolute sm:h-[120px] sm:w-[120px] xl:h-[250px] xl:w-[250px] 2xl:h-[310px] 2xl:w-[310px] bg-yellow-100' style={{transform:'rotate(0deg)'}}>
                     <img 
                         src='https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=600' 
                         style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
                     />
                   </div>
                </div>
             </div>
          </div>
       </div>
       </>
    )
}

export default Task;