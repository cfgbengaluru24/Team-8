document.getElementById('numMembers').addEventListener('input', function() {
    const numMembers = document.getElementById('numMembers').value;
    const memberIDContainer = document.getElementById('memberIDContainer');

    // Clear previous inputs
    memberIDContainer.innerHTML = '';

    // Create new inputs
    for (let i = 1; i <= numMembers; i++) {
        const div = document.createElement('div');
        div.className = 'member-id-container';

        const label = document.createElement('label');
        label.textContent = `Member ID ${i}:`;
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `memberID${i}`;
        input.id = `memberID${i}`;
        input.required = true;

        div.appendChild(label);
        div.appendChild(input);
        memberIDContainer.appendChild(div);
    }
});

document.getElementById('shgForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const numMembers = document.getElementById('numMembers').value;
    const memberIDs = [];

    for (let i = 1; i <= numMembers; i++) {
        const memberID = document.getElementById(`memberID${i}`).value;
        memberIDs.push(memberID);
    }

    const formData = {
        groupName: document.getElementById('groupName').value,
        numMembers: numMembers,
        memberIDs: memberIDs,
        leaderName: document.getElementById('leaderName').value,
        location: document.getElementById('location').value,
        bankFunds: document.getElementById('bankFunds').value,
        currentLoans: document.getElementById('currentLoans').value,
        businessMembers: document.getElementById('businessMembers').value
    };

    console.log('Form Data Submitted:', formData);

    alert('Survey Submitted Successfully!');

    // Clear the form after submission
    document.getElementById('shgForm').reset();
    document.getElementById('memberIDContainer').innerHTML = '';
});
