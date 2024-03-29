
import '../../index.css';
import '../Contact.css';

function Form() {
  return (
    <> 
        <form name="contact" method="POST" data-netlify="true" className="w-11/12 lg:w-4/6 flex justify-center items-center mt-10 mb-20 flex-col" >
            <input type="hidden" name="form-name" value="contact" />
            <div className="w-full lg:w-4/6 flex justify-center items-center flex-col">
                <div className="contact-input w-full">
                    <input className="dark:text-white border-blue-500 dark:border-orange-500 border" type="text" id="name" name="subject" autoComplete="off" required />
                    <label htmlFor="name" className='dark:text-white'>Subject</label> 
                </div>

                <div className="contact-input w-full">
                    <input className="dark:text-white border-blue-500 dark:border-orange-500 border" type="text" id="email" name="email" autoComplete="off" required/>
                    <label htmlFor="email" className='dark:text-white'>Email</label> 
                </div>

                <div className="contact-input w-full">
                    <textarea className="dark:text-white border-blue-500 dark:border-orange-500 border" id="message" name="message" autoComplete="off" required></textarea>
                    <label htmlFor="message" className='dark:text-white'>Message</label>
                </div>  
            </div> 
            <button className="btn-lrg submit-btn text-blue-500 border-blue-500 dark:border-orange-500 dark:text-orange-500 border w-fit hover:bg-slate-500" type="submit">Submit</button>
        </form>  
    </>
  );
}

export default Form;