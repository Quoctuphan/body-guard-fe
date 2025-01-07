import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, [location]); // Mỗi khi location thay đổi

  return null; // Không cần render gì thêm
};

export default ScrollToTop;