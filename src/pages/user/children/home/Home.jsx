import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import style from "./home.module.css";
const content_ =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex? Ad nihil commodi quisquam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta voluptatem quibusdam quaerat iusto odit vitae voluptate ea similique sapiente veniam ratione cum sequi facere, nesciunt ex?";
const data = [
  {
    image: "background/bg5.png",
    content: `${content_}`,
  },
  {
    image: "background/bg5.png",
    content: `${content_}`,
  },
  {
    image: "background/bg5.png",
    content: `${content_}`,
  },
  {
    image: "background/bg5.png",
    content: `${content_}`,
  },
];

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
      <AboutUs id="AboutUs"/>
        <div className={style.content}>
          <div className={style.title}>Our service</div>
          <div className={style.gridLayout}>
            {data.map((item, index) => (
              <div
                key={index + 1}
                className={`${style.row} ${
                  index % 2 !== 0 ? style.reverse : ""
                }`}
              >
                <div className={style.content}>{item.content}</div>
                <img
                  className={style.img}
                  src={item.image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={style.customerSay}>
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
        <div className={style.company}>
          <img src="Company.png" />
        </div>
            <Contact/>
      </div>
    </>
  );
}

export default Home;
