
import '../../index.css';
import '../Contact.css';

function Form() {
  return (
    <> 
        <form name="contact" method="POST" data-netlify="true" className="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-container">
                <div className="contact-input">
                    <input type="text" id="name" name="subject" autoComplete="off" required />
                    <label htmlFor="name">Subject</label> 
                </div>

                <div className="contact-input">
                    <input type="text" id="email" name="email" autoComplete="off" required />
                    <label htmlFor="email">Email</label> 
                </div>

                <div className="contact-input">
                    <textarea id="message" name="message" autoComplete="off" required></textarea>
                    <label htmlFor="message">Message</label>
                </div>

                <button className="btn-lrg submit-btn" type="submit">Send Message</button>
            </div> 
        </form>  
    </>
  );
}

export default Form;