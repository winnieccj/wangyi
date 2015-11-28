var loginMod = (function(){

	return {

		init:function(){
			this.renderUI();
			this.bind();			
		},

		renderUI:function(){
			this.account = document.querySelector('#account');
			this.pwd = document.querySelector('#pwd');
			this.loginBtn = document.querySelector('.btn input');
			this.logoForm = document.querySelector('.m-logoForm');
			this.collect = document.querySelector('.collect');
			this.hasCol = document.querySelector('.hasCol');

			this.account = document.querySelector('#account');
			this.pwd = document.querySelector('#pwd');
			this.labels = document.querySelectorAll('.m-position label');

			this.mask = null;
			this.$Cookie = APP.utils.Cookie;
			this.$Event = APP.utils.Event;
			
		},

		createMask:function(){
			this.mask = document.createElement('div');
			this.mask.className = 'm-mask';
			document.body.appendChild(this.mask);

		},

		removeMask:function(){
			document.body.removeChild(this.mask);
			
		},

		bind:function(){
			var me = this;

			this.$Event.on(this.loginBtn,'click',function(){
				me.checkUserNameAndPwd();
			});

			this.$Event.on(this.logoForm,'click',function(e){
				var target = e.target;
				
				if(target.className === "m-closed"){
					me.logoForm.style.display = 'none';
					if(this.mask !== null){
						me.removeMask();
					}
				}
				e.stopPropagation();
			});

			this.$Event.on(this.account,'focus',function(){
				this.labels[0].style.display = 'none';
			});

			this.$Event.on(this.pwd,'focus',function(){
				this.labels[0].style.display = 'none';
			});

			this.$Event.on(this.account,'blur',function(){
				if(this.value.length === 0){
					this.labels[0].style.display = 'block';
				}else{
					this.labels[0].style.display = 'none';
				}
				
			});

			this.$Event.on(this.pwd,'blur',function(){
				if(this.value.length === 0){
					this.labels[0].style.display = 'block';
				}else{
					this.labels[0].style.display = 'none';
				}
			});


		},



		isValidate:function(){
			return this.checkUserNameAndPwd();
		},

		checkUserNameAndPwd:function(){
			
			var me = this;

			ajax({
				url:"http://study.163.com/webDev/login.htm",
				data:{userName:md5(this.account.value),password:md5(this.pwd.value)},
				success:function(data){
					if(data == 1){
						me.$Cookie.set('loginSuc','success',30);
						me.logoForm.style.display = 'none';
						if(me.mask !== null){
							me.removeMask();
						}
						me.collect.style.display = 'none';
						me.hasCol.style.display = 'block';

						return true;
						
					}else{
						alert('登录失败');
					}
				}
			})
			return false;
		}
	}
})();

loginMod.init();
