const E1date = document.getElementById("date");
const E1btn = document.getElementById("btn");
const E1result = document.getElementById("result");

function calculateage() {
    const birthdayvalue = E1date.value;
    if (birthdayvalue === "") {
        alert("please enter the your birthday");
    } else {
        const age = getAge(birthdayvalue);
        E1result.innerText = `your age is ${age} ${age>1 ? "years":"year"} old`;
    }
}

function getAge(birthdayvalue) {
    const newdate = new Date();
    const takedate = new Date(birthdayvalue);
    let age = newdate.getFullYear() - takedate.getFullYear();
    let month = newdate.getMonth() - takedate.getMonth();
    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }
    return age;
}
E1btn.addEventListener("click", calculateage);