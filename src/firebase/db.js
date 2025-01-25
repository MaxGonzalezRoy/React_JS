import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
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

export const confirmPurchase = async (cart, userDetails, totalAmount) => {
    try {
        const purchasesCollection = collection(db, 'purchases');
        
        const docRef = await addDoc(purchasesCollection, {
            user: userDetails,
            products: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                total: item.price * item.quantity,
            })),
            totalAmount: totalAmount,
            timestamp: serverTimestamp(),
        });

        console.log('Compra registrada con éxito con el ID:', docRef.id);

        return docRef.id;
    } catch (error) {
        console.error('Error al registrar la compra: ', error);
        throw new Error('Hubo un error al procesar tu compra.');
    }
};