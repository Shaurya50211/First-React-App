import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  dissmissed: () => void;
}

const Alert = ({ children, dissmissed}: Props) => {
  return (
    <div
      className="alert alert-success alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        onClick={dissmissed}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert