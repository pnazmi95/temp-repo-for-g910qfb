import { InputHTMLAttributes, useState } from "react";
// import { useNavigate } from "react-router-dom";

interface IInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    React.PropsWithChildren {}

const Input: React.FunctionComponent<IInputProps> = (props): JSX.Element => {
  
    // const navigate = useNavigate()
    const [title, set_title] = useState('')

    const submitForm = (event: any) => {
        event.preventDefault()
        set_title('')
    }
  
    return (
      <form 
      className="flex gap-2 justify-center items-center py-3 bg-dark-hover h-full w-full rounded-b-md px-4" 
      onSubmit={submitForm}
      >
        <div className="border-none border-b-[2px] text-light-content dark:text-dark-primary w-full h-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full focus:outline-none px-2 h-full rounded-md"
            value={title}
            onChange={(e) => set_title(e.target.value)}
          />
        </div>
        <button type="submit" className="rounded bg-light-content px-4 text-dark-primary hover:bg-light-error dark:bg-dark-secondary dark:text-light-secondary dark:hover:bg-dark-error">
          Search
        </button>
      </form>
  );
};

export default Input;
