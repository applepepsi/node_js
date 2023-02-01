
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
    static getUserInfo(id)
    {
        const users=this.#users;
        const idx=users.id.indexOf(id);
        const usersKeys=Object.keys(users);
        const userInfo=usersKeys.reduce((newUser,info)=>
        {
            newUser[info]=users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
    static save(userInfo)
    {
        const users=this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success:true};
    }
}

module.exports=UserStorage;