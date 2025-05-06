import React, { useContext } from 'react'
import './Main.css';
import { assets } from '../../assets/assets'
import { Context } from '../../context/ContextProvider';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Main = () => {
  
  const { onSent, input, setInput, recentPrompt, setRecentPrompt, pastPrompts, setPastPrompts, showResult, loading, answer } = useContext(Context);

  const handleInput = (e) => {
    setInput(e.target.value);
  }
  return (
    <div className='main'>
      {/* NavBar */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>

      {/* Main container */}
      <div className="main-container">

        {!showResult ? <>
          <div className="greet">
            <p><span>Hello, User</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="compass_icon" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="bulb_icon" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} alt="message_icon" />
            </div>
            <div className="card">
              <p>Tell me about React js and React native</p>
              <img src={assets.code_icon} alt="code_icon" />
            </div>
          </div>
        </>   :    <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="gemini_icon" />

            {loading ? <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> : <p dangerouslySetInnerHTML={{__html: answer}} className='para'></p>}

          </div>
          </div>}



        {/* Main bottom */}
        <div className="main-bottom">
          <div className="searchBox">
            <input type="text" placeholder='Enter a prompt here' onChange={handleInput} value={input} />
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              {input ? <img src={assets.send_icon} alt="send_icon" onClick={() => onSent()} /> : null}
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
