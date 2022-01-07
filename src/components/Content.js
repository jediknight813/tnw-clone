import React from "react";
import '../styles/ContentStyles.css'

function Content() {


    return(
        <div className="content_container">
            
            <div className="TNW_Title_Container">
                <img alt="logo_for_page" src="https://samgliu.github.io/THO-css-responsive-design-TNW-page/images/logo.svg"/>
                <h2> The heart of tech </h2>
            </div>

            <div className="main_articles_container">

                <div className="article_one">
                   
                    <div>  
                        <h1> TRUTH </h1>
                        <h2> Trump's social network may launch on February 21 — and it's gonna be YUGE</h2> 
                    </div>                 

                </div>

                <div className="article_two">

                     <div>  
                        <h1> BETTER THAN ZOOM </h1>
                        <h2> How metaverse avatars could level the playing field for remote workers </h2> 
                    </div>  

                </div>

                <div className="article_three">

                    <div>  
                        <h1> REVIEW </h1>
                        <h2> The Aventon Soltera is a light ebike with tons of features for $1,200s </h2> 
                    </div>  
                                
                </div>

                <div className="article_four">
                
                    <div>  
                        <h3> Mark your calendar for June 16 & 17! </h3>
                        <h3> Join us at TNW Conference 2022 </h3>
                        <button> GET TICKETS </button> 
                    </div> 
                
                </div>

                <div className="article_five">
                
                    <div>  
                        <h1> LET'S BUY AN ISLAND </h1>
                        <h2> Welcome to Cryptoland: The Fyre Festival for crypto fans </h2> 
                    </div>   

                </div>

            </div>



            <h1 style={{postion: "absoulte", marginTop: "1200px"}}> down here </h1>    
        </div>
    )
}


export default Content