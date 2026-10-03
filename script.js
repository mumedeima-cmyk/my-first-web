document.getElementById("resultForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("studentName").value;

    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let science = Number(document.getElementById("science").value);
    let agricultural science = Number(document.getElementById("science").value);
    let home economics = Number(document.getElementById("science").value);
    let basic technology = Number(document.getElementById("science").value);
    let computer studies = Number(document.getElementById("science").value);
    let business studues = Number(document.getElementById("science").value);
    let history = Number(document.getElementById("science").value);
    let literature in english = Number(document.getElementById("science").value);
    let cultural and creative art = Number(document.getElementById("science").value);
    let social studues = Number(document.getElementById("science").value);
    let christian religious studues = Number(document.getElementById("science").value);
    let civic = Number(document.getElementById("science").value);
    let physical and health education= Number(document.getElementById("science").value);

    let total = math + english + science + agricultural science + home economics + basic technology + computer studies + business studues + history + literature in english + cultural and creative art + social studues + christian religious studues + civic + physical and health education;


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



