import { useNavigate } from "react-router-dom";
import { NEWS_PATH } from "../../../../../../contants/routers";
import Button from "../../../../../../Components/Button/Button";
import NewsCard from "./component/NewsCard";


export default function News() {
  //  const [activeCard, setActiveCard] = useState([])

  // const handleOnClick = (index) => {
  //       setActiveCard((prev) => {
  //         console.log("prev", prev)
  //         console.log("index", index)
  //         const updated = [...prev]
  //         updated[index] = !updated[index]
  //         return updated
  //       })
  // }\
  const navigate = useNavigate();
 const newsData = [
    {
      date: "July 8th",
      title: "Bodyguard's Role",
      description: "The Essential Role of Bodyguards in the Modern Era",
      imageUrl:
        "https://media.istockphoto.com/id/1423420228/vi/anh/c%E1%BA%A3nh-s%C3%A1t-chu%E1%BA%A9n-b%E1%BB%8B-s%E1%BB%AD-d%E1%BB%A5ng-s%C3%BAng-c%E1%BB%A7a-m%C3%ACnh-%C4%91%E1%BB%83-b%E1%BA%AFt-gi%E1%BB%AF-m%E1%BB%99t-t%C3%AAn-c%C6%B0%E1%BB%9Bp.jpg?s=2048x2048&w=is&k=20&c=L6sVpGsoJ7EexHzYzBfuVc1yUwfgTzu6VjY_JCjyffA=",
      views: 0,
    },
    {
      date: "July 8th",
      title: "Key Skills",
      description:
        "Key Skills for a Professional Bodyguard: From Protection to Strategic Security",
      imageUrl:
        "https://media.istockphoto.com/id/2173911766/vi/anh/nh%C3%A2n-vi%C3%AAn-an-ninh-%C4%91%E1%BB%A9ng-t%E1%BA%ADp-trung-v%C3%A0-s%E1%BA%B5n-s%C3%A0ng-khi-ch%C3%ADnh-tr%E1%BB%8B-gia-%C4%91%E1%BA%BFn-%C4%91%E1%BA%A3m-b%E1%BA%A3o-m%E1%BB%8Di-th%E1%BB%A9-%C4%91%E1%BB%81u-theo-th%E1%BB%A9.jpg?s=1024x1024&w=is&k=20&c=RuACUfWEPYXwjstYiyiBPEcMwZ1498lGpiAOiqcwg7U=",
      views: 100,
    },
    {
      date: "July 8th",
      title: "Guarding Secrets",
      description:
        "The Journey to Becoming a Bodyguard: A Mission of Protection and Courage",
      imageUrl:
        "https://media.istockphoto.com/id/1618446911/vi/anh/%C4%91%C3%A0i-ph%C3%A1t-thanh-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-v%C3%A0-nh%C3%A2n-vi%C3%AAn-b%E1%BA%A3o-v%E1%BB%87-ho%E1%BA%B7c-nh%C3%A2n-vi%C3%AAn-an-to%C3%A0n-ngo%C3%A0i-tr%E1%BB%9Di-tr%C3%AAn-%C4%91%C6%B0%E1%BB%9Dng.jpg?s=1024x1024&w=is&k=20&c=76IFuIhywg-_Ta7c6QrbkXCPxXW8Y6F-Zze931rzdEc=",
      views: 200,
    },
  ];
  const handleLinkButton = (url) => {
    navigate(url);
  };
  const handleReadMore = (news) => {
    navigate(`/news/:${news.title}`);
   
  };
  return (
    <section className="max-w-[1440px] space-y-[40px] lg:space-y-[80px] mx-auto">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        <div className="space-y-6 lg:space-y-12 text-center lg:text-left animate-fade-right animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
          <h2 className="text-[1.8rem] font-normal text-[#e1234e]">News</h2>
          <h1 className="text-[2.5rem] font-medium lg:text-[3rem] lg:max-w-[340px] mx-auto lg:mx-0">
            Latest News on Security
          </h1>
        </div>
        <div className="flex lg:justify-end lg:items-end animate-fade-left animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
          <Button
            textButton="See All News"
            className="lg:min-w-[180px] lg:w-[30%] w-full md:w-full"
            onClick={() => handleLinkButton(NEWS_PATH)}
          />
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] animate-fade-up animate-once animate-duration-700 animate-ease-linear animate-fill-forwards">
        {newsData.map((news, index) => (
          <NewsCard key={index} news={news} onClick={() => handleReadMore(news)} />
        ))}
      </div>
    </section>
  );
}
