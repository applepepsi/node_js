
class UserStorage {
    static #users={
        id: ["qqqq","나나나","다다다"],
        psword:["1234","1234","4567"],
        name: ["오오","오옹오","오오오오"],
    };
    static getUsers(...fields)
    {
        const users=this.#users;
        const newUsers=fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field))
            {
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
       
        return newUsers;
    }
}

module.exports=UserStorage;