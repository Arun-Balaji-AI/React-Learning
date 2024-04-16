import './App.css';
import React from 'react';



// const FetchName = () => {
//   var name = prompt("Enter Name : ",)
//   var age = prompt("Enter Age : ",)
//   var department = prompt("Enter Department : ",)
//   var native = prompt("Enter Native : ",)
//   return <>
//     <PrintDetails name = {name} age = {age} department = {department} native = {native}></PrintDetails>
//   </>
// };


// const PrintDetails = (props) => {
//   return <>
//     <h2>The Name is {props.name}</h2>
//     <h2>Age is {props.age}</h2>
//     <h2>Department is {props.department}</h2>
//     <h2>Native is {props.native}</h2>
//   </>
// };


function Food() {
  const order = (food) => {
    alert(food);
  };

  let foodItem = prompt("Enter your Order : ",)

  return <>
    <button onClick={() => order(foodItem)}> The Food you have ordered is..</button>
  </>
}


export default Food;

// export default FetchName;

