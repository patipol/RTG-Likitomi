function weightInput()
{
	var width = document.documentElement.clientWidth + document.documentElement.scrollLeft;

	var layer = document.createElement('div');
	layer.style.zIndex = 2;
	layer.id = 'layer';
	layer.style.position = 'absolute';
	layer.style.top = '0px';
	layer.style.left = '0px';
	//layer.style.height = document.documentElement.scrollHeight + 'px';
	layer.style.height = screen.height - 5 + 'px';
	layer.style.width = width + 'px';
	layer.style.backgroundColor = 'black';
	layer.style.opacity = '.6';
	layer.style.filter += ("progid:DXImageTransform.Microsoft.Alpha(opacity=60)");
	document.body.appendChild(layer);

	var div = document.createElement('div');
	div.style.zIndex = 3;
	div.id = 'box';
	div.style.position = (navigator.userAgent.indexOf('MSIE 6') > -1) ? 'absolute' : 'fixed';
	div.style.top = '50px'; 
	div.style.left = (width / 2) - (400 / 2) + 20 + 'px'; 
	div.style.height = '400px';
	div.style.width = '300px';
	div.style.backgroundColor = 'lightgray';
	div.style.opacity = '1';
	div.style.border = '2px solid silver';
	div.style.padding = '20px';
	document.body.appendChild(div);

	var mes = document.createElement('b');
	mes.innerHTML = "<center>Please enter the new weight.</center>".fontsize(4);
	div.appendChild(mes);

	var w = document.createElement('b');
	w.innerHTML = '__'.fontcolor('lightgray')+'Weight:'.fontsize(4);
	div.appendChild(w);

	var i = document.createElement('input');
	i.type = 'text';
	i.style.fontSize = '200%';
	i.style.color = 'black';
	i.style.textAlign = 'center';
	i.size = '4';
	i.maxLength = '6';
	i.id = 'inp';
	div.appendChild(i);

	var k = document.createElement('b');
	k.innerHTML = ' kgs.'.fontsize(4);
	div.appendChild(k);

	var one = document.createElement('a');
	one.id = 'gridbutton';
	one.style.top = '100px';
	one.style.left = '60px';
	one.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"1".fontsize(6).bold()+"</td></tr></table>";
	one.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '1';
	}
	div.appendChild(one);

	var two = document.createElement('a');
	two.id = 'gridbutton';
	two.style.top = '100px';
	two.style.left = '140px'; 
	two.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"2".fontsize(6).bold()+"</td></tr></table>";
	two.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '2';
	}
	div.appendChild(two);

	var three = document.createElement('a');
	three.id = 'gridbutton';
	three.style.top = '100px';
	three.style.left = '220px'; 
	three.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"3".fontsize(6).bold()+"</td></tr></table>";
	three.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '3';
	}
	div.appendChild(three);

	var four = document.createElement('a');
	four.id = 'gridbutton';
	four.style.top = '170px';
	four.style.left = '60px'; 
	four.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"4".fontsize(6).bold()+"</td></tr></table>";
	four.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '4';
	}
	div.appendChild(four);

	var five = document.createElement('a');
	five.id = 'gridbutton';
	five.style.top = '170px';
	five.style.left = '140px'; 
	five.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"5".fontsize(6).bold()+"</td></tr></table>";
	five.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '5';
	}
	div.appendChild(five);

	var six = document.createElement('a');
	six.id = 'gridbutton';
	six.style.top = '170px';
	six.style.left = '220px'; 
	six.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"6".fontsize(6).bold()+"</td></tr></table>";
	six.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '6';
	}
	div.appendChild(six);

	var seven = document.createElement('a');
	seven.id = 'gridbutton';
	seven.style.top = '240px';
	seven.style.left = '60px'; 
	seven.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"7".fontsize(6).bold()+"</td></tr></table>";
	seven.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '7';
	}
	div.appendChild(seven);

	var eight = document.createElement('a');
	eight.id = 'gridbutton';
	eight.style.top = '240px';
	eight.style.left = '140px'; 
	eight.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"8".fontsize(6).bold()+"</td></tr></table>";
	eight.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '8';
	}
	div.appendChild(eight);

	var nine = document.createElement('a');
	nine.id = 'gridbutton';
	nine.style.top = '240px';
	nine.style.left = '220px'; 
	nine.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"9".fontsize(6).bold()+"</td></tr></table>";
	nine.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '9';
	}
	div.appendChild(nine);

	var clr = document.createElement('a');
	clr.id = 'gridbutton';
	clr.style.top = '310px';
	clr.style.left = '60px'; 
	clr.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"clr".fontsize(5).bold()+"</td></tr></table>";
	clr.onclick = function()
	{
		document.getElementById('inp').value = '';
	}
	div.appendChild(clr);

	var zero = document.createElement('a');
	zero.id = 'gridbutton';
	zero.style.top = '310px';
	zero.style.left = '140px'; 
	zero.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"0".fontsize(6).bold()+"</td></tr></table>";
	zero.onclick = function()
	{
		if (document.getElementById('inp').value.length < 4 && document.getElementById('inp').value != '' && document.getElementById('inp').value.indexOf(".") == -1)
		document.getElementById('inp').value += '0';
	}
	div.appendChild(zero);

//	var dot = document.createElement('a');
//	dot.id = 'gridbutton';
//	dot.style.top = '360px';
//	dot.style.left = '250px'; 
//	dot.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+".5".fontsize(5).bold()+"</td></tr></table>";
//	dot.onclick = function()
//	{
//		if (document.getElementById('inp').value.length < 5 && document.getElementById('inp').value != '' && document.getElementById('inp').value.indexOf(".") == -1)
//		document.getElementById('inp').value += '.5';
//	}
//	div.appendChild(dot);

	var ok = document.createElement('a');
	ok.id = 'confirm';
	ok.style.left = '60px'; 
	ok.style.verticalAlign = 'text-bottom';
	ok.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"OK".fontsize(5).bold()+"</td></tr></table>";
	//ok.href = 'javascript:void(0)';
	ok.onclick = function() 
	{
		var inbox = document.getElementById('inp').value;
		document.getElementById("manweight").value = inbox;
		document.getElementById("frm1").submit();
		document.body.removeChild(document.getElementById('layer'));
		document.body.removeChild(document.getElementById('box'));
	}
	div.appendChild(ok);

	var cancel = document.createElement('a');
	cancel.id = 'confirm';
	cancel.style.right = '65px'; 
	cancel.innerHTML = "<table height='100%'><tr><td style='cursor:pointer' align='center'>"+"Cancel".fontsize(4).bold()+"</td></tr></table>";
	//cancel.href = 'javascript:void(0)';
	cancel.onclick = function() 
	{
		document.body.removeChild(document.getElementById('layer'));
		document.body.removeChild(document.getElementById('box'));
	}
	div.appendChild(cancel);
}


function submit()
{
	document.getElementById("frm1").submit();
}


function undoSubmit()
{
	document.getElementById("frm2").submit();
}
