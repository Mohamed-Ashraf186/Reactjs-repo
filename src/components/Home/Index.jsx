import React from 'react'
import {useSelector} from 'react-redux'


const Home = () => {

  const counterGlobalValue= useSelector(state=>state.counterStore.counter)



  return (

    <div className='home'>
      <h2> Home</h2>
      <h1>
      <div>People supported us with {counterGlobalValue} $</div>
      </h1>
    </div>

    
  )
}

export default Home;