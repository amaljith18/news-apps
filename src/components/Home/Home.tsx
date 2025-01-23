/* eslint-disable @typescript-eslint/no-explicit-any */
import Leftsection from '../Leftsection/Leftsection'
import Rightsection from '../Rightsection/Rightsection'


interface newsProps {
    news: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (props:newsProps) => {
    console.log('Props data in Home component:', props);
  return (
    <div className='flex pl-12'>
      <Leftsection news= {props?.news}/>
      <Rightsection news= {props?.news} />
      
    </div>
  )
}

export default Home
