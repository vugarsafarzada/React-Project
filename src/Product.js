import React, {Component} from 'react';
import { Table, Button} from "reactstrap";

class Product extends Component {

    render() {
        return (
            <div className="product">

                <h3>{this.props.currentCategory} {this.props.info.title}</h3>
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
                                    <th scope="row">{item.id}</th>
                                    <td>{item.productName}</td>
                                    <td>{item.quantityPerUnit}</td>
                                    <td>{item.unitPrice}$</td>
                                    <td>{item.unitsInStock}</td>
                                    <td>
                                        <Button
                                            outline color={item.unitsInStock === 0 ? "secondary":"dark"}
                                            title="Add to cart"
                                            onClick = {()=> this.props.cart(item)}
                                            disabled={item.unitsInStock === 0}>
                                            <i className="fas fa-shopping-cart"/>
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