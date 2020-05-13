let URLNew = "https://restcountries.eu/rest/v2/all";
const root = document.getElementById("root");
const searchC = document.getElementById("searchInput");
let AllData;

function setup(URL) {
    fetch(URLNew)
        .then((response) => {return response.json();})
        .then((data) => {AllData = data; select(data);});
}
function makePageForCountries(data){
    removersFirstPage();
    data.forEach(element => {
            countries = document.createElement("div");
        const imageCountry = document.createElement("img");
        const nameCountry = document.createElement("h2");
        const population = document.createElement("p");
        region = document.createElement("p");
        const capital = document.createElement("p");

        root.appendChild(countries);
        countries.appendChild(imageCountry);
        countries.appendChild(nameCountry);
        countries.appendChild(population);
        countries.appendChild(region);
        countries.appendChild(capital);

        nameCountry.classList.add("nameC");
        region.classList.add("region");
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
    bTn.classList.add("btn");
    bTn.type = "Button";
    bTn.innerText = "Back";
    
    bTn.addEventListener(`click` , function(){
        removeSecundPage();
        bTn.style.display = `none`;
        setup();
    });
    const form2 = document.createElement(`form`);
    root.appendChild(form2);
    form2.classList.add(`form2`);
    form2.appendChild(bTn);
    const countriesImg = document.createElement("div");
    const imageCountry = document.createElement("img");

    const countriesInfo = document.createElement("div");
    const nameCountry2 = document.createElement("h2");

    const countriesC = document.createElement("div");
    const population = document.createElement("p");
    const region2 = document.createElement("p");
    const capital = document.createElement("p");

    const countriesD = document.createElement("div");
    const capital2 = document.createElement("p");
    const capital3 = document.createElement("p");
    const capital4 = document.createElement("p");

    const countriesA = document.createElement("div");
    const nameB = document.createElement("p");

    imageCountry.classList.add("big-image");
    countriesInfo.classList.add("countries-info");
    region2.classList.add("region2");
// appendchild the element //
    bTn.appendChild(countriesImg);
    form2.appendChild(countriesInfo);
 
    countriesImg.appendChild(imageCountry);

    countriesInfo.appendChild(nameCountry2);

    countriesInfo.appendChild(countriesA);

    countriesA.appendChild(countriesC);
    countriesC.appendChild(population);
    countriesC.appendChild(region2);
    countriesC.appendChild(capital);

    countriesA.appendChild(countriesD);
    countriesD.appendChild(capital2);
    countriesD.appendChild(capital3);
    countriesD.appendChild(capital4);

    countriesInfo.appendChild(nameB);
    
    imageCountry.src = element.flag;
    nameCountry2.innerText = element.name;
    capital.innerText = `Native Name : ${element.nativeName};`;
    population.innerText = `Population :${element.population}`;
    region2.innerText = `Region : ${element.region}`;
    capital2.innerText = `Top Level Domain : ${element.topLevelDomain}`;
    capital3.innerText = `Time Zones : ${element.timezones}`;
    capital4.innerText = `Currencies : ${element.currencies[0].name}`;
    nameB.innerText = `Borders with :`;
    if (element.borders.length === 0){nameB.innerHTML+= " The country does Not have any borders"}
        console.log(element.borders.length);
    for (let i = 0 ; i < element.borders.length ; i ++){
        console.log(element.borders[i]);
        const button = document.createElement("button");
        button.classList.add("btn2");
        AllData.forEach((name) => {
            if (element.borders[i] === name.alpha3Code){
                button.innerText = `${name.name}`;
                button.addEventListener(`click` , function(){
                    removeSecundPage();
                    makeCountry(name);
                });
                console.log(name.name)}
        });
        nameB.appendChild(button);
    }
    

}
function search(){

    const name = document.querySelectorAll(".countries");
    console.log(name);
    let lowCase = searchC.value.toLowerCase();
    Array.from(name).forEach((element) => {
        let cCharacter = element.textContent.toLowerCase();
        if (cCharacter.indexOf(lowCase) != -1) {
            countries.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }); 
}
searchC.addEventListener("input", search);

const dropL = document.getElementById("dropdowns");

function select(data){
    if (dropL.value === "-- All Region --"){
        makePageForCountries(data);
    }
    else{
        let selectX = dropL.value;
        const z = data.filter(element => element.region === selectX );
        makePageForCountries(z);
    }
}
dropL.addEventListener("change", setup);

function removersFirstPage(){
    let countryList = document.querySelectorAll(".countries");
    Array.from(countryList).forEach((opt) => opt.remove());
}
function removeSecundPage(){
    let countryList1 = document.querySelectorAll(".form2");
    Array.from(countryList1).forEach((opt) => opt.remove());
}
window.onload = setup;
