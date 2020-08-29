import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';
import ItemRowOrders from './ItemRowOrders';

const userid= "ld"

class OrdersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: '',
            items: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this);
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        var array;
        ItemDataService.retrieveOrders()
            .then(
                response => {
                    //console.log(response.data);
                    this.setState({items : response.data});
                }
            );
    }

    render() {
        //console.log(this.state);
        return (
            <div className="container">
                <h3>My Orders</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total Price</th>
                                <th>Ordered Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from(this.state.items).map(
                                    item =>
                                        <ItemRowOrders key = {item.itemId} item = {item}/>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default OrdersComponent;