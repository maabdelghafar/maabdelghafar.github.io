// Navbar
let navbar = document.getElementById("navigationBar");
let menubtn = document.getElementById("menuBtn");

menubtn.addEventListener("click", function(){
    if(navbar.style.display === "block"){
        navbar.style.display = "none";
        menubtn.innerHTML = "🍉";
    }else{
        navbar.style.display = "block";
        menubtn.innerHTML = "❌";
    }
});


// White Theme

let whiteThemeButton = document.getElementById("whiteTheme");

whiteThemeButton.addEventListener("click", function(){
    if(document.body.classList.contains("white-theme")){
        document.body.classList.remove("white-theme");
        whiteThemeButton.innerHTML = "White Theme";
    }else{
        document.body.classList.add("white-theme");
        whiteThemeButton.innerHTML = "Dark Theme";
    }
});
