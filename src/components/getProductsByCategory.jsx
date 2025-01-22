import { db } from '../firebase/db';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const getProductsByCategory = async (category) => {
    try {
        const q = query(collection(db, "products"), where("category", "==", category));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => doc.data());
        return products;
    } catch (error) {
        console.error("Error al obtener productos por categoría:", error);
    }
};
