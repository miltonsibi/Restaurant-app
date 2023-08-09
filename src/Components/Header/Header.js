import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                       {/* Icon */}
                       <i class="fa-solid fa-utensils"></i>
                        Oh my Restaurant
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header