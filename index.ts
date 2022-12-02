
const buttons = {
  UP: '\u001B\u005B\u0041',
  DOWN: '\u001B\u005B\u0042',
  CTRL_C: '\u0003',
  ENTER: '\u000D'
};

var selectedIndex = 0;
var displayingOptions = false;
let options = ['Opt 1', 'Opt 2', 'Opt 3'];
const Jetty = require('jetty');
const jetty = new Jetty(process.stdout);

const initStdn = () => {
  var stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');

  stdin.on('data', function (key) {
    const ks = key.toString();
    if (ks == buttons.UP) {
      move(-1);
    } else if (ks == buttons.DOWN) {
      move(1);
    } else if (ks == buttons.CTRL_C) {
      process.exit();
    } else if (ks == buttons.ENTER) {
      optionSelected(options[selectedIndex]);
    } else {
      console.log(toUnicode(ks));
    }
  });
}

const toUnicode = (theString: string) => {
  var unicodeString = '';
  for (var i = 0; i < theString.length; i++) {
    var theUnicode = theString.charCodeAt(i).toString(16).toUpperCase();
    while (theUnicode.length < 4) {
      theUnicode = '0' + theUnicode;
    }
    theUnicode = '\\u' + theUnicode;
    unicodeString += theUnicode;
  }
  return unicodeString;
}

const move = (moveDistance: number) => {
  if (displayingOptions) {
    var newIndex = Math.min(selectedIndex + moveDistance, options.length - 1);
    if (newIndex < 0) newIndex = 0;
    if (newIndex != selectedIndex) {
      displayOptions();
      selectedIndex = newIndex;
    }
  }
}

const displayOptions = () => {
  displayingOptions = true;
  jetty.clear();
  options.forEach(opt => jetty.text((selectedIndex == options.indexOf(opt) ? '-> ' : '') + opt + '\n'));
}

const optionSelected = (opt: string) => {
  jetty.clear();
  jetty.text('You selected ' + opt + '\n');
  process.exit();
}

initStdn();
displayOptions();

