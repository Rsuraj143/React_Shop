import { useState } from "react";
import Nav from "./Nav";

export default function Cart() {

    const[cartitem, setCartItems] = useState([])
    
    return (
        <div>
            <Nav />
            <div className="container ">
                <h2 className="text-center ">Cart items</h2>
                <table className="table table-hover">
                  <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        
                        <th>
                            <button className="btn btn-danger">
                                Delete All
                            </button>
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {
                        cartItems.map(item=>
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <img src={product.images[0].src}  width="50" height="50" />
                                </td>
                                <td>
                                    <button className="btn btn-danger">
                                        <span className="bi bi-trash"></span>
                                    </button>
                                </td>
                            </tr>
                            )
                    } */}
            
                  </tbody>
                </table>
            </div>
            
        </div>
    )
}