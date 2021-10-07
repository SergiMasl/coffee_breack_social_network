import React from 'react';


function Post( {data} ) {
    if (data === undefined) {
        data = {
            autor: '',
            title: '',
            text: '',
        }
    }
    console.log(data)
    return(
        <div className='wrap_news'>
            <div className='head_news'>
                <p className='loggin'>{data.autor}</p>
            </div>
            <div className='title'>
                <p className='news_body'>{data.title}</p>
            </div>
            <div className='main_news'>
                <p className='news_body'>{data.text}</p>
            </div>
        </div>
    )
}

export default Post