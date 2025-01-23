import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'

const Main = () => {
    const [news,setNews] = useState(([]));
    const [menu, setMenu] = useState((''));

    const fetchdata = async()=>{
        try{
       const response =  await fetch(`https://newsapi.org/v2/everything?q=Apple&from=&sortBy=${menu ? menu : 'popularity'}&apiKey=4d744f67ed804dab821631a7222dde06`)
            const json = await response.json();
            setNews(json.articles || [])
            console.log(json.articles,"json")

        }catch(err){
          console.error(err)
        }
        }
        useEffect(()=>{
           fetchdata();
        },[menu])
  return (
    <>
    <div>
      <Navbar setMenu = {setMenu}/>
      <Home news={news}/>
    </div></>
    
  )
}

export default Main
