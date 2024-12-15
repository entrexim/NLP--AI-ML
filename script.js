const searchBar = document.getElementById('search-bar');
const suggestionsList = document.getElementById('suggestions');

// Predefined list of suggestions and corresponding images
const suggestionsData = [
  { text: 'A boy plant a plant in the pot', image: '' },
  { text: 'Create a image of flying bat', image: 'bat.jpg' },
  { text: 'make a image of Cat chasing a mouse', image: 'catMouse.png' },
  { text: 'Make a image in which', image: 'https://via.placeholder.com/200x150/008000/ffffff?text=Dog' },
  { text: 'A tank filled with water', image: 'https://via.placeholder.com/200x150/0000ff/ffffff?text=Car' }
];

// Function to update suggestions based on input
searchBar.addEventListener('input', () => {
  const input = searchBar.value.toLowerCase();
  suggestionsList.innerHTML = ''; // Clear previous suggestions

  if (input) {
    // Filter suggestions based on input
    const filteredSuggestions = suggestionsData.filter(item =>
      item.text.toLowerCase().includes(input)
    );

    // Display filtered suggestions
    filteredSuggestions.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.text;
      li.addEventListener('click', () => {
        searchBar.value = item.text;
        suggestionsList.innerHTML = ''; // Clear suggestions
        showLoading(); // Show loading first
        setTimeout(() => showImage(item.image), 3000); // After 5 seconds, show the image
      });
      suggestionsList.appendChild(li);
    });

    suggestionsList.style.display = 'block';
  } else {
    suggestionsList.style.display = 'none';
  }
});

// Function to show loading animation
function showLoading() {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = `<p>Creating your Image! Wait...</p>`; // You can also use a spinner here
}

// Function to show the image in the container
function showImage(imageUrl) {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = `<img src="${imageUrl}" alt="Suggested Image">`;
}

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
  if (!searchBar.contains(e.target) && !suggestionsList.contains(e.target)) {
    suggestionsList.style.display = 'none';
  }
});
