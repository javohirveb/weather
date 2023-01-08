const KEY = '3ac12b405b2c16b233ac4878cbeea892'
// bu mening kalitim. Agar o'zingiz olsangiz va ishlamasa buni ishlating.
// Agar ishlamay qolsa unda 1 soatda so'rovlar soni limitdan oshib ketgan bo'ladi.
// Aloqa: Telegram => @akror_web


// request get data
const getData = async (city) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const req = await fetch(base + query)
    const data = await req.json()
    loader(false)
    return data
}
