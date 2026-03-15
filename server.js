import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import admin from "firebase-admin";

// Firebase Admin SDK için serviceAccount.json dosyanı indirip projenin köküne koy
import serviceAccount from "./serviceAccount.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://share-your-thoughts-e15a7-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.database();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Kullanıcıları listele
app.get("/users", async (req, res) => {
  const snapshot = await db.ref("users").once("value");
  res.json(snapshot.val());
});

// Mesaj gönder
app.post("/sendMessage", async (req, res) => {
  const { senderId, receiverId, text } = req.body;
  if (!senderId || !receiverId || !text) return res.status(400).send("Eksik veri");

  const room = [senderId, receiverId].sort().join("_");
  const msgRef = db.ref(`chats/${room}`).push();
  await msgRef.set({
    sender: senderId,
    text: text,
    time: admin.database.ServerValue.TIMESTAMP
  });

  res.json({ success: true });
});

// Hikaye ekleme
app.post("/addStory", async (req, res) => {
  const { userId, content } = req.body;
  if (!userId || !content) return res.status(400).send("Eksik veri");

  const storyRef = db.ref(`stories/${userId}`).push();
  await storyRef.set({
    content,
    timestamp: admin.database.ServerValue.TIMESTAMP
  });

  res.json({ success: true });
});

// Sunucu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
