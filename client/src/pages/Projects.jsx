const Projects = () => {
    return ( 
        <div className="grid grid-cols-1">
            <div className="grid grid-cols-1 gap-y-4">
                <h4 className="text-lg font-bold text-center">Things i have built</h4>
                <div className="grid grid-cols-1 md:gap-x-2 gap-y-2 mx-2 md:mx-0 md:grid-cols-2">
                    <div className="flex flex-col gap-y-2 md:p-5 p-3 border border-green-300 shadow-md rounded-lg">
                        <h4 className="md:text-lg text-green-800">smart work</h4>
                        <p>A project best from SME with the aim of simplifying day to day tasks and endevours</p>
                        <div className="flex items-center gap-x-2">
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>  
                                <p>13k</p>
                            </span>
                            <div>
                                <p>Javascript</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 md:p-5 p-3 border border-green-300 shadow-md rounded-lg">
                        <h4 className="md:text-lg">Url-shortener Api</h4>
                        <p>A project best from SME with the aim of simplifying day to day tasks and endevours</p>
                        <div className="flex items-center gap-x-2">
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>  
                                <p>13k</p>
                            </span>
                            <div>
                                <p>Javascript</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Projects;