import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setDetails } from "../redux/actions";
import Preview from "./preview";
import "./css/personal.css";
let Qualifications = () => {
  let { degree, cgpa, year, college, isPublic } = useSelector(
    (state) => state.details
  );
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <>
      <div className="qual">
        <div className="form-container p-4">
          <h2>Professional Details</h2>

          <div>
            <div class="row">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="College"
                  value={college}
                  onChange={(e) => {
                    dispatch(setDetails({ college: e.currentTarget.value }));
                  }}
                />
              </div>
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Year"
                  value={year}
                  onChange={(e) => {
                    dispatch(setDetails({ year: e.currentTarget.value }));
                  }}
                />
              </div>
            </div>

            <div class="row">
              <div class="col-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Degree"
                  value={degree}
                  onChange={(e) => {
                    dispatch(setDetails({ degree: e.currentTarget.value }));
                  }}
                />
              </div>
              <div class="col-4">
                <input
                  type="number"
                  class="form-control"
                  placeholder="CGPA"
                  value={cgpa}
                  onChange={(e) => {
                    dispatch(setDetails({ cgpa: e.currentTarget.value }));
                  }}
                />
              </div>
            </div>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              checked={isPublic}
              onChange={(e) => {
                dispatch(setDetails({ isPublic: e.currentTarget.checked }));
              }}
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Make public
            </label>
          </div>
          <br />
          <br />
          <button
            onClick={() => {
              history.push("/personal");
            }}
            className="btn btn-primary"
          >
            Back
          </button>
        </div>
        <Preview />
      </div>
      <button className="btn btn-primary save-qual">Save to Database</button>
    </>
  );
};

export default Qualifications;
