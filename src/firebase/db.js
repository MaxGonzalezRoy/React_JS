import { collection, getDocs } from 'firebase/firestore';
import { db } from './config';

export const getProducts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'Products'));
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error('Error al obtener productos: ', error);
        throw error;
    }
};
