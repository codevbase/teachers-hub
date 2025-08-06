import React from 'react'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <h1 className='text-3xl'>Welcome to the Home Page</h1>
        <p className='text-sm'>This is the main content of the home page.</p>
      </div>
      <div className='flex flex-col items-center justify-center h-screen bg-white'>
        <p>Feel free to explore the site!</p>
        <p>Enjoy your stay!</p>
      </div>
    </>
  )
}
