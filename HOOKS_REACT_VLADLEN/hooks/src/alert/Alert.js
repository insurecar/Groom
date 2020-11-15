import React, { useContext } from "react";
import { useAlert } from "./AlertContext";

export default function Alert() {
  const alert = useAlert();

  console.log(alert);

  if (!alert) return null;

  return <div className={"alert alert-danger"}>Це дуже і дуже важливе повідомлення</div>;
}
