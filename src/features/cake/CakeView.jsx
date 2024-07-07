import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';
import { useState } from 'react';


const CakeView = () => {
  const numCakes = useSelector((state) => state.cake.numCakes);
  const dispatch = useDispatch();

  const [cakes, setCakes] = useState({
    restock: 1,
    order: 1
  });

  const changeHandler = (e) => {
    setCakes(prevState => { return { 
      ...prevState, [e.target.name]: parseInt(e.target.value) 
    } });
  }

  const restockHandler = (e) => {
    e.preventDefault();
    dispatch(restocked(parseInt(cakes.restock)))
    setCakes({
      restock: 1,
      order: 1
    });
  }

  const orderHandler = (e) => {
    e.preventDefault();
    dispatch(ordered(parseInt(cakes.order)));
    setCakes({
      order: 1,
      restock: 1
    });
  }

  return (
    <div className='iceCakeDiv'>
      <h2>Number of cakes: {numCakes}</h2>
      <div>
        <form>
          <label htmlFor="restock">Number of cakes to restock: </label>
          <input type="number" name="restock" value={parseInt(cakes.restock)} onChange={changeHandler} />
          <button onClick={restockHandler}>Restock cake</button>
        </form>
      </div>
      <div>
      <form>
        <label htmlFor="order">Number of cakes to order: </label>
        <input type="number" name="order" value={parseInt(cakes.order)} onChange={changeHandler} />
        <button onClick={orderHandler}>Order cake</button>
      </form>
      </div>

    </div>
  );
}

export default CakeView;