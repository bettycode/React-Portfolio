import React from 'react'
import './Contact.css'
import pmm from './../../assets/pmm.png'

export default function contact() {
    return (
        <>
         <div className="container-fluid" style={{background:"rgba(247, 193, 162, 0.7)"}}>
           <div className="container">
            <div className="row" style={{paddingTop:"2rem"}}>
                <div className =" col-md-6">
                    <h4 style={{paddingTop:"5rem"}}>Thank you for checking my Portfolio!!</h4>
                </div>
                <div className =" col-md-6">
                    <img src={pmm} alt="profile img"></img>
                </div>

            </div>
            </div>
    </div>

        <div id="contact" class="info-show "style ={{background:"#794279",height:"400px"}}>
            <div class="container info info-get">
                <div class=" row info-title"> 
                    <div class="col-lg-12">
                        <h2>Contact</h2>
                        <p>Contact Me</p>

                    </div>
                    

                </div>

                <div class="row info-row">
                    <div class="col-md-6 item1">
                        <div class="cont-box">
                            <i class=" sol far fa-2x fa-envelope"></i>
    
                            <h3>Email Me</h3>
                            <p>betty.haile.us@gmail.com</p>

                        </div>

                    </div>
                    
                    <div class="col-md-6 item2">
                        <div class="cont-box">
                            <i class="fas fa-2x fa-share-alt sol" ></i>
                            <h3>Social</h3>
                            <div class="small-sol">
                                  <a href="https://github.com/bettycode" target="#"><i class="fab fa-github-square"></i></a>
                                  <a href="https://www.linkedin.com/in/betty403926d/" target="#"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                    
        </div>
       
    </>
    )
}
