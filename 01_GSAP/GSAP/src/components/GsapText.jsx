import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapText = () => {
    useGSAP(()=>{
        gsap.to('#heading', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
        })

        gsap.fromTo('.para', {
            opacity: 0,
            y: 1,
        }, {
            opacity: 1,
            y: 0,
            ease: 'power1.inOut',
            delay: 0.5,
            stagger: 0.1,
        })
    }, [])

  return (
    <main className='p-[1.5rem] bg-[#212121]'>
            <h1 className='text-[28px] text-[#ffffff] font-bold mt-[2rem] opacity-0 translate-y-10' id='heading'>GsapText</h1>
    
            <p className='text-[18px] text-[#ffffff] mt-[1rem] para'>
                We can assume same methods like <code className='text-orange-400'>gsap.to()</code>, {" "} <code className='text-orange-400'>gsap.from()</code>, {" "} <code className='text-orange-400'>gsap.fromTo()</code> and <code className='text-orange-400'>gsap.timeline()</code> to animate text.
            </p>
    
            <p className='text-[18px] text-[#ffffff] mt-[0.5rem] para'>
                Using these methods we can achieve various text animations and effects like fade in, fade out, slide in, slide out and many more.
            </p>

            <p className='text-[18px] text-[#ffffff] mt-[0.5rem] para'>
               For more advanced text animations and effects you can explore GSAP TextPlugin or third party libraries that specialize in text animations.
            </p>
        </main>
  )
}

export default GsapText
