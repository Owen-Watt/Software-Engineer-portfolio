import '../index.css';
import './Contact.css';
import { Helmet } from "react-helmet";
import Form from './Form/Form'

function Contact() {
  return (
    <> 
    <Helmet>
        <title>Contact | Owen Watt</title>
    </Helmet>

    <div className = "contact-contentBack bg-[rgba(232,232,232,1)]">
        <div className="contact-container">
            <div className="row">
                <h1>Contact me</h1>
            </div>
            <Form></Form>
        </div>
        
    </div>

    </>
  );
}

export default Contact;