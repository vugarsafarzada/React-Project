import React, {Component} from 'react';
import { Table } from "reactstrap";

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <h3>CART <i className="fas fa-shopping-cart"/></h3>
                <Table>
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.productName}</td>
                                    <td>{item.unitPrice}$</td>
                                </tr>
                            ))
                        }
                    <hr/>
                    <b>TOTAL PRICE : {this.props.totalPrice}$</b>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Cart;