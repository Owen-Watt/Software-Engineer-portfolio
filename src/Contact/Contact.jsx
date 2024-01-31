import '../index.css';
import './Contact.css';
import Form from './Form/Form'

function Contact() {
  return (
    <> 
    <div className = "flex flex-col bg-slate-900 items-center justify-center pb-20" id="contact">
        <div className="text-white w-5/6 lg:w-4/6 px-2 pb-4 mb-12 text-4xl font-medium border-b font-mono">Contact</div>
        <Form></Form>  
    </div>

    </>
  );
}

export default Contact;