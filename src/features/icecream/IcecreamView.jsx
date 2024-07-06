import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numIcecreams = useSelector((state) => state.icecream.numIcecreams);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>Number of icecreams: {numIcecreams}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order icecream</button>
      <button onClick={() => dispatch(restocked(5))}>Restock icecream</button>
    </div>
  );
}

export default IcecreamView;