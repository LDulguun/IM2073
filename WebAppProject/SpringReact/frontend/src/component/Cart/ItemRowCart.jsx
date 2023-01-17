import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';
import 'font-awesome/css/font-awesome.min.css';

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
                <td>${this.props.item.price.toFixed(2)}</td>
                <td>{this.props.item.stock}</td>
                <td>{this.state.qty}</td>
                <td>${(Math.round((this.props.item.price * this.state.qty + Number.EPSILON) * 100)/100).toFixed(2)}</td>
                {/* <td><form class="form form-horizontal"><div class="form-group"><div class="col-xs-2"><input type="number" class="form-control" value={this.state.qty} onChange={this.handleQtyChange}></input></div></div></form></td> */}
                <td class="col-sm-1"><input type="number" class="col-sm-12" value={this.state.qty} onChange={this.handleQtyChange}></input></td>
                {/* <td><button className="btn btn-success" onClick={() => this.props.removeHandler(this.props.item.itemId)}>Update Qty</button></td> */}
                <td><button className="btn btn-warning" onClick={() => this.props.removeHandler(this.props.item.itemId)}>Remove  <i class="fa fa-trash" aria-hidden="true"></i></button></td>
            </tr>
        )
    }
}

export default ItemRowCart