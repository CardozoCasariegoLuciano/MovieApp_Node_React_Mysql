import { useState } from "react";

export function useShowAlert() {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
  });

  const showAlert = (value) => {
    setAlert({ text: value, show: true });
    setTimeout(() => {
        setAlert({ text: "", show: false });
    }, 3500);
  };

  return [showAlert, alert.show, alert.text];
}
