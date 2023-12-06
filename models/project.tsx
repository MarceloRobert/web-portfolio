export default class Project {
    public title?:string;
    public description?: string;
    public photoUrl?: string;
    public authors?: string;
    public date?: string;
    public sourceUrl?: string;

    constructor ({
        title,
        description,
        photoUrl,
        authors,
        date,
        sourceUrl,
    } : {
        title?: string,
        description?: string,
        photoUrl?: string,
        authors?: string,
        date?: string,
        sourceUrl?: string,
    }) {
        this.title = title;
        this.description = description;
        this.photoUrl = photoUrl;
        this.authors = authors;
        this.date = date;
        this.sourceUrl = sourceUrl;
    }
}