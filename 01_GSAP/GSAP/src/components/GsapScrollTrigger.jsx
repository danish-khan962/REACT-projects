import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaCircleArrowDown } from "react-icons/fa6";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
    const scrollRef = useRef();
   

    useGSAP(()=>{
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 400,
                rotation: 360,
                scale: 1,
                borderRadius: '100%',
                
                //scrollTrigger
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'top 20%',
                    scrub: true,
                },
                ease: 'power1.inOut',
            })
        })
    }, {scope: scrollRef})

  return (
    <main className='px-[1.5rem] py-[3rem] bg-[#212121]'>
            <h1 className='text-[28px] text-[#ffffff] font-bold mt-[2rem]'>GsapScrollTrigger</h1>
    
            <p className='text-[18px] text-[#ffffff] mt-[1rem]'>
                GSAP Scroll Trigger is a pulgin that allows you to create animations that are triggered by the scroll position of the page.
            </p>
    
            <p className='text-[18px] text-[#ffffff] mt-[0.5rem]'>
                With ScrollTrigger, you can define various actions to be triggered at specific scroll points, such as starting or ending an animation, scrubbing through animations as the user scrolls, pining elements to the screen and more.
            </p>

            <div className='flex justify-center items-center gap-5 mt-[3rem]'>
            <p className=' text-[#ffffff] text-[17px]'>Scroll down to see the animations</p>
            <FaCircleArrowDown className='text-[#47a6ff] text-[22px]' id='arrow'/>
            </div>

            <div  className='w-screen flex items-center mt-[10rem] mb-[5rem] gap-3' ref={scrollRef}>
                <div className='w-20 h-20 bg-teal-300 rounded-[5px]'></div>
                <div className='w-20 h-20 bg-purple-500 rounded-[5px]'></div>
            </div>
        </main>
  )
}

export default GsapScrollTrigger
