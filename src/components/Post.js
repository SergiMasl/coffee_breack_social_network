import React from 'react';
import history from '../history.js'
const defaultData = {
    text: '',
    name: '',
    time: '',
    userName: '',
}

function Post( {data = defaultData} ) {

    const getTime = (t) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const y = new Date(t).getFullYear();
        const m = new Date(t).getMonth();
        const d = new Date(t).getDate(); 
        return ( `${monthNames[m]} ${d}, ${y}`);
    }

    const goTo = (userName) => {
        history.push(`./chanels/${userName}`)
    }

    //let img = 'https://images.freeimages.com/images/large-previews/468/winter-wonderland-1383617.jpg'
    //console.log(data)
    return(
        <div className='wrap_news'>
            
            <div className='head_news'>
                <p className='loggin'>{data.name} 
                    <button 
                        className='logginDog'
                        onClick={() => goTo(data.userName)}
                        > @{data.userName} </button> </p>
                <p className='time'>{getTime(data.time)}</p>
            </div>
            
            <div className='title'>
                <h2 className='news_body'>{data.title}</h2>
            </div>
            <div className='main_news'>
                <p className='news_body'>{data.text}</p>
                {/* <div className='post-img-wrap'>
                    <img src={img} className='post-img' />
                </div> */}
            </div> 
        </div>
    )
}

export default Post