import React, { useContext, useState } from 'react'
import './Sidebar.css';
import {assets} from '../../assets/assets'
import { Context } from '../../context/ContextProvider';

const Sidebar = () => {

  const [extend, setExtend] = useState(false);
  const {onSent, pastPrompts, setRecentPrompt, handleNewChat} = useContext(Context);

  const handleExtend = () => {
    if(extend == true){
      setExtend(false);
    }else{
      setExtend(true);
    }
  }

  const loadPrompt = (prompt) => {
    setRecentPrompt(prompt);  
    onSent(prompt);
  }

  return (
    <div className='sidebar'>

      {/* Top portion design */}
      <div className="top">
        <img src={assets.menu_icon} alt="menu_icon" className='menu-icon' onClick={handleExtend}/>
        <div className="new-chat" onClick={() => handleNewChat()}>
          <img src={assets.plus_icon} alt="plus_icon" className='plus-icon'/>
          {extend ? <p>New chat</p> : null}
        </div>
        {extend ? <div className="recent">
          <p className="recent-title">Recent</p>

          {pastPrompts.map((item, index)=>{
              return(
                <div className='recent-entry' onClick={()=>loadPrompt(item)}>
                <img src={assets.message_icon} alt="message_icon" />
                <p>{item.slice(0,17)} ...</p>
              </div>
              )
          })}
        </div> : null}
      </div>

      {/* Bottom portion design*/}
      <div className='bottom'>
        <div className="bottom-items recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extend ? <p>History</p> : null}
        </div>
        <div className="bottom-items recent-entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>

    </div>
  )
}

export default Sidebar
