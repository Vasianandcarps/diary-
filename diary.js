function Record(date, recording, notes) {
  this.date = date;

  this.notes = notes;
  this.recording = recording;
  this.toString = function () {
    return `${this.date} <br> ${this.recording}`;
  };
}
function Diary() {
  this.diary = [];
  (this.showDiary = function () {
    this.diary.forEach((element) => (notes.innerHTML += `${element} <br>`));
  }),
    (this.addRecord = function (rec) {
      this.diary.unshift(rec.toString());
    });
  (this.search = function () {
    let n = prompt("input expression or world");

    result = this.diary.filter((word) => (word.includes(n) ? true : false));
    if (result.length > 0) {
      result.forEach((element) => (notes.innerHTML += `${element}  `));
    } else {
      notes.innerHTML +=
        "You dont have this expression or word in your notes.  " + "<br>";
    }
  }),
    (this.weekend = function () {
      let result = this.diary.filter((word) =>
        word.startsWith("Sat") ? true : word.startsWith("Sun") ? true : false
      );
      if (result.length > 0) {
        result.forEach((element) => (notes.innerHTML += `${element}  `));
      } else {
        notes.innerHTML += "You dont have weekend notes " + "<br>";
      }
    });
}
let diary = new Diary();
function newNote() {
  let note = new Record(new Date(), prompt("input your note"));

  diary.addRecord(note);
}
