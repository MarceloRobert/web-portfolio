class UserProfile {
    constructor(
        public name: string,
        public email: string,
        public password: string | undefined,
        public bio: string,
        public photoUrl: string,
        public linkedinUrl: string,
        public githubUrl: string,
        public twitterUrl: string,
        public facebookUrl: string,
        public instagramUrl: string,
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.bio = bio;
        this.photoUrl = photoUrl;
        this.linkedinUrl = linkedinUrl;
        this.githubUrl = githubUrl;
        this.twitterUrl = twitterUrl;
        this.facebookUrl = facebookUrl;
        this.instagramUrl = instagramUrl;
    }
}

module.exports = UserProfile;