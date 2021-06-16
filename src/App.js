import './App.css';
import Nav from "./Nav";
import Category from "./Category";
import Product from "./Product";
import Cart from "./Cart";
import {Container, Row, Col} from 'reactstrap';
import React, {Component} from "react";

class App extends Component {
    state = {
        currentCategory: "",
        products: [],
        cart: [],
        totalPrice: 0,
    };

    setName = (category)=>{
        this.setState({currentCategory: category.categoryName});
        this.getProducts(category.id)
    };

    getProducts = (id)=>{
        var url = "http://localhost:3000/products";
        if(id){
            url = "http://localhost:3000/products?categoryId=" + id;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({products: data}))
       };

    addToCart = (productData)=>{
        var cartAll = this.state.cart;
        var total = this.state.totalPrice
        if(cartAll.includes(productData)){
            productData.quantity ++;
        }else{
            productData.quantity = 1;
            cartAll.push(productData)
        }
        productData.unitsInStock --;
        total = total + Number(productData.unitPrice);
        this.setState({cart: cartAll});
        this.setState({totalPrice: total});
    };
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
                            <Category
                                info={infoCategory}
                                changeCategorory={this.setName}
                                currentCategory={this.state.currentCategory}/>
                            <Cart
                                cart={this.state.cart}
                                totalPrice={this.state.totalPrice}/>
                        </Col>
                        <Col xs = "9">
                            <Product
                                info={infoProduct}
                                currentCategory={this.state.currentCategory}
                                data={this.state.products}
                                cart={this.addToCart}/>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default App;