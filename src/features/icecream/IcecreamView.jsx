import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useCallback, useState } from "react";

const IcecreamView = () => {
  const numIcecreams = useSelector((state) => state.icecream.numIcecreams);
  const dispatch = useDispatch();

  const [icecreams, setIcecreams] = useState({
    restock: 1,
    order: 1
  });

  const changeHandler = (e) => {
    setIcecreams(prevState => { return {
      ...prevState, [e.target.name]: parseInt(e.target.value)
    } });
  }
  
  const restockHandler = (e) => {
    e.preventDefault();
    dispatch(restocked(parseInt(icecreams.restock)));
    setIcecreams({
      restock: 1,
      order: 1
    });
  }

  const orderHandler = (e) => {
    e.preventDefault();
    dispatch(ordered(parseInt(icecreams.order)));
    setIcecreams({
      restock: 1,
      order: 1
    });
  }

  return (
    <div>
      <h2>Number of Ice Creams: {numIcecreams}</h2>
      <div>
        <form>
          <label htmlFor="restock">Number of ice creams to restock:</label>
          <input type="number" name="restock" value={parseInt(icecreams.restock)} onChange={changeHandler} />
          <button onClick={restockHandler}>Restock ice creams</button>
        </form>
      </div>
      <div>
        <form>
          <label htmlFor="order">Number of ice creams to order:</label>
          <input type="number" name="order" value={parseInt(icecreams.order)} onChange={changeHandler} />
          <button onClick={orderHandler}>Order ice creams</button>
        </form>
      </div>
    </div>
  );
}

export default IcecreamView;