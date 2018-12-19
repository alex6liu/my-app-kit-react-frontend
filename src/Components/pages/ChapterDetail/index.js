import './index.scss';
import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {getChapterDetail} from '../../../actions/zhuishu/zhuishuAction';
import {Link} from 'react-router-dom';
import Header from '../../widgets/Header';

class ChapterDetail extends Component {

    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(getChapterDetail(match.params.url));
    }
    render() {
        const { chapterDetail } = this.props
        return (
            <div>
                <Header />
                <div>
                    {chapterDetail.body}
                </div>

                <div className="actions-container">
                    <Link to="">previous</Link>
                    <Link to="">home</Link>
                    <Link to="">next</Link>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    console.log(state)
    return ({
        chapterDetail: state.getZhuishuReducer.chapterDetail,
    });
}

export default connect(mapStateToProps)(ChapterDetail);