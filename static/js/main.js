import "../styles/app.scss";
import "animate.css";

import "foundation-sites/js/foundation.core.js";
import "foundation-sites/js/foundation.responsiveToggle.js";
import "foundation-sites/js/foundation.util.mediaQuery.js";
import "foundation-sites/js/foundation.offcanvas.js";
import "foundation-sites/js/foundation.util.triggers.js";
import "foundation-sites/js/foundation.util.motion.js";
import "foundation-sites/js/foundation.interchange.js";
import "foundation-sites/js/foundation.util.timerAndImageLoader.js";

import WOW from "wowjs";

const w = new WOW({
  live: false
});
w.init();

$(document).foundation();
