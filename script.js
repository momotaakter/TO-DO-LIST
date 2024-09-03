const text=document.getElementById('text');
const addbtn=document.getElementById('add');

addbtn.addEventListener('click',()=>{

//create a container
const gettextvalue=document.getElementById('text').value;
const getdivg=document.getElementById('textarea');
const divcreate=document.createElement('div');
divcreate.classList.add('mydiv')
getdivg.append(divcreate);

divcreate.innerHTML=`<li> ${gettextvalue}<button onclick="deletebtnt(this)">delete</button></li>`;



//delete function
function deletebtnt(){
    const parentele=document.parentNode('button');

}
deletebtnt();

});


