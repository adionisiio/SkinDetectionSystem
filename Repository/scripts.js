// Functionality for Displaying the Inserted Image
function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }

    // Functionality for the backend
    function detectSkinDisease() {
        // Placeholder logic for detecting skin disease
        alert("Skin disease detection functionality will be implemented here!");
        // You can call your backend API to perform the actual detection with the selected image
        // and update the UI with the results.

        //const selectedImage = document.getElementById('selectedImage');
        const fileInput = document.getElementById('upload').files[0];
        const formData = new FormData();

        formData.append('image', fileInput);

        fetch('/detect_skin_disease', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(`Skin disease detected: ${data.result}`);
        // Update UI with the prediction result
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }


}