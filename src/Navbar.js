import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo" to="/">
                BADROUS
            </div>
            <div className="nav-items">
                <Link className="nav-item" to="/">
                    HOME
                </Link>
                <Link className="nav-item" to="/create">
                    New Post
                </Link>
            </div>
        </div>
     );
}
 
export default Navbar;