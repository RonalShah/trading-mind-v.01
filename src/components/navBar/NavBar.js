import React from 'react'
import Logo from '../../images/logo.png'



function NavBar() {
    return (
        <div classNme = "navBar">

            <nav class="navbar navbar-expand-lg navbar-light bg-dark">

  
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
            </div>

            </nav>

 
            
        </div>
    )
}

export default NavBar



