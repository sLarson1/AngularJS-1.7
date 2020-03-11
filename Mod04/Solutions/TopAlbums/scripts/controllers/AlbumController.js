app.controller('AlbumController', function($scope){
        $scope.albums = [];
        $scope.getAlbums = function(){
            $scope.albums = [
                                {rank:10,
                                artist:'The Beatles',
                                title:'The White Album',
                                label:'Capitol', 
                                released:1968,
                                cover:'whitealbum.jpg'},
                                {rank:9,
                                artist:'Bob Dylan',
                                title:'Blonde on Blonde',
                                label:'Columbia', 
                                released:1966,
                                cover:'blondeonblonde.jpg'},
                                {rank:8,
                                artist:'The Clash',
                                title:'London Calling',
                                label:'Epic', 
                                released:1980,
                                cover:'londoncalling.jpg'},
                                {rank:7,
                                artist:'The Rolling Stones',
                                title:'Exile On Main Street',
                                label:'Rolling Stones Records', 
                                released:1972,
                                cover:'exileonmainst.jpg'},
                                {rank:6,
                                artist:'Marvin Gaye',
                                title:'What\'s Going On',
                                label:'Motown', 
                                released:1971,
                                cover:'whatsgoingon.jpg'},
                                {rank:5,
                                artist:'The Beatles',
                                title:'Rubber Soul',
                                label:'Capitol', 
                                released:1965,
                                cover:'rubbersoul.jpg'},
                                {rank:4,
                                artist:'Bob Dylan',
                                title:'Highway 61 Revisited',
                                label:'Columbia', 
                                released:1965,
                                cover:'highway61.jpg'},
                                {rank:3,
                                artist:'The Beatles',
                                title:'Revolver',
                                label:'Capitol', 
                                released:1966,
                                cover:'revolver.jpg'},
                                {rank:2,
                                artist:'The Beach Boys',
                                title:'Pet Sounds',
                                label:'Capitol', 
                                released:1966,
                                cover:'petsounds.jpg'},
                                {rank:1,
                                artist:'The Beatles',
                                title:'Sgt. Pepper\'s Lonely Hearts Club Band',
                                label:'Capitol', 
                                released:1967,
                                cover:'sgtpepper.jpg'},
            ];
        
        };    
    });
