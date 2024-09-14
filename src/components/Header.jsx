import React from 'react'
import { Button } from './ui/button'

function Header() {
  return (
    <div className='p-3 shadow-md flex justify-between items-center px-5 '>
      <img src="/logo.svg" className='w-16 h-10' alt="" />
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  )
}

export default Header