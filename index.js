$(document).ready(function () {
  var $body = $('body');

  $.getJSON('data.json', function(array) {

    var $h1 = $('<h1>Welcome</h1>');
    var $link = $('<a target="_blank" id="author-link"></a>');
    var $ul = $('<ul id="pager"></ul>');


    array.forEach(function(item, index) {

      var $li = $('<li>' + (index + 1) + '</li>');

      $li.on('click', function() {
        $h1.text(item.title);
        $body
          .css('background-image', 'url('+item.src+')');
        $link
          .text('Photos by ' + item.author)
          .attr('href', item.link)

        $("li").removeClass("active");
        $(this).addClass("active");

      });

      $("#prev").on("click", function(){

      });

      $("#next").on("click", function(){

      });

      if(index === 0){
        $li.trigger("click");
      }
      $ul.append($li);
    });

    $('body').append($h1, $ul, $link)
  });

});


