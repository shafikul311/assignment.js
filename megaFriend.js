
function megaFriend(friend){
    
    var longName = [''];
    for(var i=0; i<friend.length; i++){

        longName = friend[i];

         
        if(friend.length > longName.length){

             longName = friend;
             
        }
        
    }
    return longName;
   
}
 
console.log(megaFriend(['sha','shafiku','islam','shafikul']))