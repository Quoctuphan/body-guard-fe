import style from "./home.module.css";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import News from "./components/News";
import ChooseUs from "./components/ChooseUs";

function Home() {
  return (
    <>
      <div
        className={style.banner}
        style={{ backgroundImage: `url(background/bg5.png)` }}
      >
        <div className={style.slogan}>VIP Body Guard & CELEBRITY SECURITY</div>
      </div>
      <div className={style.container}>
        <AboutUs id="about-us"/>
        <Services/>
        <div className={`${style.customerSay} mt-[60px] text-base`}>
          <font className={style.title}>what our customers say:</font>
          <div className={style.sentenceContent}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique
            sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil
            commodi quisquam? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit
            vitae voluptate ea similique sapiente veniam ratione cum sequi
            facere, nesciunt ex?
          </div>
          <div className={style.signature}>
            <hr />
            <span>John Doe</span>
            <hr />
          </div>
        </div>
        <div className={`${style.company} mb-[60px]`}>
          <img src="Company.png" />
        </div>
        <ChooseUs/>
        <News/>
        <Contact />
      </div>
    </>
  );
}

export default Home;
