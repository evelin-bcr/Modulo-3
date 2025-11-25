// definir la estructura de los datos
export interface Product {
    _id:string; //(requerido)
    image : string; //(requirido)
    title : string; //(requirido)
    description?: string; //(no es requerido)
    price: number;
    categories?: string;
    isAvailable?: boolean;
    date?: Date; //opcional
}
