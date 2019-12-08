var database = [
    {
        username: "Andrew",
        password: "secret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is awesome!"
    },
    {
        username: "Ingrid",
        timeline: "Bad hair day!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function isUserValid(username, password) {
    for (var i=0; i<database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}
function signIn(user, pass) {
    if(isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry wrong username and password");
    }
}

signIn(userNamePrompt, passwordPrompt);