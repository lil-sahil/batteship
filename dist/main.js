(()=>{"use strict";let e=()=>{let e={rows:[0,1,2,3,4,5,6,7,8,9].length,cols:[0,1,2,3,4,5,6,7,8,9].length},t=[],r={},o=e=>0===e.filter((e=>{if("-"===e)return e})).length;return{createGameboard:()=>{for(let t=0;t<e.rows;t++)r[`row_${t}`]=Array(e.cols).fill("");return r},placeShip:(t,i,n,l=horizontal)=>{let a=n.shipInfo.shipLength;if(!((t,i,n,l)=>{let a=[];if("vertical"==l){if(t+n>e.cols)return!1;for(let e=t;e<t+n;e++)a.push(r[`row_${e}`][i]);return!!o(a)}if("horizontal"===l){if(i+n>e.rows)return!1;for(let e=i;e<i+n;e++)a.push(r[`row_${t}`][e]);return!!o(a)}})(t,i,a,l))return!1;if("horizontal"===l){let e=r[`row_${t}`];r[`row_${t}`]=e.map(((e,r)=>r>=i&&r<i+a?(n.addShipCoordinate([t,r]),"-"):""))}else if("vertical"===l)for(let e=t;e<t+a;e++)r[`row_${e}`][i]="-",n.addShipCoordinate([e,i]);return r},attack:(e,r,o)=>{for(let o of t)if(o[0]===e&&o[1]===r)return!1;for(let t of o)for(let o of t.shipInfo.shipCoordinates)o[0]===e&&o[1]===r&&t.recieveAttack();t.push([e,r])},spotsPlayed:t,allSunk:e=>!(e.reduce(((e,t)=>!0===t.shipInfo.isSunk?e+1:!1===t.shipInfo.isSunk?e-1:void 0),0)<=0)}},t=e=>{let t={shipLength:e,isSunk:!1,shipCoordinates:[],hitsTaken:0},r=()=>t.hitsTaken>=e&&(t.isSunk=!0,!0);return{shipInfo:t,addShipCoordinate:e=>{t.shipCoordinates.push(e)},isSunk:r,recieveAttack:()=>{t.hitsTaken+=1,r()}}},r=e=>e[Math.floor(Math.random()*e.length)],o=(e,o)=>{let i=[];return{ships:i,initialSetUp:()=>(i=(()=>{for(let e in{carrier:5,Battleship:4,Cruiser:3,Submarine:3,Destroyer:2})i.push(t({carrier:5,Battleship:4,Cruiser:3,Submarine:3,Destroyer:2}[e]));return i})(),(()=>{if(e)for(let e of i){let t=r([0,1,2,3,4,5,6,7,8,9]),i=r([0,1,2,3,4,5,6,7,8,9]),n=r(["horizontal","vertical"]);for(;!1===o.placeShip(t,i,e,n);)t=r([0,1,2,3,4,5,6,7,8,9]),i=r([0,1,2,3,4,5,6,7,8,9]),n=r(["horizontal","vertical"])}})(),!0)}},i=document.querySelector("section#title"),n=(document.querySelector(".main-container"),document.querySelector("section#player-one")),l=document.querySelector("section#player-two"),a=(document.querySelector("section > #information"),{renderComponent:()=>{i.appendChild((()=>{let e=document.createElement("div");return e.textContent="BattleShip",e})())}}),s=(()=>{let e=()=>{let e=document.createElement("div");e.classList.add("gameboard");let t=[0,1,2,3,4,5,6,7,8,9],r=[0,1,2,3,4,5,6,7,8,9];for(let o of t)for(let t of r){let r=document.createElement("div");r.classList.add("gameboard-cell"),r.setAttribute("data-row",o),r.setAttribute("data-col",t),e.appendChild(r)}return e};return{renderComponent:()=>{n.appendChild(e()),l.appendChild(e())}}})();(()=>{a.renderComponent(),s.renderComponent();let t=e(),r=e();t.createGameboard(),r.createGameboard();let i=o(!0,t),n=o(!0,r);i.initialSetUp(),n.initialSetUp()})()})();