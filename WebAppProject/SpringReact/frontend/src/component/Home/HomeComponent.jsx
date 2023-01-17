import React, { Component } from "react";
import ItemDataService from "../../service/ItemDataService";
import ItemRow from "./ItemRow";
import { ClipLoader, MoonLoader } from "react-spinners";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      items: [],
      message: null,
    };
    this.refreshCourses = this.refreshCourses.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myChangehandler = this.myChangehandler.bind(this);
    this.openCart = this.openCart.bind(this);
  }

  componentDidMount() {
    this.refreshCourses();
  }

  //   refreshCourses() {
  //     var array;
  //     ItemDataService.searchItems(this.state.keyword).then((response) => {
  //       //console.log(response.data);
  //       this.setState({ items: response.data });
  //     });
  //     /*    ItemDataService.searchItems(this.state.keyword)
  //             .then(
  //                 console.log(this.state.items),
  //                 response => {
  //                     //console.log(response);
  //                     this.setState({ items: response.data })
  //                 }
  //             );
  // */
  //   }
  async refreshCourses() {
    this.setState({ loading: true });
    try {
      const response = await ItemDataService.searchItems(this.state.keyword);
      this.setState({ items: response.data, loading: false });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.refreshCourses();
  }

  myChangehandler(event) {
    this.setState({ keyword: event.target.value });
    this.refreshCourses();
  }

  openCart() {
    this.props.history.push("/cart");
  }

  render() {
    //console.log(this.state);
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-light">
          <h2>Item Search</h2>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Keyword"
              aria-label="Search"
              onChange={this.myChangehandler}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              {" "}
              Search{" "}
            </button>
          </form>
        </nav>

        {this.state.message && (
          <div class="alert alert-success">{this.state.message}</div>
        )}

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Item Name</th>
                <th>Unit Price</th>
                <th>Stock</th>
                <th style={{width: 5}}>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.loading ? (
                <></>
              ) : (
                this.state.items
                  .sort((a, b) =>
                    a.itemName.replace(/\s/g, "") >
                    b.itemName.replace(/\s/g, "")
                      ? 1
                      : -1
                  )
                  .map((item) => (
                    <ItemRow
                      key={item.itemId}
                      item={item}
                      place={"home"}
                      history={this.props.history}
                    />
                  ))
              )}
            </tbody>
          </table>
        </div>
        {this.state.loading ? (
          <div
            style={{
              marginTop: "10em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MoonLoader color="#27A444" size={70}/>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default HomeComponent;