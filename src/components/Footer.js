import React from "react";
import '../styles/FooterStyles.css'


function Footer() {

    
    return(
        <div className="footer_parent_container">
            
            <div className="site_logo_and_media_links_parent_container">

                <div className="site_logo_and_media_links_parent_container_item">
                    <img alt="site_logo" src="https://jonthejon10.github.io/tnw-clone/images/logo-white.svg"/>
                    <h2> The heart of tech </h2>

                    <div className="newsletter_media_icons">
                        <i class="fa fa-instagram"></i>
                        <i class="fa fa-facebook-square"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-youtube-play"></i>
                        <i class="fa fa-linkedin-square"></i>
                        <i class="fa fa-inbox"></i>
                    </div>

                </div>

            </div>

            <div className="more_tnw_and_about_tnw_parent_container">


                <div className="more_tnw_container">
                    <h1>MORE TNW</h1>
                    <a href=" ">Media</a>
                    <a href=" ">Events</a>
                    <a href=" ">Programs</a>
                    <a href=" ">Spaces</a>
                    <a href=" ">Newsletters</a>
                    <a href=" ">Deals</a>
                </div>

                <div className="more_about_tnw_container">
                    <h1>ABOUT TNW</h1>
                    <a href=" ">Partner with us</a>
                    <a href=" ">Jobs</a>
                    <a href=" ">Terms & Conditions</a>
                    <a href=" ">Cookie Statement</a>
                    <a href=" ">Privacy Statement</a>
                    <a href=" ">Editorial Policy</a>

                </div>
            </div>

            <div className="footer_bottom_copyright_text_parent_container"> 
                <h1> TNW is a <b>Financial</b> Times company.</h1>
                <h1>Copyright © 2006—2022, The Next Web B.V. Made with /3 in Amsterdam.</h1>
            </div>

        </div>
    )
}


export default Footer