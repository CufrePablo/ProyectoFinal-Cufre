// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Swal from 'sweetalert2'; // Importa SweetAlert2
// TODO: Add SDKs for Firebase products that you want to use

import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    addDoc
} from 'firebase/firestore';  // Aquí ya estás importando todos los métodos necesarios

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3pH3S_aTvnbqxRU06MQ1kDBalAUgj8Wg",
  authDomain: "ecommerce-cufre.firebaseapp.com",
  projectId: "ecommerce-cufre",
  storageBucket: "ecommerce-cufre.appspot.com",
  messagingSenderId: "511772959937",
  appId: "1:511772959937:web:5c24d53ffd479804b3a040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Función para obtener todos los productos desde Firestore
export async function getProductos() {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
}

// Función para obtener un producto por ID desde Firestore
export const getProducto = async (id) => {
    const productoRef = doc(db, "productos", id); // Creamos una referencia al documento con el id dado
    const productoSnapshot = await getDoc(productoRef);
    if (productoSnapshot.exists()) {
        return { id: productoSnapshot.id, ...productoSnapshot.data() }; // Devolvemos el producto si existe
    } else {
        console.log("No se encontró el producto con el ID: ", id);
        return null;
    }
};

// Función para obtener productos por categoría desde Firestore
export const getCategoria = async (categoria) => {
    const productosCollection = collection(db, "productos");
    const q = query(productosCollection, where("categoria", "==", categoria)); // Consulta para obtener productos por categoría
    const productosSnapshot = await getDocs(q);
    const productosFiltrados = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productosFiltrados;
};


export const guardarOrden = async (orden) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), orden); // Guarda la orden en la colección 'orders'
    Swal.fire({
      title: '¡Compra realizada con éxito!',
      text: `Tu orden ha sido generada con el número: ${docRef.id}`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
    return docRef.id; // Devuelve el ID de la orden generada
  } catch (error) {
    console.error('Error al guardar la orden: ', error);
    Swal.fire({
      title: 'Error',
      text: 'Hubo un problema al generar tu orden. Intenta nuevamente.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    throw error; // Lanza el error para que pueda ser manejado si es necesario
  }
};