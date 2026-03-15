import {db,auth} from "./firebase.js"
import {ref,push} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js"

window.addStory=(text)=>{

push(ref(db,"stories"),{
user:auth.currentUser.uid,
text:text,
time:Date.now()
})

}
