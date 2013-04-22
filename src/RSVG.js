var RSVG = function(filename, /*PGraphics*/ g){ 
    return {
        draw: function(filename, /*PGraphics*/ g){
            this.toGroup(filename).draw(g);
        },
        
        saveShape: function(filename, /*RShape*/ shp){
            var str = fromShape(shp);
            strs = PApplet.split(str, "\n");
            RG.parent().saveStrings(filename, strs);
        },

        fromShape: function(/*RShape*/ shape){
            header = "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n";
            return header + shapeToString(shape) + "</svg>";
        }
    }
}