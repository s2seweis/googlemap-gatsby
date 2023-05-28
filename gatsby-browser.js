import "./src/styles/global.css"
// import "./src/styles/main.css"


// here into goes the css connection???


export const onInitialClientRender = () => {
    setTimeout(function() {
        document.getElementById("___loader").style.display = "none"
    }, 200)
}


