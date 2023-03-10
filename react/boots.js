//xu ly nut saearch
var search_bt = document.querySelector(".bt1")
var input_search = document.querySelector(".input")
var close = document.querySelector(".close")

search_bt.addEventListener("click",function(){
    input_search.classList.remove("hide")
    close.classList.remove("hide")
    search_bt.classList.add("hide")
    
})

close.addEventListener("click",function(){
    input_search.classList.add("hide")
    close.classList.add("hide")
    search_bt.classList.remove("hide")
 

})

//xu ly dark mode
var light = document.querySelector(".list-sun")
var all = document.querySelector(".all")
var dark = document.querySelector(".list-moon")
var header = document.querySelector(".header")
var search_bt = document.querySelector(".search-bt")
var bag_bt = document.querySelector(".bag-bt")
var user_bt = document.querySelector(".user-bt")
var more_bt = document.querySelector(".more-bt")
var st_menu = document.querySelector(".st-menu")
var st_ul = document.querySelector(".st-ul")

dark.addEventListener("click",function(){
    dark.classList.add("hide")
    light.classList.remove("hide")
    all.classList.add("dark-mode")
    header.classList.add("dark-mode")
    search_bt.classList.add("dark-mode")
    bag_bt.classList.add("dark-mode")
    user_bt.classList.add("dark-mode")
    more_bt.classList.add("dark-mode")
    st_menu.classList.add("st-menu-dark")
    st_ul.classList.add("st-ul-dark")
})

light.addEventListener("click",function(){
    light.classList.add("hide")
    dark.classList.remove("hide")
    all.classList.remove("dark-mode")
    header.classList.remove("dark-mode")
    search_bt.classList.remove("dark-mode")
    bag_bt.classList.remove("dark-mode")
    user_bt.classList.remove("dark-mode")
    more_bt.classList.remove("dark-mode")
    st_menu.classList.remove("st-menu-dark")
    st_ul.classList.remove("st-ul-dark")
})


// Xu ly rating

var star_1 = document.querySelector(".ct6-star-1")
var star_2 = document.querySelector(".ct6-star-2")
var star_3 = document.querySelector(".ct6-star-3")
var star_4 = document.querySelector(".ct6-star-4")
var star_5 = document.querySelector(".ct6-star-5")
var star_6 = document.querySelector(".ct6-star-6")
var star_7 = document.querySelector(".ct6-star-7")
var star_8 = document.querySelector(".ct6-star-8")
var star_9 = document.querySelector(".ct6-star-9")
var star_10 = document.querySelector(".ct6-star-10")
var ct6_fb = document.querySelector(".fb")
var ct6_imoji_1 = document.querySelector(".ct6-imoji-1")
var ct6_imoji_2 = document.querySelector(".ct6-imoji-2")

var ct6_close = document.querySelector(".ct6-close")


star_1.addEventListener("click",function(){
    star_1.classList.add("ct6-hide")
    star_2.classList.remove("ct6-hide")
    ct6_close.classList.remove("ct6-hide")
    ct6_fb.innerHTML = "Oh 1 sao, mình sẽ cố gắng hoàn thiện web hơn nữa !"
    ct6_imoji_1.innerHTML = "   <i class='bx bx-dizzy'></i>  "
    ct6_imoji_2.innerHTML = "  <i class='bx bxs-dizzy' ></i>  "
})

star_3.addEventListener("click",function(){
    star_3.classList.add("ct6-hide")
    star_4.classList.remove("ct6-hide")
    star_1.classList.add("ct6-hide")
    star_2.classList.remove("ct6-hide")
    ct6_close.classList.remove("ct6-hide")
    ct6_fb.innerHTML = "2 sao, mình sẽ cố gắng hoàn thiện web hơn nữa !"
    ct6_imoji_1.innerHTML = "   <i class='bx bx-meh'></i>  "
    ct6_imoji_2.innerHTML = "   <i class='bx bxs-meh' ></i>  "
})

star_5.addEventListener("click",function(){
    star_3.classList.add("ct6-hide")
    star_4.classList.remove("ct6-hide")
    star_1.classList.add("ct6-hide")
    star_2.classList.remove("ct6-hide")
    star_5.classList.add("ct6-hide")
    star_6.classList.remove("ct6-hide")
    ct6_close.classList.remove("ct6-hide")
    ct6_fb.innerHTML = "3 sao, có vẻ khá ổn !"
    ct6_imoji_1.innerHTML = "  <i class='bx bx-happy' ></i>  "
    ct6_imoji_2.innerHTML = "   <i class='bx bxs-happy' ></i>  "
})

