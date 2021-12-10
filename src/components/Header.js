import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <h1>Cats4Lyf</h1>
            <Link className="link dim white dib mr3" to="/">
                Home
            </Link>
            <Link className="link dim white dib mr3" to="/basket2">
                Cart
            </Link>
        </header>
    );
}

export default Header;