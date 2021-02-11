import React from 'react'
import './Portfolio.css'
import qmr from './../../assets/qmr.png'
import wea1 from './../../assets/wea1.png'
import burgerApp from './../../assets/burgerApp.png'
import sch from './../../assets/sch.png'
import dp from './../../assets/dp.png'
import quiz from './../../assets/quiz.png'



export default function Portfolio() {

    return (
        <div className ="container-fluid port">
            <div>
            <h2>portfolio</h2>
            </div>
            <div className="container port1 ">
                <div className="row">
                    <div class="col-md-4 myshadow">
                         <img src={dp} alt=""/>
                    </div>
                    <div className="col-md-4">
                    <img src={burgerApp} alt=""/>
                    </div>
                    <div class="col-md-4">
                         <img src={qmr} alt=""/>
                    </div>
                </div>

            
                <div className="row">
                <div className="col-md-4 ">
                    <div className="container text">
                            <h5>Doctor Proctor</h5> 
                            <p> Doctor Proctor is an app that will help you locate doctors, in different specialties and different locations. You can also recommend doctors.</p>
                            <a href ="https://github.com/Jamgid/Project2"  className="card-link" target="_blank"> Link to GitHub</a>
                            <a href ="https://doctor-proctor.herokuapp.com/doctors/welcome"  className="card-link" target="_blank">Link to deployed project</a>
                  
                         </div> 
                </div>
                <div className="col-md-4 ">
                    <div className="container text">
                    <h5>My Burger App</h5> 
                    <p>Burger logger App with MySQL, Node, Express, Handlebars.</p>
                    <a href="https://github.com/bettycode/MyBurger" class="card-link"> Link to GitHub</a>
                    <a href=" https://immense-plateau-32951.herokuapp.com/" class="card-link">Link to deployed project</a>
                     </div> 
                </div>
                <div className="col-md-4">
                        <div className="container text">
                        <h5>Quarantine Media Recommender</h5> 
                        <p> Quarantine Media Recommender (QMR) delivers a list of books, movies, 
                             or songs to explore. </p>
                        <a href ="https://github.com/bettycode" class="card-link" target="_blank"> Link to GitHub</a> 
                        <a href ="https://brianrshort.github.io/trilogy-project-one/#" class="card-link" target="_blank">Link to deployed project</a>
                        
                        </div>    
                </div>
                </div>

            </div>
            <div className="container port1">
                <div className="row">
                    <div class="col-md-4 myshadow">
                         <img src={wea1} alt=""/>
                    </div>
                    <div className="col-md-4">
                    <img src={quiz} alt=""/>
                    </div>
                    <div class="col-md-4">
                         <img src={sch} alt=""/>
                    </div>
                </div>

            
                <div className="row">
                <div className="col-md-4 ">
                    <div className="container text">
                    <h5>Weather Dashbord</h5> 
                    <p> Weather app that provides current and future weather forecasts in cities.</p>
                    <a href ="https://github.com/bettycode"  class="card-link" target="_blank"> Link to GitHub</a>
                    <a href ="https://bettycode.github.io/Weather-Dashboard/"  class="card-link" target="_blank">Link to deployed project</a>
                  
                         </div> 
                </div>
                <div className="col-md-4 ">
                    <div className="container text">
                        <h5>Code Quiz App</h5> 
                        <p>Timed quiz on JavaScript fundamentals that stores high scores.</p>
                        <a href="https://github.com/bettycode" class="card-link"> Link to GitHub</a>
                        <a href=" https://bettycode.github.io/Code-Quiz/" class="card-link">Link to deployed project</a>
                         </div> 
                </div>
                <div className="col-md-4">
                    <div className="container text">
                        <h5>Day Planner</h5> 
                        <p>  A daily planner to manage time effectively.</p>
                        <a href ="https://github.com/bettycode"  class="card-link" target="_blank"> Link to GitHub</a>
                        <a href ="https://bettycode.github.io/Daily-Calendar/"  class="card-link" target="_blank">Link to deployed project</a>
                    </div>    
                </div>
                </div>

            </div>
        </div>
    )
}
