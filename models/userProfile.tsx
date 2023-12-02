export default class UserProfile {
    public name: string;
    public email: string;
    password?: string;
    public bio?: string;
    public photoUrl?: string;
    public linkedinUrl?: string;
    public githubUrl?: string;
    public twitterUrl?: string;
    public facebookUrl?: string;
    public instagramUrl?: string;

    constructor ({
        name,
        email,
        password,
        bio,
        photoUrl,
        linkedinUrl,
        githubUrl,
        twitterUrl,
        facebookUrl,
        instagramUrl,
    }:{
        name: string,
        email: string,
        password?: string,
        bio?: string,
        photoUrl?: string,
        linkedinUrl?: string,
        githubUrl?: string,
        twitterUrl?: string,
        facebookUrl?: string,
        instagramUrl?: string,
    }){
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