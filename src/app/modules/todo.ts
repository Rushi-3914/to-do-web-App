
export class Todo{

    constructor(

        public id:string='',
        public title:string='',
        public content:string='',
        public status:boolean=false,
        public addedDate:Date=new Date()


    ){

    }
}