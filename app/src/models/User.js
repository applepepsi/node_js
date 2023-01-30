const UserStorage=require("./UserStorage");


class User{
    constructor(body){
        this.body=body;
    }
    login()
    {
        const body=this.body;
        const {id,psword} = UserStorage.getUserInfo(body.id);
        
        if(id)
        {
            if(id===body.id && psword===body.psword)
            {
                return { success:true};
            }
            return {success: false, msg:"틀린 비밀번호"};
        }
        return {success: false, msg:"존재하지 않는 아이디 입니다."};
    }
    
}

module.exports=User;