star_7.addEventListener("click",function(){
    star_3.classList.add("ct6-hide")
    star_4.classList.remove("ct6-hide")
    star_1.classList.add("ct6-hide")
    star_2.classList.remove("ct6-hide")
    star_5.classList.add("ct6-hide")
    star_6.classList.remove("ct6-hide")
    star_7.classList.add("ct6-hide")
    star_8.classList.remove("ct6-hide")
    ct6_close.classList.remove("ct6-hide")
    ct6_fb.innerHTML = "4 sao, bạn thích nó !"
    ct6_imoji_1.innerHTML = "  <i class='bx bx-happy-beaming' ></i>  "
    ct6_imoji_2.innerHTML = "   <i class='bx bxs-happy-beaming' ></i>  "
})

star_9.addEventListener("click",function(){
    star_3.classList.add("ct6-hide")
    star_4.classList.remove("ct6-hide")
    star_1.classList.add("ct6-hide")
    star_2.classList.remove("ct6-hide")
    star_5.classList.add("ct6-hide")
    star_6.classList.remove("ct6-hide")
    star_7.classList.add("ct6-hide")
    star_8.classList.remove("ct6-hide")
    star_9.classList.add("ct6-hide")
    star_10.classList.remove("ct6-hide")
    ct6_close.classList.remove("ct6-hide")
    ct6_fb.innerHTML = "Thật tuyệt vời, bạn đã đánh giá trang web 5 sao"
    ct6_imoji_1.innerHTML = "  <i class='bx bx-happy-heart-eyes' ></i>  "
    ct6_imoji_2.innerHTML = "   <i class='bx bx-party' ></i>  "
})

ct6_close.addEventListener("click",function(){
    star_1.classList.remove("ct6-hide")
    star_2.classList.add("ct6-hide")
    star_3.classList.remove("ct6-hide")
    star_4.classList.add("ct6-hide")
    star_5.classList.remove("ct6-hide")
    star_6.classList.add("ct6-hide")
    star_7.classList.remove("ct6-hide")
    star_8.classList.add("ct6-hide")
    star_9.classList.remove("ct6-hide")
    star_10.classList.add("ct6-hide")
    ct6_close.classList.add("ct6-hide")
    ct6_fb.innerHTML = "Ấn icon sao để rating"
    ct6_imoji_1.innerHTML = "   <i class='bx bx-ghost'></i>  "
    ct6_imoji_2.innerHTML = "  <i class='bx bxs-ghost' ></i>  "
})

//xu ly menu More
var setting = document.querySelector(".setting")
var more = document.querySelector(".more-bt")
var st_close = document.querySelector(".st-close")
var st_login_bt = document.querySelector(".st-login-bt")
var st_a_rs = document.querySelector(".st-a")
var st_sign_up = document.querySelector(".st-sign-up-bt")

more.addEventListener("click",function(){
    setting.classList.remove("st-hide")
})

st_close.addEventListener("click",function(){
    setting.classList.add("st-hide")
})

st_login_bt.addEventListener("click",function(){
    login.classList.remove("lg-hide")
    setting.classList.add("st-hide")
})

st_a_rs.addEventListener("click",function(){
    register.classList.remove("rs-hide")
    setting.classList.add("st-hide")
})

st_sign_up.addEventListener("click",function(){
    register.classList.remove("rs-hide")
    setting.classList.add("st-hide")
})


//xu ly bag bt
var bag_content = document.querySelector(".bag-content")
var bag_close = document.querySelector(".bag-close")
var bag_bt = document.querySelector(".bag-bt")
var bag_bt1 = document.querySelector(".bag-bt1")
var st_icon_bag = document.querySelector(".st-icon-bag")

bag_close.addEventListener("click",function(){
    bag_content.classList.add("bag-hide")
})

bag_bt.addEventListener("click",function(){
    bag_content.classList.remove("bag-hide")
})

bag_bt1.addEventListener("click",function(){
    bag_content.classList.add("bag-hide")
})


st_icon_bag.addEventListener("click",function(){
    setting.classList.add("st-hide")
    bag_content.classList.remove("bag-hide")
})


