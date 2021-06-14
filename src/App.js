import './App.css';
import Nav from "./Nav";
import Category from "./Category";
import Product from "./Product";
import {Container, Row, Col} from 'reactstrap';
import React, {Component} from "react";

class App extends Component {
    
    setName = (category)=>{
        this.setState({currentCategory: category.categoryName});
        this.getProducts(category.id)
    };

    state = {
        currentCategory: "",
        products: []
    };

    getProducts = (id)=>{
        var url = "http://localhost:3000/products";
        if(id){
            url = "http://localhost:3000/products?categoryId=" + id;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({products: data}))
    }

    componentDidMount() { this.getProducts() }

    render() {
        let infoNav = {title:"My Web Page"};
        let infoCategory = {title: "Category List"};
        let infoProduct = {title:"Product List"};

        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Nav info={infoNav}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = "3">
                            <Category info={infoCategory} changeCategorory={this.setName} currentCategory={this.state.currentCategory}/>
                        </Col>
                        <Col xs = "9">
                            <Product info={infoProduct} currentCategory={this.state.currentCategory} data={this.state.products}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;