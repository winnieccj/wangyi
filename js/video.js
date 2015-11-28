var videoMod = (function(){
	
	return {

		init:function(){
			this.renderUI();
			this.bind();
		},

		renderUI:function(){
			this.gVid = document.querySelector('.g-vid');
			this.logoVideo = document.querySelector('.m-logoVideo');
			this.mask = null;
			this.$Event = APP.utils.Event;
			this.wyVideo = document.querySelector('.wy-video');
		},

		createMask:function(){
			this.mask = document.createElement('div');
			this.mask.className = 'm-mask';
			document.body.appendChild(this.mask);

		},

		removeMask:function(){
			document.body.removeChild(this.mask);
			this.wyVideo.currentTime = 0;
			this.wyVideo.pause();
			
		},

		bind:function(){

			var me = this;

			this.$Event.on(this.gVid,'click',function(){
				me.logoVideo.style.display = 'block';
				me.createMask();
			});

			this.$Event.on(this.logoVideo,'click',function(e){
				var target = e.target;

				if(target.className === "m-closed"){
					me.logoVideo.style.display = 'none';
					if(this.mask !== null){
						me.removeMask();
					}
				}
			});
		}
	}



})();
videoMod.init();