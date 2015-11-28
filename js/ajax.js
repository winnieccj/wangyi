function serialize(data){
	var res = '';
	for(var key in data){
		res += key + '=' + data[key] + '&';
	}
	return res.substring(0,res.length - 1);
};

function ajax(opts){
	var opts = opts || {};
	opts.method = opts.method || 'GET';
	opts.url = opts.url || '';
	opts.data = opts.data || {};
	opts.success = opts.success || function(){};

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){

		if(xhr.readyState == 4 && (xhr.status === 200 || xhr.status === 304)){
			if(opts.success && typeof opts.success === 'function'){
				opts.success(xhr.responseText);
			}
		}
	};

	if(opts.method === 'GET'){
		if(opts.data !== null){
			opts.url += '?' + serialize(opts.data);
		}
	}

	xhr.open(opts.method , opts.url,true);

	if(opts.method === 'GET'){
		xhr.send(null);
	}else{
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send(serialize(opts.data));
	}

}