import React from "react";
import Link from "next/link";
interface FooterProps extends React.PropsWithChildren {}

const Footer: React.FunctionComponent<FooterProps> = (): JSX.Element => {
  return (
    <footer className="flex h-12 items-center justify-center bg-light-secondary p-5 text-sm text-light-content dark:bg-dark-secondary dark:text-dark-content">
      <div className="flex w-full justify-center md:justify-between">
        <div className="uppercase">
          designed with{" "}
          <span className="text-light-hover dark:text-dark-hover"> ❤ </span>
          by
          <span className="font-bold text-light-hover dark:text-dark-hover">
            <Link href="/about"> Gangs Of Front-End</Link>
          </span>
        </div>
        <div className="hidden md:block">
          First Online Front-End Bootcamp at{" "}
          <Link
            className="uppercase text-[#009cc6]"
            target="_blank"
            href="https://quera.org/"
          >
            quera
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
