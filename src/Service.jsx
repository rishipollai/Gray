import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Footer from './Footer';

const Service =()=>{
    return(<>
      <div className="my-5 ">
      <h1 className="text-center">
               Our Services
        </h1>
    <div className="container-fluid mb-5 mt-5"> 
    <div className='row'>   
      <div className="row row-cols-1 row-cols-md-3">
         
                {
                       Sdata.map((val,ind)=>{
                         return <Card
                          imgsrc={val.imgsrc}
                          title={val.title}
                         />
                       })
                   }
   </div>
   </div>
   </div>
   </div>


   <Footer/>
    </>)
}

export default Service;