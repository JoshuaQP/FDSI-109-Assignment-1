import React, { Component } from 'react';
import "./contact.css"

class Contact extends Component {
    state = {  }
    render() { 
        return (
            <div className="form-Container">
               <form className="OGForm"  action="">
                   <h2 className="conatctusT">Contact Us</h2>
                   <p className="concact-P">Feel Free to ask for details, don't save any questions!</p>
                   <label className="fL" htmlFor="">FullName*</label>
                   <input className="fli" type="text" />
                   <label className="el" htmlFor="">Email *</label>
                   <input type="text" /> <br /> <br /> <br />
                   <label className="sL" htmlFor="">Subject*</label>
                   <input className="sli" type="text" /><br /> <br />
                   <label className="mL" htmlFor="">Message*</label>
                   <br/>
                   <textarea name="" id="" cols="75" rows="10"></textarea> <br />
                   <button className="btn">SEND</button>

               </form>

               <div className="contactinfo"> 

               <div className="Office">

                       <h2>Our <span>Office</span></h2>
                       <p>Address:5403 south pines Colorado Springs, CO</p>
                       <p>Phone:719-122-1551</p>
                       <p>Email:MusicStudio@gmail.com</p>
                   </div>

                   <div className="bussiness">
                       <h2><span>Business</span> Hours</h2>
                       <p> Monday-Friday: 9am to 5pm</p>
                       <p> Saturday: 9am to 2pm </p> 
                       <p> SUNDAY:Closed </p> 
                   </div>

                    <div className="gtInTouch">
                   <h2>Get In <span>Touch </span></h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt ratione fuga minus voluptatum possimus delectus doloremque veniam cum! Sunt ullam ea, vel repellat tenetur vitae quis placeat totam culpa.</p>
                   </div>

                   </div>

            </div>
          );
    }
}
 
export default Contact;