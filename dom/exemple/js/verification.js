let verif = function(){
    document.getElementById("form_connexion").addEventListener("submit",function(e){
         e.preventDefault();
        let erreur = "";
        let regex_nombre = /^[a-zA-Z]{2,}$/;
        //VERIFIER EMAIL
        console.log(this.email.value);
        //VERIFIER PAR AUTRE
        console.log(document.forms["form_connexion"].elements["email"].value);
        if(regex_nombre.test(this.email.value)){
            console.log("PLUS DE 2 CARACTERES");
        } else {
            console.log("MOINS de 2 caracteres ou ce n'est pas des lettres");
        }
        //VERIFICATION SI CHAMPS INPUT VIDE
        if(this.email.value==""){
            console.log('MAIL VIDE');
        } else {
            console.log('MAIL NON VIDE');
        }
        //VERIFICATION SI CASE CHECKBOX EST COCHE (QUAND UNIQUE)
        if(this.remember.checked)
            console.log("Case coché");
         else 
            console.log("case non coché");
        
        //VERIFICATION BOUTON RADIO
        this.optradio.forEach(function(elm,index){
            if(elm.checked==true){
                console.log(elm.value);
            }
        });

        //VERIFICATION PLUSIEURS CASES A COCHER
        console.log(this.check);
        this.check.forEach(function(elm,index){
            if(elm.checked==true){
                console.log(elm.value);
            }
        });


        //VERIFICATION SELECT
        console.log(this.elements['sel1'].selectedIndex, this.elements['sel1'].value)
        //VALIDATION FORMULAIRE
        this.submit();
    });
}