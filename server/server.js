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
        }
        // нужно вернуть посты данного человека
        return res.status(200).json({ message: 'success', user }); //data
    }

    res.statusMessage = "Login or Password is not match";
    return res.status(401).json({ message: 'Login or Password is not match' });

})

app.post("/api/get-profile", jsonParser, async(req, res) => {
    const oldUsers = getUsers();

    const checkUser = oldUsers.find(elem => {
        if (elem.id == req.body.id) {
            return true;
        }
    })
    if (checkUser) {
        const user = {
            //userName: checkUser.userName,
            name: checkUser.name,
           // email: checkUser.email,
           // phone: checkUser.phone,
          //about: checkUser.about,
        }
        
        return res.status(200).json({ message: 'success', user }); 
    }

    res.statusMessage = "id is wrong";
    return res.status(401).json({ message: 'id is wrong' });
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