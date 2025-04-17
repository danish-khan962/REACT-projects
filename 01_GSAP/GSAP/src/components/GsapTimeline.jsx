import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapTimeline = () => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true});

    useGSAP(()=> {
        timeline.to("#amber-box", {
            x: 250,
            rotation: 360,
            duration: 2,
            borderRadius: '100%',
            ease: 'back.inOut'
        })

        timeline.to('#amber-box', {
            y: -50,
            scale: 1,
            rotation: 360,
            ease: 'bounce.inOut'
        })

        timeline.to('#amber-box', {
            x: 500,
            scale: 1,
            rotation: 360,
            duration: 2,
            borderRadius: '0%',
            ease: 'back.inOut'
        })
    }, [])


    //play/pause functionality
    const handlePlayPause = () => {
        if(timeline.paused()){
            timeline.play();
        }else{
            timeline.pause();
        }
    }

  return (
    <main className='p-[1.5rem] bg-[#212121]'>
            <h1 className='text-[28px] text-[#ffffff] font-bold mt-[2rem]'>GsapTimeline</h1>
    
            <p className='text-[18px] text-[#ffffff] mt-[1rem]'>
                The <code className='text-orange-400'>gsap.timeline()</code> method is used to create a timeline instance that can be used to manage multiple animations.
            </p>
    
            <p className='text-[18px] text-[#ffffff] mt-[0.5rem]'>
                The <code className='text-orange-400'>gsap.timeline()</code> method is similar to the {" "} <code className='text-orange-400'>gsap.to()</code>, <code className='text-orange-400'>gsap.from()</code> and <code className='text-orange-400'>gsap.fromTo()</code> methods, but the difference is that the{" "} <code>gsap.timeline()</code> method is used to create a timeline instance that can be used to manage multiple animations, while the <code className='text-orange-400'>gsap.to()</code> method animates elements from a new state to their current state, and <code className='text-orange-400'>gsap.to()</code> , <code className='text-orange-400'>gsap.from()</code> and <code className='text-orange-400'>gsap.fromTo()</code> methods are used to animate elements from their current state to a new state, from a new state to their current state and from a new state to new state, respectively.
            </p>

            <button className='py-[0.5rem] px-[1.5rem] text-[#e4e2e2] bg-green-800 text-[23px] rounded-[8px] hover:bg-green-900 hover:cursor-pointer transition-all 200ms ease-in-out mt-[2rem] active:bg-green-950' onClick={handlePlayPause}>Play/Pause</button>
    
            <div  className='w-screen flex items-center mt-[3rem]'>
                <div id='amber-box' className='bg-amber-400 w-[150px] h-[150px] rounded-[5px]'></div>
            </div>
        </main>
  )
}

export default GsapTimeline
