import Navbar from "./Navbar";

interface IHeaderProps extends React.PropsWithChildren {}

const Header: React.FunctionComponent<IHeaderProps> = (props): JSX.Element => {
  return (
    <div>
      <header className="flex h-16 items-center justify-center bg-light-primary dark:bg-dark-primary">
        <h1 className="text-3xl font-bold uppercase  dark:text-dark-heading">
          Cafe Cinema
        </h1>
      </header>
      <Navbar />
    </div>
  );
};

export default Header;
