var pageMod = (function(){
	return {
		init:function(curPage,totalPage){
			return this.showPage(curPage,totalPage);
		},

		showPage:function(curPage,totalPage){

			var curPage = curPage;//当前页
			var pageSize = 20;//每页20条记录
			var totalPage = totalPage; //总页数
			var len = 8;//列表长度
			var num = Math.floor( len / 2 );
			var start = 0;
			var end = 0;

			var p = '';

			//根据不同情况，确定start end的值

			//总页面数 < 列表长度
			if(totalPage < len){
				start = 1;
				end = totalPage;
			}else{
				//当前页 <= 结束
				if(curPage <= len){
					if(curPage == len){
						start = 2;
						end = len + 1;
					}else{
						start = 1;
						end = len;
					}
				}else if(curPage > totalPage - len + 1){
					start = totalPage - len + 1;
					end = totalPage;
				}else{
					start = curPage - num;
					end = curPage + num - 1;
				}
			}

			p += '<a class="pagelist prev" href="javascript:;"> &lt; </a>';

			for(var i = start; i <= end; i++){
				if(i == curPage){
					p += '<a class="pageCur" data-page="'+ i +'" href="javascript:;">'+ i +'</a>';
				}else{
					p += '<a data-page="'+ i +'" href="javascript:;">'+ i +'</a>';
				}
			}
			p += '<a class="pagelist next" href="javascript:;"> &gt; </a>';
			return p;
		}

	}
})();

