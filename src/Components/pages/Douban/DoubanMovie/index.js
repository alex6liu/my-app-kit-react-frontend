import './index.scss';
import React, { Component } from 'react';import './index.scss';
import { connect } from 'react-redux';
import DoubanWrapper from '../index';
class DoubanMovie extends Component {
    render() {
        return (
            <div>
                <DoubanWrapper />
                movie
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({});
}

export default connect(mapStateToProps)(DoubanMovie)