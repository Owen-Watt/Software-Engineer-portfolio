import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    // used to scroll to the top of every page on load since react routes doesnt 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}