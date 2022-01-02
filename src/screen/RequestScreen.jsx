import React, { useEffect, useState } from "react";
import styles from "./RequestScreen.module.css";
import Header from "../components/Header.jsx";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import swal from "sweetalert";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
const RequestScreen = () => {
  const [requestArr, setrequestArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ref, setref] = useState(false);

  useEffect(async () => {
    const dbRef = collection(db, "requestForm");
    const todoData = await getDocs(dbRef);
    const todo = [];
    todoData.forEach((doc) => {
      // console.log(doc.data() , doc.id )
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
    // console.log("todoArr" , todo)
    setrequestArr([...requestArr, ...todo]);
  }, [ref]);

  console.log(requestArr);
  const acceptRequest = async (indeNum) => {
    const key = requestArr[indeNum].key;
    console.log(key);
    ///create db collection with doc id///
    const dbRef = doc(db, "requestForm", key);
    await updateDoc(dbRef, {
      status: "accept",
    })
      .then((res) => {
        console.log("Updated Successfull");
        requestArr.splice(indeNum, 1);
        setrequestArr(requestArr);
        swal("Created", "Request Accepted", "success");
      })
      .catch((err) => console.log(err));
  };
  const rejectRequest = async (indeNum) => {
    const key = requestArr[indeNum].key;
    console.log(key);
    ///create db collection with doc id///
    const dbRef = doc(db, "requestForm", key);
    await updateDoc(dbRef, {
      status: "rejected",
    })
      .then((res) => {
        console.log("Updated Successfull");
        requestArr.splice(indeNum, 1);
        swal("Created", "Request Rejected", "success");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.mainBox}>
      <Header />

      <section className={styles.requestBox}>
        <div className={styles.heading}>
          <h3>Undecided Appeal</h3>
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
                <th>Accept/Reject</th>
              </tr>
              {requestArr.map((val, ind) => {
                return val.status == "pending" ? (
                  <>
                    <tr key={ind}>
                      <td>{val.formSerialNum}</td>
                      <td>{val.name}</td>
                      <td>{val.cnicNum}</td>
                      <td>{val.nnoOffamily}</td>
                      <td>
                        <button
                        className={styles.accepted}
                          onClick={() => {
                            acceptRequest(ind);
                          }}
                        >
                          
                          <AiOutlineCheck />
                        </button>
                        &nbsp;
                        /
                        &nbsp;
                        <button
                        className={styles.rejected}
                          onClick={() => {
                            rejectRequest(ind);
                          }}
                        >
                          
                          <AiOutlineClose />
                        </button>
                      </td>
                      
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

export default RequestScreen;
