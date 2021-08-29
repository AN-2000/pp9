import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import "./css/preview.css"

let PublicPreview = () => {
  let [previewData, setPreviewData] = useState(null);
  let [loading, setLoading] = useState(false);

  let { rid } = useParams();
  useEffect(() => {
    let docRef = firestore.collection("resume").doc(rid);
    setLoading(true);
    docRef.get().then((doc) => {
      let data = doc.data();
      setPreviewData(data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <>
          {previewData && previewData.details.isPublic ? (
            <>
              <p className={`template-${previewData.code}`}>{previewData.details.fname}</p>
              <p>{previewData.details.lname}</p>
            </>
          ) : (
            "not public"
          )}
        </>
      )}
    </>
  );
};

export default PublicPreview;
