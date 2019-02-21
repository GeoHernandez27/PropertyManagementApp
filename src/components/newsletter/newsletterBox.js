import React from 'react';

export default function NewsletterBox({date}) {
    return (
        <div className='newsletter-box'>
            <div className='newsletter-box__day'>{date.getDate()}</div>
            <div className='newsletter-box__month-year'>{date.toLocaleString('en-us', {month: 'short'})} {date.getFullYear()}</div>
        </div>
    )
}