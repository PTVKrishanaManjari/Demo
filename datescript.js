var d = new Date();
var w;
switch(d.getDay())
{
  case 1: c="Mon";break;
  case 2: c="Tue";break;
  case 3: c="Wed";break;
  case 4: c="Thu";break;
  case 5: c="Fri";break;
  case 6: c="Sat";break;
  case 7: c="Sun";break;
}
var m;
switch(d.getMonth())
{
  case 0: m="Jan";break;
  case 1: m="Feb";break;

  case 2: m="Mar";break;
  case 3: m="Apr";break;

  case 4: m="May";break;
  case 5: m="Jun";break;

  case 6: m="Jul";break;
  case 7: m="Aug";break;
  case 8: m="Sep";break;
  case 9: m="Oct";break;
  case 10: m="Nov";break;
  case 11: m="Dec";break;
}
var dat=d.getDate();
var l;
if(dat==1 ||  dat==21 || dat==31){
  l='st';
}
else if(dat==2 || dat==22 || dat==12){
  l='nd';
}
else if(dat==3 || dat==13 || dat==23){
  l='rd';
}
else
l='th';
elementdate=c+m+dat+l;
u=elementdate+"u";
document.getElementById("demo").innerHTML=c +","+" "+" "+ m +"  "+ dat+l;
retrieve1();
                    
               

function previous()
{
    // var p=new Date();
    // p=today.value;
    // var d=new Date();
              // p=d.getDate()-1;
  d.setDate(d.getDate()-1);
  // k.setDate(d)
  var c;
  switch(d.getDay())
  {
    case 1: c="Mon";break;
    case 2: c="Tue";break;
    case 3: c="Wed";break;
    case 4: c="Thu";break;
    case 5: c="Fri";break;
    case 6: c="Sat";break;
    case 0: c="Sun";break;
  }
  var m;
  switch(d.getMonth())
  {
    case 0: m="Jan";break;
    case 1: m="Feb";break;

    case 2: m="Mar";break;
    case 3: m="Apr";break;

    case 4: m="May";break;
    case 5: m="Jun";break;

    case 6: m="Jul";break;
    case 7: m="Aug";break;
    case 8: m="Sep";break;
    case 9: m="Oct";break;
    case 10: m="Nov";break;
    case 11: m="Dec";break;
  }
  var dat=d.getDate();


  var l;
  if(dat==1  || dat==21 || dat==31){
    l='st';
  }
  else if(dat==2 || dat==22 )
  {
    l='nd';
  }
  else if(dat==3  || dat==23){
    l='rd';
  }
  else
  l='th';
  elementdate=c+m+dat+l;
   u=elementdate+"u";
  document.getElementById("demo").innerHTML=c +","+" "+" "+ m +"  "+ dat+l;
  // d.setDate(d.getDate());
  document.getElementById("myvalue").placeholder="only five tasks are allowed";
  document.getElementById("myUL").innerHTML="";
  retrieve1();
}




function tomorrow()
{
    
    // var d=new Date();

             
  d.setDate(d.getDate()+1);

  var c;
  switch(d.getDay())
  {
    case 1: c="Mon";break;
    case 2: c="Tue";break;
    case 3: c="Wed";break;
    case 4: c="Thu";break;
    case 5: c="Fri";break;
    case 6: c="Sat";break;
    case 0: c="Sun";break;
  }
  var m;
  switch(d.getMonth())
  {
    case 0: m="Jan";break;
    case 1: m="Feb";break;

    case 2: m="Mar";break;
    case 3: m="Apr";break;

    case 4: m="May";break;
    case 5: m="Jun";break;

    case 6: m="Jul";break;
    case 7: m="Aug";break;
    case 8: m="Sep";break;
    case 9: m="Oct";break;
    case 10: m="Nov";break;
    case 11: m="Dec";break;
  }
  var dat=d.getDate();


  var l;
  if(dat==1  || dat==21 || dat==31){
    l='st';
  }
  else if(dat==2 || dat==22 )
  {
    l='nd';
  }
  else if(dat==3  || dat==23){
    l='rd';
  }
  else
    l='th';
  elementdate=c+m+dat+l;
  u=elementdate+"u";
  document.getElementById("demo").innerHTML=c +","+" "+" "+ m +"  "+ dat+l;
// d.setDate(d.getDate())
  document.getElementById("myvalue").placeholder="only five tasks are allowed";
  document.getElementById("myUL").innerHTML="";
  retrieve1();
}