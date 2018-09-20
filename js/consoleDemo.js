var options = {
  strings: ["<i>First</i> sentence."],
  typeSpeed: 40
}

$(document).ready(function(){
    /* call animation demos */
    firstDemoFirst();
    secondDemo();
})

/* function to animate the first demo, specifically
 * the first part where it prints System.out.println();
 * */
function firstDemoFirst () {
    new Typed("#demo1", {
        strings: ["System.out.println(<span id='insideLog'></span>);"],
        contentType: 'html',
        typeSpeed: 40,
        startDelay: 1000,
        backDelay: 2000,
        loop: true,
        onComplete: function(self) {
            $(".typed-cursor").remove();
            firstDemoSecond();
        }
    });
}
/* function to animate the first demo, specifically
 * the second part where it prints "hi" inside the print statement
 * */
function firstDemoSecond () {
    new Typed("#insideLog", {
        strings: ["'hello world'"],
        typeSpeed: 40,
        backDelay: 2000,
        callback: function(self) {
            console.log("done") 
        }
    });
}

/* function for the second demo, two liner for main function */
function secondDemo () { 
    new Typed("#demo2", {
        strings: ["public static void main (String args[]) {\n  }"],
        typeSpeed: 40,
        backDelay: 2000,
        loop: true,
        callback: function(self) {
            console.log("done") 
        }
    });
}
