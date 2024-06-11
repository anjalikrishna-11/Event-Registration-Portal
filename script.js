// U35346496
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm'); // Get the form element
    const displayArea = document.getElementById('displayArea'); // Get the display area element

    // Prevent form from submitting and refreshing the page
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields
        const name = document.getElementById('name').value.trim(); // Get and trim the name value
        const email = document.getElementById('email').value.trim(); // Get and trim the email value
        const eventDate = document.getElementById('eventDate').value; // Get the selected event date
        const preferences = Array.from(document.querySelectorAll('input[name="preference"]:checked')).map(checkbox => checkbox.value); // Get selected preferences

        if (!name || !email || !eventDate || preferences.length === 0) {
            alert('Please fill out all fields and select at least one preference.'); // Alert if any field is empty
            return;
        }
      
