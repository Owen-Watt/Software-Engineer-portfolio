import '../index.css';
import './Contact.css';
import { Helmet } from "react-helmet";


function Contact() {
  return (
    <> 
    <Helmet>
        <title>Contact | Owen Watt</title>
    </Helmet>

    <div className = "contact-contentBack">
        <div className="row">
            <h1>Contact me</h1>
        </div>
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-container">
                <div className="contact-input">
                    <input type="text" id="name" name="subject" required />
                    <label htmlFor="name">Subject</label> 
                </div>

                <div className="contact-input">
                    <input type="text" id="email" name="email" required />
                    <label htmlFor="email">Email</label> 
                </div>

                <div className="contact-input">
                    <textarea id="message" name="message" required></textarea>
                    <label htmlFor="message">Message</label>
                </div>

                <button className="btn-lrg submit-btn" type="submit">Send Message</button>
            </div> 
        </form>   
    </div>

    </>
  );
}

export default Contact;