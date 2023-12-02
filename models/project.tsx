export default class Project {
    constructor (
        public title?: string,
        public description?: string,
        public photoUrl?: string,
        public authors?: string,
        public date?: string,
        public sourceUrl?: string,
    ) {
        this.title = title;
        this.description = description;
        this.photoUrl = photoUrl;
        this.authors = authors;
        this.date = date;
        this.sourceUrl = sourceUrl;
    }
}