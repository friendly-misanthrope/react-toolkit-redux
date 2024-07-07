import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const userState = useSelector((state) => state.user);
  const { loading, users, error } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of users:</h2>
      {loading && <h3>Loading...</h3>}
      {!loading && error ? (
        <h3>
          Error: <p>{error}</p>
        </h3>
      ) : null}
      {!loading && users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
