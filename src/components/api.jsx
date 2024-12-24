export const BASE_URL = 'https://dummyjson.com';

// Función genérica para realizar solicitudes a la API
export const fetchData = async (endpoint = '', options = {}) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error al realizar la solicitud a ${BASE_URL}${endpoint}:`, error);
        throw error;
    }
};

// Función para obtener datos de un endpoint específico
export const getData = async (endpoint) => {
    try {
        const data = await fetchData(endpoint);
        console.log(`Datos obtenidos de ${endpoint}:`, data);
        return data;
    } catch (error) {
        console.error(`Error al obtener datos de ${endpoint}:`, error);
        throw error;
    }
};

// Función para enviar datos a un endpoint específico
export const postData = async (endpoint, body) => {
    try {
        const data = await fetchData(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        console.log(`Datos enviados a ${endpoint}:`, data);
        return data;
    } catch (error) {
        console.error(`Error al enviar datos a ${endpoint}:`, error);
        throw error;
    }
};

// Ejemplo de uso: Obtención de productos
(async () => {
    try {
        const products = await getData('/products');
        console.log('Productos obtenidos:', products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }

    // Ejemplo de uso: Envío de un producto nuevo
    try {
        const newProduct = {
            title: 'Producto de prueba',
            description: 'Descripción del producto de prueba',
            price: 100,
        };
        const result = await postData('/products/add', newProduct);
        console.log('Producto enviado:', result);
    } catch (error) {
        console.error('Error al enviar producto:', error);
    }
})();