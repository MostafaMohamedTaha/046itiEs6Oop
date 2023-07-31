//((((((((((((((((((oop constructor function))))))))))))))))))
// function student(a,b,c ) this.a="a" =>new student("A","b","c")
// private props =>var a=1 
// no overload 
// ?inheritance class a, class b => a.prototype=new b() =>a inherit form b
// this.toString=()=>{
//     return `hello world`
// }
// class a{}
// class student extends a { //inherit
//     constructor(name, age,a) {
//         super(a)
//         this.name = name
//         this.age = age

//     }

// #a="19" //private #a()=>{}
//! access private get a(){this.#b();return this.gpa}
// call continue of parent class
// `${super.toString()}`
// }
// ajax revision
// req object
//todo all function is blocking function must be implement then the next code except setTimeout,setInterval non blocking as promise ,xml
// let a=new XMLHttpRequest()
// a.open("get","url",true) //non blocking =>false block function
// a.onreadystatechange=()=>{
//     if(a.readyState==4 && a.status==200){
//         console.log(JSON.parse(a.responseText))
//     }
// }
// a.send()
// fetch('https://fakestoreapi.com/users')
//             .then(res=>res.json())
//             .then(json=>console.log(json[0].address))
//? js is single thread
//queue event =>fifo by default,could be stack 
// let getProducts=(res)=>{
//     let a=new XMLHttpRequest()
//     a.open("get","url",true)
//     a.onreadystatechange=()=>{
//         res(JSON.parse(a.responseText))
//     }
//     a.send()
// }
// let displayProducts=(b)=>{
//     for (const iterator of object) {
//         document.getElementById(btn).innerHtml=iterator.title

//     }
// }
// getProducts(displayProducts)
// //todo promises
// let promiseFunction = () => {
//     return new promise = (res, rej) => {

//         let a = new XMLHttpRequest()
//         a.open("get", "https://fakestoreapi.com/users", true)
//         a.onreadystatechange = () => {
//             if (a.readyState == 4 && a.status == 200)
//                 res(JSON.parse(a.responseText))
//             else if (a.readyState == 4 && a.status != 200)
//                 rej
//         }
//         a.send()
//     }
// }
// fetch("https://fakestoreapi.com/users")
// .then((res)=>res.json())
// .then((res)=>console.log(res))
// let promiseFetch=async()=>{
//     let res = await fetch("https://fakestoreapi.com/users")
//     let data=await res.json()
//     console.log(data)
// }
// async function logMovies() {
//     const response = await fetch("http://example.com/movies.json");
//     const movies = await response.json();
//     console.log(movies);
//   }
// myPromise
//     .then((value) => `${value} and bar`)
//     .then((value) => `${value} and bar again`)
//     .then((value) => `${value} and again`)
//     .then((value) => `${value} and again`)
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// const promiseA = new Promise(myExecutorFunc);
// const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
// const promiseC = promiseA.then(handleFulfilled2, handleRejected2);

//
// let p1=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(res,3000)

//     })
// }
// let p2=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(res,5000)

//     })
// }
// let p3=()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(res,5000)

//     })
// }
// Promise.all([p1,p2,p3])
// .then(()=>{console.log("done")})
// //one of them done
// Promise.race([p1,p2,p3])
// .then(()=>{console.log("done")})
// //all done

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))
// fetch("https://fakestoreapi.com/users")
//   .then((res) => res.json())
//   .then((res) => console.log(res))

// const batchTrack = document.getElementById("dropdown");
// const getPost = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = response.json();
//     return data;
// };

//     const displayOption = async () => {
//         const options = await getPost();
//         options.data.forEach(option => {

//             const newOption = document.createElement("option");
//             newOption.value = option.batchName;
//             newOption.text = option.batchName;
//             batchTrack.appendChild(newOption);

//         });
//     };
// displayOption();

//((((((((((((((((((((((((((((((((chat gpt))))))))))))))))))))))))))))))))
// const getUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users)
//     const dropdown = document.getElementById('dropdown');
//     const showButton = document.getElementById('showButton');

//     // Fill dropdown with user options
//     users.forEach((user) => {
//       const option = document.createElement('option');
//       option.value = user.id;
//       option.text = user.name;
//       dropdown.appendChild(option);
//     });

//     // Enable showButton
//     showButton.hidden = false;

//     // Event listener for showButton click
//     showButton.addEventListener('click', () => {
//       const selectedUserId = dropdown.value;
//       const selectedUser = users.find((user) => user.id === parseInt(selectedUserId));

//       // Display user details
//       alert(`User Details:\nName: ${selectedUser.name}\nEmail: ${selectedUser.email}`);
//     });
//   } catch (error) {
//     console.log('Error:', error);
//   }
// };

// // Call the function to fetch users and populate dropdown
// getUsers();