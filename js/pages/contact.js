(function(){
  var form=document.getElementById('contactForm'), ok=document.getElementById('formAlert');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!form.checkValidity()){e.stopPropagation();form.classList.add('was-validated');return;}
    // TODO: yahan apna backend / API / EmailJS call jodein
    ok.classList.remove('d-none'); form.reset(); form.classList.remove('was-validated');
    ok.scrollIntoView({behavior:'smooth',block:'center'});
  });
  document.getElementById('phone').addEventListener('input',function(){this.value=this.value.replace(/\D/g,'').slice(0,10);});
})();
