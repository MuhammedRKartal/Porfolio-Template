import Footer from "@/views/footer";
import Header from "@/views/header";
import clsx from "clsx";
import { cookies } from "next/headers";

export default function Layout({ children }: { children: React.ReactNode }) {
  const cookie = cookies();
  const initialRender = Boolean(cookie.get("initial_render")?.value);

  return (
    <>
      <Header
        id="home-header"
        className={clsx(
          initialRender === true ? "duration-0" : "opacity-0 transition-opacity pointer-events-none"
        )}
      />
      <main
        id="home-main"
        className={clsx(
          "my-6 mx-auto min-h-[64vh] relative",
          "md:my-10 md:mt-15",
          initialRender === true
            ? "duration-0"
            : "after:bg-black after:absolute after:w-full after:h-full after:inset-0 after:transition-color pointer-events-none"
        )}
      >
        {children}
      </main>
      <Footer
        id="home-footer"
        className={clsx(
          initialRender ? "duration-0" : "opacity-0 transition-opacity pointer-events-none"
        )}
      />
    </>
  );
}
