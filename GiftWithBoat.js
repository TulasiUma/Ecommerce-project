import React from 'react'
import Navbar from './Navbar'
function GiftWithBoat() {
    function navigateToPage(event, path) {
        event.preventDefault();
        window.location.href = path;
      }
  return (
    <div>
        <Navbar/>

       
        <div className='imgtwo'>
        
          <div id="im5" >
            <h1 className='gift'><b>GIFTS WITH BOAT</b></h1>
          <img   src="https://www.boat-lifestyle.com/cdn/shop/files/d2_7e3f6fa9-1546-455e-9c4b-695dcc9ba134_800x.png?v=1672145579"  height="510" width="670" ></img>
          
          </div><br/>
         
         
         
        <div id="im5">
        <img  src=" https://www.boat-lifestyle.com/cdn/shop/files/d1_bf996ce2-88c9-42a5-b229-17ad067697ed_800x.png?v=1672145579" height="510" width="670"></img>
          
       
        </div>
    
         <h1><b>GIFT VOUCHERS</b></h1>
        <div id="im51">
        <img  src=" https://www.boat-lifestyle.com/cdn/shop/files/5000_5e54cdd5-f260-4534-9f3a-4b78c56dd975_1300x.png?v=1671704509" height="310" width="370"></img>
          
       
        </div>
        <div id="im52">
        <img  src=" https://www.boat-lifestyle.com/cdn/shop/files/2000_1300x.png?v=1671704509" height="310" width="370"></img>
          
       
        </div>
        <div id="im53">
        <img  src=" https://www.boat-lifestyle.com/cdn/shop/files/1500_7603778a-4bdf-411f-9afa-4c5569e63215_1300x.png?v=1671704509" height="310" width="370"></img>
          
       
        </div>
        </div>
    </div>
  )
}

export default GiftWithBoat