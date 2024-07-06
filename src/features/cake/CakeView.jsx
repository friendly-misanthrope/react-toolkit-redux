import { useSelector } from 'react-redux';

const CakeView = () => {
  const numCakes = useSelector((state) => state.cake.numCakes)
  return (
    <div>
      <h2>Number of cakes: {numCakes}</h2>
      <button>Order cake</button>
      <button>Restock cake</button>
    </div>
  );
}

export default CakeView;