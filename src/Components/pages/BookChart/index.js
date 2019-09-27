import React, { Component } from 'react';
import { Table, Divider, Tag, Button, Input, Checkbox, Icon } from 'antd';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import { getBooks, handleHaveAction, handleReadAction, handleDeleteAction, addBook } from '../../../actions/bookstore/getBooks';
import { getBookTags } from '../../../actions/bookstore/getBookTags';

import Header from '../../widgets/Header';
import './index.scss';
import BookTags from '../../widgets/BookTags';
import * as d3 from "d3";

class Bookchart extends Component {
  constructor() {
    super();
    this.state = {
      // name: '',
      // author: '',
      // have: null,
      // read: null,
      // normalPrice: '',
      // buyPrice: '',
      // history: null,
      // eco: null,
      // cs: null,
      // novel: null,
      // literature: null,
      // searchText: '',
    };
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    console.log(this.props)
    await dispatch(getBooks())
    await dispatch(getBookTags())
    this.drawChart([{ name: 'read', value: this.props.haveRead }, { name: 'not read', value: this.props.books.length - this.props.haveRead }], this.props.books.length)
    this.drawChart([{ name: '历史', value: this.props.bookTags.history }, { name: '经济', value: this.props.bookTags.eco }, { name: '计算机', value: this.props.bookTags.cs }, { name: '小说', value: this.props.bookTags.novel }, { name: '文学', value: this.props.bookTags.literture }], this.props.books.length)  
  }

  componentDidUpdate() {
  }

  drawChart(data, total) {
    const height = 300;
    const width = 300;

    const pie = d3.pie()
                  .sort(null)
                  .value(d => d.value);

    const arcLabel = () => {
      const radius = Math.min(width, height) / 2 * 0.8;
      return d3.arc().innerRadius(radius).outerRadius(radius);
    }

    const arc = d3.arc()
                  .innerRadius(0)
                  .outerRadius(Math.min(width, height) / 2 - 1)

    const color = d3.scaleOrdinal()
                    .domain(data.map(d => d.name))
                    .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse())

    // const data = [this.state.history, this.state.eco, this.state.cs, this.state.novel, this.state.literature];

    const arcs = pie(data);

    const svg = d3.select(".d3js-svg").append("svg")
                  .attr("viewBox", [-width / 2, -height / 2, width, height]);

    svg.append("g")
        .attr("stroke", "white")
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", d => color(d.data.name))
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data.name}: ${d.data.value}: ${(d.data.value/total*100).toFixed(2)}%`)

    svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 16)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("transform", d => {
          return `translate(${arc.centroid(d)})`
        })
        .call(text => 
          text
            .append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .text(d => d.data.name)
        )
        .call(text => 
          text
            // .filter(d => (d.endAngle - d.startAngle) > 0.25)
            .append("tspan")
            .attr("x", 0)
            .attr("y", "0.7em")
            .attr("fill-opacity", 0.7)
            .text(d => d.data.value)
        )
        .call(text =>
          text
            .append("tspan")
            .attr("x", "0.4em")
            .attr("y", "1.6em")
            .attr("fill-opacity", 0.7)
            .text(d => (d.data.value/total*100).toFixed(2)+`%`)
        )
  }

  componentDidUpdate() {}

  render() {

    console.log(this.props)
    
    return (
      <div className="bookstore_main-container">
        <Header/>
        <div className="d3js-svg"></div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    books: state.getBooks.books,
    haveHad: state.haveReadCount.have,
    haveRead: state.haveReadCount.read,
    bookTags: state.getBookTags
  });
};

export default connect(mapStateToProps)(Bookchart);