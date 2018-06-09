/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    console.log('Hello Rigo from the console!');
    document.querySelector('.error').style.display = "none";
    
    var first ='A ';
    var adj = ['two headed ','nuclear ','angry '];
    var noun =['jogger ','racoon ','dog '];
    var action = ['took my ', 'threw my ','yelled at ','kicked my '];
    var posetion = ['toe ','car ','watch ','shoe '];
    var where = ['on the street ','in my house ','in my driveway ','infront of the office '];
    
    var radj = Math.floor(Math.random() * adj.length);
    var rnoun = Math.floor(Math.random() * noun.length);
    var raction = Math.floor(Math.random() * action.length);
    var rposetion = Math.floor(Math.random() * posetion.length);
    var rwhere = Math.floor(Math.random() * where.length);
    
    var finalSentence = first + adj[radj] + noun[rnoun] + action[raction] + posetion[rposetion] + where[rwhere];
    document.querySelector('#excuse').innerHTML = finalSentence;
    
};