import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function DailyDeals() {
    function navigateToPage(event, path) {
        event.preventDefault();
        window.location.href = path;
      }
  return (
    <div>
        <Navbar/>
        <nav>
        <div className='imgone'>
         
         <div id="im1" >
         <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141_d277995b-31ae-420d-b5b4-1161515335ed.jpg?v=1687428689"  height="310" width="270" ></img>
         <h3>Airdopes 141</h3>
         <p class="price">Rs.1499</p>
         <p><button>Add to Cart</button></p>
        
         </div>

        <div id="im2">
         <img    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_new_8c8dd689-e23d-4448-9920-2ef3f5a5e43b.jpg?v=1685686859" height="310" width="270"></img>
         <h3>Airdopes 131</h3>
         <p class="price">Rs.899</p>
         <p><button>Add to Cart</button></p>
        </div>
        <div id="im3">
         <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917" height="310" width="270"></img>
         <h3>Airdopes 161</h3>
         <p class="price">Rs.1099</p>
         <p><button>Add to Cart</button></p>
         </div>
        <div id="im4">
         <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_131_e7e95f2c-0bb3-492e-89df-613a2cfb792f.jpg?v=1686297917" height="310" width="270"></img>
         <h3>Airdopes 131 PRO</h3>
         <p class="price">Rs.1099</p>
         <p><button>Add to Cart</button></p>
       </div>
       
      
        <div id="im1" >
          <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call__1.jpg?v=1689751649"  height="310" width="270" ></img>
          <h3>Wave Call</h3>
          <p class="price">Rs.1799</p>
          <p><button>Add to Cart</button></p>
          </div>
         <div id="im2">
          <img    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SC2_Black.jpg?v=1689244018" height="310" width="270"></img>
          <h3>Strom Call2</h3>
          <p class="price">Rs.1499</p>
          <p><button>Add to Cart</button></p>
         </div>
         <div id="im3">
          <img   src="https://www.boat-lifestyle.com/cdn/shop/files/Wave_Fury__7_-removebg-preview_300x.png?v=1688623661" height="310" width="270"></img>
          <h3>Wave Fury</h3>
          <p class="price">Rs.1299</p>
          <p><button>Add to Cart</button></p>
          </div>
         <div id="im4">
          <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Call_2_268181d9-df99-4732-ab67-a9bba743e01b.jpg?v=1689586538" height="310" width="270"></img>
          <h3>Wave Call2</h3>
          <p class="price">Rs.1499</p>
          <p><button>Add to Cart</button></p>
        </div>
        
       
     <div id="im1" >
        <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-205-Pro.jpg?v=1682579854"  height="310" width="270" ></img>
        <h3>Rokerz 235 V2</h3>
        <p class="price">Rs.899</p>
        <p><button>Add to Cart</button></p>
        </div>
       <div id="im2">
        <img    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-255-Max.jpg?v=1682579854" height="310" width="270"></img>
        <h3>Rokerz Enticer</h3>
        <p class="price">Rs.1499</p>
        <p><button>Add to Cart</button></p>
       </div>
       <div id="im3">
        <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Lifestyle_image_2.png?v=1684985029" height="310" width="270"></img>
        <h3>Rokerz 255 Touch</h3>
        <p class="price">Rs.1499</p>
        <p><button>Add to Cart</button></p>
        </div>
       <div id="im4">
        <img   src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-330-Pro.jpg?v=1682579854" height="310" width="270"></img>
        <h3>Rokerz 330 PRO</h3>
        <p class="price">Rs.1699</p>
        <p><button>Add to Cart</button></p>
      </div>
      
    </div>
      
    </nav>
    </div>
  )
}

export default DailyDeals