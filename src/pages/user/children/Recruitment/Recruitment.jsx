
import Forms from "../../../../Components/Form/Form";
import ScrollToTop from "../../../../hooks/ScrollToTop ";
export default function Recruitment() {
  const formData = [
    {
      name: "fullName",
      label: "Full Name",
      require: true,
      type: "text",
      message: "Full Name is require",
    },
    {
      name: "phone",
      label: "Phone",
      require: true,
      type: "text",
      message: "Phone is require",
    },
    {
      name: "mail",
      label: "Email",
      require: true,
      type: "email",
      message: "Email is require",
    },
    {
      name: "fileCV",
      label: "Upload CV",
      require: true,
      type: "file",
      message: "Upload CV is require",
    },
    {
      name: "message",
      label: "Message",
      require: false,
      type: "textarea",
      message: "",
    },
  ];
  return (
    <section className="min-h-svh max-w-[1440px] mx-auto mt-0 pt-[120px] px-[3%] lg:px-[110px]">
       <ScrollToTop/>
      {/* main */}
      <div className="flex space-x-3 md:text-2xl my-7 animate-fade-left animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
        <a href="/" className="hover:text-[#ffac41]">Home</a>
        <p>/</p>
        <p className="text-[#ffac41]">Services</p>
      </div>

      <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-1">
        <div className="text-justify  text-white animate-fade-right animate-once animate-duration-700 animate-ease-linear animate-fill-forwards ">
          <h1 className="text-center text-[1rem] md:text-[1.4rem] lg:text-[1.8rem] bg-black/80">EMPLOYMENT INFORMATION</h1>
          <p className="text-gray-800 p-2 text-[1rem] md:text-[1.2rem] lg:text-[1.4rem]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique
            sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil
            commodi quisquam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit
            vitae voluptate ea similique sapiente veniam ratione cum sequi
            facere, nesciunt ex? Ad nihil commodi quisquam? Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam
            quaerat iusto odit vitae voluptate ea similique sapiente veniam
            ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam
          </p>
        </div>
        <div className="animate-fade-left animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
          <h1 className="text-center bg-black/80 text-white text-[1rem] md:text-[1.4rem] lg:text-[1.8rem]">HOTLINE</h1>
          <div className="flex flex-col items-center">
            <p className="text-[1rem]  lg:text-[1.4rem] ">0123456789</p>
            <p className="text-center bg-black/80 text-white text-[1rem] md:text-[1.4rem] lg:text-[1.8rem] w-full">ADDRESS</p>
            <p className="text-[1rem]  lg:text-[1.4rem]">123 Post</p>
            <p className="text-center bg-black/80 text-white text-[1rem] md:text-[1.4rem] lg:text-[1.8rem] w-full">CONTACT</p>
            <div id="form" className="w-full p-4">
              <Forms data={formData} />
            </div>
          </div>
        </div>
      </div>
      {/* main */}
    </section>
  );
}
