import React from 'react'
import './Header.css'
import Photo from './../../assets/Photo.jpg'
import pmm from './../../assets/pmm.png'
import Aside from './../../components/Aside/Aside'
import Design from './Design'

export default function Header() {
    return (
       
        <div>
          
            <div className="container-fluid myimg  ">
                <div className="container top1" >
                    <h2>Bethlehem Balcha</h2>
                </div>
                <div className = "container top2">
                    <img src={Photo} alt="profile img"></img>
                </div>
            </div>
            

            <div className ="container">
                <div className="about-title">
                        <h2>ABOUT</h2>
                        <p>LEARN MORE ABOUT ME</p>
                    </div>
                <div className="container about"> 
                   <div className ="row skillrow">
                 
                        <div className =" col-md-3">
                            <Aside />
                        </div>
                
                        <div className =" col-md-8 about">
                            <div className=" about-content">
                                <h3>FULL STACK DEVELOPER</h3>
                                <p> My name is Bethlehem Balcha and I am Full stack web developer with background
                                    in the HealthCare Industry.Strengths in teamwork, solving problems, meeting deadlines and creativity.
                                    I am passionate about solving problems and producing functioning programs,
                                    mockup projects and designs. I enjoy creating responsive web sites.
                                    In my projects I like to strategize and plan how I am going to perform.
                                    After that I am ready for the challenge in developing amazing web designs
                                    and tackling the challenges on the way.
                                </p>   
                                <p>The drive behind what i do is My faith in God and my family. In faith i get strength and hope. And my family, they motivate me.</p>    
                                <p style ={{textAlign: "center"}}>
                                    <a href="https://docs.google.com/document/d/1zH6HBtnYVEMnOpBxWPUB5PwXgBD5vkYBOxAbhrmfm_w/edit" style={{ background:" #F97F51", border:" #F97F51"}} class="btn btn-primary btn-md active"  target="_blank" role="button" aria-pressed="true">RESUME</a>
                                </p>
                                  
                            </div>
                            <div className="container" style={{background:"rgba(247, 193, 162, 0.7)"}}>
                                <div className="row" style={{paddingTop:"2rem"}}>
                                    <div className =" col-md-6">
                                        <h4 style={{paddingTop:"5rem"}}>Check my portfolio  :)!!</h4>
                                    </div>
                                    <div className =" col-md-6">
                                        <img src={pmm} alt="profile img"></img>
                                    </div>

                                </div>
                            </div>
                           
                            
                           
                        </div>
                    </div>
                   
                </div>
               
            </div>
        </div>
        
    )
}
