const left=document.querySelector(".left");
const right=document.querySelector(".right");
const slider=document.querySelector(".slider");
const images = document.querySelectorAll(".images");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
   const length = images.length;

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*300}px)`;
    slideNumber++;  
};  

const getfirstSlide = ()=>{ slider.style.transform = `translateX(0px)`;
    slideNumber=1;
};

const lastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*300}px)`;
    slideNumber=length; 
};
  
const prevSlide = ()=>{ slider.style.transform = `translateX(-${(slideNumber-2)*300}px)`;
slideNumber--;
};


for( let i=0; i < length; i++){
    const div=document.createElement("div");
    div.className="btn";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".btn");
buttons[0].style.backgroundColor = "white";

const btncolor = ()=> {
    buttons.forEach((btn)=> {
        btn.style.backgroundColor = "transparent"
    });
};

buttons.forEach((btn, i)=>{
    btn.addEventListener("click",()=>{
        btncolor()
        slider.style.transform = `translateX(-${i*300}px)`
        slideNumber = i + 1;
        
        btn.style.backgroundColor = "white"
    })  
}); 

const changeColor = ()=>{
    btncolor()
    buttons[slideNumber-1].style.backgroundColor = "white";
}

right.addEventListener("click", ()=>{ 
  slideNumber < length ? nextSlide() : getfirstSlide();
  changeColor();
});

left.addEventListener("click",()=>{
    slideNumber > 1 ? prevSlide() : lastSlide(); 
    // slideNumber == length ? prevSlide() : prevSlide();
    changeColor();
});

