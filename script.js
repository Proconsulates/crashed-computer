//hide the easter egg
$("#egggif").hide();
    
//easter egg
var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
  jQuery('#egggif').fadeIn(500, function() {
    window.setTimeout(function() { jQuery('#egggif').hide(); }, 10000);
  });
}).listen();

//hide the easter egg
$(".btn").hide();

//loading in the new website that actually isn't a new website
var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
  jQuery('#warn').fadeOut(500, function() {
  });

  jQuery('.btn').fadeIn(1000, function() {
  });
}).listen();

//2nd easter egg hidden
$("#trick").hide();
    
//2nd easter egg
var egg = new Egg("h,e,l,p", function() {
  jQuery('#trick').fadeIn(500, function() {
    window.setTimeout(function() { jQuery('#trick').hide(); }, 10000);
  });

  jQuery('.btn').fadeOut(500, function() {
  });
}).listen();

//hide the gifs
$(".crashed").hide();

//crashed computer
var egg = new Egg("h,e,l,p", function() {
  jQuery('.crashed').fadeIn(10000, function() {
  });
}).listen();