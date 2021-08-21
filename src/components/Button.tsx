import { Link } from "react-router-dom";

interface ButtonProps {
  style: string;
  icon?: boolean;
  href?: string;
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ style, children, icon, href, ...rest }) => {

  const className = `btn btn-${style} ${icon && 'p-2'}`;

  if (href) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  } else {
    return (
      <button {...rest} className={className}>
        {children}
      </button>
    )
  }
}
