var RPoint = function(x, y){
    var x = x || 0,
        y = y || 0;
    
    return {
        x: x,
        y: y,
        getX: function(){
            return this.x;
        },
        getY: function(){
            return this.y;
        },
        setLocation: function(nx, ny){
            this.x = nx;
            this.y = ny;
        },
        /**
        * Use this to apply a transformation to the point.
        * @eexample RPoint_transform
        * @usage Geometry
        * @param m  the transformation matrix to be applied
        * @related translate ( )
        * @related rotate ( )
        * @related scale ( )
        */
        transform: function(/*RMatrix*/ m){
            var tempx = m.m00*x + m.m01*y + m.m02;
            var tempy = m.m10*x + m.m11*y + m.m12;

            x = tempx;
            y = tempy;
        },
        /**
        * Apply a translation to the point.
        * @eexample RPoint_translate
        * @usage Geometry
        * @param tx  the coefficient of x translation
        * @param ty  the coefficient of y translation
        * @related transform ( )
        * @related rotate ( )
        * @related scale ( )
        */
        translate: function(tx, ty){
            x += tx;
            y += ty; 
        },
        // add other type
        /**
        * Apply a rotation to the point, given the angle and optionally the coordinates of the center of rotation.
        * @eexample RPoint_rotate
        * @usage Geometry
        * @param angle  the angle of rotation to be applied
        * @param vx  the x coordinate of the center of rotation
        * @param vy  the y coordinate of the center of rotation
        * @related transform ( )
        * @related translate ( )
        * @related scale ( )
        */
        rotate: function(angle, vx, vy){
            var c = Math.cos(angle);
            var s = Math.sin(angle);

            x -= vx;
            y -= vy;

            var tempx = x;
            var tempy = y;

            x = tempx*c - tempy*s;
            y = tempx*s + tempy*c;

            x += vx;
            y += vy; 
        },
        // public void rotate(float angle)
        // public void rotate(float angle, RPoint v)
        scale: function(sx, sy){
            x *= sx;
            y *= sy;
        },
        //public void scale (float s)
        //public void scale (RPoint s)/
        normalize: function(){
            // Realize norm() method
            var norma = this.norm();
            if(norma!=0) this.scale(1/norma);
            
        },
        sub: function(/*RPoint*/p){
            x -= p.x;
            y -= p.y;
        },
        add: function(/*RPoint*/p){
            x += p.x;
            y += p.y;
        },
        /**
        * Use this to multiply a vector to this point. This returns a float corresponding to the scalar product of both vectors.
        * @eexample RPoint_mult
        * @usage Geometry
        * @param p  the vector to multiply
        * @return float, the result of the scalar product
        * @related add ( )
        * @related sub ( )
        * @related cross ( )
        */
        mult: function(/*RPoint*/p){
            return (x * p.x + y * p.y);
        },
        /**
        * Use this to perform a cross product of the point with another point.  This returns a RPoint corresponding to the cross product of both vectors.
        * @eexample RPoint_cross
        * @usage Geometry
        * @param p  the vector to perform the cross product with
        * @return RPoint, the resulting vector of the cross product
        * @related add ( )
        * @related sub ( )
        * @related mult ( )
        */
        cross: function(/*RPoint*/p){
            return new RPoint(x * p.y - p.x * y, y * p.x - p.y * x);    
        },
        /**
        * Use this to obtain the norm of the point.
        * @eexample RPoint_norm
        * @usage Geometry
        * @return float, the norm of the point
        * @related angle ( )
        */
        norm: function(){
            return Math.sqrt(this.mult(this));
        },
        sqrnorm: function(){
            return this.mult(this);
        },
        angle: function(/*RPoint*/ p){
            var normp = p.norm();
            var normthis = norm();
            return Math.acos(mult(p)/(normp*normthis));
        },
        dist: function(/*RPoint*/ p){
            var dx = (p.x-this.x);
            var dy = (p.y-this.y);
            return Math.sqrt(dx*dx + dy*dy);
        },
        print: function(){
            console.log("("+this.x+","+this.y+")\n");
        }
    }
}