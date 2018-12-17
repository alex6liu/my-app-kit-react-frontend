import React, { Component } from 'react';
import Header from '../Header';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';

import { getTianqi } from '../../actions/index/indexAction';
import './index.scss';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
  }

  handleOnChange(e) {
    if (!e.target.value) {
      this.setState({searchText: ''})
    } else {
      this.setState({searchText: e.target.value})
    }
  }

  createDiv(searchText) {
    const { dispatch } = this.props
    dispatch(getTianqi(searchText))
    this.setState({searchText: ''})
  }

  render() {
    const { searchText } = this.state
    const { results }  = this.props;

    const createUl = (data) => {
      const ul = [];
      data.map(item => ul.push(
        <ul>
          <li>日期：{item.date}</li>
          <li>天气：{item.cond_txt_d} - {item.cond_txt_n}</li>
          <li>气温：{item.tmp_min} - {item.tmp_max}</li>
          <li>湿度：{item.hum}</li>
        </ul>
      ));
      return ul;
    };

    return (
      <React.Fragment>
        <Header />
        <div className="index-container">
          <h1>天气查询</h1>
          <div className="search-container">
            <Input
              placeholder="输入要查询的城市城市"
              enterButton="Search"
              size="large"
              onChange={this.handleOnChange.bind(this)}
              value={this.state.searchText}
            />
            <Button type="primary" onClick={() => this.createDiv(searchText)}>Search</Button>
          </div>
          {
            Object.keys(results).length > 0 ?
              (<div className="tianqi-info">
                <h3>{results.HeWeather6[0].basic.location}</h3>
                <p>更新时间: {results.HeWeather6[0].update.loc}</p>
                <div>
                  {createUl(results.HeWeather6[0].daily_forecast)}
                </div>
              </div>)
              : null
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.indexReducer.results)
  return {
    results: state.indexReducer.results
  };
};

export default connect(mapStateToProps)(Index);