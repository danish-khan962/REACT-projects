import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const GsapTo = () => {
//Implementing gsap.to()
useGSAP( () => {
  gsap.to('#blue-box', {
    x: 500,
    repeat: -1,
    yoyo: true,
    rotation: 360,
    duration: 2,
    ease: 'elastic'
  })
}, [])

  return (
    <main className='p-[1.5rem] bg-[#212121]'>
        <h1 className='text-[28px] text-[#ffffff] font-bold'>GsapTo</h1>

        <p className='text-[18px] text-[#ffffff] mt-[1rem]'>
            The <code className='text-orange-400'>gsap.to()</code> method is used to animate elements from their current state to a new state.
        </p>

        <p className='text-[18px] text-[#ffffff] mt-[0.5rem]'>
            The <code className='text-orange-400'>gsap.to()</code> method is similar to the {" "} <code className='text-orange-400'>gsap.from()</code> method, but the difference is that the{" "} <code>gsap.to()</code> method animates from their current state to a new state, while the <code className='text-orange-400'>gsap.from()</code> method animates elements from a new state to their current state.
        </p>

        <div  className='w-screen flex items-center mt-[3rem]'>
            <div id='blue-box' className='bg-blue-500 w-[150px] h-[150px] rounded-[5px]'></div>
        </div>
    </main>
  )
}

export default GsapTo
