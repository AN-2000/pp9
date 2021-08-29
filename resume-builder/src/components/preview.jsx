import { useSelector } from "react-redux";
import "./css/preview.css";

let Preview = () => {
  let { fname, lname, city, state, phone, email, year, degree, college, cgpa } =
    useSelector((state) => state.details);
  let code = useSelector((state) => state.template);

  return (
    <div className="preview-container">
      <p className={`template-${code}`}>{fname}</p>
      <p className={`template-${code}`}>{lname}</p>
      <p className={`template-${code}`}>{city}</p>
      <p className={`template-${code}`}>{state}</p>
      <p className={`template-${code}`}>{email}</p>
      <p className={`template-${code}`}>{phone}</p>
      <p className={`template-${code}`}>{college}</p>
      <p className={`template-${code}`}>{degree}</p>
      <p className={`template-${code}`}>{year}</p>
      <p className={`template-${code}`}>{cgpa}</p>
    </div>
  );
};

export default Preview;
