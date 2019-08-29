import "./styles.css";

import * as PIXI from "pixi.js";
import { Player } from "@awayjs/swf-viewer";

let player = new Player();
window.hidePokiProgressBar = function() {
  console.log("Hello, Poki!");
};

PIXI.LoaderResource.setExtensionXhrType(
  "swf",
  PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER
);
let loader = new PIXI.Loader();
loader.add("swf1", "assets/na7.001.swf");
loader.add("swf2", "assets/na7.002.swf");
loader.add("swf3", "assets/na7.003.swf");
loader.add("swf4", "assets/na7.004.swf");

loader.load(() => {
  player.playSWF(
    new Uint8Array(loader.resources["myswf"].data),
    "fieldContainer.swf"
  );
});
