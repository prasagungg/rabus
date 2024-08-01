import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBECIoLim1XcLVK25kYCxxwGH-_Q7W9rVo",
  authDomain: "madang-7f36d.firebaseapp.com",
  projectId: "madang-7f36d",
  storageBucket: "madang-7f36d.appspot.com",
  messagingSenderId: "797478379879",
  appId: "1:797478379879:web:4432ac4f8ec86f5d69cfc2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
