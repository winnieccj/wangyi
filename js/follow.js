var followMod = (function(loginMod){
	
	return {

		init:function(){
			this.renderUI();
			this.bind();
			this.checkFollow();
		},

		renderUI:function(){
			this.collect = document.querySelector('.collect');
			this.hasCol = document.querySelector('.hasCol');
			this.cancel = document.querySelector('.cancel');
			this.$Event = APP.utils.Event;
			this.$Cookie = APP.utils.Cookie;		
		},

		checkFollow:function(){
			if( this.$Cookie.get().followSuc ){
					this.collect.style.display = 'none';
					this.hasCol.style.display = 'block';
				}
		},

		bind:function(){

			var me = this;

			this.$Event.on(this.collect,'click',function(e){
				
				//如果没有登录
				if( !(me.$Cookie.get().loginSuc) ){
					loginMod.logoForm.style.display = 'block';
					loginMod.createMask();
				}else{
					ajax({
						url:"http://study.163.com/webDev/attention.htm",
						success:function(data){
							if(data == 1){
								me.$Cookie.set('followSuc','success',30);
								me.collect.style.display = 'none';
								me.hasCol.style.display = 'block';	
							}
						}
					})

					

				}
				e.stopPropagation();
			});

			this.$Event.on(this.cancel,'click',function(){
				me.$Cookie.del('followSuc');
				me.collect.style.display = 'block';
				me.hasCol.style.display = 'none';
			});		
		}
	}
})(loginMod);

followMod.init();