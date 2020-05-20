import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import Loader from "./Loader/Loader.js";
import Table from "./Table/Table";
import DetailRowView from "./DetailRowView/DetailRowView";
import ModeSelector from "./ModeSelector/ModeSelector";
import _ from "lodash";
import TableSearch from "./TableSearch/TableSearch";

class App extends Component {
  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    sort: "asc",
    sortField: "id",
    row: null,
    currentPage: 0,
    search: "",
  };

  async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sortType),
    });
  }

  onSort = (sortField) => {
    const clonedData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";

    const data = _.orderBy(clonedData, sortField, sort);

    this.setState({
      data: data,
      sort: sort,
      sortField: sortField,
    });
  };

  modeSelectHandler = (url) => {
    this.setState({
      isModeSelected: true,
      isLoading: true,
    });

    this.fetchData(url);
  };

  onRowSelect = (row) => {
    this.setState({
      row,
    });
  };

  pageChangeHandler = ({ selected }) => {
    this.setState({
      currentPage: selected,
    });
  };

  SearchHandler = (search) => {
    this.setState({ search, currentPage: 0 });
  };

  getFilteredData() {
    const { data, search } = this.state;

    if (!search) {
      return data;
    }

    return data.filter((item) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["firstName"].toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  render() {
    const pageSize = 50;
    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector onSelect={this.modeSelectHandler} />
        </div>
      );
    }

    const filteredData = this.getFilteredData();

    const pageCount = Math.ceil(filteredData.length / pageSize);

    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];

    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            <TableSearch onSearch={this.SearchHandler} />
            <Table
              data={displayData}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
              onRowSelect={this.onRowSelect}
            />
          </>
        )}

        {this.state.data.length > pageSize ? (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangeHandler}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.state.currentPage}
          />
        ) : null}

        {this.state.row ? <DetailRowView person={this.state.row} /> : null}
      </div>
    );
  }
}

export default App;
