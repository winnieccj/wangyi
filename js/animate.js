var effects = {

    linear: function (t, b, c, d) {

        return c * t / d + b;

    },
    quadIn: function (t, b, c, d) {

        return c * (t /= d) * t + b;
    },
    quadOut: function (t, b, c, d) {

        return -c * (t /= d) * (t - 2) + b;
    },
    quadInOut: function (t, b, c, d) {

        if ((t /= d / 2) < 1) {

            return c / 2 * t * t + b;
        }

        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    cubicIn: function (t, b, c, d) {

        return c * (t /= d) * t * t + b;
    },
    cubicOut: function (t, b, c, d) {

        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    cubicInOut: function (t, b, c, d) {

        if ((t /= d / 2) < 1) {

            return c / 2 * t * t * t + b;
        }

        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },

    // Copy of cubic
    easeIn: function (t, b, c, d) {

        return c * (t /= d) * t * t + b;
    },
    easeOut: function (t, b, c, d) {

        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOut: function (t, b, c, d) {

        if ((t /= d / 2) < 1) {

            return c / 2 * t * t * t + b;
        }

        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    // End copy
    quartIn: function (t, b, c, d) {

        return c * (t /= d) * t * t * t + b;
    },
    quartOut: function (t, b, c, d) {

        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    quartInOut: function (t, b, c, d) {

        if ((t /= d / 2) < 1) {

            return c / 2 * t * t * t * t + b;
        }

        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    quintIn: function (t, b, c, d) {

        return c * (t /= d) * t * t * t * t + b;
    },
    quintOut: function (t, b, c, d) {

        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    quintInOut: function (t, b, c, d) {

        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }

        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    sineIn: function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    sineOut: function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    sineInOut: function (t, b, c, d) {

        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    expoIn: function (t, b, c, d) {

        return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    expoOut: function (t, b, c, d) {

        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    expoInOut: function (t, b, c, d) {

        if (t === 0) { return b; }
        if (t === d) { return b + c; }

        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }

        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    circIn: function (t, b, c, d) {

        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    circOut: function (t, b, c, d) {

        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    circInOut: function (t, b, c, d) {

        if ((t /= d / 2) < 1) {

            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }

        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    bounceIn: function (t, b, c, d) {

        return c - effects.bounceOut(d - t, 0, c, d) + b;
    },
    bounceOut: function (t, b, c, d) {

        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else

        if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else

        if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        }
    },
    bounceInOut: function (t, b, c, d) {

        if (t < d / 2) {
            return effects.bounceIn(t * 2, 0, c, d) * 0.5 + b;
        }

        return effects.bounceOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    },
    elasticIn: function (t, b, c, d, a, p) {

        if (t === 0) { return b; }

        if ((t /= d) === 1) {
            return b + c;
        }

        if (!p) {
            p = d * 0.3;
        }

        if (!a) {
            a = 1;
        }
        var s = 0;

        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    elasticOut: function (t, b, c, d, a, p) {

        if (t === 0) {
            return b;
        }

        if ((t /= d) === 1) {
            return b + c;
        }

        if (!p) {
            p = d * 0.3;
        }

        if (!a) {
            a = 1;
        }
        var s = 0;

        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    elasticInOut: function (t, b, c, d, a, p) {

        if (t === 0) {
            return b;
        }

        if ((t /= d / 2) === 2) {
            return b + c;
        }

        if (!p) {
            p = d * (0.3 * 1.5);
        }

        if (!a) {
            a = 1;
        }
        var s = 0;

        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }

        if (t < 1) {

            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }

        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
};




function getStyle(ele,attr){
	
	if(window.getComputedStyle){

		return parseFloat(window.getComputedStyle(ele,null)[attr],10);
	}else{

		//透明度处理
		if(attr === 'opacity'){
			var reg = /alpha\(opacity=(\d+(?:\.\d+)?)\)/;
			var opacity = ele.currentStyle.filter;
			if(reg.test(opacity)){
				
				var value = RegExp.$1 / 100;

				if(value >= 1){
					return 1;
				}else if(value < 0.01){
					return 0;
				}else{
					return value;
				}


			}else{
				return 1;
			}
		}

		return parseFloat(ele.currentStyle[attr],10);
	}

};

function setStyle(ele, attr, value){
	if(attr == 'opacity'){
		ele.style.opacity = value;
		ele.style.filter = 'alpha(opacity=' + (value * 100) + ')'; //ie
		
	}else if(attr === 'float'){
		ele.style.cssFloat = value;  
		ele.style.styleFloat = value; 
	}else{
		ele.style[attr] =  value + 'px';
	}	
};


var animate = function(ele, json, speed, effect , callback){

	var effectFn;

	//如果effect不存在?
	if(typeof effect === 'function'){

		callback = effect;
		effectFn = effects['linear'];

	}else if(typeof effect === 'string'){
		effectFn = effects[effect];
	}else{
        effectFn = effects['linear'];
    }

	speed = speed || 500;

	var fromObj = {};
	var distanceObj = {};
	var counter = 0;

	for(var attr in json){
		var from = getStyle(ele, attr); 
		var to = json[attr];
		var distance = to - from; 		

		//有效
		if(distance){
			fromObj[attr] = from;
			distanceObj[attr] = distance;
			counter++;
		}
	}



	//如果无效下面事情不做了
	if(counter === 0){
		return;
	}



	
	var interval = 10; 
	var times = 0; 


	if(ele.intervalID){
		clearInterval(ele.intervalID);
	}





	var step = function(){
		
		times += interval;
		
		if(times > speed){

			//最终值
			for(var attr in json){
				var to = json[attr];
				setStyle(ele,attr,to);
			}
			
			clearInterval(ele.intervalID);
			ele.intervalID = null;

			if(callback && typeof callback === 'function'){
				callback.call(ele);
			}

		}else{

			for(var attr in distanceObj){
				var from = fromObj[attr]; //开始
				var distance = distanceObj[attr];
				
                var value = effectFn(times, from, distance, speed );
              
				
				setStyle(ele,attr,value);
				//setStyle(ele,attr,distance * times / speed + from);
			}

		}
	};

	ele.intervalID = setInterval(step, interval);

};	