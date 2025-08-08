import React, { useState } from 'react'
import axios from 'axios'

export default function Practice() {

  type user = {
    userId:number,
    id: number,
    title: string,
    body: string
  }
  const [apiData,setApiData]=useState<user[]>([]);

//   type userDetails = {name: string,age: number,isStudent?:boolean}

//   const object:userDetails = {
//   name: 'sai suhaas',
//   age: 20,
//   isStudent: true
// }

// console.log(object.name,'user name');

// let a=1;
// let b=6;
// function studentDetails(a:number,b:number):number {
//   return a+b;
// }

// console.log(studentDetails(a,b))

// const array:string[] | number= ['s1','s2','s3','s4','s5'];//shorthand notation
// console.log(array[4])
//generic notation
// const array2:Array<string | number | boolean | object> = [1,2,3,'s2','s4',true,{name: 'sai suhaas003',age: 20}];

// console.log(array2[6].age)
function errorData():never {
  throw new Error("Error when loading the data!");
}

async function getApiData() {
  try {
      const apiData = await axios.get("https://jsonplaceholder.typicode.com/posts");

      const response = apiData.data;

      setApiData(response);
  } catch (e) {
    debugger
    if (e instanceof Error) {
       console.log('Error :',e.message)
    } else {
      console.log('unkown error',e)
    }
      errorData();
  }
}

getApiData();




  return (
   <>
   {apiData?.map(item => {
    return (
    <h1 key={item.id}>{item.title}</h1>
    )
   })}
   
   </>
  )
}

