import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';


const CakeView = () => {
  const numCakes = useSelector((state) => state.cake.numCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numCakes}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock cake</button>
    </div>
  );
}

export default CakeView;