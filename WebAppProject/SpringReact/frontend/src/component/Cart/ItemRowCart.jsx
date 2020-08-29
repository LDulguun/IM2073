import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';

const userid= "ld"

class ItemRowCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: this.props.item.qty,
            message: null
        }
        this.handleQtyChange = this.handleQtyChange.bind(this);
    }

    handleQtyChange(event) {
        var qty = Math.round(event.target.value);
        if (qty > this.props.item.stock)
            qty = this.props.item.stock;
        if (qty < 0)
            qty = 0;
        ItemDataService.addToCart(this.props.item.itemId, qty).then(result => {this.props.refreshCourses()});
        this.setState({qty : qty});
    }

    render() {
        return (
            <tr key={this.props.item.itemId} >
                <td>{this.props.item.itemId}</td>
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.stock}</td>
                <td><input type="number" value={this.state.qty} onChange={this.handleQtyChange}></input></td>
                <td>{Math.round((this.props.item.price * this.state.qty + Number.EPSILON) * 100)/100}</td>
                <td><button className="btn btn-success" onClick={() => this.props.removeHandler(this.props.item.itemId)}>Remove From Cart</button></td>
            </tr>
        )
    }
}

export default ItemRowCart