import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoubanWrapper from '../index';

class DoubanBook extends Component {
    render() {
        return (
            <div>
                <DoubanWrapper />
                book
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({});
}

export default connect(mapStateToProps)(DoubanBook)