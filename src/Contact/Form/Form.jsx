
import '../../index.css';
import '../Contact.css';

function Form() {
  return (
    <> 
        <form name="contact" method="POST" data-netlify="true" className="w-4/6 flex justify-center items-center mt-20 mb-20 flex-col" >
            <input type="hidden" name="form-name" value="contact" />
            <div className="w-4/6">
                <div className="contact-input">
                    <input className="border-orange-500 border" type="text" id="name" name="subject" autoComplete="off" required />
                    <label htmlFor="name">Subject</label> 
                </div>

                <div className="contact-input">
                    <input className="border-orange-500 border" type="text" id="email" name="email" autoComplete="off" required/>
                    <label htmlFor="email">Email</label> 
                </div>

                <div className="contact-input">
                    <textarea className="border-orange-500 border" id="message" name="message" autoComplete="off" required></textarea>
                    <label htmlFor="message">Message</label>
                </div>  
            </div> 
            <button className="btn-lrg submit-btn text-orange-500 border-orange-500 border w-1/6 hover:bg-slate-500" type="submit">Submit</button>
        </form>  
    </>
  );
}

export default Form;