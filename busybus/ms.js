$(document).ready(function() {
    $('#first-bus').click(function() {
     $(this).text($(this).text() == '2 mins' ? 'Every 20 mins' : '2 mins');
   });

    $('#second-bus').click(function() {
     $(this).text($(this).text() == '7 mins' ? 'Every 10 mins' : '7 mins');
    });

    $('#third-bus').click(function() {
      $(this).text($(this).text() == '8 mins' ? 'Every 15 mins' : '8 mins');
    });

    $('#fourth-bus').click(function() {
      $(this).text($(this).text() == '10 mins' ? 'Every 16 mins' : '10 mins');
    });

    $('#fifth-bus').click(function() {
      $(this).text($(this).text() == '15 mins' ? 'Every 10 mins' : '15 mins');
    });
  });
