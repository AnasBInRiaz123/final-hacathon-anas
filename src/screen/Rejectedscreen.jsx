import React, { useEffect, useState } from "react";
import styles from "./RequestScreen.module.css";
import Header from "../components/Header.jsx";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
const RejectedReq = () => {
  const [requestArr, setrequestArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, setref] = useState(false);

  useEffect(async () => {
    const dbRef = collection(db, "requestForm");
    const todoData = await getDocs(dbRef);
    const todo = [];
    todoData.forEach((doc) => {
      todo.push({
        formSerialNum: doc.id,
        name: doc.data().name,
        fatherName: doc.data().fatherName,
        cnicNum: doc.data().cnic,
        dob: doc.data().dob,
        nnoOffamily: doc.data().fmember,
        status: doc.data().status,
        key: doc.id,
      });
    });
    setLoading(false);
    setrequestArr([...requestArr, ...todo]);
  }, [ref]);

  console.log(requestArr);

  return (
    <div className={styles.mainBox}>
      <Header />

      <section className={styles.requestBox}>
        <div className={styles.heading}>
          <h3>Request Declined</h3>
        </div>

        {loading ? (
          <section className="text-center">
            <section class="spinner-border text-primary mt-5" role="status">
              <span class="sr-only">Loading...</span>
            </section>
          </section>
        ) : (
          <div className={styles.listBox}>
            <table border="1px">
              <tr>
                <th>S.No</th>
                <th>NAME</th>
                <th>CNIC</th>
                <th>Family Member</th>
              </tr>
              {requestArr.map((val, ind) => {
                return val.status == "rejected" ? (
                  <>
                    <tr key={ind}>
                      <td>{val.formSerialNum}</td>
                      <td>{val.name}</td>
                      <td>{val.cnicNum}</td>
                      <td>{val.nnoOffamily}</td>
                    </tr>
                  </>
                ) : null;
              })}
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default RejectedReq;
