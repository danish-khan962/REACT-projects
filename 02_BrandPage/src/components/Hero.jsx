import React from 'react'
import Flipkart from '../images/flipkart.png';
import Amazon from '../images/amazon.png';
import Shoe from '../images/shoe_image.png';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    //gsap animation
    useGSAP(() => {
        gsap.from('#shoe',{
          x: window.innerWidth,
          duration: 1.5,
          ease: 'power3.out'
        })

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
      }, []);

  return (
    <section className='flex flex-row justify-evenly items-center mt-10 max-995:flex-col-reverse max-995:w-[100%] pl-7 pr-7 pt-0 pb-5'>
        <div className='w-[595px] flex flex-col gap-6 max-995:w-[100%]'>
            <h1 className='text-[108px] text-[#000000] font-poppins leading-[102px] uppercase font-bold  max-1181:text-[100px] max-1181:leading-[95px] max-1100:text-[90px] max-1100:leading-[90px] max-700:!text-[65px] max-700:!leading-[65px] ' id='heading'>your feet deserve the best</h1>
            <p className='w-[404px] uppercase font-semibold text-gray-995 text-[16px] para max-995:w-[100%]'>your feet deserve the best and we're here to help you with our shoes. your feet deserve the best amnd we're here to help you with our shoes.</p>
            <div className='w-[331px] flex flex-row justify-between items-center'>
                <button className='text-[24px] text-[#fff] bg-[#D01C28] capitalize px-4 py-1 font-semibold para hover:bg-[#ad2d36]'>shop now</button>
                <button className='text-[24px] text-gray-700 bg-transparent border-[1px] border-[#000000] capitalize px-4 py-1 font-semibold para hover:bg-[#2e2e2e] hover:text-[#fff] transition-all ease-in-out 200ms'>category</button>
            </div>
            <div className='flex flex-col gap-y-4'>
                <p className='capitalize text-[16px] text-gray-700 para'>also available on</p>
                <div className='flex flex-row gap-x-5 para'>
                    <img src={Flipkart} alt="flipkart" className='h-[32px] w-[32px] hover:cursor-pointer'/>
                    <img src={Amazon} alt="amazon" className='h-[32px] w-[32px] hover:cursor-pointer'/>
                </div>
            </div>
        </div>

        <div className='max-700:flex justify-center items-center text-center'>
            <img src={Shoe} alt="shoe"  className='hover:transition-all duration-500 ease-in-out hover:scale-110 hover:bg-[radial-gradient(circle,_rgba(255,105,135,0.3)_0%,_white_70%)]' id='shoe'/>
        </div>
    </section>
  )
}

export default Hero
