import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    function navigateToPage(event, path) {
        event.preventDefault();
        window.location.href = path;
      }
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
  <div class="container-fluid bg-light" id="nav" > 
  <a  aria-current="page"  onClick={(e) => navigateToPage(e, '/Home')}> 
  <img className="icon" src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small.svg?v=1682421543" height="60px" width="80px"></img> </a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          
          <ul class="dropdown-menu " >
            <li><a  aria-current="page" class="dropdown-item"  onClick={(e) => navigateToPage(e, '/EarBuds')}>Ear Buds</a></li>
            <li><a  aria-current="page" class="dropdown-item"  onClick={(e) => navigateToPage(e, '/Watches')}>Watches</a></li>
            <li><a  aria-current="page" class="dropdown-item"  onClick={(e) => navigateToPage(e, '/NeckBands')}>Neck Bands</a></li>
            
            
          </ul>
        {/* </li> */}

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item text-light">
        <a class="nav-link active" aria-current="page" href="#" onClick={(e) => navigateToPage(e, '/DailyDeals')}>Daily Deals</a>
        </li>
        <li class="nav-item text-light">
        <a class="nav-link" onClick={(e) => navigateToPage(e, '/GiftWithBoat')} href="#">Gift with Boat</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Account</a></li>
            <li><a class="dropdown-item" href="#">Help</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Contact us</a></li>
          </ul>
        </li>
        
      </ul>
      
      <form class="d-flex " role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <br/>
   
  </div>
  
</nav>
    </div>
  )
}

export default Navbar