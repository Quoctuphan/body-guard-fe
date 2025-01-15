import { FaEye } from "react-icons/fa6";
export default function NewsCard({ news, onClick = () => {} }) {
  return (
    <div
      className={`bg-black rounded-lg shadow-md p-4 lg:space-y-1 hover:shadow-[0_4px_8px_rgba(255,0,0,0.7)] transition-shadow`}
    >
      <img
        src={news.imageUrl}
        alt="A man in a suit standing in front of a car"
        className="w-full h-[250px] object-cover rounded-t-lg"
      />
      <div className="p-4">
        <p className="text-gray-400 lg:text-[1.1rem] mb-2">{news.date}</p>
        <h2 className="font-bold text-lg lg:text-2xl mb-1 bg-clip-text text-transparent bg-gradient-to-t from-primary via-secondary to-primary">
          {news.title}
        </h2>
        <p className="text-white lg:text-[1.3rem] h-[64px] overflow-hidden">
          {news.description}
        </p>
        <hr className="my-2" />
        <div className="flex justify-between items-center">
          <div className="flex items-center lg:text-[1.2rem]">
            <FaEye className="text-gray-600" />
            <span className="ml-1 text-gray-200">{news.views}</span>
          </div>
          <button
            onClick={onClick}
            className="text-black font-bold lg:text-[1.4rem] text-white hover:border-red-500 rounded-lg p-1 border border-transparent px-2 bg-red-500 hover:bg-transparent hover:border-red-500 "
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}