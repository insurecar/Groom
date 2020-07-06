import React, { useEffect, useState } from "react";

const App = (props) => {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendsStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeToFriendsStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return "Завантаження...";
  }
  return isOnline ? "В мережі" : "Не в мережі";
};

export default App;
