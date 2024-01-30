import '../index.css'
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NotFound() {


  return (
    <>
    <Helmet>
      <title>Not Found | Owen Watt</title>
    </Helmet>

    <div className = "bg-slate-900 h-screen w-full text-white flex items-center justify-center flex-col">
      <h1>404</h1>
      <p>Page does not exist.</p>
      <Link to="/" className = "border-orange-500 text-orange-500 px-6 py-3 border rounded-md mt-10 hover:bg-slate-500 transition duration-200">Return to Home page</Link>
    </div>
    
    </>
  );
}

export default NotFound;