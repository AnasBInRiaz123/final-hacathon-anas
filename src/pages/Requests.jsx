import React from 'react'
import '../styles/Request.css'
import User from '../images/kishan.jpg' 
import Menu from '../components/Menu'
import data from '../data/data.json'
import MyCart from '../components/MyCart'


// Import Firestore database
import db from './../config/firebase';
// import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from 'react';
// import './read.css';

const Requests = () => {

	const [info , setInfo] = useState([]);

	// Start the fetch operation as soon as
	// the page loads
	window.addEventListener('load', () => {
		Fetchdata();
	});

	// Fetch the required data using the () method
	const Fetchdata = ()=>{
        console.log('awais')


//         const q = query(collection(db, "requestForm"));

//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });




		db.collection("requestForm").get().then((querySnapshot) => {
            console.log('querySnapshot')
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var data = element.requestForm();
				setInfo(arr => [...arr , data]);
				console.log(data)
			});
		})


	}
	
	// Display the result on the page
	return (
		<div>
			<center>
			<h2>Student Details</h2>
			</center>
		
		{
			info.map((data) => (
			<Frame cnic={data.cnic}
				name={data.name}
				fatherName={data.fatherName}
				fmember={data.fmember}
				status={data.status}
				dob={data.dob}/>
			))
		}
		</div>

	);
}

// Define how each display entry will be structured
const Frame = ({cnic , name , fatherName, fmember, status, dob}) => {
	console.log(cnic + " " + name + " " + fatherName);
	return (
		<center>
			<div className="div">
				
<p>NAME : {name}</p>

				
<p>fatherName : {fatherName}</p>

				
<p>cnic : {cnic}</p>


<p>family member : {fmember}</p>
<p>status : {status}</p>
<p>dob : {dob}</p>

			</div>
		</center>
	);
}

export default Requests;
