export class Task {
    constructor(id:number,title:string,description:string){
        this.id=id
        this.title=title
        this.description=description;
    }
    id:number;
    title:string;
    description:string;
    status:string
}
