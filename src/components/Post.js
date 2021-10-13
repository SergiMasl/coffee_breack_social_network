import React from 'react';


function Post( {data} ) {
    if (data === undefined) {
        data = {
            title: '',
            text: '',
            author: '',
            time: '',
        }
    }

    // const getTime = (t) => {
    //     const y = t.getFullYear();
    //     const m = t.getFullMonth();
    //     const d = t.getFullDate(); 
    //     return ( `${y}.${m}.${d}`);
    // }

    return(
        <div className='wrap_news'>
            
            <div className='head_news'>
                <p className='loggin'>{data.author}</p>
                {/* <p className='time'>{getTime(data.time)}</p> */}
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