export default function () {
  this.patch('/beers/:id', function (db, request) {
    const id = request.params.id
    const attrs = JSON.parse(request.requestBody).data.attributes
    delete attrs.id
    db.beers.update(id, attrs)

    return {
      data: [{
        type: 'beers',
        id: id,
        attributes: attrs
      }]
    }
  })

  // this.put('/beers/:id', 'beer')
  this.get('/beers/:id', function (db, request) {
    let id = request.params.id

    return {
      data: {
        type: 'beers',
        id: id,
        attributes: db.beers.find(id)
      }
    }
  })

  // this.get('/beers')
  this.get('/beers', function (db, request) {
    return {
      data: db.beers.map((attrs) => ({
        type: 'beers',
        id: attrs.id,
        attributes: attrs
      }))
    }
  })
}
    // return {
    //   data: [{
    //     id: '1',
    //     type: 'beers',
    //     attributes: {
    //       'name': "Heat Miser's Hooch",
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-1.jpg',
    //       'rating': '1'
    //     }
    //   }, {
    //     id: '2',
    //     type: 'beers',
    //     attributes: {
    //       'name': "Santa's Lil' Helper",
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-2.jpg',
    //       'rating': '3'
    //     }
    //   }, {
    //     id: '3',
    //     type: 'beers',
    //     attributes: {
    //       'name': "Yukon's Silver Ale",
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-3.jpg',
    //       'rating': '0'
    //     }
    //   }, {
    //     id: '4',
    //     type: 'beers',
    //     attributes: {
    //       'name': 'Blitzen Stout',
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-1.jpg',
    //       'rating': '0'
    //     }
    //   }, {
    //     id: '5',
    //     type: 'beers',
    //     attributes: {
    //       'name': 'Misfit Malt Beverage',
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-2.jpg',
    //       'rating': '4'
    //     }
    //   }, {
    //     id: '6',
    //     type: 'beers',
    //     attributes: {
    //       'name': 'Artic Amber Ale',
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-3.jpg',
    //       'rating': '4'
    //     }
    //   }, {
    //     id: '7',
    //     type: 'beers',
    //     attributes: {
    //       'name': 'Jingle Rock Rye',
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-1.jpg',
    //       'rating': '5'
    //     }
    //   }, {
    //     id: '8',
    //     type: 'beers',
    //     attributes: {
    //       'name': "Vixen's Velvet",
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-2.jpg',
    //       'rating': '0'
    //     }
    //   }, {
    //     id: '9',
    //     type: 'beers',
    //     attributes: {
    //       'name': 'Stocking Stuffer Stout',
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-3.jpg',
    //       'rating': '1'
    //     }
    //   }, {
    //     id: '10',
    //     type: 'beers',
    //     attributes: {
    //       'name': "Prancer's Punch",
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-1.jpg',
    //       'rating': '3'
    //     }
    //   }, {
    //     id: '11',
    //     type: 'beers',
    //     attributes: {
    //       'name': 'Green Grinch Porter',
    //       'brand': 'Happy Hops',
    //       'image': 'assets/images/beer-2.jpg',
    //       'rating': '2'
    //     }
    //   }]
    // }
  // })
