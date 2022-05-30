import React from "react";
import axios from "axios";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"

const  Products =async () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

 
    try{
      const response = await axios.get('http://localhost:8080/products')
      // console.log(response.data)
      let data= response.data
      console.log(data);
   
    }catch(e){
      console.log(e)

    }
  

  return (
   <>
      {/*  AddProduct */}
      hii this uis iliyt
      <AddProduct />
   
        {/* List of Products */}
        <Product />
    
      <Pagination />
      {/* Pagination */}
   </>
   
  );
};

export default Products;
