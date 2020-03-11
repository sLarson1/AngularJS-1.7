myApp.service('ShapeService', function () {
    this.getSquare = function(s){
        return Math.pow(s,2)
    };
    this.getRectangle = function (h, w) {
        return h * w;
    };
    this.getTriangle = function (b, h) {
        return (.5 * b) * h;
    };
    this.getCircle = function (r) {
        return Math.PI * Math.pow(r,2);
    };
    this.getParallelogram = function (b, h) {
        return b * h; 
    };


});

