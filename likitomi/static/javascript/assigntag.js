function assignTag()
{
	var agent = navigator.userAgent;
	var patt1 = /Chrome/;
	var patt2 = /Firefox/;
	var chrome = agent.match(patt1);
	var firefox = agent.match(patt2);

	var height = top.document.documentElement.clientHeight + top.document.documentElement.scrollTop;
	var width = top.document.documentElement.clientWidth + top.document.documentElement.scrollLeft;

	var layer = document.createElement('div');
	layer.id = 'layer';
	layer.style.zIndex = '2';
	layer.style.position = 'absolute';
	layer.style.top = '0px';
	layer.style.left = '0px';
	if (chrome == 'Chrome'){
		layer.style.height = 600 +'px';
		layer.style.width = 800 +'px';
	} else if (firefox == 'Firefox'){
		layer.style.height = 600-5 +'px';
		layer.style.width = 800 +'px';
	}
	layer.style.backgroundColor = 'black';
	layer.style.opacity = '.6';
	layer.style.filter += ("progid:DXImageTransform.Microsoft.Alpha(opacity=60)");
	top.document.body.appendChild(layer);

	var div = document.createElement('div');
	div.id = 'box';
	div.style.zIndex = '3';
	div.style.position = (navigator.userAgent.indexOf('MSIE 6') > -1) ? 'absolute' : 'fixed';
	div.style.top = '85px'; 
	div.style.left = '200px'; 
	div.style.height = '400px';
	div.style.width = '300px';
	div.style.backgroundColor = 'lightgray';
	div.style.opacity = '1';
	div.style.border = '2px solid silver';
	div.style.padding = '20px';
	top.document.body.appendChild(div);

	var mes = document.createElement('b');
	mes.innerHTML = "<center>Please enter new tag information.</center>".fontsize(4);
	div.appendChild(mes);

// ID //
	var id = document.createElement('b');
	id.innerHTML = '<br />Tag ID:'.fontsize(4);
	div.appendChild(id);

	var id_box = document.createElement('input');
	id_box.id = 'id_box';
	id_box.type = 'text';
	id_box.size = '4';
	id_box.maxLength = '4';
	id_box.style.fontSize = '200%';
	id_box.style.color = 'black';
	id_box.style.textAlign = 'center';
	div.appendChild(id_box);

// Paper Code //
	var pcode = document.createElement('b');
	pcode.innerHTML = '<br /><br />Paper Code:'.fontsize(4);
	div.appendChild(pcode);

	var pcode_box = document.createElement('div');
	pcode_box.style.backgroundColor = 'lightgray';
	pcode_box.style.position = 'absolute';
	pcode_box.style.top = '130px';
	pcode_box.style.left = '120px';
	div.appendChild(pcode_box);
	var pcode_form = document.createElement('form');
	pcode_box.appendChild(pcode_form);
	var pcode_select = document.createElement('select');
	pcode_select.id = 'pcode_select';
	pcode_select.style.height = '30px';
	pcode_form.appendChild(pcode_select);
	var i = 0;
	var spcodelist = document.getElementById('spcodelist').value;
	spcodelist = spcodelist.replace(/[\[\]\'u ]/g,'');
	var spcodearr = new Array();
	spcodearr = spcodelist.split(',');
	for (i=0;i<=spcodearr.length-1;i++){
		pcode_select.options[i] = new Option(spcodearr[i],spcodearr[i]);
	}

// Size //
	var size = document.createElement('b');
	size.innerHTML = '<br /><br />Size:'.fontsize(4);
	div.appendChild(size);

	var size_box = document.createElement('div');
	size_box.style.backgroundColor = 'lightgray';
	size_box.style.position = 'absolute';
	size_box.style.top = '170px';
	size_box.style.left = '60px';
	div.appendChild(size_box);
	var size_form = document.createElement('form');
	size_box.appendChild(size_form);
	var size_select = document.createElement('select');
	size_select.id = 'size_select';
	size_select.style.height = '30px';
	size_form.appendChild(size_select);
	var i = 0;
	var swidthlist = document.getElementById('swidthlist').value;
	swidthlist = swidthlist.replace(/[\[\]\L ]/g,'');
	var swidtharr = new Array();
	swidtharr = swidthlist.split(',');
	for (i=0;i<=swidtharr.length-1;i++){
		size_select.options[i] = new Option(swidtharr[i],swidtharr[i]);
	}

// Weight //
	var weight = document.createElement('b');
	weight.innerHTML = '<br /><br />Weight:'.fontsize(4);
	div.appendChild(weight);

	var weight_box = document.createElement('input');
	weight_box.id = 'weight_box';
	weight_box.type = 'text';
	weight_box.size = '4';
	weight_box.maxLength = '4';
	weight_box.style.fontSize = '150%';
	weight_box.style.color = 'black';
	weight_box.style.textAlign = 'center';
	div.appendChild(weight_box);

// Location //
	var location = document.createElement('b');
	location.innerHTML = '<br /><br />Location:'.fontsize(4);
	div.appendChild(location);

	var lane_box = document.createElement('input');
	lane_box.id = 'lane_box';
	lane_box.type = 'text';
	lane_box.size = '1';
	lane_box.maxLength = '1';
	lane_box.style.fontSize = '150%';
	lane_box.style.color = 'black';
	lane_box.style.textAlign = 'center';
	div.appendChild(lane_box);
	var dash = document.createElement('b');
	dash.innerHTML = ' - '.fontsize(4);
	div.appendChild(dash);
	var position_box = document.createElement('input');
	position_box.id = 'position_box';
	position_box.type = 'text';
	position_box.size = '2';
	position_box.maxLength = '2';
	position_box.style.fontSize = '150%';
	position_box.style.color = 'black';
	position_box.style.textAlign = 'center';
	div.appendChild(position_box);

// Lane Pad //
	var lanepad = document.createElement('div');
	lanepad.id = 'lanepad';
	lanepad.style.position = 'absolute';
	lanepad.style.top = '-40px';
	lanepad.style.left = '170px';
	lanepad.style.visibility = 'hidden';
	div.appendChild(lanepad);

	var h = document.createElement('a');
	h.id = 'lanebtn';
	h.style.top = '100px';
	h.style.left = '50px';
	h.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"H".fontsize(4).bold()+"</td></tr></table>";
	h.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'H';
	}
	lanepad.appendChild(h);

	var g = document.createElement('a');
	g.id = 'lanebtn';
	g.style.top = '140px';
	g.style.left = '50px';
	g.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"G".fontsize(4).bold()+"</td></tr></table>";
	g.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'G';
	}
	lanepad.appendChild(g);

	var f = document.createElement('a');
	f.id = 'lanebtn';
	f.style.top = '170px';
	f.style.left = '50px';
	f.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"F".fontsize(4).bold()+"</td></tr></table>";
	f.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'F';
	}
	lanepad.appendChild(f);

	var e = document.createElement('a');
	e.id = 'lanebtn';
	e.style.top = '210px';
	e.style.left = '50px';
	e.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"E".fontsize(4).bold()+"</td></tr></table>";
	e.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'E';
	}
	lanepad.appendChild(e);

	var d = document.createElement('a');
	d.id = 'lanebtn';
	d.style.top = '240px';
	d.style.left = '50px';
	d.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"D".fontsize(4).bold()+"</td></tr></table>";
	d.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'D';
	}
	lanepad.appendChild(d);

	var c = document.createElement('a');
	c.id = 'lanebtn';
	c.style.top = '280px';
	c.style.left = '50px';
	c.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"C".fontsize(4).bold()+"</td></tr></table>";
	c.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'C';
	}
	lanepad.appendChild(c);

	var b = document.createElement('a');
	b.id = 'lanebtn';
	b.style.top = '310px';
	b.style.left = '50px';
	b.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"B".fontsize(4).bold()+"</td></tr></table>";
	b.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'B';
	}
	lanepad.appendChild(b);

	var a = document.createElement('a');
	a.id = 'lanebtn';
	a.style.top = '350px';
	a.style.left = '50px';
	a.innerHTML = "<table style='width:100%;'><tr><td style='cursor:pointer;'>"+"A".fontsize(4).bold()+"</td></tr></table>";
	a.onclick = function()
	{
		top.document.getElementById('lane_box').value = 'A';
	}
	lanepad.appendChild(a);

	var current_input;

	function setCurrentInput() {
		console.log(this);
		current_input = this;
		numpad.style.visibility = 'visible';
		lanepad.style.visibility = 'hidden';
		div.style.width = '410px';
	}
	function showLanepad() {
		lanepad.style.visibility = 'visible';
		numpad.style.visibility = 'hidden';
		div.style.width = '300px';
	}
	function hidePad() {
		lanepad.style.visibility = 'hidden';
		numpad.style.visibility = 'hidden';
		div.style.width = '300px';
	}

	id_box.addEventListener("focus", setCurrentInput);
	position_box.addEventListener("focus", setCurrentInput);
	weight_box.addEventListener("focus", setCurrentInput);
	lane_box.addEventListener("focus", showLanepad);
	pcode_select.addEventListener("focus", hidePad);
	size_select.addEventListener("focus", hidePad);

