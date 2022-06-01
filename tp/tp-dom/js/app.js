// Cette fonction permet d'intervertir deux images en elles on lance le process 100 fois pour simuler un vrai comportement aléatoire
function initGame(){
    console.log("--DEPART--");
    for(let i=0;i<1000;i++){
        //Math.random() donne une variable aleatoire entre 0 et 1 sortant *16   
        //Math ceil -> arrondi entier sup 
        const N1 = Math.ceil(16*Math.random());
        const N2 = Math.ceil(16*Math.random());
        console.log(i,N1,N2)
        // Recupère enfant
        let img1 = document.querySelector("div#n"+N1+" img");
        let img2 = document.querySelector("div#n"+N2+" img");
        //INVERSION DE img 1 vers img 2
        const SRC1 = img1.src;
        const SRC2 = img2.src;
        img1.src = SRC2;
        img2.src = SRC1;
    }
}