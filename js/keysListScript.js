/* get the json object and create the html representation */
$(document).ready(function(){
    keysListObj = JSON.parse(stringifiedKeysList);
    createKeysTable(keysListObj);
})

/* method to get the html for a row given its keyname and keycode
 * @param keyname, keyCode: the texts to display in the table
 * @return: the generated html 
 * */
function generateRowHtml (keyName, keyCode) {
    return `
        <tr>
          <td>${keyName}</td>
          <td>${keyCode}</td>
        </tr>
        `;
}
/* method to generate the keys table given the keys json
 * @param keysObj: the parsed json keys list 
 * @return: none
 * */
function createKeysTable (keysObj) {
    console.log(keysObj);
    /* iterate through each key to generate the html table */
    for (var key in keysObj) {
        if (keysObj.hasOwnProperty(key)) {
            console.log(key + " -> " + keysObj[key]);
            $("tbody").append(generateRowHtml(key, keysObj[key]))
        }
    }

}
