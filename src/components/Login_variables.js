function getInput() {
    const word = prompt("Full Name");
    return word
}

export { getInput }

function getSU() {
    const word = prompt("Student Number");
    return word
}

export { getSU }

function getdegree() {
    const word = prompt("Degree: ");
    return word
}

export { getdegree }

function getFaculty() {
    const word = prompt("Faculty: ");
    return word
}

export { getFaculty }


function myFunction(whichOne) {
    if (whichOne == "student") { console.log("Student has beem selected ") }

    else if (whichOne == "tutor") {
        console.log("Tuotor comnpany selected")
    }

    else if (whichOne == "sponsorCompany") {
        console.log("Tuotor comnpany selected")
    }
};

export { myFunction }