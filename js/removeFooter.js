//the message to replace the watermark with
var newFooterMsg = "2018 Speech to Command";
/* remove the mkdocs footer watermark */
$(document).ready(function(){
    $("p:contains('Documentation built with')").html(newFooterMsg)
});
