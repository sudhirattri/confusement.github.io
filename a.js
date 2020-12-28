function bs(current)
{
	master=document.getElementById('togs')
	all=master.getElementsByClassName("i_bar")
	for(var i=0;i<all.length;i++)
	{
		if(i!=current){
		all[i].id="none"
		}
		else{
		all[i].id="act"
		}	
	}
}
function show()
{
	div=document.getElementById('par1');
	x=document.documentElement.scrollTop;
	// alert(x)
	div.style.backgroundPosition="0% "+(x/2.5).toString()+"%";
}	