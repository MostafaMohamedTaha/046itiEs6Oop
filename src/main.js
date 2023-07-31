// vars
let currentImage = ''
const $ = (el) => document.querySelector(el)
const addOption = $("#dropdown");
//fetch data
const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  // console.log(data)
  return data;
}
//get data and loop to make select box
const displayOption = async () => {
  const options = await getPost();
  for (option of options) {
    const newOption = document.createElement("option");
    // get value by id to link it when button clicked
    newOption.value = option.id;
    newOption.text = option.name;
    addOption.appendChild(newOption);
  }
  // after load all data show button it take too few time so show it after 2 second 
  setTimeout(() => { $("#showButton").hidden = false }, 2000)
};
displayOption();
const btnDisplay = async (event) => {
  //get select box target value by id
  const id = event.target.value
  // fetch images 
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);

  const data = await response.json();
  //images thar have the same id with option name
  let imgSrc = data.find(image => image.albumId == id)
  // get url of image that have same id of image album 
  currentImage = imgSrc.url

}
const showImage = () => {
  //change source with the select box id
  $('#imgInput').src = currentImage
}
// display show by click button 
btnDisplay()
// ((((((((((((((((((question 3))))))))))))))))))
// vars 
const update = {
  userId: 1,
  title: "foo",
  body: "var",
}
// fetch data 
let getPosts = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //method first
    method: "POST",
    //header content app/json,body json stringify
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(update),
  })
  let data = await res.json()
  console.log(data)
  //show the data in console like what required
  document.getElementById("getPosts").innerHTML=`
    userId => (${data.userId})
    title => (${data.title})
    body => (${data.body})
    id => (${data.id})
  `
}
// getPosts()



