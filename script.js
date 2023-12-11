let weight = Number(prompt('Please enter your weight in kg'))
let height = Number(prompt('Please enter your height in metres'))
let index = weight/(height*2)



if (index < 18.5) {
   result.innerHTML = 'You are below your ideal weight.'
} else if (index >= 18.6 && index <= 24.9) {
    result.innerHTML ='You are at your ideal weight.'
} else if (index >= 25 && index <= 29.9) {
    result.innerHTML = 'You are above your ideal weight'
} else if (index >= 30 && index <= 39.9) {
    result.innerHTML ='You are way above your ideal weight. (obese)'
} else if (index >= 40) {
    result.innerHTML ='You are way above your ideal weight. (morbidly obese)'
}