/* eslint-disable @typescript-eslint/no-explicit-any */



const Rightsection = (props: NewsProps) => {
  const { news } = props;
console.log(news,"news");


  return (
    <>
    <div className="w-56 ml-16">

      {news.map((data:any, index:number)=>{
        return <>
        <a href={data?.url}>
        <ul className="list-disc marker:text-green-600 font-bold">
            <li key={index} className="font-bold">
            {data?.title || 'Untitled'}
            </li>
        </ul>
        </a>
        <hr className="m-5" />
        
        </>
      })}
    </div></>
    
  );
};

export default Rightsection;

interface NewsProps  {
    news: any;
  };