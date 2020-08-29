import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';

class ItemRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: 1,
            message: null
        }
        this.addToCartItemClicked = this.addToCartItemClicked.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
    }

    addToCartItemClicked(itemId, qty) {
        console.log(localStorage.getItem("sessionId"));
        if (localStorage.getItem("sessionId") != null) {
            ItemDataService.addToCart(itemId, qty);
        } else {
            this.props.history.push('/login');
        }
    }

    handleQtyChange(event) {
        var qty = Math.round(event.target.value);
        //console.log(qty);
        if (qty > this.props.item.stock)
            qty = this.props.item.stock;
        if (qty < 0)
            qty = 0;
        
        this.setState({qty : qty});
    }

    render() {
        //console.log(this.props);
        //console.log(this.state);
        return (
            <tr key={this.props.item.itemId}>
                <td>{this.props.item.itemId}</td>
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.stock}</td>
                <td><input type="number" value={this.state.qty} onChange={this.handleQtyChange}></input></td>
                <td>{Math.round((this.props.item.price * this.state.qty + Number.EPSILON) * 100)/100}</td>
                <td><button className="btn btn-success" onClick={() => this.addToCartItemClicked(this.props.item.itemId, this.state.qty)}>Add To Cart</button></td>
            </tr>
        )
    }
}

export default ItemRow