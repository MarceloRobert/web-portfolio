export default class Project {
    public id?:number;
    public titulo?:string;
    public descricao?: string;
    public fotoUrl?: string;
    public autores?: string;
    public data?: Date;
    public linkRepositorio?: string;

    constructor ({
        id,
        titulo,
        descricao,
        fotoUrl,
        autores,
        data,
        linkRepositorio,
    } : {
        id?: number,
        titulo?: string,
        descricao?: string,
        fotoUrl?: string,
        autores?: string,
        data?: Date,
        linkRepositorio?: string,
    }) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.fotoUrl = fotoUrl;
        this.autores = autores;
        this.data = data;
        this.linkRepositorio = linkRepositorio;
    };

    toJsonWithID() {
        return (
            {
                "projetoId": this.id,
                "titulo": this.titulo,
                "descricao": this.descricao,
                "fotoUrl": this.fotoUrl,
                "autores": this.autores,
                "data": (this.data?.toString().length != undefined &&
                        this.data?.toString().length < 12 &&
                        this.data?.toString().length > 3 ?
                        this.data?.toString() + "T15:30:00"
                        : this.data?.toString()),
                "linkRepositorio": this.linkRepositorio,
            }
        )
    }

    toJson() {
        return (
            {
                "titulo": this.titulo,
                "descricao": this.descricao,
                "fotoUrl": this.fotoUrl,
                "autores": this.autores,
                "data": (this.data?.toString().length != undefined &&
                        this.data?.toString().length < 12 &&
                        this.data?.toString().length > 3 ?
                        this.data?.toString() + "T15:30:00"
                        : this.data?.toString()),
                "linkRepositorio": this.linkRepositorio,
            }
        )
    }
}