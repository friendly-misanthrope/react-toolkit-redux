import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users:</h2>
      {userState.loading && <h3>Loading...</h3>}
      {!userState.loading && userState.error ? (
        <h3>
          Error: <p>{userState.error}</p>
        </h3>
      ) : null}
      {!userState.loading && userState.users.length ? (
        <ul>
          {userState.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
