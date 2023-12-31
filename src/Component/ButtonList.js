import React from 'react'


const ButtonList = () => {

  const button=[
    {
      name:"All"
    },
    {
      name:"Movies"
    },
    {
      name:"Bhojpuri cinema"
    },
    {
      name:"Bhojpuri song"
    },
    {
      name:"music"
    },
    {
      name:"indian cinema"
    },
    {
      name:"south inidian movies"
    },
  
    

  ]

  const buttonLength=button.length
  console.log(buttonLength)
  
  return (
    
  <div className='w-3/5 overflow-hidden ... text-nowrap  h-16 pr-5  pb-8 '>
      <ul className='flex font-bold   border-gray-700'>
        {button.map(
            ({name}) => {
            return(
                <li key={name} className={`pl-4 pr-4 py-3 hover:bg-zinc-400 ${name === "All" ?"bg-black text-white" : " "}  rounded-xl`}>
                   
                   
                    <span className='text-sm tracking-wider '>{name}</span>
                    
                </li>
            )}
        )}
      </ul>
         
    </div>
  )
}

export default ButtonList