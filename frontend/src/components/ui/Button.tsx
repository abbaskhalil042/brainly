interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";

  text: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600",
};

const sizeStyle = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};
const defaultStyle = "rounded-md flex items-center gap-1 cursor-pointer";

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`btn ${props.className} ${variantStyles[props.variant]} ${
        sizeStyle[props.size]
      }  ${props.color} ${defaultStyle}  `}
      onClick={props.onClick}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};

export default Button;
