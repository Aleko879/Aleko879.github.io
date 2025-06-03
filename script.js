function solve() {
    let a = +document.querySelector('.a').value 
    let b = +document.querySelector('.b').value 
    let c = +document.querySelector('.c').value 

    d = b*b-4*a*c
    sqrt_d = Math.round(Math.sqrt(d)*100)/100
    let d_field = document.querySelector('.d')
    d_field.innerHTML = "D = b<sup>2</sup> - 4·a·c ="
    d_field.innerHTML += `${b}<sup>2</sup> - 4 * ${a} * ${c} = ${d}`
    if (d < 0){
        d_field.innerHTML += " < 0 - Рациональных корней нет"
        d_field.style.display = 'flex'
        return

    }

    let x1 = document.querySelector('.x1')
    x1.innerHTML = `\\( x_1 = \\frac{-b + \\sqrt{D}}{2a} = \\frac{${-b} + ${sqrt_d}}{2*${a}} = ${((-b+sqrt_d)/(2*a)).toFixed(2)}\\)`           

    let x2 = document.querySelector('.x2')
    x2.innerHTML = `\\( x_2 = \\frac{-b - \\sqrt{D}}{2a} = \\frac{${-b} - ${sqrt_d}}{2*${a}} = ${((-b-sqrt_d)/(2*a)).toFixed(2)}\\)`
    MathJax.typeset()
    d_field.style.display = 'flex'
    x1.style.display ='flex'
    x2.style.display ='flex'
}

let button = document.querySelector('.button')
button.addEventListener('click', solve)





