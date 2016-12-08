import "../styles/app.scss";
import "animate.css";

import "foundation";

import WOW from "wowjs";

const w = new WOW({
  live: false
});
w.init();

$(document).foundation();


// Animated favicon
import './favicon.js';
const { favicon } = global;

const images = Array(3)
  .fill()
  .map((_, i) => `/static/images/favicon/frame_${i}.png`);

favicon.animate(images, 500);
