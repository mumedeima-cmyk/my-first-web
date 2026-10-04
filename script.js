document.getElementById("resultForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;

    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let agriculturalScience = Number(document.getElementById("agriculturalScience").value);
let homeEconomics = Number(document.getElementById("homeEconomics").value);
let basicTechnology = Number(document.getElementById("basicTechnology").value);
let computerStudies = Number(document.getElementById("computerStudies").value);
let businessStudies = Number(document.getElementById("businessStudies").value);
let history = Number(document.getElementById("history").value);
let literatureInEnglish = Number(document.getElementById("literature").value);
let culturalCreativeArt = Number(document.getElementById("culturalCreativeArt").value);
let socialStudies = Number(document.getElementById("socialStudies").value);
let christianReligiousStudies = Number(document.getElementById("christianReligiousStudies").value);
let civicEducation = Number(document.getElementById("civicEducation").value);
let physicalHealthEducation = Number(document.getElementById("physicalHealthEducation").value);

let total =
    math +
    english +
    science +
    agriculturalScience +
    homeEconomics +
    basicTechnology +
    computerStudies +
    businessStudies +
    history +
    literatureInEnglish +
    culturalCreativeArt +
    socialStudies +
    christianReligiousStudies +
    civicEducation +
    physicalHealthEducation;

    let average = total / 15;

    let grade;

    if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B";
    } else if (average >= 50) {
        grade = "C";
    } else if (average >= 45) {
        grade = "D";
    } else if (average >= 40) {
        grade = "E";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `
        <h2>Result</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});



