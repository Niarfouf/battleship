(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var a=r.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&!e;)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"dc8b9430265869ae02fd.mp3",r=t.p+"0b3decf3f678994a3450.png",a=t.p+"86f65306ad3b376e67ff.png";function n(t){const e=document.querySelector("#main");let r=document.querySelector(".player-container");r||(r=document.createElement("div"),r.classList.add("player-container")),r.textContent="";const a=document.createElement("h1");a.innerText=t.player.getName(),r.appendChild(a);const o=document.createElement("div");o.classList.add("player-grid"),t.playerBoard.board.forEach(((e,r)=>{e.forEach(((e,a)=>{const n=document.createElement("div");n.classList.add("player-cell"),n.setAttribute("data-x",`${a}`),n.setAttribute("data-y",`${r}`),n.addEventListener("dragover",(t=>{t.preventDefault()})),n.addEventListener("dragenter",(t=>{t.preventDefault()})),n.addEventListener("dragleave",(t=>{t.preventDefault()})),n.addEventListener("drop",(e=>{e.preventDefault(),function(t,e,r){const a=t.dataTransfer.getData("y"),n=t.dataTransfer.getData("x"),o=t.dataTransfer.getData("length"),i=t.dataTransfer.getData("name"),s=t.dataTransfer.getData("next"),d=e.dataset.x,c=e.dataset.y,h=[];for(let t=0;t<o;t+=1)if("undefined"!==a){const e=c-a+t;h.push([1*d,e])}else{const e=d-n+t;h.push([e,1*c])}if(!0===r.playerBoard.addMoveShip(i,o,h)){const t=document.querySelector(`.player-cell[data-x="${h[0][0]}"][\n                            data-y="${h[0][1]}"\n                        ]`);document.querySelector(`#${i}`).style.position="absolute",t.appendChild(document.querySelector(`#${i}`)),f(r,s)}}(e,n,t)})),o.appendChild(n)}))})),r.appendChild(o);const i=document.createElement("div");i.textContent="Reset",i.classList.add("reset"),i.addEventListener("click",(()=>{t.restartGame(),f(t,"reset"),n(t)})),r.appendChild(i),e.appendChild(r)}function o(t,e){const r=document.querySelector("#main");r.textContent="";const a=document.createElement("h1");a.classList.add("end"),"Computer"!==t.name?a.textContent="You win !":a.textContent="You lose !";const o=document.createElement("div");o.textContent="Play again",o.classList.add("restart"),o.addEventListener("click",(()=>{!function(t){t.restartGame(),t.computer.hitShotMemory=[],f(t,"reset"),n(t)}(e)})),a.appendChild(o),r.appendChild(a)}const i=t.p+"de67f6401b67e5c5c2d5.mp3",s=t.p+"9e89ce9ef9b3010cdde2.mp3",d=t.p+"59126c2c9b8a616740fa.mp3",c=new Audio(s),h=new Audio(d),l=new Audio(i);function u(t,e){const r=document.querySelector(`.${e}-cell[data-x="${t.coordinate[0]}"][\n            data-y="${t.coordinate[1]}"\n        ]`);document.querySelector(`.${e}-container .text-info`).textContent=`The last incoming shot ${t.true} !`;const a=document.createElement("div");a.classList.add("shot"),h.play(),"touched"!==t.true&&"sunk"!==t.true||setTimeout((()=>{a.classList.add("red"),c.play()}),2e3),"missed"===t.true&&setTimeout((()=>{a.classList.add("yellow"),l.play()}),2e3),r.appendChild(a)}function p(t,e,r){const a=document.querySelector(`#${r}`);a.textContent="";for(let r=0;r<t;r+=1){const t=document.createElement("div");"row"===e?t.dataset.x=r:t.dataset.y=r,t.addEventListener("mousedown",(t=>{t.target.dataset.x?(a.dataset.x=t.target.dataset.x,a.dataset.y=void 0):(a.dataset.y=t.target.dataset.y,a.dataset.x=void 0)})),t.classList.add("ship-square"),a.appendChild(t)}}const m=t.p+"6d92afc3cfdb3fe8496d.png",y={destroyer:{length:2,nextShip:"submarine"},submarine:{length:3,nextShip:"cruiser"},cruiser:{length:3,nextShip:"battleship"},battleship:{length:4,nextShip:"carrier"},carrier:{length:5,nextShip:null}};function f(t,e="destroyer"){const r=document.querySelector("#main");let a=document.querySelector(".fleet");if("reset"===e&&(Object.keys(y).forEach((t=>{delete y[t].done})),e="destroyer"),a||(a=document.createElement("div"),a.classList.add("fleet"),r.textContent="",r.appendChild(a)),"null"===e){a.textContent="";const e=document.createElement("div");e.textContent="Press the button to confirm fleet position and start game.",a.append(e);const r=document.createElement("button");r.classList.add("start-game"),r.textContent="Ready",r.addEventListener("click",(()=>{a.remove(),function(t){const e=document.querySelector("#main"),r=document.createElement("div");r.classList.add("computer-container");const a=document.createElement("h1");a.innerText=t.computer.getName(),r.appendChild(a);const n=document.createElement("div");n.classList.add("computer-grid"),t.computerBoard.board.forEach(((e,r)=>{e.forEach(((e,a)=>{const i=document.createElement("div");i.classList.add("computer-cell"),i.setAttribute("data-x",`${a}`),i.setAttribute("data-y",`${r}`),i.addEventListener("click",(e=>{const n=t.playPlayerTurn([a,r]);if(n.true){if(u(n,"computer"),t.isGameOver())return void o(t.player,t);setTimeout((()=>{u(t.playComputerTurn(),"player"),t.isGameOver()&&o(t.computer,t)}),5e3)}})),n.appendChild(i)}))})),r.appendChild(n);const i=document.createElement("div");i.classList.add("text-info"),i.textContent="Waiting for enemy attack!",r.append(i),e.appendChild(r)}(t),t.startGame(),document.querySelector(".reset").remove(),document.querySelectorAll(".drag").forEach((t=>{t.draggable=!1}));const e=document.querySelector(".player-container"),r=document.createElement("div");r.classList.add("text-info"),r.textContent=`Please Admiral ${t.player.name}, fire at the enemy!`,e.append(r)})),a.append(r)}else if(!y[e].done){a.textContent="";const r=document.createElement("div");r.textContent=`Please Admiral ${t.player.name}, put your ${e} on the board.`,a.append(r);const n=document.createElement("div"),o=document.createElement("div");n.draggable=!0,n.classList.add("drag"),n.classList.add("row-drag"),n.id=e,n.dataset.length=y[e].length,n.dataset.next=y[e].nextShip,n.dataset.name=e,o.append(n),o.classList.add("container-drag"),a.append(o),p(y[e].length,"row",e);const i=document.createElement("div"),s=new Image;s.src=m,s.classList.add("rotate"),i.appendChild(s),a.append(i),s.addEventListener("click",(()=>{!function(t,e){t.classList.contains("row-drag")?p(y[e].length,"col",e):p(y[e].length,"row",e),t.classList.toggle("row-drag"),t.classList.toggle("col-drag")}(n,e)})),n.addEventListener("dragstart",(t=>{!function(t,e){t.classList.add("is-dragged"),e.dataTransfer.setData("x",e.target.dataset.x),e.dataTransfer.setData("y",e.target.dataset.y),e.dataTransfer.setData("length",e.target.dataset.length),e.dataTransfer.setData("name",e.target.dataset.name),e.dataTransfer.setData("next",e.target.dataset.next),setTimeout((()=>{t.style.visibility="hidden"}),0)}(n,t)})),n.addEventListener("dragend",(()=>{!function(t){t.style.visibility="visible",t.classList.remove("is-dragged"),document.querySelectorAll(".player-cell.green").forEach((t=>{t.classList.remove("green")})),document.querySelectorAll(".red").forEach((t=>{t.classList.remove("red")}))}(n)})),y[e].done=!0}}class g{static direction={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]};constructor(t){this.name=t,this.hitShotMemory=[],this.directionObject={...g.direction}}attack(t,e=this.randomCoordinate()){const r=t.receiveAttack(e);if("Computer"===this.name){if("touched"===r.true&&(0===e[0]&&delete this.directionObject.left,9===e[0]&&delete this.directionObject.right,0===e[1]&&delete this.directionObject.up,9===e[1]&&delete this.directionObject.down,0!==this.hitShotMemory.length&&(this.hitShotMemory[0].coordinate[1]===r.coordinate[1]?(delete this.directionObject.down,delete this.directionObject.up,this.hitShotMemory[this.hitShotMemory.length-1].coordinate[0]+1===r.coordinate[0]?delete this.directionObject.left:delete this.directionObject.right):(delete this.directionObject.left,delete this.directionObject.right,this.hitShotMemory[this.hitShotMemory.length-1].coordinate[1]+1===r.coordinate[1]?delete this.directionObject.up:delete this.directionObject.down)),this.hitShotMemory.push(r)),0===this.hitShotMemory.length||"missed"!==r.true&&!r.false||(this.hitShotMemory[this.hitShotMemory.length-1].coordinate[0]-1===r.coordinate[0]&&delete this.directionObject.left,this.hitShotMemory[this.hitShotMemory.length-1].coordinate[0]+1===r.coordinate[0]&&delete this.directionObject.right,this.hitShotMemory[this.hitShotMemory.length-1].coordinate[1]-1===r.coordinate[1]&&delete this.directionObject.up,this.hitShotMemory[this.hitShotMemory.length-1].coordinate[1]+1===r.coordinate[1]&&delete this.directionObject.down),0===Object.keys(this.directionObject).length&&0!==this.hitShotMemory.length){this.hitShotMemory.push(this.hitShotMemory[0]);const e=this.hitShotMemory[0].coordinate[0],r=this.hitShotMemory[0].coordinate[1],a=this.hitShotMemory[1].coordinate[0],n=this.hitShotMemory[1].coordinate[1];e+1===a&&(!0===t.board[r][e-1].hasBeenShot?(this.directionObject.up=[0,-1],this.directionObject.down=[0,1]):this.directionObject.left=[-1,0]),e-1===a&&(!0===t.board[r][e+1].hasBeenShot?(this.directionObject.up=[0,-1],this.directionObject.down=[0,1]):this.directionObject.right=[1,0]),r+1===n&&(!0===t.board[r-1][e].hasBeenShot?(this.directionObject.right=[1,0],this.directionObject.left=[-1,0]):this.directionObject.up=[0,-1]),r-1===n&&(!0===t.board[r+1][e].hasBeenShot?(this.directionObject.right=[1,0],this.directionObject.left=[-1,0]):this.directionObject.down=[0,1])}("sunk"===r.true||this.hitShotMemory.length>10)&&(this.hitShotMemory=[],this.directionObject={...g.direction})}return r}randomCoordinate(){const t=this.hitShotMemory.length;if(0!==t){const e=this.hitShotMemory[t-1],r=Math.floor(Math.random()*Object.keys(this.directionObject).length),a=Object.entries(this.directionObject)[r][1];return[e.coordinate[0]+a[0],e.coordinate[1]+a[1]]}return[Math.floor(10*Math.random()),Math.floor(10*Math.random())]}getName(){return this.name}}class S{constructor(t){this.length=t,this.hits=0,this.sunk=!1}hit(){this.hits+=1,this.hits==this.length&&(this.sunk=!0)}isSunk(){return this.sunk}}class b{constructor(t=10){this.board=b.createEmptyBoard(t),this.ships={}}static createEmptyBoard(t){const e=[];for(let r=0;r<t;r+=1){const r=[];for(let e=0;e<t;e+=1)r.push({ship:null,hasBeenShot:!1});e.push(r)}return e}static randomShipCoordinate(t){const e=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],r=Math.floor(4*Math.random()),a={0:[0,1],1:[1,0],2:[0,-1],3:[-1,0]},n=[e];for(let o=1;o<t;o+=1)n.push([e[0]+o*a[r][0],e[1]+o*a[r][1]]);return n}placeRandomFleet(t={destroyer:2,submarine:3,cruiser:3,battleship:4,carrier:5}){Object.entries(t).forEach((([t,e])=>{let r=b.randomShipCoordinate(e);for(;!this.addMoveShip(t,e,r);)r=b.randomShipCoordinate(e)}))}placeShips(){Object.keys(this.ships).forEach((t=>{this.ships[t].coordinates.forEach((e=>{this.board[e[1]][e[0]].ship=this.ships[t].ship}))}))}addMoveShip(t,e,r){if(this.verifyCoordinate(t,r)){const a=new S(e);return this.ships[t]={ship:a,coordinates:[...r]},!0}return!1}receiveAttack(t){const e=this.board[t[1]][t[0]];return!0===e.hasBeenShot?{false:"alreadyTouched",coordinate:[...t]}:(e.hasBeenShot=!0,e.ship?(e.ship.hit(),e.ship.isSunk()?{true:"sunk",coordinate:[...t]}:{true:"touched",coordinate:[...t]}):{true:"missed",coordinate:[...t]})}allShipsSunk(){return Object.keys(this.ships).reduce(((t,e)=>!(!this.ships[e].ship.isSunk()||!1===t)),!0)}verifyCoordinate(t,e){if(e.length<2)return!1;let r=!0;return e.forEach((e=>{e[0]<0||e[1]<0||e[0]>9||e[1]>9?r=!1:Object.keys(this.ships).forEach((a=>{a!==t&&this.ships[a].coordinates.forEach((t=>{t[0]===e[0]&&t[1]===e[1]&&(r=!1)}))}))})),r}}class v{constructor(t="Player"){this.playerBoard=new b,this.computerBoard=new b,this.player=new g(t),this.computer=new g("Computer")}startGame(){this.playerBoard.placeShips(),this.computerBoard.placeRandomFleet(),this.computerBoard.placeShips()}restartGame(){this.playerBoard=new b,this.computerBoard=new b}playPlayerTurn(t){return this.player.attack(this.computerBoard,[...t])}playComputerTurn(){let t=this.computer.attack(this.playerBoard);for(;!t.true;)t=this.computer.attack(this.playerBoard);return t}isGameOver(){return this.computerBoard.allShipsSunk()?this.player:!!this.playerBoard.allShipsSunk()&&this.computer}}!function(){const t=new Image;t.src=r,t.classList.add("play-pause");const n=new Audio(e);n.autoplay=!0,n.loop=!0;let o=!0;document.querySelector("#audio").append(n),document.querySelector("#audio").append(t),t.addEventListener("click",(()=>{!0===o?(n.pause(),o=!1,t.src=a):(n.play(),o=!0,t.src=r)}))}(),document.querySelector(".start-game").addEventListener("click",(()=>{const t=document.querySelector("#player-name").value,e=new v(t);f(e),n(e)}))})();
//# sourceMappingURL=app.bundle.js.map