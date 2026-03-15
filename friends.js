import {db,auth} from "./firebase.js"
import {ref,set,onValue} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js"

window.addFriend = ()=>{

const val=document.getElementById("friendInput").value

set(ref(db,"friends/"+auth.currentUser.uid+"/"+val),true)

}

onValue(ref(db,"friends"),snap=>{

const list=document.getElementById("friends")
list.innerHTML=""

snap.forEach(c=>{

const div=document.createElement("div")
div.innerText=c.key

list.appendChild(div)

})

})
