
var name;
var addres;
var age;
$(document).ready(function() {
  $("form#aboutYou").validator().on('submit', function(event) {
    name = $("#name").val();
    addres = $("#addres").val();
    age = $("#age").val();
    if(!(name === "" && addres === "" && age ==="")){
      $("#aboutYouInfo").toggle('slow');
      $("#surveyQuestionsInfo").toggle('slow');
    }
    event.preventDefault();
  });
  $("form#surveyQuestions").validator().on('submit', function(event) {

    var flag = true;
    var course;
    var hobby = $("#hobby").val();
    var math = $("input:radio[name=math]:checked").val();
    var curious = $("input:radio[name=curious]:checked").val();
    var developer = $("input:radio[name=developer]:checked").val();
    var mathSkills = $("input:radio[name=mathSkills]:checked").val();
    if (!(hobby === "")) {
      if((math === "2" || math === "1") && mathSkills === "1" && developer ==="1"){
        $("#php").hide();
        $("#ruby").hide();
        $("#definitionPL").hide();
        $("#java").show('slow');
        course = "Java";
      }
      else if(curious === "1" && developer === "0"){
        $("#java").hide();
        $("#ruby").hide();
        $("#definitionPL").hide();
        $("#php").show('slow');
        course = "PHP";
      }
      else if(!(math === "0") && developer ==="1" && mathSkills===0){
        $("#php").hide();
        $("#java").hide();
        $("#definitionPL").hide();
        $("#ruby").show('slow');
        course = "Ruby";
      }
      else{
        flag =false;
      }
      $("#myModal").modal('toggle');
      $("#aboutYouInfo").toggle('slow');
      $("#surveyQuestionsInfo").toggle('slow');
      if(flag){
        $(".title").text("Great!!!");
        $(".course").text(name +" we recommend the "+course+" course");
      }
      else {
        $(".title").text("Sorry!!!");
        $(".course").text(name +", we do not currently have a possible answer for you");
      }
      $("#name").val("");
      $("#addres").val("");
      $("#age").val("");
      $("#hobby").val("");
    }
    event.preventDefault();
  });
});
