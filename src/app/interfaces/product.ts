export interface Product {
    //URL de la imagen del producto
    _id: string;
    image: string; 
    title: string; 
    description?: string; //? significa que no es obligatorio
    price: number;
    categories?: string;
    isAvailable?: boolean;

}

