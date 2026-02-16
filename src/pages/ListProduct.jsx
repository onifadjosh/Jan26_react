import axios from 'axios';
import React, { useState } from 'react';



const ListProduct = () => {
    
    const [productName, setproductName] = useState("")
const [productPrice, setproductPrice] = useState(0)
const [productQuantity, setproductQuantity] = useState(0)
const [productDescription, setproductDescription] = useState("")
const [productImage, setproductImage] = useState("")

    const handleImage=(e)=>{
        let image = e.target.files[0]
        console.log(image);
        
        let upload = new FileReader()
    upload.onloadend=()=>{
            console.log(upload.result);   
            let newImage = upload.result    
            
            setproductImage(newImage)
        }

        
        upload.readAsDataURL(image)
    
    }

    const sendProduct=async()=>{
        const payload = {
            productImage,
            productPrice,
            productDescription,
            productQuantity,
            productName
        }
        try {
            const response = await axios.post("http://localhost:8080/api/v1/addProduct", payload, {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":localStorage.getItem('token')
                }

            })

            print(payload)
            console.log(response);
            

            alert(response.data.message)

        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Add New Product</h4>
            </div>
            <div className="card-body">
      
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    placeholder="Enter product name"
                    required
                    onChange={(e)=>setproductName(e.target.value)}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="productPrice" className="form-label">
                      Price ($) <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productPrice"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                      onChange={(e)=>setproductPrice(e.target.value)}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="productQuantity" className="form-label">
                      Quantity <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="productQuantity"
                      placeholder="0"
                      min="0"
                      required
                      onChange={(e)=>setproductQuantity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="productDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    rows="3"
                    placeholder="Enter product description"
                    onChange={(e)=>setproductDescription(e.target.value)}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="productImage" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="productImage"
                    placeholder="Enter image URL"
                    onChange={(e)=>handleImage(e)}
                  />
                  <small className="text-muted">
                    Provide a URL for the product image
                  </small>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                  <button  className="btn btn-primary" onClick={sendProduct}>
                    Save Product
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;