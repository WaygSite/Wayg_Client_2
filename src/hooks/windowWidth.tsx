import { useEffect, useState } from "react";

export const Width = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  // resize 될때만 함수 불러오기
  let timer: ReturnType<typeof setTimeout>;

  const resizeWindow = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // 현재 window width 값
      setWindowWidth(window.innerWidth);
    }, 500);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth]);

  useEffect(() => {
    // console.log(windowWidth);
  }, [windowWidth]);

  return { windowWidth };
};
