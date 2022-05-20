function calcul(nb1,nb2,operande){
    let result;
    switch(operande){
        case "+":
            result = nb1+nb2;
            break;
        case "-":
                result = nb1-nb2;
                break;
        case "*":
            result = nb1*nb2;
            break;
        case "/":
            if(nb2 == 0){
                alert('Impossible de diviser par 0');
            } else {
                result = nb1/nb2;
            }
            break;        
    }
    return result;
}

function comparaison(resultat1,resultat2){
    if(resultat1>resultat2){
        alert(resultat1 + " > " + resultat2);
    } else if(resultat1<resultat2){
        alert(resultat1 + " < " + resultat2);
    } else {
        alert(resultat1 + " = " + resultat2);
    }
}


// Exercice 2
let CalculMoyenne = function(nbNote){
    let i = 0;
    let note, result=0;
    let moyenne;
    while(i<nbNote){
        note = parseInt(prompt("Saisir une note "));
        console.log(note);
        if(note<0 || note>20 || isNaN(note)==true){
            alert("Note incorrect");
        } else {
            result = result + note;
            i++;
        }

    }
    moyenne = result/nbNote;
    alert(moyenne);
}