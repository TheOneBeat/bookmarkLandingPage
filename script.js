let burger = document.querySelector('.burger');//burger menu
let ul = document.querySelector('.nav_links');//list of links
let nav = document.querySelector('nav');//nav

let onglets = document.querySelectorAll('.onglet');//onglets
let images = document.querySelector('.active_image');//image
let contenu = document.querySelectorAll('.text_container');//
let index = 0;
let tab_img = ["./images/illustration-features-tab-1.svg",
"./images/illustration-features-tab-2.svg","./images/illustration-features-tab-3.svg"]

burger.addEventListener('click',()=>{//the action of the burger menu
    burger.classList.toggle('active_burger');
    ul.classList.toggle('nav_active');
    ul.classList.toggle('appear');
    nav.classList.toggle('active');
})

onglets.forEach(e=>{//the action on each onglet
    e.addEventListener('click',function(){
        if (e.classList.contains('actual_onglet')){
            return;
        }else{
            e.classList.add('actual_onglet');
        }


        index = e.getAttribute('data-set');

        

        for (let i=0;i<onglets.length;i++){
            if (onglets[i].getAttribute('data-set') === index){
                contenu[i].classList.add('text_active');
            }else{
                onglets[i].classList.remove('actual_onglet');
                contenu[i].classList.remove('text_active');

            }
        }

        for (let j=0;j<onglets.length;j++){
            if (onglets[j].getAttribute('data-set') === index){
                images.setAttribute("src",tab_img[j])
            }
        }
    })

    
})

let tab_btns = document.querySelectorAll('.faq_contain .faq_btn');

tab_btns.forEach(e=>{//the action on each button
    e.addEventListener('click',function(){
        the_p = this.parentNode.parentNode.childNodes[3];

        if (the_p.classList.contains('active_paragraph')){
            this.style.transform='rotate(0deg)';
            the_p.classList.remove('active_paragraph');
            gsap.to(the_p,{duration:0.3, height:0,opacity:0});
        }else{
            this.style.transform='rotate(180deg)';
            the_p.classList.add('active_paragraph');
            gsap.to(the_p,{duration:0.3, height:'auto',opacity:1});
        }
    })
})

let form = document.querySelector('form');
let the_input =document.getElementById('the_input');//the input
let small = document.querySelector('small');//the error message
let form_img = document.querySelector('form img');//the error image

form.addEventListener('submit',e=>{
    e.preventDefault();

    const input_value = the_input.value.trim();
    if (input_value==''){
        small.innerText='email can not be blank';
        small.classList.add('active_small');
        form_img.classList.remove('error');

    }else if(!(is_correct(input_value))){
        small.innerText='invalid email';
        small.classList.add('active_small');
        form_img.classList.remove('error');
    }else{
        small.innerText="";
        small.classList.remove('active_small');
        form_img.classList.add('error');
    }
})


function is_correct(e){
    let regex = /^[^@]+@[^@]+\.(com|fr)$/gi;
    return regex.test(e);
}
