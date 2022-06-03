
let img,imgp;
let precedente = -1;
let attente = 0;
//RECUPERATION DE L'ENSEMBLE DES CARTES
//console.log(document.querySelectorAll("div.cellule"));
document.querySelectorAll("div.cellule").forEach(function(elm,index){
    elm.addEventListener('click',function(e){

        if(attente !=1 && this.firstElementChild.dataset.affichage !="true" && this!=document.querySelector("div#n" + precedente)){
            //this = la cellule en cours ; firstelementchild c'est l'image
            console.log(this);
            img = this.firstElementChild;
            img.style.display = "block";
            if(precedente<0){
                //SLICE PERMET DE SEGMENTER UNE CHAINE
                precedente = (this.id).slice(1,3);
                console.log("Valeur précedente : " + precedente);
            }else{
                //PERMET DE RECUPERER L'IMAGE PRECEDENTE
                imgp = document.querySelector("div#n"+precedente+" img");
                console.log(imgp.src,img.src);
                
                if(imgp.src == img.src){
                    //LES DEUX IMAGES SONT IDENTIQUES
                    console.log("image trouvé");
                    img.dataset.affichage = true;
                    imgp.dataset.affichage = true;
                } else{
                    attente = 1;
                    // IMAGE NON IDENTIQUE
                    setTimeout(cachePhotos,1500);
                    console.log('salut');

                }
                //REMETTRE PRECEDENTE A -1 ME PERMET DE RE-INITIALISER LE COUPLE IMGP IMG CAR SINON
                //IL CONSIDERE QUE IMGP C'EST TOUJOURS LA 1er IMAGE
                precedente = -1;
            }
        } else {
            console.log("ATTENTE = 1 ou image déjà trouvée ou meme case cliquée");
        }
    })
})


//PERMET DE CACHER LES IMAGES 
function cachePhotos(){
    img.style.display = "none";
    imgp.style.display = "none";
    attente = 0;
}


// Cette fonction permet d'intervertir deux images en elles on lance le process 100 fois pour simuler un vrai comportement aléatoire
function initGame(){
    console.log("--DEPART--");
    for(let i=0;i<100;i++){
        //Math.random() donne une variable aleatoire entre 0 et 1 sortant *16   
        //Math ceil -> arrondi entier sup 
        const N1 = Math.ceil(16*Math.random());
        const N2 = Math.ceil(16*Math.random());
        // console.log(i,N1,N2)
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

