import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header>
        <a href="" className="logo">SilvestreBlog</a>
        <nav>
            <Link to="/login" className="login">Login</Link>
            <Link to="/register" className="register">Register</Link>
        </nav>
        </header>
    )
}