/*
! Write an arrow function where it will do the following:
? a) It will take an array where the array elements will be the name of your friends
* b) Check if the length of each element is even, push elements with even length to a new array and return the result
TODO: print the result.
*/

const friends = myFriends =>{
    const evenfriends = [ ];
    for(const friend of myFriends){
        const CheckLength = friend.length;
        if(CheckLength % 2 === 0){
            evenfriends.push(friend);
        }
    }
    return evenfriends;

}

const myFriends = ['Shafidul Islam Limon', 'Mobashshara Sultana Saria', 'Abu Sayed'];

console.log(friends(myFriends));