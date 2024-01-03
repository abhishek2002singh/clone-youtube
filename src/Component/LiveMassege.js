import React from 'react'

const LiveMassege = ({name , massege}) => {
  return (
    <div className='flex items-center m-2 '>
        <img
          src="https://avatars.githubusercontent.com/u/108977081?v=4"
          alt="profile logo"
          className="w-9 h-9 rounded-full"
        />
        <h1 className='mx-2 font-bold'>{name}</h1>
        <h1>{massege}</h1>
    </div>
  )
}

export default LiveMassege