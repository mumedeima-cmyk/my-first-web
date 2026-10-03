document.getElementById("resultForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;

    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let Agricultural Science = Number(document.getElementById("science").value);
    let Home Economics = Number(document.getElementById("science").value);
    let Basic Technology = Number(document.getElementById("science").value);
    let Computer Studies = Number(document.getElementById("science").value);
    let Business Studues = Number(document.getElementById("science").value);
    let History = Number(document.getElementById("science").value);
    let Literature In English = Number(document.getElementById("science").value);
    let Cultural And Creative Art = Number(document.getElementById("science").value);
    let Social Studues = Number(document.getElementById("science").value);
    let Christian Religious Studues = Number(document.getElementById("science").value);
    let Civic = Number(document.getElementById("science").value);
    let Physical And Health Education= Number(document.getElementById("science").value);

    let total = math + english + science + Agricultural Science + Home Economics + Basic Technology + Computer Studies + Business Studues + History + Literature In English + Cultural And Creative Art + Social Studues + Christian Religious Studues + Civic + Physical And Health Education;

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



