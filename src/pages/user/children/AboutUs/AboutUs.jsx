
export default function AboutUs () {
    return ( 
            <section className="max-w-[1440px] mx-auto w-full  grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-0 overflow-hidden mb-[100px]">
                <div>
                    <div className="space-y-8 lg:space-y-12 sm:text-center lg:text-left lg:h-[432px] animate-fade-right transition-all ease-in-out animate-once animate-duration-[700ms]">
                        <p className="text-[1.8rem]">About Us</p>
                        <h1 className="text-[2.4rem] font-medium lg:text-[3rem] w-full lg:max-w-[300px]">Discover Our Security Legacy</h1>
                        <p className="text-[1.4rem] text-gray-600 font-light lg:max-w-[400px]">Pharetra neque feugiat commodo vitae viverra id in risus in ut urna lacinia.</p>
                        <button className="sm:min-w-[100px] w-full md:w-fit px-2 lg:px-6  py-4 bg-black lg:text-[1.5rem] text-white rounded-xl hover:bg-yellow-600 hover:transition-colors hover:duration-500 hover:ease-in-out">
                            <span >Learn More</span>
                        </button>
                    </div>
                    <div className="mt-[40px] grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all ease-in-out animate-fade-right  animate-once animate-duration-[700ms]">
                        <div className="flex flex-row lg:flex-col justify-center  gap-6 lg:gap-[30px] md:pr-[4px]">
                            <p className="flex flex-col gap-1 justify-center sm:items-center lg:items-start max-w-[100px]"><span className=" flex justify-center items-center px-5 py-[1px] rounded-3xl bg-blue-500 w-fit text-white font-light">01</span> <span className="text-[2.2rem] font-medium lg:text-[3rem]">100%</span> <span className="w-full text-right text-[1.4rem] whitespace-nowrap">Satisfied Clients</span> </p>
                            <p className="flex flex-col gap-1 justify-center sm:items-center lg:items-start max-w-[100px]"><span className=" flex justify-center items-center px-5 py-[1px] rounded-3xl bg-red-500 w-fit text-white font-light">02</span> <span className="text-[2.2rem] font-medium lg:text-[3rem]">200+</span> <span className="w-full text-right text-[1.4rem] whitespace-nowrap">Total Awards</span> </p>
                        </div>
                        <div className="flex lg:justify-end  w-full h-full ">
                            <div className="sm:min-w-[100px] sm:w-90% block sm:hidden lg:block sm:min-h-[100px] min-w-[200px] aspect-square shadow-lg  lg:w-full h-[200px] sm:mx-auto lg:mx-0 object-cover bg-black mb-[40px] lg:justify-self-end">
                                <img src="./imageAbout6.jpg" alt="" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 sm:items-center">
                    <div className="flex justify-center w-full h-auto object-cover  transition-all ease-in-out animate-fade-left  animate-once animate-duration-[700ms]">
                        <div className="min-w-[580px] w-full max-h-[472px] h-fit bg-black mb-[40px] object-cover overflow-hidden shadow-lg">
                            <img src="./imageAbout5.jpg" alt="" className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="lg:space-y-20 w-full lg:px-[60px]">
                        <p className="flex sm:flex-col flex-row sm:space-x-2 lg:space-x-0 sm:justify-center text-[1.8rem] font-medium transition-all ease-in-out animate-fade-left  animate-once animate-duration-[700ms]"><span>Customer-Centric</span><span>Approach</span></p>
                        <p className="flex lg:justify-end justify-center w-full  text-[1.4rem] text-gray-600 font-light transition-all ease-in-out animate-fade-right  animate-once animate-duration-[700ms]"><span className=" max-w-[300px]">Auctor neque feugiat ornare rhoncus. Odio sed porta in nibh dui. Orci hac blandit.</span></p>
                    </div>
                </div>
            </section>      
     );
} 