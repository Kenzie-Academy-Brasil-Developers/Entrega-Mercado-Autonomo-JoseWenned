export interface Product {

    id: string;
    name: string;
    price: number;
    weight: number;
    section: string;
    calories: number | null | undefined;
    expirationData: number;

}