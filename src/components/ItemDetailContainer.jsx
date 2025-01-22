import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import '../styles/item.css'


const getProductById = async (id) => {
    const docRef = doc(db, "Products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.error("No such document!");
        return null;
    }
}