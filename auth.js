import {auth,db} from "./firebase.js"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js"
import {ref,set} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js"

function genId(){
return "SJ-"+Math.random().toString(36).slice(2,10)
}

window.register = async ()=>{

const email=document.getElementById("email").value
const pass=document.getElementById("password").value

const res=await createUserWithEmailAndPassword(auth,email,pass)

const id=genId()

await set(ref(db,"users/"+res.user.uid),{
id:id,
name:"Yeni Kullanıcı"
})

}

window.login = async ()=>{

const email=document.getElementById("email").value
const pass=document.getElementById("password").value

await signInWithEmailAndPassword(auth,email,pass)

}

onAuthStateChanged(auth,user=>{

if(user){
document.getElementById("authBox").classList.add("hidden")
document.getElementById("app").classList.remove("hidden")
}

})
