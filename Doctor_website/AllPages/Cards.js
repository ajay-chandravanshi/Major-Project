const resetData = async () => {

    let url = 'http://localhost:3000/Docter';
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();
    console.log(data);
    pegination(data)
}
let pegination=(data)=>{
    $('#paging').pagination({
        dataSource: data,
        pageSize: 4,
        callback: function(data, pagination) {
            displayData(data)
        }
    })
}

const displayData =(data)=>{
    let show = document.querySelector("#Display");
    show.innerHTML='';
    data.map((item) => {
        show.innerHTML += `
        <div id="cards">
            <h2 id="nameshow">${item.name}</h2>
            <div id="Details">
                <div id="everyDetails">
                    <strong id="datam">Age</strong><strong class="move id="age">${item.age}</strong>
                </div>
                <div id="everyDetails">
                    <strong id="datam">Email</strong><strong class="move id="email">${item.email}</strong>
                </div>
                <div id="everyDetails">
                    <strong id="datam">Number</strong><strong class="move id="number">${item.phone}</strong>
                </div>
                <div id="everyDetails">
                    <strong id="datam">Date</strong><strong class="move id="date">${item.date}</strong>
                </div>
                <div id="everyDetails">
                    <strong id="datam">Time</strong><strong class="move id="time">${item.time}</strong>
                </div>
                <div id="everyDetails">
                    <strong id="datam">Problem</strong><strong class="move id="problem">${item.problem}</strong>
                </div>
              
            </div>
            <div id="Buttondiv">
                <button id="Deletes" onclick="deleteBtn('${item.id}')">Delete</button>
                <button id="Edits" onclick="EditChangeData('${item.id}')">Edit</button>
            </div>
        </div>`;
    });
};

// Delete Vala Part hai Ye
const deleteBtn = (id) => {
    let url = `http://localhost:3000/Docter/${id}`;
    fetch(url, { method: "DELETE" })
};


// Form Se Booking Vala Part hai
const insertData = async () => {
    let inpName = document.querySelector("#patient-name").value;
    let inpAge = document.querySelector("#age").value;
    let inpEmail = document.querySelector("#email").value;
    let inpPhone = document.querySelector("#phone").value;
    let inpDate = document.querySelector("#appointment-date").value;
    let inpTime = document.querySelector("#appointment-time").value;
    let inpDepartment = document.querySelector("#department").value;

    let url = `http://localhost:3000/Docter`;


        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: inpName,
                age: inpAge,
                email: inpEmail,
                phone: inpPhone,
                date: inpDate,
                time: inpTime,
                problem: inpDepartment
            }),
        });

        if (response.ok) {
            location.href = "Cards.html";
        } else {
            alert("Failed to book appointment. Please try again.");
        }

    return false;
};

// YeEdit Change Karne Vala Section hai
const EditChangeData = async (id) => {
    let url = `http://localhost:3000/Docter/${id}`;
    let res = await fetch(url);
    let data = await res.json();

    let dataFill = `
        <div id="booking-container">
            <form id="booking-form">
                <div id="form-group-name" class="form-group">
                    <input type="text" id="painame" name="patient-name" 
                        placeholder="Enter your name" value="${data.name}" required>
                </div>
                <div id="form-group-email" class="form-group">
                    <input type="number" id="paiage" name="age" 
                        placeholder="Enter your age:" value="${data.age}" required>
                </div>
                <div id="form-group-email" class="form-group">
                    <input type="email" id="paiemail" name="email" 
                        placeholder="Enter your email" value="${data.email}" required>
                </div>
                <div id="form-group-phone" class="form-group">
                    <input type="tel" id="paiNumber" name="phone" 
                        placeholder="Enter your phone number" value="${data.phone}" required>
                </div>
                <div id="form-group-date" class="form-group">
                    <input type="date" id="paidate" name="appointment-date" 
                        value="${data.date}" required>
                </div>
                <div id="form-group-time" class="form-group">
                    <input type="time" id="paitime" name="appointment-time" 
                        value="${data.time || ''}" required>
                </div>
                <div id="form-group-department" class="form-group">
                    <select id="paidepartment" name="department" required>
                        <option value="">Select Department</option>
                        <option value="general" ${data.problem === "general" ? "selected" : ""}>General Medicine</option>
                        <option value="pediatrics" ${data.problem === "pediatrics" ? "selected" : ""}>Pediatrics</option>
                        <option value="orthopedics" ${data.problem === "orthopedics" ? "selected" : ""}>Orthopedics</option>
                        <option value="cardiology" ${data.problem === "cardiology" ? "selected" : ""}>Cardiology</option>
                    </select>
                </div>
                <input type="button" value="Update Data" id="submit-button" 
                    onclick="FinalSubmit('${id}')">
            </form>
        </div>
    `;

    document.querySelector("#formDatass").innerHTML = dataFill;
};

const FinalSubmit = async (id) => {
    let userName = document.querySelector("#painame").value;
    let userAge = document.querySelector("#paiage").value;
    let userNumber = document.querySelector("#paiNumber").value;
    let userEmail = document.querySelector("#paiemail").value;
    let userTime = document.querySelector("#paitime").value;
    let userDate = document.querySelector("#paidate").value;
    let userProblem = document.querySelector("#paidepartment").value;

    let url = `http://localhost:3000/Docter/${id}`;
    let response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            name: userName,
            age: userAge,
            email: userEmail,
            phone: userNumber,
            date: userDate,
            time: userTime,
            problem: userProblem
        })
    });

    if (response.ok) {
        alert("Data updated successfully!");
    } else {
        alert("Failed to update data. Please try again.");
    }
};

