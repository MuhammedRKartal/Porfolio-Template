"use client";

import { Image } from "@/components/image";
import data from "@/schemas/header-megamenu.json";
import { Button } from "@/components/button";
import MobileHamburgerButton from "./mobile-menu/hamburger-menu-button";

export type HeaderNavItemType = {
  title: string;
  link: string;
  rel?: string | null;
  target?: string | null;
};

export default function Megamenu() {
  return (
    <>
      <MobileHamburgerButton />
      <div className="flex">
        <Button
          appearance="bright"
          link="/"
          linkclassname="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0"
        >
          <Image
            src={"/assets/company-logo-minimized.png"}
            alt="wow"
            height={30}
            width={30}
            aspectRatio={1}
          ></Image>
        </Button>

        {data?.map((item: HeaderNavItemType) => (
          <Button
            key={item.title}
            linkclassname="hidden md:block"
            className="h-8"
            appearance="bright"
            link={item.link}
            rel={item.rel}
            target={item.target}
          >
            {item.title}
          </Button>
        ))}
      </div>

      <div className="flex"></div>
    </>
  );
}