//xu ly login
var login_bt = document.querySelector(".user-bt")
var login = document.querySelector(".login")
var lg_close = document.querySelector(".lg-close")
var lg_a = document.querySelector(".lg-a")


login_bt.addEventListener("click",function(){
    login.classList.remove("lg-hide")
})

lg_a.addEventListener("click",function(){
    register.classList.remove("rs-hide")
    login.classList.add("lg-hide")
})

lg_close.addEventListener("click",function(){
    login.classList.add("lg-hide")
})

//xu ly dang nhap (Login)
var lg_mail = document.querySelector(".lg-mail")
var lg_pass = document.querySelector(".lg-pass")
var lg_form = document.querySelector(".lg-form")

//ham hien thi loi
function showError(input,mes){
    let parent = input.parentElement
    let small = parent.querySelector("small")

    parent.classList.add("error")
    small.innerText = mes
}

//ham show success
function showSuccess(input){
    let parent = input.parentElement
    let small = parent.querySelector("small")

    parent.classList.remove("error")
    small.innerText = " "
}

//ham check thong tin neu de trong
function checkNull(listArr){
    let emptyError = false
    listArr.forEach(input => {
        input.value = input.value.trim();

        if(!input.value){
            emptyError = true
            showError(input,"Bạn đang để trống !")
        }else{
            showSuccess(input)
        }
    });
    return emptyError;
}

//ham check mail
function checkMail(input){
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()
    let mailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess
    }else{
        showError(input,"Hãy nhập với đuôi là ...@gmail.com")
    }
    return mailError;
}

//ham check do dai mat khau
function checkLength(input,min,max){
    input.value = input.value.trim()

    if(input.value.length<min || input.value.length>max){
        showError(input,`Mật khẩu từ ${min} đến ${max} `)
        return true;
    }
}



//chay cac function o tren va submit
lg_form.addEventListener("submit",function(e){
    e.preventDefault();

    let emptyError =  checkNull([lg_mail,lg_pass]);
    let mailerror = checkMail(lg_mail);
    let lengthError = checkLength(lg_pass,4,16);
    
})




//xu ly register
var rs_close = document.querySelector(".rs-close")
var register = document.querySelector(".register")

rs_close.addEventListener("click",function(){
    register.classList.add("rs-hide")
})






//xu ly register
var rs_user = document.querySelector(".rs-user")
var rs_mail = document.querySelector(".rs-mail")
var rs_pass1 = document.querySelector(".rs-pass1")
var rs_pass2 = document.querySelector(".rs-pass2")
var rs_form = document.querySelector(".rs-form")

//ham show loi
function rs_show_error(input,mes){
    let parent = input.parentElement
    let small = parent.querySelector("small")

    parent.classList.add("error")
    small.innerText = mes
}


//ham show accep
function rs_show_success(input,mes){
    let parent = input.parentElement
    let small = parent.querySelector("small")

    parent.classList.remove("error")
    small.innerText = ""
}

//ham check do dai
function rs_check_length(input,min,max){
    input.value = input.value.trim()

    if(input.value.length<min || input.value.length>max){
        rs_show_error(input,`Mật khẩu từ ${min} đến ${max} `)
        return true;
    }
}

//ham check NULL
function rs_null(listArr){
    let nullError = false;
    listArr.forEach(input =>{
        input.value = input.value.trim()

        if(!input.value){
            nullError =true;
            rs_show_error(input,"Bạn đang để trống !")
        }else{
            rs_show_success(input)
        }
    });
    return nullError;
}

function rs_email(input){
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let mailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        rs_show_success
    }else{
        rs_show_error(input,"Mail phải có đuôi là ...@gmail.com")
    }
    return mailError;
}

function rs_pass(pass1,pass2){
    if(pass1.value != pass2.value){
        rs_show_error(rs_pass2,"Mật khẩu không trùng khớp")
        return true;
    }
    return false;
}




rs_form.addEventListener("submit",function(e){
    e.preventDefault();

    let rs_check_empty = rs_null([rs_user,rs_mail,rs_pass1,rs_pass2])
    let rs_length_error =  rs_check_length(rs_user,5,30)
    let rs_check_mail = rs_email(rs_mail)
    let rs_check_pass = rs_check_length(rs_pass1,4,16)
    let rs_same_pass = rs_pass(rs_pass1,rs_pass2)

})




