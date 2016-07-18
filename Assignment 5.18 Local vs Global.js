var shout = function(){

var message = "HEY YOU";

alert(message);

};

shout();

alert(message);

 

/*
When the script is run, the function shout is created. 
Then it is called. Once called it creates a local variable message "Hey you", 
which then alerts the user the message. Once the function shout is complete, 
it jumps back out to the next line of code which is to alert(message). However, 
there is no global variable called message to alert. Therefore an error pops up 
saying that message is undefined. The variable message created before is only 
accessible to the function shout.
*/