import ScrollMagic from "scrollmagic";

const ELEMENTS_CLASS = 'Fade';
const TRIGGER_CLASS = 'Fade__trigger';
const INIT_CLASS = 'Fade--init';
const IN_CLASS = 'Fade--visible';
const OFFSET = -100;

const generateScene = trigger => {
  var elems = trigger.getElementsByClassName(ELEMENTS_CLASS);

  if (elems.length === 0) {
    return null;
  }

  var elem = elems[0];
  elem.classList.add(INIT_CLASS);
  return new ScrollMagic
    .Scene({triggerElement: trigger})
    .setClassToggle(elem, IN_CLASS)
    .offset(OFFSET);
};

const triggers = Array.prototype.slice.call(document.getElementsByClassName(TRIGGER_CLASS));
const scenes = triggers.map(generateScene);

const controller = new ScrollMagic.Controller();
controller.addScene(scenes);
