// Sample Profile Data
const profiles = [
    { id: 1, name: "John Doe", role: "Software Engineer", location: "New York", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Jane Smith", role: "UX Designer", location: "Los Angeles", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Michael Johnson", role: "Data Scientist", location: "San Francisco", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Emily Brown", role: "Project Manager", location: "Seattle", image: "https://via.placeholder.com/150" }
];

// Render Profiles
const profileContainer = document.getElementById("profile-container");

function renderProfiles(filterText = "") {
    profileContainer.innerHTML = ""; // Clear existing profiles
    profiles
        .filter(profile => profile.name.toLowerCase().includes(filterText.toLowerCase())) // Filter based on search
        .forEach(profile => {
            const profileCard = document.createElement("div");
            profileCard.classList.add("profile-card");
            profileCard.innerHTML = `
                <img src="${profile.image}" alt="${profile.name}" class="profile-pic">
                <h3>${profile.name}</h3>
                <p>${profile.role}</p>
                <p class="location">${profile.location}</p>
                <button class="details-btn" onclick="showProfileDetails(${profile.id})">View Details</button>
            `;
            profileContainer.appendChild(profileCard);
        });
}

// Handle Search
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (e) => {
    renderProfiles(e.target.value);
});

// Show Profile Details (Popup)
function showProfileDetails(id) {
    const profile = profiles.find(p => p.id === id);
    if (profile) {
        alert(`Name: ${profile.name}\nRole: ${profile.role}\nLocation: ${profile.location}`);
    }
}

// Initialize Profiles
renderProfiles();
