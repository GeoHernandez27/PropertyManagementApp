import React, { Component } from 'react';




class  NewsletterBox extends Component {
    render() {
        const { date} = this.props;
        if(!date) {
            return <div>...Fetching Data</div>
        }
        return (
        <div className='newsletter-box'>
            <div className='newsletter-box__day'>{date.getDate()}</div>
            <div className='newsletter-box__month-year'>{date.toLocaleString('en-us', {month: 'short'})} {date.getFullYear()}</div>
            <div className='newsletter-box__point'></div>
        </div>
    )
    }
}

export default NewsletterBox;