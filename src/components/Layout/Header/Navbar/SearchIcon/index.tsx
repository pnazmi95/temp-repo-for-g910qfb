import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Input from "../../../../Base/Forms/Input";

interface ISearchIconProps extends React.PropsWithChildren {}

const SearchIcon: React.FunctionComponent<ISearchIconProps> = (
  props
): JSX.Element => {
  const [status, setStatus] = useState(false);

  const handleSearch = () => {
    setStatus(!status);
  };

  return (
    <>
      <div
        className="cursor-pointer text-2xl text-light-heading hover:text-light-hover dark:text-dark-heading dark:hover:text-dark-hover"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div
        className={`absolute flex justify-center items-center right-0 w-full md:w-[50%] h-[3rem] ${
          !status && "hidden"
        } top-[64px]`}
      >
        <Input />
      </div>
    </>
  );
};

export default SearchIcon;