// Num Pad //
	var numpad = document.createElement('div');
	numpad.id = 'numpad';
	numpad.style.position = 'absolute';
	numpad.style.top = '-40px';
	numpad.style.left = '20px';
	numpad.style.visibility = 'hidden';
	div.appendChild(numpad);

	var trig = 0;

	var one = document.createElement('a');
	one.id = 'numbtn';
	one.style.top = '100px';
	one.style.left = '200px';
	one.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"1".fontsize(6).bold()+"</td></tr></table>";
	one.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '1';
	}
	numpad.appendChild(one);

	var two = document.createElement('a');
	two.id = 'numbtn';
	two.style.top = '100px';
	two.style.left = '280px';
	two.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"2".fontsize(6).bold()+"</td></tr></table>";
	two.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '2';
	}
	numpad.appendChild(two);

	var three = document.createElement('a');
	three.id = 'numbtn';
	three.style.top = '100px';
	three.style.left = '360px';
	three.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"3".fontsize(6).bold()+"</td></tr></table>";
	three.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '3';
	}
	numpad.appendChild(three);

	var four = document.createElement('a');
	four.id = 'numbtn';
	four.style.top = '170px';
	four.style.left = '200px';
	four.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"4".fontsize(6).bold()+"</td></tr></table>";
	four.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '4';
	}
	numpad.appendChild(four);

	var five = document.createElement('a');
	five.id = 'numbtn';
	five.style.top = '170px';
	five.style.left = '280px';
	five.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"5".fontsize(6).bold()+"</td></tr></table>";
	five.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '5';
	}
	numpad.appendChild(five);

	var six = document.createElement('a');
	six.id = 'numbtn';
	six.style.top = '170px';
	six.style.left = '360px';
	six.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"6".fontsize(6).bold()+"</td></tr></table>";
	six.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '6';
	}
	numpad.appendChild(six);

	var seven = document.createElement('a');
	seven.id = 'numbtn';
	seven.style.top = '240px';
	seven.style.left = '200px';
	seven.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"7".fontsize(6).bold()+"</td></tr></table>";
	seven.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '7';
	}
	numpad.appendChild(seven);

	var eight = document.createElement('a');
	eight.id = 'numbtn';
	eight.style.top = '240px';
	eight.style.left = '280px';
	eight.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"8".fontsize(6).bold()+"</td></tr></table>";
	eight.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '8';
	}
	numpad.appendChild(eight);

	var nine = document.createElement('a');
	nine.id = 'numbtn';
	nine.style.top = '240px';
	nine.style.left = '360px';
	nine.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"9".fontsize(6).bold()+"</td></tr></table>";
	nine.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value.length < 4 && trig == 1)
		current_input.value += '9';
	}
	numpad.appendChild(nine);

	var clr = document.createElement('a');
	clr.id = 'numbtn';
	clr.style.top = '310px';
	clr.style.left = '200px';
	clr.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"clr".fontsize(5).bold()+"</td></tr></table>";
	clr.onclick = function()
	{
		current_input.value = '';
	}
	numpad.appendChild(clr);

	var zero = document.createElement('a');
	zero.id = 'numbtn';
	zero.style.top = '310px';
	zero.style.left = '280px';
	zero.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"0".fontsize(6).bold()+"</td></tr></table>";
	zero.onclick = function()
	{
		if (trig == 0)
		{
			current_input.value = '';
			trig = 1;
		}
		if (current_input.value != '' && current_input.value.length < 4 && trig == 1)
		current_input.value += '0';
	}
	numpad.appendChild(zero);

	var bs = document.createElement('a');
	bs.id = 'numbtn';
	bs.style.top = '310px';
	bs.style.left = '360px';
	bs.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"bs".fontsize(5).bold()+"</td></tr></table>";
	bs.onclick = function()
	{
		var len = current_input.value.length;
		current_input.value = current_input.value.substr(0,len-1);
	}
	numpad.appendChild(bs);

	var ok = document.createElement('a');
	ok.id = 'confirm';
	ok.style.left = '70px';
	ok.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"OK".fontsize(5).bold()+"</td></tr></table>";
	ok.onclick = function()
	{
		var idval = top.document.getElementById('id_box').value;
		var pcodeval = top.document.getElementById('pcode_select').value;
		var sizeval = top.document.getElementById('size_select').value;
		var laneval = top.document.getElementById('lane_box').value;
		var positionval = top.document.getElementById('position_box').value;
		var weightval = top.document.getElementById('weight_box').value;
//		alert(idval+', '+pcodeval+', '+sizeval+', '+laneval+', '+positionval+', '+weightval);
//		alert(document.getElementById('tag2write').value);
		var pass = 0;
		var messi = '';
		if (idval != '') {
			var idvalue = '('+idval+'L,)';
			if (document.getElementById('tagidlist').value.search(idvalue) == -1) {
				pass++;
			} else {
				messi += "\n- This tag ID is not available.";
			}
//			alert(document.getElementById('tagidlist').value);
		} else {
			messi += "\n- Please enter tag ID.";
		}
		if (weightval != '') {
			pass++;
		} else {
			messi += '\n- Please enter weight.';
		}
		if (parseInt(positionval) > 13) {
			messi += '\n- The submitted position is not in range (1-13).';
		}
//		if (document.getElementById('tag2write').value.search('AAAA') != -1) {
//			pass++;
//		}
		
//		if (document.getElementById('tag2write').value.search('AAAA') != -1) {alert(document.getElementById('tag2write').value.search('AAAA'));}
		if (pass >= 2) {
			document.getElementById("atagid").value = idval;
			document.getElementById("apcode").value = pcodeval;
			document.getElementById("asize").value = sizeval;
			document.getElementById("alane").value = laneval;
			document.getElementById("aposition").value = positionval;
			document.getElementById("aweight").value = weightval;
			document.getElementById("oldtagid").value = document.getElementById('tag2write').value;
			document.getElementById("frm6").submit();
			top.document.body.removeChild(top.document.getElementById('layer'));
			top.document.body.removeChild(top.document.getElementById('box'));
		} else {
			alert(messi);
		}
	}
	div.appendChild(ok);

	var cancel = document.createElement('a');
	cancel.id = 'confirm';
	cancel.style.right = '80px';
	cancel.innerHTML = "<table style='height:100%; width:100%;'><tr><td style='cursor:pointer;'>"+"Cancel".fontsize(4).bold()+"</td></tr></table>";
	cancel.onclick = function()
	{
		top.document.body.removeChild(top.document.getElementById('layer'));
		top.document.body.removeChild(top.document.getElementById('box'));
	}
	div.appendChild(cancel);
}
