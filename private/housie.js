


window.onload=newCard // browser (on load) object model ie bom
function AutoRefresh( t ) {
	setTimeout("location.reload(true);", t);
}

function newCard()
{  
  var used = new Array(91);
  var counter=15;
  var r=0;
  for(var i=1;i<=27;i++)
   {
   	var decision = Math.round(Math.random()*2);  // this is used to check for the blank values
   	
   	if(decision&&counter)

   	{
   	   do {
   	   j=(i-1)%9;
   	   var newNum=j*10+Math.ceil(Math.random()*9);
      }while(used[newNum]);
	//document.getElementById('sq'+i).innerHTML=newNum;

     if (!used[newNum])
     {
   	 document.getElementById('sq'+i).innerHTML=newNum; // displaying the number
   	 counter--;
     r++
     if (r==5)
      { if(i<10);
      	i=10}

      	else if (r==10) 
      		{if (i=19);i=19;}
      	else if (r==15){ 
        break;}

 	 used[newNum]=true;
      }
     else
      {
   	   console.log("hey")
       }
    }
  }
}

