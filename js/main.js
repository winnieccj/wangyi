var tabMod = (function(pageMod){
	return {
		init:function(){
			this.readerUI();
			this.bind();
			this.goPage(1);

			//this.getPageNum(1);

		},
		readerUI:function(){
			this.tab = document.querySelector('.m-course-tab');
			this.present = document.querySelector('.present');
			this.couCont = document.querySelector('.m-course-cont');
			this.mParent = document.querySelector('.m-parent');
			this.mWares = document.querySelector('.m-wares');
			this.$Event = APP.utils.Event;
			this.pageDiv = null;
			this.type = 10;
			this.pageDiv = document.querySelector('.page');


		},
		siblings:function(ele){
			var _res = [];  //存放兄弟节点的数组
			var	_prev = ele.previousSibling; //当前元素的前一个兄弟节点
			var	_next = ele.nextSibling;     //当前元素的后一个兄弟节点

			while(_prev){
				if(_prev.nodeType === 1){
					_res.unshift(_prev);
				}
				_prev = _prev.previousSibling;
			}

			while(_next){
				if(_next.nodeType === 1){
					_res.unshift(_next);
				}
				_next = _next.nextSibling;
			}
			return _res;
		},
		bind:function(){
			var me = this;

			this.$Event.on(this.tab,'click',function(e){
				var target = e.target;

				if(target.tagName = 'A'){
					var arr = me.siblings(target);
					for(var i = 0; i< arr.length;i++){
						arr[i].className = '';
					}
					target.className = 'present';

					me.type = target.getAttribute('data-type');
					me.goPage(1);
				}	

			});

			
		},


		goPage: function(pageNo){

			var me = this;

			ajax({
				url:'http://study.163.com/webDev/couresByCategory.htm',
				data:{
					pageNo : pageNo,
					psize : 20,
					type : me.type
				},
				success: function(data){
					me.initPage(data);
					me.getData(data);
				}
			})

		},

		initPage:function(data){
			var me = this;
			var data = JSON.parse(data);
			var curPage = data.pagination.pageIndex;


			this.pageDiv.innerHTML = pageMod.init(data.pagination.pageIndex,data.totalPage);
			this.pageDiv.onclick =  function(e){
				var target = e.target;
				if(target.className == 'pagelist prev'){
					curPage--;
					me.goPage(curPage);
				}

				if(target.className == 'pagelist next'){
					curPage++;
					me.goPage(curPage);
				}

				if(target.getAttribute('data-page')){
					var page = parseInt( target.getAttribute('data-page'),10 );
					me.goPage(page);
				}
			};
		},


		getData: function(data){	
			var data = JSON.parse(data);
			this.appendHTML(data);
			
		},


		appendHTML: function(data){
			
			var res = '';
			this.mParent.innerHTML = '';

			for(var i in data.list){
				
				res += '<div class="m-wares" data-name="' + data.list[i].name + '" data-description="' + data.list[i].description + '"><div class="m-wrap"><div class="m-imgs"><img src="'+ data.list[i].middlePhotoUrl +'" alt="img"/></div></div><div class="tit"><h3 class="thide">'+ data.list[i].name +'</h3></div><div class="source">音频帮</div><div class="thumb"><div class="desc"><span class="hot">'+ data.list[i].learnerCount +'</span></div><div class="money"><span class="normal">'+ (data.list[i].price == 0 ? "免费" : "¥" + data.list[i].price ) +'</span></div></div></div>';

			}

			this.mParent.innerHTML = res;
		}

	}
})(pageMod);


tabMod.init();
		