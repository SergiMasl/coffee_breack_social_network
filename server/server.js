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
    let rawdata = fs.readFileSync('users.json')
    return JSON.parse(rawdata);
}

app.post('/api/signup', jsonParser, async(req, res) => {
    const formData = req.body;
    
    const oldUsers = getUsers();

    const existendUser = oldUsers[formData.userName]

    if (existendUser) {
        res.statusMessage = "User alredy exist";
        return res.status(409).json({ message: 'User alredy exist' });
    }

    const credantials = getCredential(formData.password);

    const newUser = {
        userName: formData.userName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        id: formData.id = nanoid(),
        passPhrase: credantials.passPhrase,
        ciphertext: credantials.ciphertext,
        status: 'Here will be your status',
        descriptions: 'Here will be your descriptions',
        photo: 'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
    }
    oldUsers[formData.userName] = newUser
    fs.writeFileSync('./users.json', JSON.stringify(oldUsers))
    return res.status(200).json({ message: 'success' });
});

app.post("/api/sign-in", jsonParser, async(req, res) => {
    const formData = req.body;
    const oldUsers = getUsers();

    let isUserExist = oldUsers[formData.userName]

    const oldUser = oldUsers[formData.userName]
    let isPasswordVailed = checkPassword(req.body.password, oldUser.ciphertext, oldUser.passPhrase)

    if (isUserExist && isPasswordVailed) {
        const user = {
            userName: oldUser.userName,
            name: oldUser.name,
            email: oldUser.email,
            phone: oldUser.phone,
            phone: oldUser.phone,
            status: oldUser.status,
            descriptions: oldUser.descriptions,
            photo: oldUser.photo,
            id: oldUser.id,
        }
        // нужно вернуть посты данного человека
        return res.status(200).json({ message: 'success', user }); //data
    }

    res.statusMessage = "Login or Password is not match";
    return res.status(401).json({ message: 'Login or Password is not match' });

})

app.get("/api/get-profile", jsonParser, async(req, res) => {
    const oldUsers = getUsers();

    checkUser = oldUsers[req.query.chanel]
   

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
    formData = req.body
    checkUser = oldUsers[formData.userName]
    
    let user = {... checkUser, ... formData};
    oldUsers[formData.userName] = user
    
    fs.writeFileSync('./users.json', JSON.stringify(oldUsers))
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