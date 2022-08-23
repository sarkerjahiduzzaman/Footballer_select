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
 

 
selectedPlayerName("btn-id-1","name-1");
selectedPlayerName("btn-id-2","name-2");
selectedPlayerName("btn-id-3","name-3");
selectedPlayerName("btn-id-4","name-4");
selectedPlayerName("btn-id-5","name-5");
selectedPlayerName("btn-id-6","name-6");
selectedPlayerName("btn-id-7","name-7");
selectedPlayerName("btn-id-8","name-8");
selectedPlayerName("btn-id-9","name-9");

//get input value using id
function getValue(inputId){
    const getElement=document.getElementById(inputId);
    const getStringValue=getElement.value;
    const getFloatValue=parseFloat(getStringValue);
    return getFloatValue;
}
//When clicked on  calculate button 
document.getElementById('Calculate-id').addEventListener('click',function(){
    const element = document.getElementById("list");
    let numb = element.childNodes.length;
    if(numb>1)
    {
        const getElement=document.getElementById('player-price-id');

     if(getElement.value.length==''){
        alert('Boss! enter per player cost')
     }
     else{
        const getvalue=getValue('player-price-id');
        const total=(numb-1)*getvalue;
       document.getElementById('total-expence').innerText=total;

     }

        
     
   

    }
    else{
        alert('Boss! select player')
    }
    
   

})
