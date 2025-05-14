class Customer extends User {
    constructor(id, name, email, phone, password_hash, dgi_nr) {
        super(id, name, email, phone, password_hash);
        this.dgi_nr = dgi_nr;
    }

    update_customerinfo() {
        
    }
}

