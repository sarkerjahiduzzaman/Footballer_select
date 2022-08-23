//Function are started 
function selectedPlayerName (selectedBtn , selectedName){
    document.getElementById(selectedBtn).addEventListener("click",function(){
     //select palyer name usind nameid
         const playerName = document.getElementById(selectedName);
         const playerNamestring = playerName.innerText;
         //find order list using id='list'
         //count order list child
         const element = document.getElementById("list");
         let numb = element.childNodes.length;
        // console.log(numb)
       
 
        
         
         
 
        
 
     })
 }
 