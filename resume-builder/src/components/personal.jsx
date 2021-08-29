import { useSelector } from "react-redux";

let Personal = () => {
  let t = useSelector((state) => state.template);
  console.log(t);
  return <>Personal</>;
};

export default Personal;
