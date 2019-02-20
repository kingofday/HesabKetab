export default class Rep{
    constructor(Success,Res,Message){
        this.Success = Success;
        this.Res = Res;
        this.Message = Message;
    }
}

export class unit{
    constructor(name,count){
        this.id = null;
        this.name = name;
        this.count = count;
    }
}

export class cost{
    constructor(title,amount,date){
        this.id = null;
        this.title = title;
        this.amount = amount;
        this.date = date;
    }
}