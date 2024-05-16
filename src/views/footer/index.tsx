import clsx from "clsx";
import FooterCopyright from "@/views/footer/footer-copyright";
import FooterMenu from "@/views/footer/footer-menu";
import FooterSocial from "@/views/footer/footer-social";
import { twMerge } from "tailwind-merge";

export default function Footer(props) {
  const { className, id } = props;

  return (
    <>
      <footer
        id={id ? id : "footer"}
        className={twMerge(["k-px", "flex justify-center", className])}
      >
        <div className={clsx("w-full", "k-container")}>
          <FooterMenu />
          <div className="border-b border-outline my-2 lg:my-8"></div>
          <div
            className={clsx(
              "flex flex-wrap items-center py-6 gap-4 mb-12 justify-center flex-col-reverse",
              "md:justify-between md:flex-row"
            )}
          >
            <FooterCopyright />
            <FooterSocial />
          </div>
        </div>
      </footer>
    </>
  );
}
