(function (window) {

var names = ["Yaakov", "Jiten", "Ethan", "Jack", "Paul", "IronMan", "Jay", "Rocky", "Lara", "Jimmy"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);