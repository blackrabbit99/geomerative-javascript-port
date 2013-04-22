var RG = function(){
	var initialized = false;
	//var

	return {
		ignoreStyles: false,
		useFastClip: true,
		BYPOINT: 0,
		BYELEMENTPOSITION: 1,
		BYELEMENTINDEX: 2,
		adaptorType: 1,
		adaptorScale: 0x1F,
		adaptorLengthOffset: 0x0F,
		parent: null,
		//ADAPTATIVE: RCommand.ADAPTATIVE;
  		//UNIFORMLENGTH: RCommand.UNIFORMLENGTH;
		//UNIFORMSTEP: RCommand.UNIFORMSTEP;
  		dpi: 72,
  		//
  		//static RShape shape;
		//static RFont fntLoader = null;
		text: function(text){
			//RShape grp = getText(text);
    		//grp.draw();	
		},
		init: function(/*Node*/ container){
			this.parent = document.getElementById(container);
			initialized = true;
		},
		initialized: function(){
			return initialized;
		},
		_parent: function(){
		    if(parent == null){
		      return false;
		      //throw new LibraryNotInitializedException();
		    }

		    return parent;
		},
		dpi: function(){
			return dpi;
		},
		setDpi: function(_dpi){
			dpi = _dpi;
		}	
	}
}()