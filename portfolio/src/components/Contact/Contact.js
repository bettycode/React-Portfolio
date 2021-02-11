import React from 'react'
import './Contact.css'

export default function contact() {
    return (
        <div id="contact" class="info-show "style ={{background:"#794279"}}>
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
    )
}
