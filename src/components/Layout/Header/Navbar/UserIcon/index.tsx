import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Badge from "../../../../Base/Badge";
import Link from "next/link";
interface IUserIconProps extends React.PropsWithChildren {}
const UserIcon: React.FunctionComponent<IUserIconProps> = (
  props
): JSX.Element => {
  return (
    <div className="relative cursor-pointer text-3xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover">
      <Link
        href={"/sign-in"}
        className="rounded-b-md text-light-hover dark:text-dark-hover"

      >
        <FontAwesomeIcon icon={faUser} />
        <Badge value={12} />
      </Link>
    </div>
  );
};

export default UserIcon;

{/*    {({ isActive }) =>*/}
{/*  isActive*/}
{/*    ? "rounded-b-md text-light-hover dark:text-dark-hover"*/}
{/*    : undefined*/}
{/*}*/}
