import React from "react";
import '../styles/HeaderStyles.css'


function Header() {


    return (
        <div className="header_container">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            <img className="logo_for_page" alt="logo_for_page" src="https://samgliu.github.io/THO-css-responsive-design-TNW-page/images/logo.svg"/>
            <div className="Header_buttons">
                <h1>HOME</h1>

                <div className="header_drop_down_buttons">
                    <h1>NEWS</h1> 
                    <i class="material-icons">keyboard_arrow_down</i>
                </div>
                
                <div className="header_drop_down_buttons">
                    <h1>EVENTS</h1> 
                    <i class="material-icons">keyboard_arrow_down</i>
                </div>

                <h1>PROGRAMS</h1>
                <h1>SPACES</h1>
                <h1>PARTNER WITH US</h1>
            </div>

            <img className="header_inbox" alt="inbox" src="https://agustingramajo.com/TNW-ResponsivePractise/Assets/images/mailIcon.svg"/>
        
        
            <div className="mobile_menu_grid">
                <img alt="mobile_menu_grid" src="https://agustingramajo.com/TNW-ResponsivePractise/Assets/images/apps.svg"/>
            </div>

        </div>
    )
}


export default Header

