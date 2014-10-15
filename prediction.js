$(document).ready(function(){
  console.log("ready");
  $.ajax({
    url:"http://webservices.nextbus.com/service/publicXMLFeed?command=predictions&a=mbta&stopId=6204", 
    dataType: 'xml'
  }).success(function(data){
    console.log(data);
    var body =$(data).find("body")
    $predictions = body.find("predictions");
    $predictions.each(function(){
      var title = $(this).attr("routeTitle");
      $("#predictions").append("<h4>"+title+"</h4><br/>");
      var minutes = $(this).find("prediction");
      console.log(minutes.length)
      minutes.each(function(index,element){
        if(index>2){
          return false;
        }
        var minute_prediction = $(this).attr("minutes");
        console.log($(element), index)
        $("#predictions").append("<span>"+minute_prediction+" </span>");
      })

      console.log(title);
    })
    // console.log($predictions);
  })
})
