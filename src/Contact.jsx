import React from 'react';

const Contact =()=>{
    return(<>
     <div className="my-5">
        <h1 className="text-center">
            Contact US
        </h1>
     </div>
     <div className="container contact_div">
       <div className="row">
         <div className="col-mid-6 mx-auto">
         <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mobile Number"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Enter Your Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button class="btn btn-primary mt-3" type="submit">Submit form</button>
</form>

         </div>
       </div>
     </div>
    </>)
}

export default Contact;