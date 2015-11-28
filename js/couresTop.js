var courseTop = (function(){

	return {
		init:function(){
			this.readerUI();
			this.getData();
			this.scrollData();
		},
		readerUI:function(){
			this.mHot = document.querySelector('.m-hot');
			this.cur = 0;
		},
		getData:function(){
			var me = this;
			me.mHot.innerHTML = '';
			ajax({
				url:'http://study.163.com/webDev/hotcouresByCategory.htm',
				success:function(data){
					var data = JSON.parse(data);

					for(var i in data){
						
						var courseHtml = '<div class="hot-list clearfix"><div class="hot-img fl"><img src="'+ data[i].smallPhotoUrl +'" alt="rank.jpg"></div><div class="hot-cont fl"><h3>'+ data[i].name +'</h3><p><span class="hot-span"></span><span class="num">'+ data[i].learnerCount +'</span></p></div></div>';

						me.mHot.innerHTML += courseHtml;					
					}
					me.mHot.innerHTML += me.mHot.innerHTML;
				}

			});	
			
		},


		scrollData:function(){
			var me = this;
			
			setInterval( function(){
				me.cur++;
				animate( me.mHot,{ top : -me.cur * 70 },500,function(){
					if(me.cur >= 20){
						me.cur = 0;
						me.mHot.style.top = 0;						
					}				
				});
			}, 5000);			
		}
	}
})();
courseTop.init();