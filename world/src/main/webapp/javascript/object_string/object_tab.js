function Table(param){
    this.members =param;
    this.addMember = function(member){
        this.members.push(member);
    }
    this.showList = function(){
        // table 태그를 만들어주는 부분.
        let str = '<table border = 1>';
       
        str += '<tr>';
        for(let i=0; i<this.members.length; i++){
            str += `<td>${this.members[i].id}</td>`
            str += `<td>${this.members[i].name}</td>`
            str += `<td>${this.members[i].age}</td>`
            str +='</tr>';
            }
  
        str +='</table>';
        return str;
    }
    // this.showList = function(){
    //     // table 태그를 만들어주는 부분.
    //     let str = '<table border = 1>';
    //     this.members.forEach(member => {
    //         str += '<tr>';
    //         for (let prop in member) {
    //             str += `<td>${member[prop]}</td>`;
                
    //         }
    //         str += '</tr>';
            
    //     });
    //     str += '</table>';
    //     return str;
    // }
    
}

let t1 = new Table([{id:'user1', name:'홍길동', age:20},{id:'user2', name:'박철희', age:22},{id:'user3', name:'김민규', age:25}])
t1.addMember({id:'user5', name:'최규식', age:27});
let str = t1.showList();
document.write(str);