import React, { Component } from 'react';

class ItemRowOrders extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <tr key={this.props.item.itemId + this.props.item.orderedDate}>
                <td>{this.props.item.itemId}</td>
                <td>{this.props.item.itemName}</td>
                <td>{this.props.item.qty}</td>
                <td>${this.props.item.price.toFixed(2)}</td>
                <td>${(Math.round((this.props.item.price * this.props.item.qty + Number.EPSILON) * 100)/100).toFixed(2)}</td>
                <td>{this.props.item.orderedDate}</td>
            </tr>
        )
    }
}

export default ItemRowOrders