import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [Name, setName] = useState("pampam");
  const [searched, setsearched] = useState("")
  const [products, setproducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([])
  useEffect(() => {
    console.log("use effect ran");
    const makeRequest = async () => {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response.data);
      setproducts(response.data);
      setfilteredProducts(response.data)
      } catch (error) {
        console.log(error);
        
      }
      

    };

    makeRequest();
  }, []);


  const filterProd=(category)=>{
    let newFilteredProd= [...products]
    console.log(newFilteredProd);
   
    if(!category){
      setfilteredProducts(newFilteredProd)
      return
    }
    
   const filterTheProd = newFilteredProd.filter(prod=>prod.category.includes(category))
   console.log(filterTheProd);
   
   setfilteredProducts(filterTheProd)
    
  }

  // const filterProd = (category) => {
  //   // 1. Always start with a fresh copy of the ORIGINAL products
  //   // This ensures you are searching through everything, not just the last result
  //   const allProducts = [...products];
  
  //   // 2. If the input is empty, reset to the full list and stop
  //   if (!category || category.trim() === "") {
  //     setfilteredProducts(allProducts);
  //     return;
  //   }
  
  //   // 3. Filter from the full list
  //   const filterTheProd = allProducts.filter((prod) =>
  //     prod.category.toLowerCase().includes(category.toLowerCase())
  //   );
  
  //   // 4. Update the display state
  //   setfilteredProducts(filterTheProd);
  // };
  

  //use effect will run onload and when any state changes when there is no dependency array
  //useeffect will only run once onload when there is empty dependency array
  //useeffect will run on load and when that state changes, when there is something in the dependency array

  return (
    <div>
      This is my about page
      <h1>{Name}</h1>
      <input type="text" placeholder="search products" onChange={(e)=>filterProd(e.target.value)}/>
      <button onClick={() => setName("josh")}>click me</button>
      <div className="d-flex gap-3 flex-wrap justify-content-start">
      {filteredProducts.map((product, index) =>( 
        <div className="card" style={{ width: "18rem" }} key={product.id}>
          <img src={product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.category}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default About;
