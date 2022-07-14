shownotes();
//events setting START
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  //FUNCTION TO ADD THE NOTES
  let text = document.getElementById("text");
  let notes = localStorage.getItem("notes");
  let text_val = text.value;
  let text_obj;
  // console.log(text.value);
  if (notes == null) {
    text_obj = [];
  } else {
    text_obj = JSON.parse(notes);
  }
  if (text_val != "") {
    text_obj.push(text_val);
    localStorage.setItem("notes", JSON.stringify(text_obj));
    text.value = "";
  } else {
    alert("Enter a task.");
    text.value = "";
  }
  shownotes();
});
let enter_key = document.getElementById("text");
enter_key.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    // key code of the keybord key
    event.preventDefault();
    //FUNCTION TO ADD THE NOTES
    let text = document.getElementById("text");
    let notes = localStorage.getItem("notes");
    let text_val = text.value;
    let text_obj;
    // console.log(text.value);
    if (notes == null) {
      text_obj = [];
    } else {
      text_obj = JSON.parse(notes);
    }
    if (text_val != "") {
      text_obj.push(text_val);
      localStorage.setItem("notes", JSON.stringify(text_obj));
      text.value = "";
    } else {
      alert("Enter a Task.");
      text.value = "";
    }
  }
  shownotes();
});
//events setting DONE
//FUNCTION TO SHOW THE NOTES
function shownotes(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    text_obj = [];
  } else {
    text_obj = JSON.parse(notes);
  }
  let html = "";
  text_obj.forEach(function (element, index) {
    html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;" ><div class="card-body" id="content-${index}" style="background-color:#F7E7FB;">
        <h5 class="card-title">Tasks ${index + 1}</h5>
        <p class="card-text" style="">${element}</p>
        <button onclick="delete_task(${index})" class="btn btn-primary" style="border-radius:10px;">Delete</button> <button onclick="finish_task(${index})" 
        class="btn btn-primary"
        style="border-radius:10px;">Finish</button> <button onclick="unfinish_task(${index})" class="btn btn-primary" style="border-radius:10px;">Unfinish</button>
      </div>
    </div>
    `;
  });
  let list_id = document.getElementById("list");
  if (text_obj.length != 0) {
    list_id.innerHTML = html;
  } else {
    list_id.innerHTML = "<b>Nothing to show here. Start by adding a Task.</b>";
  }
}
//FUNCTION TO DELETE THE NOTES
function delete_task(index) {
  // console.log('delete event fired')
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    text_obj = [];
  } else {
    text_obj = JSON.parse(notes);
  }
  text_obj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(text_obj));
  shownotes();
}
//Function to finish task
function finish_task(index) {
  // console.log('finish task fired')
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    text_obj = [];
  } else {
    text_obj = JSON.parse(notes);
  }
  element = text_obj[index];
  let html = "";
  html += `
        <h5 class="card-title">Tasks ${index + 1}</h5>
        <p class="card-text" style="filter: blur(1px);
  -webkit-filter: blur(1px);"><strike>${element}</strike></p>
        <button onclick="delete_task(${index})" class="btn btn-primary" style="border-radius:10px;">Delete</button> <button onclick="finish_task(${index})" 
        class="btn btn-primary"
        style="border-radius:10px;">Finish</button> <button onclick="unfinish_task(${index})" class="btn btn-primary" style="border-radius:10px;">Unfinish</button> 
        
     `;
  let content = document.getElementById(`content-${index}`);
  content.innerHTML = html;
}
function unfinish_task(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    text_obj = [];
  } else {
    text_obj = JSON.parse(notes);
  }
  element = text_obj[index];
  let html = "";
  html += `
        <h5 class="card-title">Tasks ${index + 1}</h5>
        <p class="card-text" style="">${element}</p>
        <button onclick="delete_task(${index})" class="btn btn-primary" style="border-radius:10px;">Delete</button> <button onclick="finish_task(${index})" 
        class="btn btn-primary"
        style="border-radius:10px;">Finish</button> <button onclick="unfinish_task(${index})" class="btn btn-primary" style="border-radius:10px;">Unfinish</button> 
        
     `;
  let content = document.getElementById(`content-${index}`);
  content.innerHTML = html;
}
let search = document.getElementById("searchTxt");

search.addEventListener("input", function (e) {
  let input_val = search.value.toLocaleLowerCase();
  let notecards = document.getElementsByClassName("notecard");
  Array.from(notecards).forEach(function (element) {
    let card_txt = element
      .getElementsByTagName("p")[0]
      .innerText.toLocaleLowerCase();
    // console.log(card_txt);
    if (card_txt.includes(input_val)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
// function mark_as_imp(index) {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     text_obj = [];
//   } else {
//     text_obj = JSON.parse(notes);
//   }
//   element = text_obj[index];
//   let html = "";
//   html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;background-color:red;"><div class="card-body" id="content-${index}">
//         <h5 class="card-title">Tasks ${index + 1}</h5>
//         <p class="card-text" style="margin-right:10rem;">${element}</p>
//         <button onclick="delete_task(${index})" class="btn btn-primary" style="border-radius:10px;">Delete</button> <button onclick="finish_task(${index})"
//         class="btn btn-primary"
//         style="border-radius:10px;">Finish</button> <button onclick="unfinish_task(${index})" class="btn btn-primary" style="border-radius:10px;">Unfinish</button> <button id="imp_${index}" onclick="mark_as_imp(${index})"
//         class="btn btn-primary"
//         style="border-radius:10px;background-color:black;">Important</button>

//       </div>
//     </div>`;
//   let content = document.getElementById(`content-${index}`);
//   content.innerHTML = html;
// }
