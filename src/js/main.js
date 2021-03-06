window.onload=function(){
	function create_conv(t,x,y){
		var cv=document.createElement("div")
		cv.classList.add("conv")
		cv.classList.add(t)
		cv.style=`top: ${y}px;left: ${x}px`
		var c=document.createElement("div")
		if (!["top","right","bottom","left"].includes(t)){
			var u=document.createElement("ul")
			for (var k=0;k<4;k++){
				u.appendChild(document.createElement("li"))
			}
			c.appendChild(u)
			var dv=document.createElement("div")
			var u=document.createElement("ul")
			for (var k=0;k<6;k++){
				u.appendChild(document.createElement("li"))
			}
			var _c=document.createElement("div")
			_c.classList.add("c")
			_c.appendChild(u)
			dv.appendChild(_c)
			dv.classList.add("conv")
			dv.classList.add("bottom")
			c.appendChild(dv)
			var dv=document.createElement("div")
			dv.classList.add("border")
			c.appendChild(dv)
		}
		else{
			var u=document.createElement("ul")
			for (var k=0;k<9;k++){
				u.appendChild(document.createElement("li"))
			}
			c.appendChild(u)
		}
		c.classList.add("c")
		cv.appendChild(c)
		cv.onclick=function(){
			if (pr.classList.contains("run")){return}
			this.classList.remove("conv")
			var c=this.className
			this.className=""
			this.classList.add("conv")
			this.classList.add({"bottom":"left","left":"top","top":"right","right":"bottom","bottom-left":"left-top","left-top":"top-right","top-right":"right-bottom","right-bottom":"bottom-left","bottom-right":"right-top","right-top":"top-left","top-left":"left-bottom","left-bottom":"bottom-right"}[c.trim()])
		}
		B.appendChild(cv)
	}
	function clear(b){
		var l=b.childNodes
		for (var c of l){
			if (!c.classList){
				b.removeChild(c)
			}
		}
		return b
	}
	function load(dt){
		B.style=`width: ${parseInt(dt.toString().split("4")[0].split("3")[0],2)*300}px;height: ${parseInt(dt.toString().split("4")[0].split("3")[1],2)*300}px`
		for (var x=0;x<parseInt(dt.toString().split("4")[0].split("3")[0],2);x++){
			for (var y=0;y<parseInt(dt.toString().split("4")[0].split("3")[1],2);y++){
				create_conv({"0":["bottom","top","left","right"][Math.floor(Math.random()*4)],"1":["bottom-left","left-top","top-right","right-bottom"][Math.floor(Math.random()*4)],"2":["bottom-right","right-top","top-left","left-bottom"][Math.floor(Math.random()*4)]}[dt.toString().split("4")[1][x*parseInt(dt.toString().split("4")[0].split("3")[0],2)+y]],x*300,y*300)
			}
		}
	}
	var pr=clear(document.getElementsByClassName("board")[0]),B=pr.childNodes[0],BTN_R=pr.childNodes[1]
	BTN_R.onclick=function(){
		pr.classList.toggle("run")
		BTN_R.classList.toggle("r")
		BTN_R.classList.toggle("s")
		if (BTN_R.classList.contains("s")){
			BTN_R.innerHTML="pause_circle_filled"
		}
		else{
			BTN_R.innerHTML="play_circle_filled"
		}
	}
	load(113114000111222)
}
