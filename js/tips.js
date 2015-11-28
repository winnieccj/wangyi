/*  小黄条  */
var tipsMod = (function(){

	return {

		init:function(){
			this.renderUI();
			this.initTips();
			this.bind();			
		},

		renderUI:function(){
			this.tips = document.querySelector(".g-tips");
			this.closed = document.querySelector("#closed");
			this.$Event = APP.utils.Event;
			this.$Cookie = APP.utils.Cookie;
		},

		bind:function(){
			var me = this;
			this.$Event.on(this.closed,'click',function(){
				me.closeTips();
			});
		},

		initTips:function(){
			if(!this.$Cookie.get().tipsShow){
				this.tips.style.display = "block";
			}
		},

		closeTips:function(){
			this.$Cookie.set('tipsShow','exists',30);
			this.tips.style.display = "none";
		}
	}
})();

tipsMod.init();
