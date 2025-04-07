class Customer extends User {
    constructor(
        userID, name, email, password, DGUnNumber
    ){

        super(userID, name, email, password);
        this.DGUnNumber = DGUnNumber;
    };

    

}

