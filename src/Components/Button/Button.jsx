export default function Button ({textButton ="", className = "", onClick = () => {alert("Button")}}) {
    return ( 
        <button className={`relative group sm:min-w-[100px]  hover:border-transparent w-full md:w-fit  bg-gradient-to-tr from-secondary  to-primary border-2 border-transparent  lg:text-[1.4rem] rounded-xl hover:transition-colors hover:duration-500 hover:ease-in-out ${className}`} onClick={onClick} >
           <div className="w-full h-full group-hover:bg-[#F5F5F5] rounded-xl overflow-hidden  transition-all duration-300">
                <span className="relative inline-block  w-full h-full px-2 lg:px-6 py-4 group-hover:text-transparent text-white group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:to-secondary group-hover:from-primary transition-all duration-300">
                {textButton}
                </span>
            </div>
        <div
          className="absolute w-full inset-0 rounded-xl border border-[#F5F5F5] transition-all duration-300 "
        ></div>
      </button>
     );
} 