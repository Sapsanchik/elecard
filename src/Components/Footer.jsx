import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='w-full py-4 flex justify-between px-10'>
        <div>
          © {new Date().getFullYear()} Copyright Text
        </div>
        <Link to='https://www.elecard.com/ru' target='_blank'>Elecard</Link>
    </footer>
  )
}

export default Footer