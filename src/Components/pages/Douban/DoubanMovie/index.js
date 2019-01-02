import './index.scss';
import React, { Component } from 'react';import './index.scss';
import { connect } from 'react-redux';
import Header from '../../../widgets/Header';
import Breadcrumbs from '../../../widgets/Breadcrumbs';
import { Button, Icon, Input } from 'antd';

class DoubanMovie extends Component {
    render() {
        return (
            <div>
                <Header />
                <Breadcrumbs />
                <div className="douban-movie__container">
                    <Input placeholder="Basic usage" className="movie-search" />
                    <Button type="primary" className="movie-search-button" onClick={() => this.handleMovieSearch.bind(this)}>搜索</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({});
}

export default connect(mapStateToProps)(DoubanMovie)