/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var j = 3;
for (i = 0; i < 10; i++, j=j+2) {
    console.log("Entering For");
    j = j+3;
    if (j>10) {
        //break;
        continue;
        //console.log("Executing continue statement");
    }
    console.log("Leaving For");
}