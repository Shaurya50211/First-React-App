interface Props {
    children: string;
    onClick: () => void;
    color?: 'primary' | 'secondary' | 'danger' | 'success';
}

function Button({children, onClick, color = 'primary'}: Props) {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
}

export default Button