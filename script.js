const API_KEY = "31spobJRGeyMp1Lqt1JbLUerBODImlQAacChSpam"

const fetchApod = (url) => fetchResult = fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then(response => response.json())

const apodComponent = (title, imgUrl, date, explanation) => `
    <div class="apod">
        <h2>${title}</h2>
        <img src=${imgUrl} />
        <input type="date" value=${date} min="1995-06-16" max=${date} onkeydown="return false"/>
        <p class="explanation">${explanation}</p>
    </div>
`

const makeDomFromData = (data, rootElement, component) => {
    rootElement.insertAdjacentHTML("beforeend", component(data.title, data.hdurl, data.date, data.explanation))
}

const init = () => {
    fetchApod()
        .then(data => {
            console.log(data)

            makeDomFromData(data, document.querySelector("#root"), apodComponent)

            const inputElement = document.querySelector("input")
            inputElement.addEventListener("input", () => {
                console.dir(inputElement.value)
            })
        })
}

init()