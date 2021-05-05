const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userEmail: "teo.weber@taglivros.com.br", age: 22 });
    }, 2000)
});

getUser.then(user => {
    console.log(user.userEmail);
})