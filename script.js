let URLNew = "https://restcountries.eu/rest/v2/all";
const root = document.getElementById("root");
const searchC = document.getElementById("searchInput");
function setup(URL) {
    fetch(URLNew)
        .then((response) => {return response.json();})
        .then((data) => {makePageForCountries(data);});
}
function makePageForCountries(data){
    data.forEach(element => {
            countries = document.createElement("div");
        const imageCountry = document.createElement("img");
        const nameCountry = document.createElement("h2");
        const population = document.createElement("p");
        const region = document.createElement("p");
        const capital = document.createElement("p");

        root.appendChild(countries);
        countries.appendChild(imageCountry);
        countries.appendChild(nameCountry);
        countries.appendChild(population);
        countries.appendChild(region);
        countries.appendChild(capital);

        countries.classList.add("countries");
        imageCountry.classList.add("image");

        imageCountry.src = element.flag;
        nameCountry.innerText = element.name;
        population.innerText = `Population :${element.population}`;
        region.innerText = `Region : ${element.region}`;
        capital.innerText = `Capital : ${element.capital}`;
        imageCountry.addEventListener("click", function(){
            makeCountry(element);
        });
    });
}

function makeCountry(element){
    removersFirstPage();
    const bTn = document.createElement("button");
    bTn.nativeName = `Back`;
    root.appendChild(bTn);
    bTn.addEventListener(`click` , function(){
        removeSecundPage();
        bTn.style.display = `none`;
        setup();
    });
    const form2 = document.createElement(`form`);
    root.appendChild(form2);
    form2.classList.add(`form2`);
    const countriesImg = document.createElement("div");
    const imageCountry = document.createElement("img");

    const countriesInfo = document.createElement("div");
        nameCountry = document.createElement("h2");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const capital = document.createElement("p");
    const capital2 = document.createElement("p");
    const capital3 = document.createElement("p");
    const capital4 = document.createElement("p");

    const countriesB = document.createElement("div");
    const nameB = document.createElement("p");

    form2.appendChild(countriesImg);
    form2.appendChild(countriesInfo);
    form2.appendChild(countriesB);
    countriesImg.appendChild(imageCountry);
    countriesInfo.appendChild(nameCountry);
    countriesInfo.appendChild(population);
    countriesInfo.appendChild(region);
    countriesInfo.appendChild(capital);
    countriesInfo.appendChild(capital2);
    countriesInfo.appendChild(capital3);
    countriesInfo.appendChild(capital4);
    countriesB.appendChild(nameB);
    

    imageCountry.classList.add("big-image");
    countriesInfo.classList.add("countries-info");
    countriesB.classList.add("countries-b");

    imageCountry.src = element.flag;
    nameCountry.innerText = element.name;
    capital.innerText =   `Native Name : ${element.nativeName};`;
    population.innerText = `Population :${element.population}`;
    region.innerText = `Region : ${element.region}`;
    capital2.innerText = `Top Level Domain : ${element.topLevelDomain}`;
    capital3.innerText = `Time Zones : ${element.timezones}`;
    capital4.innerText = `Currencies : ${element.currencies[0].name}`;
    nameB.innerText = `Borders with : ${element.borders}`;
}
function search(){
    const name = document.querySelectorAll(".countries");
    let lowCase = searchC.value.toLowerCase();
    Array.from(name).forEach((element) => {
        let cCharacter = element.textContent.toLowerCase();
        if (cCharacter.indexOf(lowCase) != -1) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }); 
}
searchC.addEventListener("input", search);




function removersFirstPage(){
    let countryList = document.querySelectorAll(".countries");
    Array.from(countryList).forEach((opt) => opt.remove());
}
function removeSecundPage(){
    let countryList1 = document.querySelectorAll(".form2");
    Array.from(countryList1).forEach((opt) => opt.remove());
}
window.onload = setup;
