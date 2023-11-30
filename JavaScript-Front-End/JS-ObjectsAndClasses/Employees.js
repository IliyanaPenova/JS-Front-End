function jsObjects(input){
    input.forEach(employee => {
        const employeeName=employee;
        const personalNumber=employee.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`);
    });
}
jsObjects([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )