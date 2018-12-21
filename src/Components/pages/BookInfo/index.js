import './index.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBookInfo, getChapters } from '../../../actions/zhuishu/zhuishuAction';
import { Link } from 'react-router-dom';
import Header from '../../widgets/Header';

class BookInfo extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        const { dispatch, match } = this.props;
        dispatch(getBookInfo(match.params.id));
        dispatch(getChapters(match.params.id));
    }

    render() {
        const { bookinfo, chapters } = this.props;
        const { title, author, majorCat, lastChapter, longIntro, updated, wordcount  } = bookinfo;

        const chaptersTable = chapters => {
            const chaptersTableArray = []
            for(let i = chapters.length - 1; i>=0;i--) {
                const newLink = chapters[i].link.replace(/\//g, '%2F').replace('?', '%3F')
                chaptersTableArray.push(<div><Link to={`/chapter/${newLink}`}>{chapters[i].title}</Link></div>);

            }
            return chaptersTableArray;
        };

        return (
            <div>
                <Header/>
                <div>
                    <h2>{title}</h2>
                    <p>{author}</p>
                    <p>{updated}</p>
                    <p>{wordcount}</p>
                    <p>{majorCat}</p>
                    <p>{lastChapter}</p>
                    <p>{longIntro}</p>
                </div>

                <div>
                    {chaptersTable(chapters)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return ({
        bookinfo: state.getZhuishuReducer.bookinfo,
        chapters: state.getZhuishuReducer.chapters,
    });
}

export default connect(mapStateToProps)(BookInfo);