///explains R&M Promises MD setup for services


module exports = id => {
  return request 
  .get(http://`${id}`)
  .then( res => ({
    name: res.body.name,
    species: res.body.species,
    status: status
  });
    
    
}