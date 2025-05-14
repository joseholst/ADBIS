class Review {
    constructor(id, rating, comment, created_at = null) {
        this.id = id;
        this.rating = rating;
        this.comment = comment;
        this.created_at = created_at;
    }

    submit_review() {
    }
}