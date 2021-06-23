import './App.css';
import Nav from "./Nav";
import Category from "./Category";
import Product from "./Product";
import Cart from "./Cart";
import Error from "./Error"
import Main from "./Main"
import WhoWeAre from "./WhoWeAre";
import Contact from "./Contact";
import { Container, Row, Col } from 'reactstrap';
import React, {Component} from "react";
import alertify from "alertifyjs";
import {Switch, Route} from 'react-router-dom';
import Register from "./Register";

class App extends Component {
    state = {
        currentCategory: "",
        products: [],
        cart: [],
        totalPrice: 0,
    };

    setName = (category)=>{
        this.setState({currentCategory: category.categoryName});
        this.getProducts(category.id);
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

        if(productData.unitsInStock !== 0){productData.unitsInStock --;}
        total = total + parseFloat(productData.unitPrice);
        total = Number(total.toFixed(2));
        this.setState({cart: cartAll});
        this.setState({totalPrice: total});
        alertify.success(productData.productName + " added", 1)
    };

    deleteInCart = (productData)=>{
        var newCart = this.state.cart.filter(item => item.id !== productData.id);
        var editTotal = this.state.totalPrice - (parseFloat(productData.unitPrice) * productData.quantity);
        editTotal = Number(editTotal.toFixed(2));
        this.state.products.filter(item =>{
            if( item.id === productData.id){
                var unitStock = item.unitsInStock;
                productData.unitsInStock = unitStock + productData.quantity;
            }
            return(unitStock)
        });
        this.setState({cart: newCart, totalPrice: editTotal});
        alertify.error(productData.productName + " removed", 2);
    };

    componentDidMount() { this.getProducts() };
    render() {
        let infoNav = {title:"My Web Page"};
        let infoCategory = {title: "Category List"};
        let infoProduct = {title:"Product List"};
        let infoCart = {title: "CART"};
        let infoMain = {title: "Main page"};
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Nav info={infoNav}/>
                        </Col>
                    </Row>
                    <Switch>
                        <Route exact path="/" render={
                            props=>(
                                <Main info={infoMain}/>
                            )
                        }/>
                        <Route exact path="/product" render={
                            props =>(
                                <Row>
                                    <Col xs = "4">
                                        <Category
                                            info={infoCategory}
                                            changeCategorory={this.setName}
                                            currentCategory={this.state.currentCategory}/>
                                    </Col>

                                    <Col xs = "8">
                                        <Product
                                            info={infoProduct}
                                            currentCategory={this.state.currentCategory}
                                            data={this.state.products}
                                            addCart={this.addToCart}
                                            cartLength={this.state.cart.length}/>
                                    </Col>
                                </Row>
                            )}/>
                            <Route exact path="/cart" render={
                                props => (
                                    <Cart
                                        {...props}
                                        info={infoCart}
                                        cart={this.state.cart}
                                        delete={this.deleteInCart}
                                        totalPrice={this.state.totalPrice}/>
                                )
                            }/>
                            <Route path="/who-we-are" component={WhoWeAre}/>
                            <Route path="/contact" component={Contact} />
                            <Route path="/register" component={Register} />
                            <Route component={Error}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;