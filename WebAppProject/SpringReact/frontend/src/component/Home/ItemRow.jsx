import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
// import Notify from './Notify';

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

    addToCartItemClicked(itemId, qty, itemName) {
        console.log(localStorage.getItem("sessionId"));
        if (localStorage.getItem("sessionId") != null) {
            ItemDataService.addToCart(itemId, qty);
            // this.setState({ message: "Item added to cart successfully" });
            toast.configure();
            toast.success(`${qty} x "${itemName}" added to cart successfully`, {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
                });
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
                <td>${this.props.item.price.toFixed(2)}</td>
                <td>x{this.props.item.stock}</td>
                <td style={{width: 5}}><input style={{width: 50}} type="number" value={this.state.qty} onChange={this.handleQtyChange}></input></td>
                <td>${(Math.round((this.props.item.price * this.state.qty + Number.EPSILON) * 100)/100).toFixed(2)}</td>
                {/* <td><Notify/></td> */}
                <td>
                <button className="btn btn-success" onClick={() => this.addToCartItemClicked(this.props.item.itemId, this.state.qty, this.props.item.itemName)}>
                Add <i class="fa fa-cart-plus" aria-hidden="true"></i></button></td>
                {/* {this.state.message && <div class="alert alert-success">{this.state.message}</div>} */}
                {/* {this.state.message && <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
message="Test"
/>} */}
            </tr>
        )
    }
}

export default ItemRow