import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapStagger = () => {
    useGSAP(()=>{
        gsap.to('.stagger-box', {
            y: 50,
            rotation: 360,
            borderRadius: '100%',
            delay: 1,
            repeat: -1,
            yoyo: true,

            //stagger: 0.5,

            stagger: {
                amount: 1.5,
                axis: 'y',
                grid: [2,1],
                from: "center",
                ease: 'circ.inOut',
            }
            
        })
    }, [])

  return (
    <main className='px-[1.5rem] py-[3rem] bg-[#212121]'>
            <h1 className='text-[28px] text-[#ffffff] font-bold mt-[2rem]'>GsapStagger</h1>
    
            <p className='text-[18px] text-[#ffffff] mt-[1rem]'>
                GSAP Stagger is a feature that allows you to apply animations with a staggered delay to group of elements.
            </p>
    
            <p className='text-[18px] text-[#ffffff] mt-[0.5rem]'>
                By using the stagger feature in GSAP, you can specify the amount of time to stagger the animations between each element, as well as customize the easing and duration of each individual animation. This enables you to create dynamic and visually appealing effects, such as staggered fades, rotations, movements and more.
            </p>
    
            <div  className='w-screen flex items-center mt-[3rem] gap-3'>
                <div className='w-20 h-20 bg-indigo-100 rounded-[5px] stagger-box'></div>
                <div className='w-20 h-20 bg-indigo-200 rounded-[5px] stagger-box'></div>
                <div className='w-20 h-20 bg-indigo-300 rounded-[5px] stagger-box'></div>
                <div className='w-20 h-20 bg-indigo-400 rounded-[5px] stagger-box'></div>
                <div className='w-20 h-20 bg-indigo-500 rounded-[5px] stagger-box'></div>
                <div className='w-20 h-20 bg-indigo-600 rounded-[5px] stagger-box'></div>
                <div className='w-20 h-20 bg-indigo-700 rounded-[5px] stagger-box'></div>
            </div>
        </main>
  )
}

export default GsapStagger
