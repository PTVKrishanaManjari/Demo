var task=[];
var arr=[1,1,1,1,1];
// var i=0;
window.onload=function(){
    retrieve1();
}
function retrieve1(){
    task=[];
     var retrieve=[];
     var arr_rev=[];
     // if(arr_rev)
     //    arr_rev=arr;
    var v=localStorage.getItem(elementdate);
    retrieve=JSON.parse(v);
    var v=localStorage.getItem(u);
    arr_rev=JSON.parse(v);

    var ul = document.getElementById("myUL");
    //    document.getElementById("list").innerHTML="";
    if(arr_rev){
        arr=arr_rev;
    }
    while(myUL.firstChild){
        myUL.removeChild(myUL.firstChild);
   
    }

    
    for(p=0;p<retrieve.length;p++){
        addelement(retrieve[p],arr[p]);
    }
}


function addTask()
{
     var inputValue = document.getElementById("myvalue").value;
     addelement(inputValue,1);
}
function addelement(inputvalue,x)
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
        li.setAttribute("style","border-top:outset;border-color:#E5E7E9");
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
                                var r=task.indexOf(inputvalue);
                                arr[r]=1;
                                var b = JSON.stringify(arr);
                                localStorage.setItem(u,b);
                                checkbox.checked=false};
                       //creating the delete
        var deletebtn=document.createElement("img");
        deletebtn.class="dbutton";
        deletebtn.setAttribute("style","float:right");
        deletebtn.id="del"+(task.length+1);
        deletebtn.src="dele.jpg.jpg";
        deletebtn.style.width="18px";
        deletebtn.style.height= "18px";
        deletebtn.style.marginRight="10px";
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
                         
        editbtn.src="download.jpg";
        editbtn.style.width="18px";
        editbtn.style.height= "18px";
        editbtn.style.background="#BFBDC0";
        editbtn.style.marginRight="11px";
        editbtn.addEventListener("click",edit);
        editbtn.style.display="none"
        li.onmouseover=function(){
            if(editbtn.style.display==="none" && deletebtn.style.display==="none"){
                editbtn.style.display="block";
                deletebtn.style.display="block";

                                // li.style.borderLeft="dotted 2px #CFC0D3 ";
                                 // li.style.borderRight="dotted 8px #CFC0D3 ";
                                // li.setAttribute("style","border-left: dotted 3px #CFC0D3");
                                // li.setAttribute("style","border-top:outset;border-color:#E5E7E9");


            }
                       
        };
        li.onmouseout=function(){
            editbtn.style.display="none";
            deletebtn.style.display="none";
            li.style.borderLeft="none";
            li.style.borderRight="none ";
                        // li.setAttribute("style","border-top:outset;border-color:#F2F3F4 ");
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

        else{

                          
            task.push(inputvalue);
                            
            var b = JSON.stringify(task);
            localStorage.setItem(elementdate, b);
            if(x == 0)
            {
                            
                tick.style.visibility="visible";
                checkbox.style.visibility="hidden";
                t.style.textDecoration="line-through";
            }
            else
            {
                             // var b = JSON.stringify(task);
                             //         localStorage.setItem(elementdate, b);
                                
                tick.style.visibility="hidden";
                checkbox.style.visibility="visible";
                t.style.textDecoration="none";
            }


            document.getElementById("myUL").appendChild(li);
            document.getElementById("myvalue").value="";
                          
        }
            

             


//to strrike the done work

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
                var b = JSON.stringify(arr);
                localStorage.setItem(u,b);
                tick.style.visibility="hidden";
                checkbox.style.visibility="visible";
                checkbox.checked=false;
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
                var b = JSON.stringify(task);
                localStorage.setItem(elementdate, b);
                arr.splice(a,1);
                var ab=JSON.stringify(arr);
                localStorage.setItem(u, ab);
                this.parentNode.remove();
              
                   

                
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
                li.style.borderTop="thin solid green";
                span.setAttribute("style","visible");
                t.innerHTML="";
                span.focus();
                span.style.outline="none";
                span.style.border="none";
                var r=task.indexOf(inputvalue);
                 // checkbox.style.visibility="hidden";
                 // tick.style.visibility="hidden";
                t.style.marginLeft="-50px";
                 // li.setAttribute("style","border-top:outset;border-color:green");
                span.onchange= function (){
                             //var r=task.indexOf(inputvalue);
                                // if(arr[r]==1){
                                //         checkbox.style.visibility="visible";
                                //          tick.style.visibility="hidden";
                                //      }
                                //      else{
                                //         checkbox.style.visibility="hidden";
                                //          tick.style.visibility="visible";
                                //         }
                    t.innerHTML=span.value;
                    t.style.marginLeft="0px";       
                    span.style.visibility="hidden";
                    li.style.borderTop="thin solid white";
                                        
                    var a=task.indexOf(inputvalue);
                    task[a]=span.value;
                    var b = JSON.stringify(task);
                    localStorage.setItem(elementdate, b);
                            
                     //           var b = JSON.stringify(arr);
                     //         localStorage.setItem(u,b);     
                     // myvalue.focus();
                 };
             
              
                
            }
    }
    else{
        alert("only five tasks are allowed");
    }
  
}