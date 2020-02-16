function APISERVICES() {
 return fetch('https://api.myjson.com/bins/nl8t8')
 .then(res => res.json())
}

export default APISERVICES;