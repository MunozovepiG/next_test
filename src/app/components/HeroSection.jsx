import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (

    <div className='grid grid-cols-1 lg:grid-cols-12'>

        <div className='col-span-7'>
        <section>
    <h1 className='text-white'> One Section</h1>
  

    <p className = 'text-[#ADB7BE]'> Some white text</p>
   </section>
        </div>

        <div className='col=span-5'>
            <p> can you notice the columns</p>
            <Image
            src='/images/download.jpeg'
            width={100}
            height={100}
            />
        </div>

    </div>
   
  )
}

export default HeroSection