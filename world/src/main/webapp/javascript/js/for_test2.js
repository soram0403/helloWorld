const arr = [];
// arr[arr.length] = 10;

arr.push(10);
arr.push(20);

let obj = {
    sname:'Hong',
    age:20,
    friends:['Park'],
    addFriend: function(friend){
        this.friends.push(friend);
    },
    friendList: function(){
        // 친구의 이름을 출력
        for(let i=0; i<2 ; i++){
            console.log(this.friends[i])
        }
    }

}
function outerFunc(){
    function innerFunc(){
        
    }
}
obj.addFriend('Kim');
obj.addFriend({name:'Hwang', phone:'010-1111-2222'});
console.log(obj.friends[2]['phone']);
obj.friendList();