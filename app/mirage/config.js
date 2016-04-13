export default function() {
    this.get('/beers', function() {
        return {
            data: [{
                "id": "0",
                "name": "Heat Miser's Hooch",
                "brand": "Happy Hops",
                "image": "images/beer-1.jpg"
            }, {
                "id": "1",
                "author": "",
                "name": "Santa's Lil' Helper",
                "brand": "Happy Hops",
                "image": "images/beer-2.jpg"
            }, {
                "id": "2",
                "name": "Yukon's Silver Ale",
                "brand": "Happy Hops",
                "image": "images/beer-3.jpg"
            }, {
                "id": "3",
                "name": "Blitzen Stout",
                "brand": "Happy Hops",
                "image": "images/beer-1.jpg"
            }, {
                "id": "4",
                "name": "Misfit Malt Beverage",
                "brand": "Happy Hops",
                "image": "images/beer-2.jpg"
            }, {
                "id": "5",
                "name": "Artic Amber Ale",
                "brand": "Happy Hops",
                "image": "images/beer-3.jpg"
            }, {
                "id": "6",
                "name": "Jingle Rock Rye",
                "brand": "Happy Hops",
                "image": "images/beer-1.jpg"
            }, {
                "id": "7",
                "name": "Vixen's Velvet",
                "brand": "Happy Hops",
                "image": "images/beer-2.jpg"
            }, {
                "id": "8",
                "name": "Stocking Stuffer Stout",
                "brand": "Happy Hops",
                "image": "images/beer-3.jpg"
            }, {
                "id": "9",
                "name": "Prancer's Punch",
                "brand": "Happy Hops",
                "image": "images/beer-1.jpg"
            }, {
                "id": "10",
                "name": "Green Grinch Porter",
                "brand": "Happy Hops",
                "image": "images/beer-2.jpg"
            }]
        };
    });


    this.get('/ratings', function() {
        return {
            data: [{
                "id": "1449424205433",
                "author": "Mrs. Claus",
                "name": "Sleighbells Are Ring'n",
                "brand": "Happy Hops",
                "image": "images/beer-3.jpg",
                "numStars": "3",
                "title": "Love this Beer!",
                "text": "Goes down smooth.",
                "date": "1449733122419"
            }, {
                "id": "1420070400000",
                "author": "Hermie",
                "name": "Rudolph's Revenge",
                "brand": "Happy Hops",
                "image": "images/beer-2.jpg",
                "numStars": "3",
                "title": "",
                "text": "",
                "date": "1449733128160"
            }, {
                "id": "1388534400000",
                "author": "Jane Doe",
                "name": "Santa's Slayer Pale Ale",
                "brand": "Happy Hops",
                "image": "images/beer-1.jpg",
                "numStars": "1",
                "title": "",
                "text": "Tastes like Santa's socks.",
                "date": "1449733149222"
            }]
        };
    });

}
// These comments are here to help you get started. Feel free to delete them.

/*
  Config (with defaults).

  Note: these only affect routes defined *after* them!
*/
// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
// this.namespace = '';    // make this `api`, for example, if your API is namespaced
// this.timing = 400;      // delay for each request, automatically set to 0 during testing

/*
  Route shorthand cheatsheet
*/
/*
  GET shorthands

  // Collections
  this.get('/contacts');
  this.get('/contacts', 'users');
  this.get('/contacts', ['contacts', 'addresses']);

  // Single objects
  this.get('/contacts/:id');
  this.get('/contacts/:id', 'user');
  this.get('/contacts/:id', ['contact', 'addresses']);
*/

/*
  POST shorthands

  this.post('/contacts');
  this.post('/contacts', 'user'); // specify the type of resource to be created
*/

/*
  PUT shorthands

  this.put('/contacts/:id');
  this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
*/

/*
  DELETE shorthands

  this.del('/contacts/:id');
  this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

  // Single object + related resources. Make sure parent resource is first.
  this.del('/contacts/:id', ['contact', 'addresses']);
*/

/*
  Function fallback. Manipulate data in the db via

    - db.{collection}
    - db.{collection}.find(id)
    - db.{collection}.where(query)
    - db.{collection}.update(target, attrs)
    - db.{collection}.remove(target)

  // Example: return a single object with related models
  this.get('/contacts/:id', function(db, request) {
    var contactId = +request.params.id;

    return {
      contact: db.contacts.find(contactId),
      addresses: db.addresses.where({contact_id: contactId})
    };
  });

*/


/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
