function showArticle(id) {
    // hide all articles
    document.querySelectorAll("article").forEach(article => {
        article.classList.remove("active");
    });
    // show the clicked one
    document.getElementById(id).classList.add("active");
}

// Add spinning globe
window.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // Create globe container
    const globeContainer = document.createElement('div');
    globeContainer.style.position = 'absolute';
    globeContainer.style.right = '12%';
    globeContainer.style.top = '50%';
    globeContainer.style.transform = 'translateY(-50%)';
    globeContainer.style.width = '190px';
    globeContainer.style.height = '190px';
    globeContainer.style.display = 'flex';
    globeContainer.style.alignItems = 'center';
    globeContainer.style.justifyContent = 'center';
    
    // Create globe element
    const globe = document.createElement('div');
    globe.textContent = '🌍';
    globe.style.fontSize = '190px';
    globe.style.filter = 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.6))';
    
    // Add globe to container
    globeContainer.appendChild(globe);
    header.appendChild(globeContainer);
    
    // Animate spinning
    let rotation = 0;
    function spinGlobe() {
        rotation += 1;
        globe.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(spinGlobe);
    }
    spinGlobe();
});