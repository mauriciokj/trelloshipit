$(document).ready(function(){
  shipit()
});


shipit = function(){
  var elements = $("a:contains(shipit)");

  $shipit=$('<div class="shipit" style="background-image: url(http://oi60.tinypic.com/sll5av.jpg)"/>');
  $shipit.text("Ship It!").attr({title: "Ship It!"}).prependTo(elements);
}

