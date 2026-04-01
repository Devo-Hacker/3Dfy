import {Container} from "lucide-react";

const Navbar = () => {
    const handleAuthClick = async()=>{};
    return (
        <header className="navbar">
            <nav className="inner">
                <div className="left">
                    <div className="brand">
                        <Container className="logo" />
                        <span className="name">
                            3DFY
                        </span>
                    </div>
                    <ul className="links">
                        <a href="#">Product</a>
                        <a href="#">Pricing</a>
                        <a href="#">Community</a>
                        <a href="#">Enterprise</a>
                    </ul>
                </div>

                <div className="actions">
                    <button onClick={handleAuthClick} className="login">
                        Log In
                    </button>

                    <a href="#upload"
                       className="cta">Get
                        Started</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar  