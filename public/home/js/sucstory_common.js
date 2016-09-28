var mydomain = "";
var host_name = location.hostname;
var host_arr = host_name.split(".");
var host_length = host_arr.length;
var loc_domain = host_arr[0];

for(var i=1; i<host_length; i++){
	mydomain += "." + host_arr[i];
}

switch(mydomain){
	case '.jiayuan.com':
		if(host_arr[0] == 'msn') 
			mydomain = 'msn' + mydomain;
		else if(host_arr[0] == 'sina')
			mydomain = 'sina' + mydomain;
		else
			mydomain = 'www' + mydomain;
		break;
	case '.mi'+'uu.'+'cn':
		if(host_arr[0] == 'msn') 
			mydomain = 'msn' + mydomain;
		else if(host_arr[0] == 'sina')
			mydomain = 'sina' + mydomain;
		else
			mydomain = 'www' + mydomain;
		break;
	case '.msn.com.cn':
		mydomain = 'jiayuan' + mydomain;
		break;
	default:
		if(host_arr[0] == 'msn') 
			mydomain = 'msn' + mydomain;
		else if(host_arr[0] == 'sina')
			mydomain = 'sina' + mydomain;
		else
			mydomain = 'www' + mydomain;
}

var js_site = "w4";
if(mydomain == "www.jiayuan.com"){
	js_site = "w4";
	var usercp_url = new Array("http://usercp.jiayuan.com/","�ҵļ�Ե");
	var search_url = new Array("http://search.jiayuan.com/","������Ա");
	var newmember_url = new Array("http://search.jiayuan.com/new.php","���»�Ա");
	var online_url = new Array("http://search.jiayuan.com/online.php","��������");
	var party_url = new Array("http://party.jiayuan.com/","���ѻ");
	var diary_url = new Array("http://diary.jiayuan.com/","�������");
	var love_url = new Array("http://xingfu.jiayuan.com/","ɹ�Ҹ�");
	var wap_client_url = new Array("http://www.jiayuan.com/parties/wap_clients/","�ֻ�����");
	var master_url = new Array("http://www.jiayuan.com/master/","����С��Ů");
	var vip_url = new Array("http://www.jiayuan.com/login/viplogin.php","��Ҫ�Ի�");
	var izhenxin_url = new Array("http://www.izhenxin.com/login/getSign/?url=http%3A%2F%2Fwww.jiayuan.com%2Fusercp%2Fiz_login.php%3Furl%3Dhttp%253A%252F%252Fwww.izhenxin.com%252F&from=JYDH","������");
}else if(mydomain == "www.mi"+"uu."+"cn"){
	js_site="w4";
	var usercp_url = new Array("http://usercp.mi"+"uu."+"cn/","�ҵļ�Ե");
	var search_url = new Array("http://search.mi"+"uu."+"cn/","������Ա");
	var newmember_url = new Array("http://search.mi"+"uu."+"cn/new.php","���»�Ա");
	var online_url = new Array("http://search.mi"+"uu."+"cn/online.php","��������");
	var party_url = new Array("http://party.mi"+"uu."+"cn/","���ѻ");
	var diary_url = new Array("http://diary.mi"+"uu."+"cn/","�������");
	var love_url = new Array("http://xingfu.mi"+"uu."+"cn/","ɹ�Ҹ�");
	var wap_client_url = new Array("http://www.mi"+"uu."+"cn/parties/wap_clients/","�ֻ�����");
	var master_url = new Array("http://www.mi"+"uu."+"cn/master/","����С��Ů");
	var vip_url = new Array("http://www.mi"+"uu."+"cn/vip/","��Ҫ�Ի�");
	var izhenxin_url = new Array("http://www.izhenxin.com/login/getSign/?url=http%3A%2F%2Fwww.jiayuan.com%2Fusercp%2Fiz_login.php%3Furl%3Dhttp%253A%252F%252Fwww.izhenxin.com%252F&from=JYDH","������");
}else if(mydomain == "msn.mi"+"uu."+"cn"){
	js_site="m4";
	var usercp_url = new Array("http://msn.mi"+"uu."+"cn/usercp/","�ҵļ�Ե");
	var search_url = new Array("http://msn.mi"+"uu."+"cn/search/","������Ա");
	var newmember_url = new Array("http://msn.mi"+"uu."+"cn/search/new.php","���»�Ա");
	var online_url = new Array("http://msn.mi"+"uu."+"cn/search/online.php","��������");
	var party_url = new Array("http://msn.mi"+"uu."+"cn/party/","���ѻ");
	var diary_url = new Array("http://msn.mi"+"uu."+"cn/article/","�������");
	var love_url = new Array("http://msn.mi"+"uu."+"cn/story/","ɹ�Ҹ�");
	var wap_client_url = new Array("http://msn.mi"+"uu."+"cn/paper/","�������");
	var master_url = new Array("http://msn.mi"+"uu."+"cn/master/","����С��Ů");
	var vip_url = new Array("http://msn.mi"+"uu."+"cn/vip/","��Ҫ�Ի�");
	var izhenxin_url = new Array("http://www.izhenxin.com/login/getSign/?url=http%3A%2F%2Fwww.jiayuan.com%2Fusercp%2Fiz_login.php%3Furl%3Dhttp%253A%252F%252Fwww.izhenxin.com%252F&from=JYDH","������");
}else{	//MSNվ����
	js_site="m4";
	var usercp_url = new Array("http://jiayuan.msn.com.cn/usercp/","�ҵļ�Ե");
	var search_url = new Array("http://jiayuan.msn.com.cn/search/","������Ա");
	var newmember_url = new Array("http://jiayuan.msn.com.cn/search/new.php","���»�Ա");
	var online_url = new Array("http://jiayuan.msn.com.cn/search/online.php","��������");
	var party_url = new Array("http://jiayuan.msn.com.cn/party/","���ѻ");
	var diary_url = new Array("http://jiayuan.msn.com.cn/article/","�������");
	var love_url = new Array("http://jiayuan.msn.com.cn/story/","ɹ�Ҹ�");
	var wap_client_url = new Array("http://jiayuan.msn.com.cn/paper/","�������");
	var master_url = new Array("http://jiayuan.msn.com.cn/master/","����С��Ů");
	var vip_url = new Array("http://www.jiayuan.com/login/viplogin.php","��Ҫ�Ի�");
	var izhenxin_url = new Array("http://www.izhenxin.com/login/getSign/?url=http%3A%2F%2Fwww.jiayuan.com%2Fusercp%2Fiz_login.php%3Furl%3Dhttp%253A%252F%252Fwww.izhenxin.com%252F&from=JYDH","������");
}

function $(objId)
{
	if(document.getElementById)
	{
		return eval('document.getElementById("'+objId+'")')
	}
	else
	{
		return eval('document.all.'+objId)
	}
}
//��ǩ�л�
function show(s_id,max,sel)
{ 
	for(i=1;i<=max;i++)
	{
		$(s_id + i).style.display = 'none';	
		$(s_id + i + '_a').className = '';
	}
	$(s_id + sel).style.display = '';
	$(s_id + sel + '_a').className = 'over';
}

//�رձ���ͼ
function closeBodytopbg()
{ 
	$("boxgbbj").className = 'container confix container2';
}

//ģ���滻
function json_callback_tmpl(divL, divS, data){
	var container = JTOOL.$(divL);
	var tmpl = JTOOL.findChild(container, divS);
	var cloneTMPL  = JTOOL.findChild(container, divS + '_clone');
	if(cloneTMPL){
		if(cloneTMPL.length > 1)
			for(var i = 0; i < cloneTMPL.length; i ++)
				 container.removeChild(cloneTMPL[i]);
		else
			container.removeChild(cloneTMPL);

	}
	for (var i = 0; i < data.length; i++){
		var single = tmpl.cloneNode(1);
		JTOOL.Template.setVarElement(single, data[i]);
		single.id = divS + "_clone";
		container.appendChild(single);
		JTOOL.setDisplay(single, true);
	}
	document.getElementById(divS).style.height = 0;
}

//����ajax����
function createXMLHttpRequest()
{
	if(window.XMLHttpRequest)
	{
		xmlHttp = new XMLHttpRequest();
		if(xmlHttp.overrideMimeType)
		{
			xmlHttp.overrideMimeType('text/xml');
		}
	}
	else if(window.ActiveXObject) 
	{
		var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
		for(var i=0; i<versions.length; i++)
		{
			try {
				xmlHttp = new ActiveXObject(versions[i]);
				if(xmlHttp) {
					return xmlHttp;
				}
			} catch(e) {
				alert(e.message);
			}
		}
	}	
}

