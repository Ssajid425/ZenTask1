import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ReactPlayer from 'react-player'



const MoreInformation = () => {
    const [ data1 ,setData1] = useState([]);
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let TimeId = setInterval(() => setTime(new Date()), 1000);
        return () => {
         clearInterval(TimeId);
        };
        });
        
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
var id=searchParams.get("id");
const getData1 = async() => {
    const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
    setData1(await response.json());
    };
    
    useEffect(()=> {
        getData1();
    console.log(data1);
    }, [] );
    
    var str = JSON.stringify(data1);
    var JsonArray = JSON.parse(str);
    let navigate = useNavigate();


    
    return(
        <body>
<div class="container-fluid bg-1 text-center">
<div className='position-absolute top-0 end-0' style={{backgroundColor:"black"}}><b> the time is </b>  {
           time.toLocaleTimeString() 
    } 
    </div>
  <h2 class="margin">{JsonArray.name}</h2>
  <img src="bird.png" class="img-fluid"  /> 
  <h3>{JsonArray.date_utc}</h3>
   
</div>

<div class="container-fluid bg-2 text-center">
  <h3 class="margin">Details</h3>
  <h4>{JsonArray.details} </h4>
</div>

<div class='player'>
    <ReactPlayer url={JSON.stringify(data1.links)} controls={true}/>
    </div>
    <button className = 'btn btn-primary btn-lg' style={{margin:'20'}} onClick={() =>
    {
        navigate('/');
    }
    }> Home </button>

     </body>     
        
    )
    
        


    // const renderData =(selectData,index) => {
    //     return (
            
      

    //         <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3"  key = {selectData.id}>
    //         {
    //             console.log(visible1)
    //         }
    //             <div class="card-flyer">
    //                 <div class="text-box">
    //                     <div class="image-box">
    //                         <img src={selectData.links.patch.small} class = "rounded" alt="small" />
    //                     </div>
    //                     <div class="text-container">
    //                         <h6>{selectData.name}</h6>
    //                         <div class ="text-limit" >
    //                         <p>{selectData.details}</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
        
    //     </div>  

    //     )
    // }
//return();

// <div id="cards_landscape_wrap-2">
// <div className="container">
// <div className="row">
// {data1.slice(0,visible1).map(renderData)}  
// </div>
// </div>
// {visible1 < data1.length &&(
// <button className='button' onClick={loadMore}><span>Load More</span></button>
// )}
// </div>






}
export default MoreInformation;


