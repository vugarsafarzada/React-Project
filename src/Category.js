import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
class Category extends Component {
    state = { categories : [] };

    getCategories = () =>{
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({categories: data}))
    };

    componentDidMount() { this.getCategories() };

    render() {
        return (
            <div className="category">
                <h2>{this.props.info.title}</h2>
                <ListGroup>
                    {
                        this.state.categories.map(item =>(
                            <ListGroupItem
                                className="items2"
                                key={item.id}
                                onClick={()=>this.props.changeCategorory(item)}
                                active={item.categoryName === this.props.currentCategory}>
                                {item.categoryName.toUpperCase()}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

export default Category;