import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';


    
class HeaderComponent extends Component {
    render() {

        //fix
        return (
            <div>
               {/* <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a className="navbar-brand" href = '/'>Hệ thống hỗ trợ học tập</a></div>
                    </nav>
                </header>
               
            </div> */}
            <header class="header">
                <nav class="navbar navbar-expand-lg fixed-top py-3 navbar-dark bg-dark">
                    <div class="container"><a href="/" class="navbar-brand text-uppercase font-weight-bold">Hệ thống hỗ trợ học tập</a>
                        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                        
                        <div id="navbarSupportedContent" class="collapse navbar-collapse">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a href="/" class="nav-link text-uppercase font-weight-bold">Thời khóa biểu <span class="sr-only">(current)</span></a></li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            </div>
        );
    }
}

export default HeaderComponent;