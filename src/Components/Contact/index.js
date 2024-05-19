import './contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'
import { useState } from 'react'

function Contact(){

    const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a6f98bd-d929-4ef1-95ce-ba724540f26a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return(
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a messsage <img src={msgIcon}/></h3>
                <p>loremloremloremlorem loremloremloremlorem loremloremloremloremlorem loremloremloremlorem loremloremloremlorem loremloremloremlorem loremloremlorem loremloremlorem loremlorem v</p>
                <ul>
                    <li> <img src={mailIcon} />Contact@Lorem.com</li>
                    <li><img src={phoneIcon} />+55 21993055372</li>
                    <li><img src={locationIcon} />Sao francisco<br/>niteroi,Rio de janeiro</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter your mobile number' required />
                    <label>Write your messages here</label>
                    <textarea name='message'rows='6' placeholder='Enter your message' required ></textarea>
                    <button type='submit' className='btn dark-btn' >Submit now <img src= {whiteArrow} /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact