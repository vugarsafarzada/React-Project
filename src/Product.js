import React, { Component } from 'react';
import { Table, Button, Badge } from "reactstrap";
import { Link } from "react-router-dom"
class Product extends Component {
    render() {

        return (
            <div className="product">

                <h3>
                    {this.props.currentCategory} {this.props.info.title}
                </h3>
                <Link to="cart" className="cartButton">
                    <i className="fas fa-shopping-cart" style={{fontSize:"30px"}}/>
                    <Badge className="bg-danger">{this.props.cartLength}</Badge>
                </Link>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Quantity Per Unit</th>
                            <th>Price</th>
                            <th>Units In Stock</th>
                            <th>Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map(item => (
                                <tr key={item.id}>
                                    <th scope="row"><i className="fas fa-box"/></th>
                                    <td>{item.productName}</td>
                                    <td>{item.quantityPerUnit}</td>
                                    <td>{item.unitPrice}$</td>
                                    <td>{item.unitsInStock}</td>
                                    <td>
                                        <Button
                                            outline color={item.unitsInStock === 0 ? "secondary" : "success"}
                                            title="Add to cart"
                                            onClick={() => this.props.addCart(item)}
                                            disabled={item.unitsInStock === 0}>
                                            <i className="fas fa-shopping-cart" />
                                        </Button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Product;