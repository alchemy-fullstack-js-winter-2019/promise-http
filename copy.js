function copy(src, dst) {
  return fsPromises.readFile('./http.md', { encoding: 'utf8' })
    .then(data => fsPromises.writeFile('./http-copy.md', data))
    .then(() => console.log('DONE'))
    .catch(err => console.error(err));
}