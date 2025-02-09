function openModal(title, images) {
    const modalTitle = document.getElementById("modalTitle");
    const modalImageContainer = document.getElementById("modalImageContainer");

    // Set modal title
    modalTitle.textContent = title;

    // Clear previous images
    modalImageContainer.innerHTML = "";

    // Add new images
    images.forEach(imageSrc => {
        let img = document.createElement("img");
        img.src = imageSrc;
        img.alt = title;
        img.classList.add("modal-image"); // Optional styling class
        img.style.width = "100%"; // Ensure images fit container width
        modalImageContainer.appendChild(img);
    });

    // Show modal
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

function filterProjects(category) {
    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {
        const projectCategory = project.getAttribute("data-category");

        if (category === "All" || projectCategory === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    
    // Add active class to the clicked button
    event.target.classList.add("active");
}
