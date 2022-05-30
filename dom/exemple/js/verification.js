let verif = function(){
    document.getElementById("form_connexion").addEventListener("submit",function(e){
        e.preventDefault();
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



    });
}