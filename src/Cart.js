import React, {Component} from 'react';
import { Table, Badge, Button } from "reactstrap";

class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <h3>CART <i className="fas fa-shopping-cart"/></h3>
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
                                    <td>{item.productName}  <Badge className="text-light bg-secondary" >{item.quantity}</Badge></td>
                                    <td>{item.unitPrice * item.quantity}$ <br/> <span style={{"fontSize":"11px"}}>({item.quantity} x {item.unitPrice}$)</span></td>
                                </tr>
                            ))
                        }
                        <p>
                            <b>TOTAL PRICE : {this.props.totalPrice}$</b>
                        </p>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Cart;