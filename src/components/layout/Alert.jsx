import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { FaTimesCircle } from "react-icons/fa";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="flex items-start mb-1 space-x-2 relative">
        {alert.type === "error" && (
          <FaTimesCircle color="#C24641" className="absolute alert-icon" />
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  );
}

export default Alert;
