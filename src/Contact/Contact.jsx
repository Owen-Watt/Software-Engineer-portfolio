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

    <div className = "contact-contentBack bg-slate-900">
        <div className="contact-container bg-slate-300">
            <div className="text-black">
                <h1>Contact me</h1>
            </div>
            <Form></Form>
        </div>
        
    </div>

    </>
  );
}

export default Contact;