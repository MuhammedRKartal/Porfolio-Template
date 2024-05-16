"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCookie, removeCookieOnReaload, setCookie } from "@/utils";

export type TypewriterType = {
  children: string;
  tpId?: string;
};

export default function Typewriter(props: TypewriterType) {
  const charsArray = props.children.split("");
  const [currentStr, setCurrentStr] = useState("");

  const router = useRouter();

  function hasSpecialChar(str) {
    let regex = /[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return regex.test(str);
  }

  useEffect(() => {
    document.getElementById("home-header")?.classList?.add("duration-700");
    document.getElementById("home-footer")?.classList?.add("duration-700");
    document.getElementById("home-main")?.classList?.add("after:duration-700");
    removeCookieOnReaload("initial_render");
    router.refresh();
  }, []);

  useEffect(() => {
    let timerValue = 85;
    if (charsArray[currentStr.length + 1] === " ") {
      timerValue = 10;
    } else if (hasSpecialChar(charsArray[currentStr.length])) {
      timerValue = 230;
    }

    setTimeout(() => {
      if (currentStr.length >= charsArray.length) {
        const cookieVal = getCookie("initial_render");
        if (cookieVal !== "true") {
          setCookie("initial_render", true, true);
        }
        setCurrentStr(props.children);

        document.getElementById("home-header")?.classList?.remove("opacity-0");
        document.getElementById("home-footer")?.classList?.remove("opacity-0");
        document.getElementById("home-main")?.classList?.remove("after:bg-black");

        document.getElementById("home-header")?.classList?.remove("pointer-events-none");
        document.getElementById("home-footer")?.classList?.remove("pointer-events-none");
        document.getElementById("home-main")?.classList?.remove("pointer-events-none");
        router.refresh();

        return;
      } else {
        setCurrentStr(`${currentStr}${charsArray[currentStr.length]}`);
      }
    }, timerValue);
  }, [currentStr]);

  return (
    <>
      <p
        id={`${props.tpId ? props.tpId : "typewritter"}`}
        className="relative z-20 text-3xl flex items-center !visible"
      >
        {currentStr}
        <span className="animate-blink mb-1">|</span>
      </p>
    </>
  );
}
