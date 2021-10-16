const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const cors = require('cors');
const nanolib = require('nanoid');
const nanoid = nanolib.nanoid;
const CryptoJS = require("crypto-js");

app.use(cors())


function getNews() {
    let rawdata = fs.readFileSync('news.json')
    return JSON.parse(rawdata);
}

app.get("/api/news", (req, res) => {
    res.json(getNews())
})

app.post('/api/creat-news', jsonParser, async(req, res) => {
    const post = req.body
    post.id = Date.now();
    const addPost = () => {
        const allNews = getNews();
        allNews.push(post);
        const jsonNews = JSON.stringify(allNews);

        fs.writeFileSync('./news.json', jsonNews)
        
    }
    addPost()
    return res.status(200).json({ message: 'success' })
});

function getUsers() {
    let rawdata = fs.readFileSync('login.json')
    return JSON.parse(rawdata);
}

app.post('/api/signup', jsonParser, async(req, res) => {
    const log = req.body;
    
    const oldUsers = getUsers();
    const existendUser = oldUsers.find(elem => {
        if (elem.userName === log.userName) {
            return true;
        }
    })
    if (existendUser) {
        res.statusMessage = "User alredy exist";
        return res.status(409).json({ message: 'User alredy exist' });
    }

    const security = getCredential(log.password);

    const userSec = {
        userName: log.userName,
        name: log.name,
        email: log.email,
        phone: log.phone,
        id: log.id = nanoid(),
        passPhrase: security.passPhrase,
        ciphertext: security.ciphertext,
        status: 'Here will be your status',
        descriptions: 'Here will be your descriptions',
        photo: 'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
    }

    oldUsers.push(userSec);
    const newlog = JSON.stringify(oldUsers)
    fs.writeFileSync('./login.json', newlog)
    return res.status(200).json({ message: 'success' });
});

app.post("/api/sign-in", jsonParser, async(req, res) => {
    //const user = req.body;
    const oldUsers = getUsers();

    const checkUser = oldUsers.find(elem => {
        if (elem.userName === req.body.userName) {
            if(checkPassword(req.body.password, elem.ciphertext, elem.passPhrase)) {
                return true;
            } 
        }
    })

    if (checkUser) {
        const user = {
            userName: checkUser.userName,
            name: checkUser.name,
            email: checkUser.email,
            phone: checkUser.phone,
            phone: checkUser.phone,
            status: checkUser.status,
            descriptions: checkUser.descriptions,
            photo: checkUser.photo,
            id: checkUser.id,
        }
        // нужно вернуть посты данного человека
        return res.status(200).json({ message: 'success', user }); //data
    }

    res.statusMessage = "Login or Password is not match";
    return res.status(401).json({ message: 'Login or Password is not match' });

})

app.get("/api/get-profile", jsonParser, async(req, res) => {
    chanelName = req.query.chanel

    const oldUsers = getUsers();

    const checkUser = oldUsers.find(elem => {
        if (elem.userName === chanelName) {
            return true;
        }
    })
    if (checkUser) {
        const chanel = {
            userName: checkUser.userName,
            name: checkUser.name,
            email: checkUser.email,
            phone: checkUser.phone,
            status: checkUser.status,
            descriptions: checkUser.descriptions,
            photo: checkUser.photo,
        }
        
        return res.status(200).json({ message: 'success', chanel }); 
    }

    res.statusMessage = "id is wrong";
    return res.status(401).json({ message: 'id is wrong' });
})

app.post('/api/update', jsonParser, async(req, res) => {
    const oldUsers = getUsers();
    const formData = req.body;

    // const checkUser = oldUsers.find(elem => {
    //     if (elem.id === formData.id) {
    //         return true;
    //     }
    // })
    const index = oldUsers.findIndex((item) => {
        return item.id == formData.id
    })

    let user = oldUsers[index];

    user.name = formData.name
    user.name = formData.name
    user.status = formData.status
    user.descriptions = formData.descriptions
    user.photo = formData.photo

    oldUsers[index] = user

    oldUsers[index] = JSON.stringify(oldUsers)
    fs.writeFileSync('./login.json', oldUsers[index])
    return res.status(200).json({ message: 'success',  user});
    
})





app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:5000}`)
})


/////


function getCredential(password) {
    const passPhrase = nanoid();
    const ciphertext = CryptoJS.AES.encrypt(passPhrase, password).toString();

    return {
        passPhrase,
        ciphertext,
    } 
}   

function checkPassword(password, ciphertext, passPhrase) {
 const bytes  = CryptoJS.AES.decrypt(ciphertext, password);

 console.log(password, ciphertext, passPhrase)
 return passPhrase === bytes.toString(CryptoJS.enc.Utf8);
}