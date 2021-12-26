function Record(date,recording){
    this.date = date;
    this.recording = recording;
    this.toString = function (){
       return `${this.date} <br> ${this.recording}`;
    }
}
function Diary(){
    this.diary = [] ;
    this.showDiary = function (){
        this.diary.forEach(element => document.write(`${element} <br>` ));
    },
    this.addRecord = function (rec){
        this.diary.unshift(rec.toString())
    }
    this.search = function (){
        // let search = prompt("input expression or world") ;
        let result = this.diary.filter(word =>word.includes(prompt("input expression or world"))?true:false);
        result.forEach(element => document.write(`${element} <br>` ));
    }
    ,
    this.weekend = function (){
        let result = this.diary.filter(word => word.includes("Sat")?true:word.includes("Sun")?true: "You dont have weekend notes");
        result.forEach(element => document.write(`${element} <br>` ));
    }
}
let diary = new Diary();
function newNote(){
    let note = new Record(new Date(), prompt("input your note"));
    
    diary.addRecord(note);
}


