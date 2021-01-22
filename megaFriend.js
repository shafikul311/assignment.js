
function megaFriend(friends){

    var longName = [''];
    for(var i=0; i<friends.length; i++){

        longName = friends[i];

         
        if(friends.length > longName.length){

             longName = friends;
             
        }
        
    }
    return longName;
   
}
 
console.log(megaFriend(['sha','shafiku','islam','shafikul']))