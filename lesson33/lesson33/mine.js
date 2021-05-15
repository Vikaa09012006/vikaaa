// alert(0||0)
// let x =prompt("Введите время")
// if(x < 10 || x > 18)
// {alert("Магазин не работает")}
// else{alert("Магазин открыт")}
// alert((1)||(Vika))
// alert(null||(1))
// alert(null||(0))
// alert(null||0||1)
// alert((Vika)||(1))
// let x =prompt("Введите время")
// if( x > 10 && x < 18 )
//     {alert("Магазин работает")}
//     else{alert("Магазин закрыт")}  
// alert("Vika" && 0)
// alert(1 && 2 && null && 3)
// alert(Boolean(null))
// alert(alert(1)||2||alert(3))
alert("Start")
let a prompt("Кто ты")
if (a = "" || a != "Админ") {
    alert("Вас зарегистрировать")
    let a =prompt("Введите ваш пароль")
}
else if (a = "Админ") {
    let c = prompt("Введите свой пароль")
    if (c = "123") {
        alert("Здравствуйте")
    }
    else if(c != "123") {
        alert("Неверный пароль")
    }
    else {
        alert("Ты не админ")
    }
}