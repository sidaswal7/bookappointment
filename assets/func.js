let ul = document.querySelector('ul');
let form = document.querySelector('form');
form.addEventListener('submit',function handleFormSubmit(event){
    event.preventDefault();
    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    let userDetails = {username,email,phone};
    console.log(userDetails)
    axios.post("https://crudcrud.com/api/b722f579178d4b92bf7afe26e0ca8518/bookappointment",userDetails)
    .then((res)=>showDetails(res.data))
    .catch((error)=>console.log(error))

    document.getElementById('username').value = "";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";

})

function showDetails(userDetails){
    let li = document.createElement('li');
    li.innerText = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    let deletebtn = document.createElement('button');
    deletebtn.className = 'delete-btn';
    deletebtn.innerText = 'Delete';
    deletebtn.onclick = ()=>{
        ul.removeChild(li);
    }
    let editbtn = document.createElement('button');
    editbtn.className= 'edit-btn';
    editbtn.innerText = 'Edit';
    editbtn.onclick = ()=>{
        ul.removeChild(li);
        document.getElementById('username').value = userDetails.username;
        document.getElementById('email').value= userDetails.email;
        document.getElementById('phone').value=userDetails.phone;
    }
    li.append(deletebtn,editbtn);
    ul.append(li);

}
