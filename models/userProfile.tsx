class UserProfile {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public bio: string
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.bio = bio;
    }
}

module.exports = UserProfile;