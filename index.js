// Add your code here
document.addEventListener("DOMContentLoaded", () => {
    // Call the submitData function with sample data
    submitData("John Doe", "john.doe@example.com");
  });
  
  function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(data => appendUserId(data.id))
      .catch(error => appendErrorMessage(error.message));
  }
  
  function appendUserId(id) {
    const userIdElement = document.createElement("p");
    userIdElement.textContent = `User ID: ${id}`;
    document.body.appendChild(userIdElement);
  }
  
  function appendErrorMessage(errorMessage) {
    const errorElement = document.createElement("p");
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
  }