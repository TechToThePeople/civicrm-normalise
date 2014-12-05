cj(function($){
  var fields=["#first_name","#last_name","#legal_name"];
  var fieldsAccronym=["#current_employer","#organisation_name","#nick_name"];
  function normalise (dom) {
     var v=$(dom).val();
     if (v == v.toLowerCase()) {
       $(dom).val(v[0].toUpperCase() + v.slice(1));
       
     }
     if (v == v.toUpperCase()) {
       $(dom).val(v[0] + v.slice(1).toLowerCase());
       
     }
     
      var v=$(dom).val();
      idx = v.toLowerCase().indexOf(" and ") ;

     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
      }
     
     
         var v=$(dom).val();
      idx = v.toLowerCase().indexOf(" & ") ;

     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
      }
     
     
      var v=$(dom).val();
      idx = v.toLowerCase().indexOf(" family") ;

     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
      }
      
       var v=$(dom).val();
      idx = v.toLowerCase().indexOf(" household") ;

     if( idx > -1){       
        tmp = v.substring(0, idx );
        $(dom).val(tmp); 
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
