import { useLocation, useNavigate } from "react-router-dom";
import style from "./navbar.module.css";
import {
  HOME_PATH,
  NEWS_PATH,
  CONTACT as CONTACT_PATH ,
  SIGNIN_PATH,
  SIGNUP_PATH,
  SERVICE_PATH,
  FEEDBACK,
  HISTORY_PATH,
  PROFILE_PATH,
} from "../../../contants/routers";
import { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutside";

const NAV_ACTION_ICONS = [
  { alt: "notification", src: "icon/Bell_fill.png" },
  { alt: "profile", src: "icon/Vector.png" },
  { alt: "menu", src: "icon/menu.png" },
];

export default function NavbarAd({ color, scrollY }) {
  const data = {
    navbarGroup: [
      {
        name: "home",
        link: HOME_PATH,
      },
      {
        name: "about us",
        link: "",
      },
      {
        name: "contact us",
        link: CONTACT_PATH,
      },
      {
        name: "news",
        link: NEWS_PATH,
      },
      {
        name: "services",
        link: SERVICE_PATH,
      },
      {
        name: "recruitment",
        link: "",
      },
    ],
  };
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCollapse, setActiveCollapse] = useState(null);
  const moreRef = useClickOutside(() => setActiveCollapse(null));
  const profileRef = useClickOutside(() => setActiveCollapse(null));
  const status = localStorage.getItem("isLoggedIn");
  const handleNavigation = (url) => {
    navigate(url);
  };

  const handleCollapseDown = (act) => {
    if (act === "more") {
      setActiveCollapse(activeCollapse === "more" ? null : "more");
    } else if (act === "profile") {
      setActiveCollapse(activeCollapse === "profile" ? null : "profile");
    }
  };

  const handleClearState = () => {
    localStorage.setItem("isLoggedIn", true);
    handleNavigation(SIGNIN_PATH);
  };

  return (
    <div>
      <div className={style.navbar} style={{ backgroundColor: `${color}` }}>
        <div className={"col col-l-2"}>
          <a href="/" className={style.logo}>
            <img alt={"logo"} src={"logo3.png"} />
          </a>
        </div>

        <div className={"col col-l-10"}>
          <ul className={style.navItem}>
             {
              data?.navbarGroup.map((item, index) => {
                return(
                  <li key={index + 1} onClick={()=> handleNavigation(item.link)}>{item.name}</li>
                )
              })
             }
            <ul className={style.navItemAuth}>
              <li
                style={{
                  display: "block",
                }}
              >
                <button onClick={() => handleNavigation(SIGNIN_PATH)}>
                  Login
                </button>
              </li>
              <li
                style={{
                  display: "block",
                }}
              >
                <button
                  className={` ${scrollY > 0 ? "text-white" : "text-black"}`}
                  onClick={() => handleNavigation(SIGNUP_PATH)}
                >
                  Sign up
                </button>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
