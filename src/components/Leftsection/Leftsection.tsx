/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const Leftsection = (props:newsProps) => {
    const {news} = props
    console.log('Props data in left:', props);
  return (
    <>
    <div className='w-9/12'>
        {news?.map((data:any, index:number )=>{
        return <>
        <a href={data?.url} className=''>
        <div className='flex mt-4'  key={index}>
          <div className='pr-5'>
          <h1 className='font-bold text-3xl mt-3' >{data?.title}</h1>
          <hr className='mt-4' />
          <h1 className='mt-4 font-bold'>{data.author}</h1>
          <hr className='mt-4' />
          <h1 className='mt-4 font-bold'>{data.description}</h1>
          <hr className='mt-4'/>
          </div>
          
        <img className='w-96 h-60' src={data?.urlToImage} alt={ 'News Image'} />
        </div>
        </a>
            <hr className='mt-5'/>
        </>

      })}
    </div>
    </>
    
  )
}

export default Leftsection
type newsProps= {
    news:any;
}