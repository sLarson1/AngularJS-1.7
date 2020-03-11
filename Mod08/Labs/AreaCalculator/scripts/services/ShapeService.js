myApp.service('ShapeService',['$log',
function($log){
    var area;
    this.squareArea = (side) => {
        $log.info("side:"+side);
        area = side * side;
        $log.info("squareArea:"+area);
        return area;
    };
    this.rectArea = (height,width) =>{
        area = height * width;
        $log.info("rectArea:"+area);
        return area;
    };
    this.triArea = (height,base) =>{
        area = 0.5 * height * base;
        $log.info("triArea:"+area);
        return area;
    };    
    this.circArea = (radius) =>{
        area = Math.PI * (radius * radius);
        $log.info("circArea:"+area);
        return area;
    }; 
    this.paraArea = (height,base) =>{
        area = height * base;
        $log.info("paraArea:"+area);
        return area;
    };    
}]);