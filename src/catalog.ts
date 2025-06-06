import { ProductModel } from "./product-model";
// const images = require.context("./images",true, /\.png$/);
const DEFAULT_IMAGE =  "@assets/logo.svg";

export const PRODUCTS : ProductModel[] = [getProduct(123, "Lada", 1500.97, DEFAULT_IMAGE),getProduct(234, "Mercedes Benz", 36999.99, DEFAULT_IMAGE),getProduct(345, "Honda Civic", 19999.00 , DEFAULT_IMAGE)];



function getProduct(barcode: number, title: string, price: number, preview: string): ProductModel{
    return {barcode, title, price, preview};
}