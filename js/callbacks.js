console.log("Start");

function loginUser(email, password, onSuccess) {
    setTimeout(() => {
        onSuccess({ userEmail: email, age: 22 });
    }, 2000);
}

function getUserData(user, callback) {
    setTimeout(() => {
        callback({ age: user.age });
    }, 1000);
}

// callback hell
const user = loginUser("teo.weber@taglivros.com.br", 1234, user => {
    console.log( user.userEmail );
    getUserData(user, data => {
        console.log( data.age );
    })
})

console.log("End");