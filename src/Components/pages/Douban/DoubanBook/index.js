import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../../widgets/Header';
import Breadcrumbs from '../../../widgets/Breadcrumbs';
import { Button, Icon, Input } from 'antd';

class DoubanBook extends Component {

    render() {
        return (
            <div>
                <Header />
                <Breadcrumbs />
                <div className="douban-book__container">
                    <Input placeholder="Basic usage" className="book-search" />
                    <Button type="primary" className="book-search-button" onClick={() => this.handleBookSearch.bind(this)}>搜索</Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({});
}

export default connect(mapStateToProps)(DoubanBook)