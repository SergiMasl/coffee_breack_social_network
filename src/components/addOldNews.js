import React from 'react';

function addOldNews( {news} ) {
    return(
        <div className='wrap_news'>
            <div className='head_news'>
                <p className='loggin'></p>
            </div>
            <div className='main_news'>
                <p className='news_body'></p>
            </div>
            <div className='wrap_like'>
                <p className='like_count'> 2</p>
                <button className='add_like'>add like</button>
            </div>
        </div>
    )
}

export default addOldNews