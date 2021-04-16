import React from "react";

import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import {Link} from "react-router-dom"

const header = (props) => {
    return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/authors"}>Authors</Nav.Link>
                    <Nav.Link as={Link} to={"/categories"}>Categories</Nav.Link>
                    <Nav.Link as={Link} to={"/books"}>Books</Nav.Link>
                    <Nav.Link as={Link} to={"/books/add"}>Add a book</Nav.Link>

                </Nav>
                {/*<Form inline>*/}
                {/*    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                {/*    <Button variant="outline-light">Search</Button>*/}
                {/*</Form>*/}
            </Navbar>
    );
}

export default header;