import React, {useState} from 'react'


const App = () => {
    const [count, setCount] = useState(0)
  return (

    <div>
        <header className='w-screen h-screen flex flex-col items-center justify-center space-y-5'>
            <p className='text-3xl font-bold underline text-center'>Hello Vite + React</p>
            <p>
                <button className='bg-gray-500 p-2 w-40 rounded-full text-white ' onClick={()=> setCount((count)=> count + 1 )}>
                    Count is : {count}
                </button>
            </p>
        </header>
    </div>
  )
}

export default App