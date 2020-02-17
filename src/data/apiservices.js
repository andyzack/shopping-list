function APISERVICES() {
 return fetch('https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3')
 .then(res => res.json())
}

export default APISERVICES;