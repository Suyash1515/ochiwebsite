import React from 'react'

function Footer() {

  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20'>
        <div className='w-1/2'>
            <div className='heading'>
                <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-5'>Eye-</h1>
                <h1 className='text-[8vw] font-semibold uppercase leading-none -mb-5'>Opening</h1>
            </div>
        </div>
        <div className='w-1/2'>
            <h1 className='text-[6vw] font-semibold uppercase leading-none -mb-10'>
                Presentations
            </h1>
            <div className='dets mt-20'>
                    <a className='block text-xl font-light' href='#'>Facebook</a>
                    <a className='block text-xl font-light' href='#'>Instagram</a>
                    <a className='block text-xl font-light' href='#'>Twitter</a>
                </div>
        </div>
    </div>
  )
}

export default Footer