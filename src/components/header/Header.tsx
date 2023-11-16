import { createClient } from "prismicio";
import { PrismicNextLink } from "@prismicio/next";
import styles from './Header.module.scss' 
import Container from "../container/Container";
import Button from "../button/Button";
import ImportBsJS from "components/importBsJS";
// import "../../node_modules/bootstrap/js/src/dropdown.js";
export default async function Header() {
    const client = createClient();
    const navigation = await client.getSingle("navigation");

    return (
        <header className={styles.test}>
            <ImportBsJS />
            <nav className="navbar navbar-dark bg-dark fixed-top">
                {/* <Container> */}
                    <div className="container-fluid">
                        <a className="navbar-brand">{navigation.data.site_title}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    {navigation.data.navigation.map(( navItem , index) => (
                                        <li key={index}>
                                            <Button field={navItem.link}>
                                                {navItem.label}
                                            </Button>
                                        </li>
                                    ))}                                    
                                </ul>
                            </div>
                        </div>                        
                    </div>  
                {/* </Container> */}
            </nav> 
        </header>
    );
}