interface ButtonProps {
  style: string;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ style, children, icon }) => (
  <button className={`btn btn-${style} ${icon && 'p-2'}`}>
    {children}
  </button>
)
