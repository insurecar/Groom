let userName = '{"name" : "Bob"}';

let parseUser = userNameJson => {
    try {
        return JSON.parse(userNameJson);
    }
    catch{
        return null;
    }
}
console.log(parseUser(userName));

export { parseUser }