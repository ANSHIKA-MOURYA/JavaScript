class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password;
    }

    set password(newPassword){
        if(newPassword.length < 6){
            throw new Error("Password must be at least 6 characters long");
        }
        this._password = newPassword;
    }
}

const anshika = new User("a@nshika.ai", "123")
console.log(anshika.password); //
