interface IBadgeProps extends React.PropsWithChildren {
  value: number;
}

const Badge: React.FunctionComponent<IBadgeProps> = ({
  value,
}): JSX.Element => {
  return (
    <div className="absolute top-0 right-0 flex h-4 w-4 animate-pulse items-center justify-center rounded-full bg-light-error text-xs text-light-heading dark:bg-dark-error dark:text-dark-primary">
      {value}
    </div>
  );
};

export default Badge;
