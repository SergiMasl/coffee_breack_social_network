import React from 'react';


function Post( {data} ) {
    if (data === undefined) {
        data = {
            autor: '',
            title: '',
            text: '',
        }
    }
    
    return(
        <div className='wrap_news'>
            
            <div className='head_news'>
            <h1 className='loggin'>{data.autor}</h1>
            </div>
            <div className='title'>
                <h2 className='news_body'>{data.title}</h2>
            </div>
            <div className='main_news'>
                <p className='news_body'>{data.text}</p>
            </div>
        </div>
    )
}

export default Post