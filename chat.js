import {db,auth} from "./firebase.js"
import {ref,push,onValue} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js"

window.sendMessage=()=>{

const msg=document.getElementById("message").value

push(ref(db,"messages"),{
user:auth.currentUser.uid,
text:msg
})

}

onValue(ref(db,"messages"),snap=>{

const box=document.getElementById("chatBox")
box.innerHTML=""

snap.forEach(c=>{

const m=c.val()

const div=document.createElement("div")
div.innerText=m.text

box.appendChild(div)

})

})
