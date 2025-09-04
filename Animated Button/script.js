const button = document.querySelector('.premium-button');
const particleContainer = document.querySelector('.particle-system');

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    particleContainer.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, 5000);
}

// Continuous particle generation
setInterval(createParticle, 300);

// Enhanced hover effects
button.addEventListener('mouseenter', () => {
    // Increase particle generation on hover
    const hoverInterval = setInterval(createParticle, 50);
    
    button.addEventListener('mouseleave', () => {
        clearInterval(hoverInterval);
    }, { once: true });
});

function handleClick() {
    // Enhanced click effect
    button.style.transform = 'translateY(-5px) scale(1.05)';
    button.style.boxShadow = `
        0 0 60px rgba(255, 0, 110, 1),
        0 0 120px rgba(131, 56, 236, 0.8),
        0 0 180px rgba(58, 134, 255, 0.6)
    `;
    
    setTimeout(() => {
        button.style.transform = '';
        button.style.boxShadow = '';
    }, 200);
    
    // Create explosion effect
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createParticle(), i * 20);
    }
    
    console.log('Premium button activated!');
}

// Add random energy pulses
function createEnergyRing() {
    const ring = document.createElement('div');
    ring.className = 'energy-ring';
    ring.style.borderTopColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`;
    document.querySelector('.container').appendChild(ring);
    
    setTimeout(() => {
        ring.remove();
    }, 3000);
}

setInterval(createEnergyRing, 4000);
