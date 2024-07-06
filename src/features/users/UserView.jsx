import { useSelector, useDispatch } from "react-redux";

const UserView = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>List of users:</h2>
    </div>
  );
}

export default UserView;