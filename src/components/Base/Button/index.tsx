import Link from "next/link";

interface IButtonProps extends React.PropsWithChildren {
  to?: any;
  title: string;
  onClick?: any;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  title,
  to,
  onClick
}): JSX.Element => {
  return (
    <Link href={to}>
      <button
        className="w-full rounded bg-light-content px-4 py-2 text-dark-primary hover:bg-dark-hover dark:bg-dark-secondary dark:text-light-secondary dark:hover:bg-dark-error"
        type="button"
        onClick={onClick}
      >
        {title}
      </button>
    </Link>
  );
};

export default Button;
