cj(function($){
  var fields=["#first_name","#last_name","#legal_name"];
  var fieldsAccronym=["#current_employer","#organisation_name","#nick_name"];
  function normalise (dom) {
     var v=$(dom).val();
     if (v == v.toLowerCase()) {
       $(dom).val(v[0].toUpperCase() + v.slice(1));
       return;
     }
     if (v == v.toUpperCase()) {
       $(dom).val(v[0] + v.slice(1).toLowerCase());
       return;
     }
  }

  $.each(fields,function(i,field){
    $(field).blur(function(){
      normalise(this);
     }).keyup(function(event) {
       var v=$(this).val();
       if (v.length == 1 && v == v.toLowerCase())
         $(this).val(v.toUpperCase());
    });
  });
});
