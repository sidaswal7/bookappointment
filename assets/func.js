let ul = document.querySelector('ul');
let form = document.querySelector('form');
form.addEventListener('submit',function handleFormSubmit(event){
    event.preventDefault();
    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    let userDetails = {username,email,phone};
    axios.post("https://crudcrud.com/api/33c7b3b3da8848bc85ff8ad52a150331/bookappointment",userDetails)
    .then((res)=>showDetails(res.data))
    .catch((error)=>console.log(error))

    document.getElementById('username').value = "";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";

})

function showDetails(userDetails){
    console.log(userDetails )
    let li = document.createElement('li');
    li.innerText = `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    let deletebtn = document.createElement('button');
    deletebtn.className = 'delete-btn';
    deletebtn.innerText = 'Delete';
    deletebtn.onclick = ()=>{
        axios.delete(`https://crudcrud.com/api/33c7b3b3da8848bc85ff8ad52a150331/bookappointment/${userDetails._id}`)
        .then(res=>console.log("user deleted"))
        .catch(error=>console.log(error))
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
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/33c7b3b3da8848bc85ff8ad52a150331/bookappointment')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){

            showDetails(res.data[i])
        }
    })
    .catch((error)=>console.log(error));
})