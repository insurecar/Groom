import React, { Component, useState, useEffect } from "react";
function User(props) {
  const [userData, setUserData] = useState({
    avatar_url: `https://avatars1.githubusercontent.com/u/9919?v=4`,
    name: "Github",
    location: "San-Francisco",
  });

  useEffect(() => {
    const { match } = props;
    console.log(111);

    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then((response) => response.json())
      .then(({ avatar_url, name, location }) =>
        setUserData({
          avatar_url,
          name,
          location,
        })
      );
  }, [props.match.params.userId]);

  useEffect(() => {
    const onResize = () => {
      console.log("resized");
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}

// class User extends Component {
//   state = {
//     userData: null,
//   };

//   fetchUser = (userId) => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then((response) => response.json())
//       .then((userData) =>
//         this.setState({
//           userData,
//         })
//       );
//   };

//   componentDidMount() {
//     const { match } = this.props;
//     this.fetchUser(match.params.userId);
//     window.addEventListener("resize", onResize);
//   }

//   componentDidUpdate(prevProps) {
//     const { match } = this.props;
//     if (match.params.userId !== prevProps.match.params.userId) {
//       this.fetchUser(match.params.userId);
//     }
//   }
//   onResize = () => {
//     console.log("resized");
//   };
//   componentWillUnmount() {
//     window.removeEventListener("resize", onResize);
//   }

//   render() {
//     const { userData } = this.state;
//     if (!userData) return null;
//     return (
//       <div className="user">
//         <img
//           alt="User Avatar"
//           src={userData.avatar_url}
//           className="user__avatar"
//         />
//         <div className="user__info">
//           <span className="user__name">{userData.name}</span>
//           <span className="user__location">{userData.location}</span>
//         </div>
//       </div>
//     );
//   }
// }

export default User;
