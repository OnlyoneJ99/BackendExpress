const express = require('express');

const server = express();

function handleGet(req, res){
  res.send("This is a GET Method")
}

function handlePost(req, res){
  res.send("This is a POST Method")
}

function handlePut(req, res){
  res.send("This is a PUT Method")
}

function handleDelete(req, res){
  res.send("This is a DELETE Method")
}


server.get('/req', handleGet)
server.post('/req', handlePost)
server.delete('/req', handleDelete)
server.put('/req', handlePut)



server.listen('3000', 'localhost', () => {
	console.log('Server ready');
});
