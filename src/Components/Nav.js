
import { useNavigate } from "react-router-dom"

export default function Nav(props) {
    const navigate = useNavigate()

    return (
        <div className="container-fluid">
            <div className="main_header">
                <div>
                    <button onClick={() => navigate("/")} style={{ border: "none", background: "none" }}>
                        <div className="logo">
                            <img className="logo_img" src="https://buyorborrowdev.wpenginepowered.com/wp-content/uploads/2021/06/logo.png" alt="logo" />
                        </div>
                    </button>
                </div>
                <div>
                    <form className="d-flex">
                        <input style={{ width: "500px", height: "50px" }} type="search" placeholder="Search" aria-label="Search" />
                        <button style={{ width: "100px", height: "50px" }} type="submit">Search</button>
                    </form>
                </div>
                <div>
                    <button onClick={() => navigate(`./cartitem`)} ><h1><span className="bi bi-cart">{props.itemsCount}</span></h1></button>
                </div>
            </div>
        </div>
    )
}