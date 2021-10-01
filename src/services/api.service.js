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
            fetch(`${baseURL}/api/start`, {
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