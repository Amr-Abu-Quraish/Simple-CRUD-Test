var bookMarkNamrInput = document.getElementById("bookMarkName");
var bookMarkUrlInput = document.getElementById("bookMarkUrl");
var hintMessage = document.getElementById("hintMessage")
 var light =document.querySelector(".main")

var bookMarkList=[];

if(localStorage.getItem("sitecontainer")!== null){
    bookMarkList=JSON.parse(localStorage.getItem("sitecontainer"));
    displayData()
}
    

function submit(){
  if(validationName()== true && validationUrl()== true){
    var bookMark= {
        name : bookMarkNamrInput.value,
        url : bookMarkUrlInput.value,
    }

    bookMarkList.push(bookMark);

    localStorage.setItem("sitecontainer", JSON.stringify(bookMarkList));
    
    displayData()
    clearInput()
   
  } else{
    light.classList.remove("d-none")
  }
  
}


function clearInput(){
 
     bookMarkNamrInput.value = null;
     bookMarkUrlInput.value = null ;
     bookMarkNamrInput.classList.remove("is-valid");
     bookMarkNamrInput.classList.remove("is-invalid");
     bookMarkUrlInput.classList.remove("is-invalid"); 
     bookMarkUrlInput.classList.remove("is-valid"); 
}


function displayData(){
    var container = "";

    for (var i = 0; i < bookMarkList.length; i++) {
      container += `
     
         <tr>
                    <td>${i +1}</td>
                    <td>${bookMarkList[i].name}</td>
                    <td><button class="btn btn-success ">
                   
                        <i class="fa-solid fa-eye"></i>
                        <a class="text-white text-decoration-none py-2 px-1  fs-5" href=" ${bookMarkList[i].url}" target="_blank" > Visit</a>

                    </button></td>
                    <td><button  onclick="deleteItem(${i})" class="btn btn-danger ">
                        <i class="fa-solid fa-trash-can"></i>
                        <a class="text-white text-decoration-none py-2 px-1  fs-5" >Delete</a>

                    </button></td>
                </tr>
      
    `
    }

    document.getElementById("tabaledata").innerHTML = container;
}


function deleteItem(index){
   bookMarkList.splice(index, 1);

   localStorage.setItem("sitecontainer", JSON.stringify(bookMarkList));
  
    displayData();
}

function validationName(){
    var regex = /^[a-zA-Z]{3,}$/
    var text = bookMarkNamrInput.value 

    if(regex.test(text)== true){

        bookMarkNamrInput.classList.add("is-valid");
        bookMarkNamrInput.classList.remove("is-invalid");

    

        return true;

    }
    else{

        bookMarkNamrInput.classList.add("is-invalid");
        bookMarkNamrInput.classList.remove("is-valid");

        


        return false;
    }

}



function validationUrl(){

    var regex = /^https:\/\/\www\.[a-zA-Z]{1,}\.com$/
    var text = bookMarkUrlInput.value 

    if(regex.test(text)== true){

        bookMarkUrlInput.classList.add("is-valid");
        bookMarkUrlInput.classList.remove("is-invalid");

    

        return true;

    }
    else{

        bookMarkUrlInput.classList.add("is-invalid");
        bookMarkUrlInput.classList.remove("is-valid");

        


        return false;
    }

}


function displayNone(){

   light.classList.add("d-none");

}