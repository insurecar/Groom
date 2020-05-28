import React from "react";
import moment from "moment";
//{ from, to, amount, rate, time }
const Transaction = (props) => {
  return (
    <ul className="transactions">
      {props.vasia.map(({ id, time, from, to, rate, amount }) => (
        <li className="transaction" key={id}>
          <span className="transaction__date">
            {moment(time).format("DD MMM")}
          </span>
          <span className="transaction__time">
            {moment(time).format("hh:mm")}
          </span>
          <span className="transaction__assets">
            {from}&#10143;{to}
          </span>
          <span className="transaction__rate">{rate}</span>
          <span className="transaction__amount">
            {new Intl.NumberFormat("en-GB").format(amount)}
          </span>
        </li>
      ))}
    </ul>
  );
};
export default Transaction;
