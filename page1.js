
function calc(op)
           {
             var  a=parseInt(document.getElementById("text1").value,10);
             var b=parseInt(document.getElementById("text2").value,10);

             try{
                 
              switch(op)
              {
                  case '+':case '-':case '*':case '/':

              }  
             if(op=='+')document.getElementById("Lab1").innerHTML="Result of addition is "+String(a+b);
             else if(op=='-')document.getElementById("Lab1").innerHTML="Result of subtraction is "+String(a-b);
             else if(op=='*')document.getElementById("Lab1").innerHTML="Result of multiplication is "+String(a*b);
             else if(op=='/')document.getElementById("Lab1").innerHTML="Result of Division is "+String(a/b);
             else if(op=='%')document.getElementById("Lab1").innerHTML="Result of Mod operator is "+String(a%b);
                
             }
             catch(Exception)
             {
                   window.alert(Exception); 
             }
           
           
           }
