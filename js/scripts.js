$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    const genderPref = $("#gender").val();
    const agePref = $("input:radio[name=age-range]:checked").val();
    $("#output").show();

    if (agePref === "range1" && genderPref === "male") {
      $("#ron-weasley").show();
    }
    else if (agePref === "range1" && genderPref === "female") {
      $("#princess-leia").show();
    }
    else {
      $("#or").show();
      $("#or").append("OR")
      $("#ron-weasley").show();
      $("#princess-leia").show();
    }
  });
});