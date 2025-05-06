import React, { createContext, use, useState } from 'react'
import generateText from '../config/gemini';
export const Context = createContext();


const ContextProvider = (props) => {


  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [pastPrompts, setPastPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');

  const onSent = async (prompt) => {

    setAnswer("");
    setLoading(true);
    setShowResult(true);

    let response;
    if(prompt !== undefined){
      response = await generateText(prompt);
      setRecentPrompt(prompt);
    }else{
      setPastPrompts(prev=>[...prev, input]);
      setRecentPrompt(input);
      response = await generateText(input);
    }

    const result = await generateText(input);
    console.log(result);

    setAnswer(result);
    setLoading(false);
    setInput("");
  }

  const handleNewChat = ()=>{
    setLoading(false);
    setShowResult(false);
  }

  const contextValue = {
    onSent,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    pastPrompts,
    setPastPrompts,
    showResult,
    loading,
    answer,
    handleNewChat,
  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
