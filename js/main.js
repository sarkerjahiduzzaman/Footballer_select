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
        //condition checked if orderlist element is less than or equl 5 show the name right side
        if(numb<=5)
        {
            const listParentId = document.getElementById("list");
        const liElement = document.createElement("li");
        const textNmae=document.createTextNode(playerNamestring);
        liElement.appendChild(textNmae);
        listParentId.appendChild(liElement);
        // click then disable the buutton
        const disableBtn = document.getElementById(selectedBtn);
        disableBtn.disabled = true;
        disableBtn.style.backgroundColor = "rgb(162, 169, 175)";

        }
        //else show alert and cannot add element and cannot show the right side
        else{
            alert('Boss! You cannot select more than 5 player')
        }

 
        
         
         
 
        
 
     })
 }
 