import {Container} from "lucide-react";
import Button from "./ui/Button";
import {useOutletContext} from "react-router";

const Navbar = () => {
    const isSignedIn = true;
    const username = 'Niladree';
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
                    {isSignedIn ? (
                        <>
                            <span className="greeting">
                                {username ? `Welcome, ${username}` : 'Signed in'}
                            </span>

                            <Button size="sm" onClick={handleAuthClick} className="btn">
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleAuthClick} size="sm" variant="ghost">
                                Log In
                            </Button>

                            <a href="#upload" className="cta">Get Started</a>
                        </>
                    )}
                </div>

            </nav>
        </header>
    )
}

export default Navbar  