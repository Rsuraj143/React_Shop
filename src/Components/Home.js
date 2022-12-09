import axios from "axios";
import { useEffect, useState } from "react"

import "./Home.css"

import Nav from "./Nav";

export default function Home() {

    const [categories, setCategories] = useState([])

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0)

    

    function LoadCategories() {
        axios.get("https://demo.trooprojects.com/wp-json/wc/v1/products/categories")
            .then(response => {
                // console.log(response.data[0].id);
                setCategories(response.data);
                handleCategoryChange({target:{value:response.data[0].id}})
            })
    }
    function handleCategoryChange(e) {
        axios.get(`https://demo.trooprojects.com/wp-json/wc/v3/products/?category=${e.target.value}`)
            .then(response => {
                setProducts(response.data)
                console.log(response.data);
            })
    }
    
    // Add to Cart 
    function handleAddtoCart(e, id) {
        axios.post(`https://demo.trooprojects.com/wp-json/wc/store/cart/add-item`,{id,quantity: 1,})
            .then(response => response.data)
            .then(data => {
                console.log(data);
                cartItems.push(data);
                getCartItemCount(); 
               
            })
    }

    function getCartItemCount() {
        setItemsCount(cartItems.length);
    }

    useEffect(() => {
        LoadCategories()

    }, [])

    return (
        <div className="container-fluid">

            <Nav itemsCount={itemsCount} />
            <section className="row p-2 ">
                <nav className="col-2 bg-light">
                    <h5 className="py-2">Select a Cetegories</h5>
                    <select onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map((category,i) =>
                                <option value={category.id} key={i}>{category.name.toUpperCase()}</option>
                            )
                        }
                    </select>
                </nav>
                <main className="col-9 d-flex flex-wrap ">
                    {
                        products.map(product =>
                            <div key={product.id} className=" m-2 p-2" style={{ width: "31%" }}>
                                <div> <img src={product.images.length >0  && product.images[0].src} className="card-img-top" alt="productImg" style={{ width: "100%", height: "300px" }}/></div>
                                <h6 className="text-center">{`${product.price} $`}</h6>
                                <h6 className="card-header text-center" style={{ height: '50px' }}>
                                    <p>{product.name}</p>
                                </h6>
                                <div className="text-center">
                                    <button onClick={(e)=> handleAddtoCart(e, product.id)} className="btn btn-danger w-40">
                                        <span className="bi bi-cart4"></span> Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>

            </section>

        </div>
    )
}

