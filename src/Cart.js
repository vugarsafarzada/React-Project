import React, { Component } from 'react';
import { Table } from "reactstrap";

class Cart extends Component {

    render() {
        return (
            <div className="cart">
                <h3>{this.props.info.title} <i className="fas fa-shopping-cart" /></h3>
                <br/>
                <Table border="1">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(item => (
                                <tr key={item.id} >
                                    <td>
                                        <i
                                            onClick={() => this.props.delete(item)}
                                            className="fas fa-times-circle text-danger"
                                            style={{ "marginRight": "3px" }}>
                                        </i>
                                        {item.productName} ({item.quantity})
                                    </td>
                                    <td>
                                        {item.unitPrice * item.quantity}$
                                        <br />
                                        <span
                                            style={{ "fontSize": "11px" }}>({item.quantity} x {item.unitPrice}$)
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                </Table>
                <p>
                    <b className="text-success">TOTAL PRICE : {this.props.totalPrice}$</b>
                </p>
            </div>
        );
    }
}

export default Cart;