const baseURL = 'http://localhost:5000'

const apiService = {
    signIn: function(data) {
        return (
            fetch(`${baseURL}/api/sign-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        )
    },
    signUp: function(data) {
        return (
            fetch(`${baseURL}/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        )
    },
    getNews: function(data) {
        return (
            fetch(`${baseURL}/api/news`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        )
    },
    createNews: function(data) {
        return (
            fetch(`${baseURL}/api/creat-news`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        )
    },
    getProfile: function(data) {
        console.log(data)
        return (
            fetch(`${baseURL}/api/get-profile?chanel=${data}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        )
    },
    subChange: function(data) {
        return (
            fetch(`${baseURL}/api/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        )
    },
}

export default apiService