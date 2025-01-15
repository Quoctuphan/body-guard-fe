import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./detailNew.module.css";
import { TiHeart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa6";
export default function DetailNews() {
  const {id} = useParams()
  const [urlImage, setUrlImage] = useState("")
  const [isLiked, setIsLiked] = useState(null)
  const [isReply, setIsReply] = useState(null)
  useEffect(() => {
    const height = document.querySelector(`.${style.contents}`).offsetHeight;
    document.getElementById("box").style.height = `${height - 112}px`;
    window.scrollTo(0, 0);
    const result =  newsDetailData?.find(item => item.id === id.substring(1))?.urlImage
    setUrlImage(result)
  }, []);
  const newsDetailData = [
      {
        id : "Bodyguard's Role",
        urlImage: "https://media.istockphoto.com/id/1423420228/vi/anh/c%E1%BA%A3nh-s%C3%A1t-chu%E1%BA%A9n-b%E1%BB%8B-s%E1%BB%AD-d%E1%BB%A5ng-s%C3%BAng-c%E1%BB%A7a-m%C3%ACnh-%C4%91%E1%BB%83-b%E1%BA%AFt-gi%E1%BB%AF-m%E1%BB%99t-t%C3%AAn-c%C6%B0%E1%BB%9Bp.jpg?s=2048x2048&w=is&k=20&c=L6sVpGsoJ7EexHzYzBfuVc1yUwfgTzu6VjY_JCjyffA="
      },
      {
        id : "Key Skills",
        urlImage: "https://media.istockphoto.com/id/2173911766/vi/anh/nh%C3%A2n-vi%C3%AAn-an-ninh-%C4%91%E1%BB%A9ng-t%E1%BA%ADp-trung-v%C3%A0-s%E1%BA%B5n-s%C3%A0ng-khi-ch%C3%ADnh-tr%E1%BB%8B-gia-%C4%91%E1%BA%BFn-%C4%91%E1%BA%A3m-b%E1%BA%A3o-m%E1%BB%8Di-th%E1%BB%A9-%C4%91%E1%BB%81u-theo-th%E1%BB%A9.jpg?s=1024x1024&w=is&k=20&c=RuACUfWEPYXwjstYiyiBPEcMwZ1498lGpiAOiqcwg7U="
      },
      {
        id : "Guarding Secrets",
        urlImage: "https://media.istockphoto.com/id/1618446911/vi/anh/%C4%91%C3%A0i-ph%C3%A1t-thanh-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-v%C3%A0-nh%C3%A2n-vi%C3%AAn-b%E1%BA%A3o-v%E1%BB%87-ho%E1%BA%B7c-nh%C3%A2n-vi%C3%AAn-an-to%C3%A0n-ngo%C3%A0i-tr%E1%BB%9Di-tr%C3%AAn-%C4%91%C6%B0%E1%BB%9Dng.jpg?s=1024x1024&w=is&k=20&c=76IFuIhywg-_Ta7c6QrbkXCPxXW8Y6F-Zze931rzdEc="
      },
    ]
    const handleClickLike = () => {
          setIsLiked(!isLiked)
    }
    const handleClickReply = () => {
      setIsReply(!isReply)
}
  return (
    <div>
      <div className={style.detailNews}>
        <div
          className={style.headline}
          style={{ backgroundImage: `url(${urlImage})`}}
        >
          {/* tiêu đề tin tức */}
          <div className={style.title}>
           {id.substring(1)}
          </div>
        </div>
        <div className={style.newsContent}>
          <div id="box" className={style.box}>
            <div className={style.contents}>
              {/* nội dung tin tức */}
              <div className={style.content}>
                Risk management has become a crucial aspect of corporate
                strategy in today’s dynamic and unpredictable business
                environment. Organizations must mitigate potential threats to
                safeguard their assets, reputation, and business continuity. One
                key tool in managing risk effectively is executive protection.
                This comprehensive approach not only ensures the safety of
                high-level executives but also helps mitigate threats and keep
                the organization secure.
                Risk management has become a crucial aspect of corporate
                strategy in today’s dynamic and unpredictable business
                environment. Organizations must mitigate potential threats to
                safeguard their assets, reputation, and business continuity. One
                key tool in managing risk effectively is executive protection.
                This comprehensive approach not only ensures the safety of
                high-level executives but also helps mitigate threats and keep
                the organization secure.
                <br />
                <br />
                Understanding Executive Protection Executive protection refers
                to the measures taken to protect individuals who hold
                high-ranking positions within an organization. These individuals
                are often targeted due to their influence, access to sensitive
                information, or their overall impact on the organization’s
                operations. The ultimate goal of executive protection services
                is to provide a secure environment for executives to conduct
                their business activities, both domestically and
                internationally. This involves implementing a range of security
                protocols, employing trained professionals, and utilizing
                advanced technologies to counter potential risks. But what
                exactly does executive protection entail? Let’s delve deeper
                into the topic to gain a comprehensive understanding.
              </div>
              {/* tác giả tin tức */}
              <div className={style.author}>
                <div className={style.avtAuthor}>
                  <img alt="avatar author" src={`/author.png`}/>
                </div>
                <div className={style.nameAuthor}>Norman</div>
              </div>
              {/* phần bình luận */}
              <div className={style.comments}>
                <h1>Leave a replay</h1>
                <div className={style.data}>
                  <div>1 comments</div>
                  <div>
                    sort by
                    <select>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className={style.lists}>
                    <div className={style.comment}>
                      <div className={style.info}>
                        <div className={style.avtUser}>
                          <img alt="avt" src="/author.png" />
                        </div>
                        <div className={style.infoUser}>
                          <div className={style.nameUser}>Name user</div>
                          <div className={style.contentCmt}>
                          Guarding Secrets is truly an amazing article! It gave me deep insights into how to protect critical information in high-risk situations. The visuals are clear, the content is easy to understand, and the practical tips can be applied immediately. This is definitely a must-read, especially for those working in security or information management. Looking forward to more articles like this!
                          </div>
                          <ul className={style.navAction}>
                            <li onClick={handleClickLike} className="size-[2.5rem] flex justify-center items-center"> { isLiked ? <TiHeart className="iconLike text-red-600 size-[2rem]  hover:scale-125"/> : <FaRegHeart className="size-[1.5rem] hover:scale-125"/>}</li>
                            <li onClick={handleClickReply}>Reply</li>
                            
                          </ul>
                          {
                            isReply &&  <div className={style.comment}>
                            <div className={style.info}>
                              <div className={style.avtUser}>
                                <img alt="avt" src="/author.png" />
                              </div>
                              <div className={style.infoUser}>
                                <div className={style.nameUser}>Name user</div>
                                <div className={style.contentCmt}>
                                Guarding Secrets is truly an amazing article! It gave me deep insights into how to protect critical information in high-risk situations. The visuals are clear, the content is easy to understand, and the practical tips can be applied immediately. This is definitely a must-read, especially for those working in security or information management. Looking forward to more articles like this!
                                </div>
                                <ul className={style.navAction}>
                                  <li onClick={handleClickLike} className="size-[2.5rem] flex justify-center items-center"> { isLiked ? <TiHeart className="iconLike text-red-600 size-[2rem]  hover:scale-125"/> : <FaRegHeart className="size-[1.5rem] hover:scale-125"/>}</li>
                                  <li>Reply</li>
                                  
                                </ul>
                              </div>
                            </div>
                            <div>haha</div>
                          </div>
                              
                          }
                         </div>
                         </div>
                      <div>haha</div>
                    </div>
                  </div>
                  <div className={style.inputComment}>
                    <img alt="img" src="/author.png" />
                    <input type="text" placeholder="Add a comment" />
                  </div>
                </div>
              </div>
            </div>

            {/* about us */}
            <div className={style.about}>
              <h1>About us</h1>
              <p>
                After five decades serving in the industry, MPS Security has
                developed a team of elite experts focused on cultivating
                protection services that are unparalleled to that of industry
                standards.
              </p>
              <h1>recent posts</h1>
              <div className={style.recentPosts}>
                {Array(4)
                  .fill(null)
                  .map((data, index) => (
                    <div key={index} className={style.recentPost}>
                      <div className={style.illustration}>
                        <img alt="img" src="/background/bg5.png" />
                      </div>
                      <div className={style.titleRecentPost}>
                        <div className={style.contentRecentPost}>
                          Managing Risk: How Executive Protection Helps Mitigate
                          Threats
                        </div>
                        <div>Read more</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
