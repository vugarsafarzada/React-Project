import './App.css';
import Nav from "./Nav";
import Category from "./Category";
import Product from "./Product";
import Cart from "./Cart";
import CartList from "./CartList";
import Error from "./Error"
import {Container, Row, Col} from 'reactstrap';
import React, {Component} from "react";
import alertify from "alertifyjs";
import {Switch, Route} from  'react-router-dom';

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

        if(productData.unitsInStock !== 0){productData.unitsInStock --;}
        total = total + parseFloat(productData.unitPrice);
        this.setState({cart: cartAll});
        this.setState({totalPrice: total});
        alertify.success(productData.productName + " added", 1)
    };

    deleteInCart = (productData)=>{
        var newCart = this.state.cart.filter(item => item.id !== productData.id);
        var editTotal = this.state.totalPrice - (parseFloat(productData.unitPrice) * productData.quantity);
        var getStock = this.state.products.filter(item => item.id === productData.id);
        var unitStock = getStock[0].unitsInStock;
        getStock[0].unitsInStock = unitStock + productData.quantity
        this.setState({cart: newCart, totalPrice: editTotal});
        alertify.error(productData.productName + " removed", 2)
    };

    componentDidMount() { this.getProducts() };

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
                        <Col xs = "4">
                            <Category
                                info={infoCategory}
                                changeCategorory={this.setName}
                                currentCategory={this.state.currentCategory}/>
                            <Cart
                                cart={this.state.cart}
                                delete={this.deleteInCart}
                                totalPrice={this.state.totalPrice}/>
                        </Col>
                        <Col xs = "8">
                            <Switch>
                                <Route exact path="/" render={
                                    props =>(
                                        <Product
                                            {...props}
                                            info={infoProduct}
                                            currentCategory={this.state.currentCategory}
                                            data={this.state.products}
                                            cart={this.addToCart}/>
                                    )
                                }/>
                                <Route exact path="/cart" component={CartList}/>
                                <Route component={Error}/>
                            </Switch>

                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default App;