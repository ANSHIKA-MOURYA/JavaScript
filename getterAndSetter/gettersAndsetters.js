class User{
    constructor(email. password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password;
    }
}

const anshika = new User("a@nshika.ai", "123")
console.log(anshika.password); //
