/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import logo from '../../assets/logo-news.svg'

const Navbar = (props:MenuProps) => {
  return (
    <div className='flex items-center bg-green-500 w-screen h-16'>
      <img src={logo} alt="" className='w-15 h-15 ml-2' />
      <h1 className='font-bold text-3xl ml-2'>NEWS TODAY</h1>
      <h1 onClick={()=>props?.setMenu('POPULARITY')} className='font-bold  ml-5 cursor-pointer'>POPULARITY</h1>
      <h1 onClick={()=>props?.setMenu('US NEWS')} className='font-bold  ml-5  cursor-pointer'>US NEWS</h1>
      <h1 onClick={()=>props?.setMenu('WORLD')} className='font-bold  ml-5  cursor-pointer'>WORLD</h1>
      <h1 onClick={()=>props?.setMenu('BUSINESS')} className='font-bold  ml-5  cursor-pointer'>BUSINESS</h1>
      <h1 onClick={()=>props?.setMenu('NEWS TIPLINE')} className='font-bold  ml-5  cursor-pointer'>NEWS TIPLINE</h1>
      <h1 onClick={()=>props?.setMenu('VIDEO')} className='font-bold  ml-5  cursor-pointer'>VIDEO</h1>
      <h1 onClick={()=>props?.setMenu('HEALTH')} className='font-bold  ml-5  cursor-pointer'>HEALTH</h1>
      <h1 onClick={()=>props?.setMenu('LIVE')} className='font-bold  ml-5 cursor-pointer'>LIVE</h1>
    </div>
  )
}

export default Navbar

interface MenuProps{
  setMenu:any
}