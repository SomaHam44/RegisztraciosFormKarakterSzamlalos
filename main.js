function karaktereketSzamolNev() {
    let felhasznaloNev = document.getElementById("fNev").value;
    let nevHossz = document.getElementById("fNev").value.length;
    let maxNevHossz = 20;
    if (felhasznaloNev.length > 20) {
        document.getElementById("karakterszamlaloNev").innerHTML =  " " + nevHossz + " / " + maxNevHossz;
        document.getElementById("karakterszamlaloNev").style.color = "red";
    } else {
        document.getElementById("karakterszamlaloNev").innerHTML =  "  " + nevHossz + " / " + maxNevHossz;
        document.getElementById("karakterszamlaloNev").style.color = "black";

    }


}

function karaktereketSzamolJelszo() {
    let jelszo = document.getElementById("jelszo").value;
    let jelszoHossz = document.getElementById("jelszo").value.length;
    let minJelszoHossz = 8;
    if (jelszo.length < 8) {
        document.getElementById("karakterSzamJelszo").innerHTML =  " " + jelszoHossz + " / " + minJelszoHossz;
        document.getElementById("karakterSzamJelszo").style.color = "red";
    } else {
        document.getElementById("karakterSzamJelszo").innerHTML =  "  " + jelszoHossz + " / " + minJelszoHossz;
        document.getElementById("karakterSzamJelszo").style.color = "black";

    }
    
}

function jelszoUjra() {
    let jelszo1 = document.getElementById("jelszo").value;
    let jelszo2 = document.getElementById("jelszoIsmet").value;
    if (jelszo1 != jelszo2) {
        document.getElementById("hibauzenet").innerHTML = " Nem egyezik meg a két jelszó";
    }
    else {
        document.getElementById("hibauzenet").innerHTML = "";
    }
    
}

function regisztralasraKattinto() {
    let nev = document.getElementById("fNev").value;
    let jelszo = document.getElementById("jelszo").value;
    let jelszoMegint = document.getElementById("jelszoIsmet").value;
    if (nev.length > 20 || jelszo.length < 8 || jelszoMegint.length < 8 || jelszo != jelszoMegint) {
        document.getElementById("fNev").value = nev;
    }
   
}

function regisztralasraKattintasSikeres() {
    let nev = document.getElementById("fNev").value;
    let jelszo = document.getElementById("jelszo").value;
    let jelszoMegint = document.getElementById("jelszoIsmet").value;
    if (nev.length < 20 && jelszo.length >= 8 && jelszoMegint.length >= 8 && jelszo == jelszoMegint) {
        /*document.getElementById("siker").innerHTML = "Sikeres regisztráció";*/
        setTimeout(sikeres, 2000);
        
    }


}

function sikeres() {
    document.getElementById("siker").innerHTML = "Sikeres regisztráció";
}








function init() {
    document.getElementById("fNev").addEventListener("input", karaktereketSzamolNev);
    document.getElementById("jelszo").addEventListener("input", karaktereketSzamolJelszo);
    document.getElementById("jelszo").addEventListener("change", jelszoUjra);
    document.getElementById("jelszoIsmet").addEventListener("change", jelszoUjra);
    document.getElementById("regisztracio").addEventListener("click", regisztralasraKattinto);
    document.getElementById("regisztracio").addEventListener("click", regisztralasraKattintasSikeres);
}


document.addEventListener("DOMContentLoaded", init);