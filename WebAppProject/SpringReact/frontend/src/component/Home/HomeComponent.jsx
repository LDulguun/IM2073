import React, { Component } from 'react';
import ItemDataService from '../../service/ItemDataService';
import ItemRow from './ItemRow';

class HomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: "",
            items: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myChangehandler = this.myChangehandler.bind(this);
        this.openCart = this.openCart.bind(this);
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        var array;
        ItemDataService.searchItems(this.state.keyword)
            .then(
                response => {
                    //console.log(response.data);
                    this.setState({items : response.data});
                }
            );
    /*    ItemDataService.searchItems(this.state.keyword)
            .then(
                console.log(this.state.items),
                response => {
                    //console.log(response);
                    this.setState({ items: response.data })
                }
            );
*/    }

    handleSubmit(event) {
        event.preventDefault();
        this.refreshCourses();
    }

    myChangehandler(event) {
        this.setState({keyword: event.target.value});
        this.refreshCourses();
    }

    openCart() {
        this.props.history.push('/cart');
    }

    render() {
        //console.log(this.state);
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                  <h2>Item Search</h2>
                  <form className="form-inline" onSubmit = {this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Keyword" aria-label="Search" onChange = {this.myChangehandler}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type = "submit" > Search </button>
                  </form>
                </nav>

                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Unit Price</th>
                                <th>Stock</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                        <ItemRow key = {item.itemId} item = {item} place = {"home"} history = {this.props.history}/>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default HomeComponent;