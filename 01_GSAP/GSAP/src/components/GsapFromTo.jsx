import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapFromTo = () => {
    useGSAP(()=>{
        gsap.fromTo('#pink-box', {
            x: 0, 
            rotation: 0,
            borderRadius: "0%",
        }, 
        {
            x: 500,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'bounce',
            borderRadius: '100%',
        })
    }, [])
    return (
        <main className='p-[1.5rem] bg-[#212121]'>
            <h1 className='text-[28px] text-[#ffffff] font-bold mt-[2rem]'>GsapFromTo</h1>
    
            <p className='text-[18px] text-[#ffffff] mt-[1rem]'>
                The <code className='text-orange-400'>gsap.fromTo()</code> method is used to animate elements from new state  to a new state.
            </p>
    
            <p className='text-[18px] text-[#ffffff] mt-[0.5rem]'>
                The <code className='text-orange-400'>gsap.fromTo()</code> method is similar to the {" "} <code className='text-orange-400'>gsap.from()</code> method, but the difference is that the{" "} <code>gsap.fromTo()</code> method animates from a new state to a new state, while the <code className='text-orange-400'>gsap.from()</code> method animates elements from a new state to their current state, and <code className='text-orange-400'>gsap.to()</code> method animates elements from their current state to a new state.
            </p>
    
            <div  className='w-screen flex items-center mt-[3rem]'>
                <div id='pink-box' className='bg-pink-500 w-[150px] h-[150px] rounded-[5px]'></div>
            </div>
        </main>
      )
}

export default GsapFromTo