//ȡ�õ�ǰ�����ǵ���ڼ���
function getWeek(){
	var dt = new Date();
	var y = dt.getYear();  
	y = y<1900 ? (1900+y) : y;
	var start = "1/1/" + y; 
	start = new Date(start); 
	var days = Math.round((dt.valueOf() - start.valueOf())/(24*60*60*1000));   
	return Math.round(days/7);
}

function showImgInfo(_year, _num){
	changeWeekFocus(_year, _num);
	var _num_array = _num.split("");
	if(_num_array[0] == "0"){
		_num = _num_array[1];
	}
	loadimg($(_year + "_imgurl_" + _num).innerHTML)
	
	$("mzmz_img").src = $(_year + "_imgurl_" + _num).innerHTML;
	$("mzmz_content").innerHTML = $(_year + "_content_" + _num).innerHTML;
	$("mzmz_link").href = $(_year + "_link_" + _num).innerHTML;
	$("mzmz_link_img").href = $(_year + "_link_" + _num).innerHTML;
}

function loadimg(_url){
	var _image = new Image();
	_image.src = _url;
}

function changeWeekFocus(_year, _num){
	var i=0;
	if(_year == "pre"){
		var obj = $("g_1");
	}else if(_year == "now"){
		var obj = $("g_2");
	}
	for(i=0;i<obj.getElementsByTagName("a").length;i++){
		if(obj.getElementsByTagName("a")[i].className != "nobg"){
			obj.getElementsByTagName("a")[i].className = "";
			
			if(obj.getElementsByTagName("a")[i].innerHTML == _num){
				obj.getElementsByTagName("a")[i].className = "on";
			}
		}
	}
}

function preWeek(){
	if($("g_1").style.display != "none"){
		var i=0;
		var g1_obj = $("g_1");
		for(i=0;i<52;i++){
			if(g1_obj.getElementsByTagName("a")[i].className == "on"){
				j = i;
				if(j <= 0){
					j = 1;
				}
				if(j < 10){
					j = "0" + j;
				}else{
					j = "" + j;
				}
				showImgInfo("pre", j);
				break;
			}
		}
	}

	if($("g_2").style.display != "none"){
		var now_week = getWeek();
		now_week = now_week - 1;
		var i=0;
		var g2_obj = $("g_2");
		for(i=0;i<now_week;i++){
			if(g2_obj.getElementsByTagName("a")[i].className == "on"){
				j = i;
				if(j <= 0){
					j = 1;
				}
				if(j < 10){
					j = "0" + j;
				}else{
					j = "" + j;
				}
				showImgInfo("now", j);
				break;
			}
		}
	}
}

function nextWeek(){
	if($("g_1").style.display != "none"){
		var i=0;
		var g1_obj = $("g_1");
		for(i=0;i<52;i++){
			if(g1_obj.getElementsByTagName("a")[i].className == "on"){
				j = i + 2;
				if(j >= 52){
					j = 52;
				}
				if(j < 10){
					j = "0" + j;
				}else{
					j = "" + j;
				}
				showImgInfo("pre", j);
				break;
			}
		}
	}

	if($("g_2").style.display != "none"){
		var now_week = getWeek();
		now_week = now_week - 1;
		var i=0;
		var g2_obj = $("g_2");
		for(i=0;i<now_week;i++){
			if(g2_obj.getElementsByTagName("a")[i].className == "on"){
				j = i + 2;
				if(j >= now_week){
					j = now_week;
				}
				if(j < 10){
					j = "0" + j;
				}else{
					j = "" + j;
				}
				showImgInfo("now", j);
				break;
			}
		}
	}
}

function changeMxbb(_mxbb_num){
	for(var i=1; i<=9; i++){
		$("mxbb_" + i).className = "";
	}
	$("mxbb_" + _mxbb_num).className = "on";

	$("mxbb_imgurl").src = $("mxbb_imgurl_" + _mxbb_num).src;
	$("mxbb_title").innerHTML = $("mxbb_title_" + _mxbb_num).innerHTML;
	$("mxbb_link").href = $("mxbb_link_" + _mxbb_num).innerHTML;
	$("mxbb_img_link").href = $("mxbb_link_" + _mxbb_num).innerHTML;
	$("mxbb_desc").innerHTML = $("mxbb_desc_" + _mxbb_num).innerHTML;
}