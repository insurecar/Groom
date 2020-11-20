import React, { useEffect } from "react";
import { addCount, delCount, getCounter } from "./actions/actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  useEffect(() => {
    axios
      .get("https://5f7c2bda00bd74001690a560.mockapi.io/counter")
      .then((response) => dispatch(getCounter(response.data[0].number)));
  }, [counter]);

  const incrementCount = () => {
    axios.get("https://5f7c2bda00bd74001690a560.mockapi.io/counter/1").then((response) => console.log(response));
  };

  const getTaskList = () => {
    return (dispatch) => {
      fetchTasksList().then((tasksList) => dispatch(tasksListReceived(tasksList)));
    };
  };

  const updateTask = (taskId) => {
    const thunkAction = function (dispatch, getState) {
      const state = getState();
      const tasksList = tasksListSeletor(state);
      const taskItem = tasksList.find((task) => task.id === taskId);
      const updatedTask = {
        ...taskItem,
        done: !taskItem.done,
      };

      updateTask(taskId, updatedTask).then(() => dispatch(getTaskList()));
    };

    return thunkAction;
  };

  return (
    <div className="container">
      <h3>Count: {counter}</h3>
      <button className="btn btn-success m-3" onClick={() => incrementCount()}>
        Increment
      </button>
      <button className="btn btn-danger m-3" onClick={() => dispatch(delCount())}>
        Decrement
      </button>
    </div>
  );
};

export default App;
