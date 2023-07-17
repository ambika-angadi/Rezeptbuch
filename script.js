// Event listener for the "Add Recipe" link
document.getElementById('addRecipeLink').addEventListener('click', add)

function add(){
document.getElementById("add").style.display="block";
}
function hide(){
document.getElementById("add").style.display="none";
}

const recipename=document.getElementById("name");
const Ingredients=document.getElementById("Ingredients_area");
const Method=document.getElementById("Method_area");
const image=document.getElementById("image_src");
const list=document.getElementById("starter_list");
const main=document.getElementById("maincourse_list");

function addRecipe(){
 if (recipename.value==""){
  alert("please write a Recipe name");
 }
 else{
  let div = document.createElement("div");
  div.classList.add("starter");
  list.appendChild(div);
  let img = document.createElement("img");
  img.setAttribute("src", image.value);
  img.style.width="200";
  img.style.height="300";
  div.appendChild(img);
  let name=document.createElement("h3");
  name.textContent=recipename.value;
  div.appendChild(name);
  // info
let edit=document.createElement("button");
  edit.textContent="Edit";
  div.appendChild(edit);
  let del=document.createElement("button");
  del.textContent="Delete";
  del.classList.add("delete");
  div.appendChild(del);
  let ingredient=document.createElement("p");
  ingredient.textContent=Ingredients.value.split("\n");
  div.appendChild(ingredient);
  let methods=document.createElement("p");
  methods.textContent=Method.value;
  div.appendChild(methods);
  }
 recipename.value="";
 image.value="";
 Ingredients.value="";
 Method.value="";
 hide();
 save();
}
show();
const recip=document.getElementById("starter_list");
const maincourse=document.getElementById("maincourse_list");
recip.addEventListener("click", function (e) {
 
 if (e.target.classList.contains("delete")) {
  e.target.parentElement.remove();
  save();
 }
});

function save(){
  localStorage.setItem("data",list.innerHTML);
}
function show(){
  list.innerHTML= localStorage.getItem("data")
}
show();