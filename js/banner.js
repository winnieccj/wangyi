var bannerMod = (function(){
	
	return {

		init:function(){
			this.renderUI();
			this.bind();
			this.autoPlay();
		},

		renderUI:function(){
			this.pics = document.querySelector('.pics');
        	this.aPics = this.pics.querySelectorAll('a');
        	this.uls = document.querySelector('.item');
        	this.lis = this.uls.querySelectorAll('li');
        	this.now = 0;
        	this.$Event = APP.utils.Event;
        	this.setIntervalID = null;
        	
		},

		bind:function(){

			var me = this;
			//var index = me.lis[i].index;

			for(var i = 0; i< this.aPics.length; i++){

				this.$Event.on(this.aPics[i],'mouseover',function(){
					clearInterval(me.setIntervalID);
				});

				this.$Event.on(this.aPics[i],'mouseout',function(){
					me.autoPlay();
				});
			}

		},

		autoPlay:function(){

			var me = this;	

	    	this.setIntervalID = setInterval( function(){

					me.now++;

					if(me.now === 3){
			            me.now = 0;
			        }

			    	for(var i = 0; i < me.lis.length; i++){
			    		me.lis[i].className = '';
			    		me.aPics[i].style.opacity = 0;
			    	}
			    		
			    	me.lis[me.now].className = 'cur';
			    	
			    	animate(me.aPics[me.now],{zIndex:2,opacity:1},500);
			} , 5000 );
		}



	}
})();

bannerMod.init();