var task=[];
var arr=[1,1,1,1,1];
var i=0;
window.onload=function(){
    retrieve1();
}
function retrieve1(){
     var retrieve=[];
var v=localStorage.getItem(elementdate);
retrieve=JSON.parse(v);
    var ul = document.getElementById("myUL");
//    document.getElementById("list").innerHTML="";
while(ul.firstChild){
    ul.removeChild(ul.firstChild);

//    
}

    
for(p=0;p<retrieve.length;p++){
addelement(retrieve[p]);
}
}
function addTask()
{
     var inputValue = document.getElementById("myvalue").value;
    addelement(inputValue);
}
        function addelement(inputvalue)
        {
            
            var ul=document.getElementById("myUL");
            if(ul.children.length<5)
            {
                  //creating the dynamic elements
                   // i++;
                    switch(ul.children.length){

                        case 0: document.getElementById("myvalue").placeholder="You have room for four tasks only";
                                 break;
                        case 1: document.getElementById("myvalue").placeholder="You have room for three tasks only";
                                 break;
                        case 2: document.getElementById("myvalue").placeholder="You have room for two tasks only";
                                 break;
                        case 3: document.getElementById("myvalue").placeholder="You have room for one tasks only";
                                 break;
                        case 4: document.getElementById("myvalue").placeholder="No more tasks";
                                 break;
                     }

                   var li= document.createElement("li");
                   li.setAttribute("class","dli");
                   // li.setAttribute("id","dll");
                   li.id="id"+(task.length+1);
                   // var inputvalue=document.getElementById("myvalue").value;
                   var t=document.createElement("LABEL");
                   t.innerHTML= inputvalue;
                     t.id="txt"+(task.length+1);
                   //checkbox..........          

                   var checkbox = document.createElement("input");
                   checkbox.setAttribute("type","checkbox");
                   checkbox.id="cd"+(task.length+1);
                    checkbox.style.width="18px";
                   checkbox.style.height= "18px";
                    checkbox.style.float="left";
                    checkbox.style.marginTop="8px";
                   // checkbox.setAttribute("id","cd"+i);
                   checkbox.onclick=strike;//calling the strike function
                   checkbox.style.visibility='visible'
                
                   //creating tick image
                   var tick=document.createElement("img");
                   tick.class="tbutton";
                   tick.setAttribute("style","float:right");
                   tick.id="tic"+(task.length+1);
                    tick.src="images.jpg";
                   tick.style.width="18px";
                   tick.style.height= "18px";
                   tick.style.marginTop="8px";
                   tick.style.marginLeft="-18px";
                   // tick.style.marginLeft="-5px";
                   tick.style.float="left";
                   tick.style.visibility='hidden'
                   tick.onclick=function(){checkbox.style.visibility="visible"
                                            tick.style.visibility="hidden"
                                            t.style.textDecoration="none"
                                            checkbox.checked=false};
                   //creating the delete
                   var deletebtn=document.createElement("img");
                   deletebtn.class="dbutton";
                   deletebtn.setAttribute("style","float:right");
                   deletebtn.id="del"+(task.length+1);
                   deletebtn.src="dele.jpg.jpg";
                   deletebtn.style.width="18px";
                   deletebtn.style.height= "18px";
                   deletebtn.style.display="none";
                   deletebtn.addEventListener("click",remove);
                   // li.onmouseover=function(){
                   //  if(deletebtn.style.display==="none"){
                   //      deletebtn.style.display="block";
                   //  }
                   
                   // };
                   // li.onmouseout=function(){
                   //  deletebtn.style.display="none";
                   // };
                     //span.........
                     var span=document.createElement("input");
                     span.setAttribute("type","text");
                     span.id="span"+(task.length+1);
                     span.value=inputvalue;
                     span.style.visibility="hidden";



                      //creating the edit 
                   var editbtn=document.createElement("img");
                    editbtn.setAttribute("style","float:right");
                     editbtn.class="dbutton";
                      editbtn.id="del"+(task.length+1);
                     
                     editbtn.src="iii.jpg";
                     editbtn.style.width="18px";
                     editbtn.style.height= "18px";
                     editbtn.addEventListener("click",edit);
                     editbtn.style.display="none"
                     li.onmouseover=function(){
                    if(editbtn.style.display==="none" && deletebtn.style.display==="none"){
                        editbtn.style.display="block";
                        deletebtn.style.display="block";
                    }
                   
                   };
                   li.onmouseout=function(){
                    editbtn.style.display="none";
                    deletebtn.style.display="none";
                   };
 

                       /*appending*/
                       li.appendChild(checkbox);
                        li.appendChild(tick);
                       li.appendChild(t);
                       li.appendChild(span);
                       li.appendChild(deletebtn);
                       li.appendChild(editbtn);
                     
                        if(inputvalue === "")
                       {
                        alert("you didnt enter the text");
                       }



                      
                        task.push(inputvalue);
                        
                         var b = JSON.stringify(task);
                                 localStorage.setItem(elementdate, b);



                         document.getElementById("myUL").appendChild(li);
                         document.getElementById("myvalue").value="";
                      
                   }
                   

             


//to strrike the done work
       
// function strike()
// {
//     if(this.checked)
//     {
//         checkbox.style.display="hidden";
//         tick.style.display="visible";
//         t.style.textDecoration='line-through';
//     }
//     else
//     {
//         checkbox.style.display="visible";
//         tick.style.display="hidden";
//         t.style.textDecoration='none';
//     }
// }
  function strike() {

      if(tick.style.visibility==='hidden'){
        var r=task.indexOf(inputvalue);
        arr[r]=0;
         var b = JSON.stringify(arr);
                     localStorage.setItem(u,b);
  tick.style.visibility="visible";
  tick.style.marginLeft="-20px";
  checkbox.style.visibility="hidden";
t.style.textDecoration = "line-through";

// l=1;
}
else{
     var r=task.indexOf(inputvalue);
        arr[r]=1;
         var b = JSON.stringify(task);
                     localStorage.setItem(u,b);
  tick.style.visibility="hidden";
  checkbox.style.visibility="visible";
  checkbox.checked='none';
t.style.textDecoration = "none";
// l=0;

}


        // if (l==1) {
        //     t.style.textDecoration = "line-through";
            
        // } else {
        //     t.style.textDecoration = "none";
            
        // }
  }
//remove function
      function remove()
     {
           var a=task.indexOf(inputvalue);
         task.splice(a,1);
         this.parentNode.remove()
      
           var b = JSON.stringify(task);
                     localStorage.setItem(elementdate, b);

        
                       switch(ul.children.length){

                       case 1:document.getElementById("myvalue").placeholder="only four more tasks are allowed";break;
                        case 2:document.getElementById("myvalue").placeholder="only three more tasks are allowed";break;
                        case 3:document.getElementById("myvalue").placeholder="only two more tasks are allowed";break;
                        case 4:document.getElementById("myvalue").placeholder="only one more tasks are allowed";break;
                        case 0:document.getElementById("myvalue").placeholder="only five more tasks are allowed";break;
                                 
        
            }

      }
      function edit()
      {
        // var x= t.value;

        span.setAttribute("style","visible");
         t.innerHTML="";
         span.focus();

         span.onchange= function (){
   
            t.innerHTML=span.value;
                    
                               span.style.visibility="hidden";
          
                               var a=task.indexOf(inputvalue);
                               task[a]=span.value;
                                 var b = JSON.stringify(task);
                     localStorage.setItem(elementdate, b);
             myvalue.focus();
         }
     
      
        
      }
  }