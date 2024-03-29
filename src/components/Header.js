import React, { Component } from 'react';
import logo from './images/logo.jpg';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#services">Services</a></li>
               <li><a className="smoothscroll" href="#menu">Menu</a></li>
               <li><a className="smoothscroll" href="#about">Bio</a></li>
             {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

        

         <div className="row banner">
            <div className="banner-text">
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
               <h1 className="responsive-headline"> {resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>
         <div className="logo">
        <img className="logo-pic"  src="/./public/images/logo.jpg" alt="" />
        </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}