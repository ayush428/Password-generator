const generateButton = document.getElementById("genBtn")

// let password = document.getElementById("input").value;

function generate(){
    
    let data = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_{}[]<>/"
    let Passwordlength = document.getElementById("slider").value;
    password = ""
    
    for (let i = 0; i <= Passwordlength ; i ++)
    {
        let number = Math.floor(Math.random() * data.length)
        password += data.substring(number, number + 1)
        
    }
    document.getElementById("input").value = password;
}

function copy(){
    var copied = document.getElementById("input");
    
    copied.select();
    document.execCommand("copy");

    

}
generateButton.addEventListener('click', () => generate())