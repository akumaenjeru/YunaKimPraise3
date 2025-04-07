// Array of fanatical praises for Yuna Kim
const praises = [
    "Yuna Kim doesn't just skate; she commands the ice with the grace of a deity!",
    "Witnessing a Yuna Kim performance is like glimpsing pure, unadulterated perfection in motion.",
    "Gravity itself bends to the will of Queen Yuna on the ice!",
    "Every glide, every jump, every spin by Yuna Kim is a masterpiece etched onto the ice.",
    "Is Yuna Kim even human? Or a celestial being sent to show us the true meaning of elegance?",
    "The world simply stops and holds its breath when Yuna Kim takes the ice. Absolute legend.",
    "Her artistry isn't just learned; it flows from a source of pure, divine inspiration. That's Yuna!",
    "Forget physics; Yuna Kim operates on a higher plane of existence when she skates.",
    "Trying to describe Yuna Kim's skating with words is futile. It's an experience that transcends language.",
    "She didn't just win medals; she captured the hearts of the entire universe with her sublime talent.",
    "Yuna Kim's programs aren't routines; they are epic sagas told through breathtaking movement.",
    "The ice trembles in reverence before Queen Yuna even steps onto it.",
    "There's figure skating, and then there's YUNA KIM figure skating. They are not the same.",
    "Her edges are sharper than reality, her spins faster than lightspeed! Long live Queen Yuna!",
    "If angels could skate, they would aspire to move like Yuna Kim.",
    "Yuna Kim's impact isn't just on sport, it's on the very fabric of beauty and human potential.",
    "Each performance is a gift to humanity. We are blessed to have witnessed Yuna's reign.",
    "The benchmark for perfection in figure skating has a name: Yuna Kim.",
    "She floats like a dream and jumps like a Valkyrie. The incomparable Yuna!",
    "Listening to the music while watching Yuna is redundant; her skating IS the music."
];

// Get references to the button and the display area
const generateButton = document.getElementById('generate-button');
const praiseDisplay = document.getElementById('praise-display');

// Make the praise display visible initially (after elements are loaded)
// We use window.onload to ensure styles are applied before triggering transition
window.onload = () => {
    praiseDisplay.classList.add('visible');
};

// Add event listener to the button
generateButton.addEventListener('click', () => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * praises.length);

    // Get the random praise
    const randomPraise = praises[randomIndex];

    // --- Animation Enhancement (Optional but nice) ---
    // 1. Fade out briefly
    praiseDisplay.style.opacity = '0';
    praiseDisplay.style.transform = 'translateY(-5px)'; // Slight move up

    // 2. Wait for fade out, then change text and fade back in
    setTimeout(() => {
        praiseDisplay.textContent = randomPraise;
        praiseDisplay.style.opacity = '1';
        praiseDisplay.style.transform = 'translateY(0)'; // Move back down
    }, 300); // Should be half of the CSS transition duration (0.6s / 2 = 0.3s = 300ms)
    // --- End Animation Enhancement ---

    // Original way (simpler, just updates text):
    // praiseDisplay.textContent = randomPraise;
    // Make sure it stays visible (it should already have the class)
    // praiseDisplay.classList.add('visible');
});