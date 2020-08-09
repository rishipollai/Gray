import React from 'react';
import web from "../src/images/love.gif";
import { NavLink } from 'react-router-dom';

const Home =()=>{
    return(<>
     <section id="header" className="d-flex align-items-center">

     <div className="container-fluid nav_bg">
    <div className='row'>
        <div className="col-10 mx-auto">
            <div className="row">
           <div className="col-md-6 pt-5 order-2 order-lg-1 my-4">
             <h1>
                 Improve Your Job Opportunities With<strong className="brand-name">
                     SakhaJobs</strong>
             </h1>
             <h2 className="my-4">
                 We are the team of excellent people making your job search easy.
             </h2>
             <div className="mt-3">
               <NavLink
                to="/service" className="button">
                Get Started
               </NavLink>
             </div>
           </div>
           <div className="col-lg-6 order-1 mt-5 header-image">
                <img src={web} className="img-fluid animated" alt="home img"/>
           </div>
           </div>
        </div>
    </div>
</div>
     </section>
    </>)
}

export default Home;