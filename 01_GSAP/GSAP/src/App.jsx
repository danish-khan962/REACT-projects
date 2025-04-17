import React from 'react'
import GsapTo from './components/GsapTo'
import GsapFrom from './components/GsapFrom'
import GsapFromTo from './components/GsapFromTo'
import GsapTimeline from './components/GsapTimeline'
import GsapStagger from './components/GsapStagger'
import GsapScrollTrigger from './components/GsapScrollTrigger'
import GsapText from './components/GsapText'

const App = () => {
  return (
    <div >
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeline />
      <GsapStagger />
      <GsapScrollTrigger />
      <GsapText />
    </div>
  )
}

export default App
