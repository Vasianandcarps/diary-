function Record(date,recording){
    this.date = date;
    this.recording = recording;
    this.toString = function (){
       return document.write(`${this.date} <br> ${this.recording}`);
    }
}
function Diary(){
    this.diary = ["h"] ;
    this.showDiary = function (){
        this.diary.forEach(element => document.write(element));
    },
    this.addRecord = function (){

    }

}

