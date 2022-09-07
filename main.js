import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlyerName";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend", 
    `
    ${PlayerName("Player1")}
    ${PlayerName("palyer2")}
    ${BoardGame(6)}
    `
);