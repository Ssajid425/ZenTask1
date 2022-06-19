import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
 import ReactPaginate from 'react-paginate';



const FetchFromApi = () => {
    const [ data ,setData] = useState([]);
    const [visible,setVisible]= useState(12);
    const [currentPage, setCurrentPage] = useState(1);
    //  const [pageCount, setpageCount] = useState(0);
    
    
   
    const getData = async() => {
        const response = await fetch("https://api.spacexdata.com/v4/launches/past?_page1&limit=10");
        const dat = await response.json();
        setData(dat);
       
     
    };

      const handlePageClick = (dat) =>{
        console.log(dat.selected)

      }
    const loadMore = () =>{
        setVisible(visible+12)
    }
    useEffect(()=> {
        getData();
    
    }, [] );
    console.log(data);


    
                
                const renderData =(selectData,index) => {
                    return (
                         
                        <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3"  key = {selectData.id}>    
                            <div class="card-flyer">
                                <div class="text-box">
                                    <div class="image-box">
                                    <Link to={`/moreinformation?id=${selectData.id}`}> <img src={selectData.links.patch.small} class = "rounded" alt="small" /></Link>
                                    </div>
                                    <div class="text-container">
                                        <h6> <Link to={`/moreinformation?id=${selectData.id}`}>{selectData.name}</Link></h6>
                                        <div class ="text-limit" >
                                      

                                        </div>
                                        
                                    </div>
                                </div>
                                <p>Flight Number:{selectData.flight_number}</p> 
                            </div>  
                    </div>
                      
                    )
                }
      return(
        
       
        <div id="cards_landscape_wrap-2">
             <div>
                <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={"..."}
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
                />
        <div class="container">
           
          <div class="row">
            {data.slice(0,visible).map(renderData)}  
            </div>
        </div>
       
                
            </div>
        {visible < data.length &&(
      <button className='button' onClick={loadMore}><span>Load More</span></button>

      
        )}


        
      </div>

      
      )
 
  
    
}
export default FetchFromApi;