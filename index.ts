import { Day, days } from "./days/day";
const Jetty = require('jetty');

const debugging = true;
var selectedIndex = 0;
var displayingDays = false;
const jetty = new Jetty(process.stdout);
const debugDayIndex = 11;

const buttons = {
  UP: '\u001B\u005B\u0041',
  DOWN: '\u001B\u005B\u0042',
  CTRL_C: '\u0003',
  ENTER: '\u000D'
};

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
      daySelected(days[selectedIndex]);
    } else if (debugging) {
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
  if (displayingDays) {
    var newIndex = Math.min(selectedIndex + moveDistance, days.length - 1);
    if (newIndex < 0) newIndex = 0;
    if (newIndex != selectedIndex) {
      selectedIndex = newIndex;
      displayDays();
    }
  }
}

const displayDays = () => {
  displayingDays = true;
  jetty.clear();
  days.forEach(day => {

    jetty.text((selectedIndex == days.indexOf(day) ? '-> ' : '   ') + day.toString() + '\n')

  });
}

const daySelected = async (day: Day) => {
  if (displayingDays) {
    displayingDays = false;
    jetty.clear();
    day.run();
    process.exit();
  }
}

initStdn();
if (debugDayIndex != null) {
  days[debugDayIndex].run();
  process.exit();
} else {
  displayDays();
}