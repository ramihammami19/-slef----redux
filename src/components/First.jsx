import { useSelector } from "react-redux";
import { useStore } from "../zustand/store";

function First() {
  const count = useSelector((state) => state.counter.value);
  const [countZ] = useStore((state) => [state.count]);

  return (
    <div>
      {count} and here the zustand state {countZ}
    </div>
  );
}

export default First;
