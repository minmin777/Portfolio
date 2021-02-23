console.log("It's working")

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for(let i = 0; themeDots.length> i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('Option clicked', mode);
        setTheme(mode)
    })
}

function setTheme(mode){
    let cssFile = 'default.css'
    if(mode === 'light'){
        cssFile = 'default.css';
    }else if(mode === 'blue'){
        cssFile = 'blue.css';
    }else if(mode === 'green'){
        cssFile = 'green.css'
    }else if(mode === 'purple'){
        cssFile = 'purple.css'
    }

    console.log("1", document.getElementById('theme-style'))

    document.getElementById('theme-style').href = cssFile

    console.log("2", document.getElementById('theme-style'))

    localStorage.setItem('theme', mode)
}