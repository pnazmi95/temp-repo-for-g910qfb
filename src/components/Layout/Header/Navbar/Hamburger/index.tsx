import { useState } from "react";
import NavItem from "../NavItem";

interface IHamburgerProps extends React.PropsWithChildren {}

const Hamburger: React.FunctionComponent<IHamburgerProps> = (
  props
): JSX.Element => {

  const [open, setOpen] = useState(false);
  // const resizeHandler = () => {
  //   if (window.innerWidth <= 768) {
  //     handleClose();
  //   }
  // };
  // window.addEventListener("resize", resizeHandler);
  const openHandler = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        onClick={openHandler}
        className="flex h-[2rem] cursor-pointer flex-col justify-between md:hidden"
      >
        <div
          className={`${
            open && "rotate-45"
          } h-0.5 w-[2.6rem] origin-left bg-light-content transition-all duration-300 dark:bg-dark-content`}
        ></div>
        <div
          className={`${
            open && "-translate-x-7 opacity-0"
          } h-0.5 w-[2.6rem] bg-light-content transition-all duration-300 dark:bg-dark-content`}
        ></div>
        <div
          className={`${
            open && "-rotate-45"
          } h-0.5 w-[2.6rem] origin-left bg-light-content transition-all duration-300 dark:bg-dark-content`}
        ></div>
      </div>
      <div
        className={`${
          !open && "-translate-x-full"
        } fixed left-0 top-[128px] h-[calc(100vh-128px)] w-full bg-light-primary transition-all duration-300 dark:bg-dark-primary`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-4">
          <NavItem onClick={handleClose} title="home" url="/" />
          <NavItem onClick={handleClose} title="movies" url="/movies" />
          <NavItem onClick={handleClose} title="profile" url="/profile" />
          <NavItem onClick={handleClose} title="contact" url="/contact" />
          <NavItem onClick={handleClose} title="about" url="/about" />
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
