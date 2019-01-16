

/** create an `app.js` file
  * `GET /characters` return HTML that displays a list of characters
    * BONUS: handle filtering with a query string `/characters?status=alive`
  * `POST /characters` takes `{ characterId: 1234, note: 'My favorite character' }`
    * save the note to a notes object. The key should be the characterId and the value
      should be an array of notes. (`const notes = { 1234: ['My favorite character']}`)
    * BONUS: make this functionality into a class and create tests around it.
  * `GET /characters/1234` return HTML that displays a character and all notes about them
  * BONUS: use `fsPromise.readFile` to read your HTML from a file instead
    of writing it in your js file
  * BONUS: how could you make a form for your POST?
    * HINT: use form actions and content-type `application/x-www-form-urlencoded`
      or add JavaScript and `fetch`.
* create a `bodyParser.js` file
* create a `server.js` file
*/
