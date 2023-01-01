import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const buttonCustom = () => {
  const [sub, setSub] = useState(false);
  const onChange = () => {
    toast.success("Listo");
    setSub(!sub);
  };
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onChange()}
      >
        Suscribete
      </button>
      <h3>Estado: {sub ? "Suscripto" : "Suscribirse"}</h3>
      <ToastContainer />
    </>
  );
};

export default buttonCustom;
