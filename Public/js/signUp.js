$("#isSitter").on("change", function(e){
    if(e.target.value === "1"){
        $("#animalTypes").show();
    } else {
        $("#animalTypes").hide();
    }
});