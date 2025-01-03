import { useState } from "react";
import { GoBell, GoBellFill} from "react-icons/go";
import { FaRegUser} from "react-icons/fa";
import { FaBars, FaBarsStaggered} from "react-icons/fa6";
import {
  BODYGUARD_PROFILE_PATH,
  BODYGUARD_TIME_KEEPING_PATH,
  BODYGUARD_TRAINING_SCHEDULE_PATH,
  BODYGUARD_WORKING_SCHEDULE_PATH,
} from "../../../contants/routers";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const handleNotificationClick = () => {
    setIsNotificationVisible(!isNotificationVisible);
  };
  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <div className="Nav">
      <div className="Logo">
        <img  src="/public/logo3.png" alt="logoBodyGuard.png" />
      </div>
      <div className="NavItem">
        <div className="TopNav">
          <button id="bellIcon" className={`lg:hover:bg-[#FFAC41] ${!isNotificationVisible ? "bg-[#FFFFFF] ": "bg-[#FFAC41]"}`} onClick={handleNotificationClick}>
            { isNotificationVisible ? <GoBellFill/> : <GoBell/>}
          </button>
          <button
            onClick={() => handleNavigation(BODYGUARD_PROFILE_PATH)}
          >
            <FaRegUser/>
          </button>
          <button
            className={`lg:hover:bg-[#FFAC41] ${!isMenuVisible ? "bg-[#FFFFFF] ": "bg-[#FFAC41]"}`}
            onClick={handleMenuClick}
          >
            {
              isMenuVisible ? <FaBarsStaggered/> : <FaBars/>
            }
           
          </button>
        </div>
        <div className="BottomNav">
          {isMenuVisible && (
            <div className="MenuItem">
              <Link to={BODYGUARD_PROFILE_PATH} className="ItemLink">
                Profile
              </Link>
              <Link to={BODYGUARD_TRAINING_SCHEDULE_PATH} className="ItemLink">
                Training
              </Link>
              <Link to={BODYGUARD_WORKING_SCHEDULE_PATH} className="ItemLink">
                Schedule
              </Link>
              <Link to="#" className="ItemLink">
                Requests
              </Link>
              <Link to="#" className="ItemLink">
                Rate
              </Link>
              <Link to={BODYGUARD_TIME_KEEPING_PATH} className="ItemLink">
                Time Keeping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
