import {db,auth} from "./firebase.js"
import {ref,push,onValue} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js"

window.post=()=>{

const txt=document.getElementById("postInput").value

push(ref(db,"posts"),{
user:auth.currentUser.uid,
text:txt
})

}

onValue(ref(db,"posts"),snap=>{

const div=document.getElementById("posts")
div.innerHTML=""

snap.forEach(c=>{

const p=c.val()

const el=document.createElement("div")
el.innerText=p.text

div.appendChild(el)

})

})
