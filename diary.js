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
        this.diary.forEach(element => document.write(element));
    },
    this.addRecord = function (rec){
        this.diary.unshift(rec.toString())
    }
}
let diary = new Diary();
function newNote(){
    let note = new Record(new Date(), prompt("input your note"));
    
    diary.addRecord(note);
}
