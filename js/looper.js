var letterLooper = function () {
  var letter;

  while (!letter) {
    letter = prompt('Type a letter.');
  }

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
      document.write(letter);
    }

    document.write('<br>');
  }
};

letterLooper();
