import { useSelector } from "react-redux";

const IcecreamView = () => {
  const numIcecreams = useSelector((state) => state.icecream.numIcecreams)
  return (
    <div>
      <h2>Number of icecreams: {numIcecreams}</h2>
      <button>Order icecream</button>
      <button>Restock icecream</button>
    </div>
  );
}

export default IcecreamView;