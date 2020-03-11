myApp.factory('ProductService', function () {
    var products = [
        {
            imgUrl: 'backpack_sm.png',
            id: 1,
            name: 'Standard Backpack',
            price: 74.84,
            description: 'This is your standard, everyday backpack.  Nothing exciting about this at all.  You can use it to carry stuff.'
        },
        {
            imgUrl: 'tent_sm.png',
            id: 2,
            name: 'Two-man Tent',
            price: 124.84,
            description: 'This is your standard, everyday tent.  Extremely useful when it is raining.  Sleeps two comfortably.  Sleeps more than two uncomfortably.'
        },
        {
            imgUrl: 'compass_sm.png',
            id: 3,
            name: 'Standard Compass',
            price: 79.99,
            description: 'This is your standard, everyday compass.  You\'ll be lost without this (ha ha ha).'
        },
        {
            imgUrl: 'lantern_sm.png',
            id: 4,
            name: 'Standard Lantern',
            price: 44.43,
            description: 'This is your standard, everyday lantern.  You can use it to see things when it is dark.  Also works well as a paperweight.'
        }, {
            imgUrl: 'swiss_army_sm.png',
            id: 5,
            name: 'Swiss Army Knife',
            price: 38.92,
            description: 'This is a standard, swiss army knife.  Comes with a fork, spoon, knife, file, screwdrivers (flathead and phillips) and can opener.  Don\'t be caught in the woods without one of these!'
        },
        {
            imgUrl: 'tools_sm.png',
            id: 6,
            name: 'Standard Set of Tools',
            price: 124.25,
            description: 'This is your standard set of camping tools.  Comes with a hatchet, shovel, and a knife, plus additional tools.  No camper should be without this set!'
        }

    ];
    return {
        getProducts: function () {
            return products;
        }

    };

});