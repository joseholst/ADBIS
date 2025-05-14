class Trainer extends User {
    constructor(id, name, email, phone, password_hash, bio) {
        super(id, name, email, phone, password_hash);
        this.bio = bio;
    }

    update_trainerinfo() {
      
    }
}