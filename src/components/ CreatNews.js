import React from 'react';
import apiService from "../services/api.service.js";

function CreatNews() {

    addNews = () => {
        apiService.createNews()
        .then((response) => {
            if (response.ok) { 
                return response.json();
            } else {
                throw new Error('Something wrong');
            }
        })
        .then(() =>{
            //Добавить на страницу
        })
        .catch((error)=> {
            console.dir(error)
            alert(error)
        })
    }   

    return(
        <div>
            <h3>What is your news</h3>
            <div>
                <div>
                    <lable>
                        <input type='text' className='title' />
                    </lable>
                </div>
                <div>
                    <lable className='wrap_text'>
                        <input type='text' className='text' />
                    </lable>
                    {/* Добавить картинку */}
                    {/* Добавить эмодзи */}
                </div>
            </div>
            <button className='addNews' onClick={addNews}>Add news</button>
        </div>
    )

}

export default Home; //????

