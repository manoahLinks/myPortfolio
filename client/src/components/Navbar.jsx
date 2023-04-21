import Projects from "../pages/Projects";
import { useState } from "react";

const Navbar = () => {

    const [portfolioPage, setPortfolioPage] = useState(false)

    return ( 
        <div className="grid grid-cols-1 p-2">
            <div className="flex justify-between">
                <h4 className="font-bold">Manoah Links </h4>
                <svg onClick={()=>{setPortfolioPage(true)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-500 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            {/* {portfolioPage && <Projects/>}   */}
        </div>
     );
}
 
export default Navbar;