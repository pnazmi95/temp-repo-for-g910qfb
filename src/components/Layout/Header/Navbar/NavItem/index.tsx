import { MouseEventHandler } from "react";
import Link from "next/link";

interface INavItemProps extends React.PropsWithChildren {
  title: string;
  url?: string;
  onClick?: MouseEventHandler;
}

const NavItem: React.FunctionComponent<INavItemProps> = ({
  title,
  url,
  onClick
}): JSX.Element => {
  return (
    <li className="cursor-pointer text-xl font-bold uppercase text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
    onClick={onClick}
    >
      <Link
        href={`${url}`}
        className="h-full w-full rounded-b-md text-light-hover dark:text-dark-hover"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;

{/*    {({ isActive }) =>*/}
{/*  isActive*/}
{/*    ? "h-full w-full rounded-b-md text-light-hover dark:text-dark-hover"*/}
{/*    : undefined*/}
{/*}*/}