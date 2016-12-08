// jQuery
var $ = require('jquery');
global.jQuery = $;

// if you want all features of foundation
// require('./node_modules_folder/foundation-sites/dist/foundation.js');

// if you want only some features
import "foundation-sites/js/foundation.core.js";
import "foundation-sites/js/foundation.responsiveToggle.js";
import "foundation-sites/js/foundation.util.mediaQuery.js";
import "foundation-sites/js/foundation.offcanvas.js";
import "foundation-sites/js/foundation.util.triggers.js";
import "foundation-sites/js/foundation.util.motion.js";
import "foundation-sites/js/foundation.interchange.js";
import "foundation-sites/js/foundation.util.timerAndImageLoader.js";

export default Foundation;
