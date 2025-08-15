// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const breedSearch = document.getElementById('breedSearch');
const sizeFilter = document.getElementById('sizeFilter');
const groupFilter = document.getElementById('groupFilter');
const breedGrid = document.getElementById('breedGrid');
const quizBtn = document.getElementById('quizBtn');
const quizModal = document.getElementById('quizModal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const breedModal = document.getElementById('breedModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const restartQuiz = document.getElementById('restartQuiz');
const contactForm = document.getElementById('contactForm');
const currentYearElements = document.querySelectorAll('#current-year');

// Dog Breed Data
// (Removed duplicate dogBreeds declaration to fix redeclaration error)


// DOM Elements
// Dog Breed Data (completed with all 25 breeds)
const dogBreeds = [
    {
        id: 1,
        name: "Golden Retriever",
        image: "golden-retriever.jpg",
        description: "Friendly, intelligent, and devoted.",
        fullDescription: "The Golden Retriever is a friendly, intelligent, and devoted dog breed known for its loving nature and beautiful golden coat.",
        size: "large",
        group: "sporting",
        temperament: "friendly, intelligent, devoted",
        lifespan: "10-12 years",
        goodWith: "children, other pets",
        energy: 4,
        grooming: "medium",
        sound: "golden-retriever-bark.mp3"
    },
    {
        id: 2,
        name: "Labrador Retriever",
        image: "labrador-retriever.jpg",
        description: "Outgoing, even-tempered, and gentle.",
        fullDescription: "The Labrador Retriever is an outgoing, even-tempered, and gentle dog breed, popular as a family pet and working dog.",
        size: "large",
        group: "sporting",
        temperament: "outgoing, even-tempered, gentle",
        lifespan: "10-12 years",
        goodWith: "children, other pets",
        energy: 4,
        grooming: "low",
        sound: "labrador-bark.mp3"
    },
    {
        id: 3,
        name: "Beagle",
        image: "beagle.jpg",
        description: "Curious, friendly, and merry.",
        fullDescription: "The Beagle is a curious, friendly, and merry dog breed, known for its excellent sense of smell and tracking instincts.",
        size: "medium",
        group: "hound",
        temperament: "curious, friendly, merry",
        lifespan: "12-15 years",
        goodWith: "children, other pets",
        energy: 4,
        grooming: "low",
        sound: "beagle-bark.mp3"
    },
    {
        id: 4,
        name: "Bulldog",
        image: "bulldog.jpg",
        description: "Calm, courageous, and friendly.",
        fullDescription: "The Bulldog is a calm, courageous, and friendly dog breed, recognized for its distinctive wrinkled face and muscular build.",
        size: "medium",
        group: "non-sporting",
        temperament: "calm, courageous, friendly",
        lifespan: "8-10 years",
        goodWith: "children, other pets",
        energy: 2,
        grooming: "medium",
        sound: "bulldog-bark.mp3"
    },
    {
        id: 5,
        name: "Poodle",
        image: "poodle.jpg",
        description: "Active, proud, and very smart.",
        fullDescription: "The Poodle is an active, proud, and very smart dog breed, known for its curly coat and high intelligence.",
        size: "medium",
        group: "non-sporting",
        temperament: "active, proud, smart",
        lifespan: "12-15 years",
        goodWith: "children, other pets",
        energy: 4,
        grooming: "high",
        sound: "poodle-bark.mp3"
    },
    {
        id: 6,
        name: "German Shepherd",
        image: "german-shepherd.jpg",
        description: "Confident, courageous, and smart.",
        fullDescription: "The German Shepherd is a confident, courageous, and smart dog breed, widely used in police and military roles.",
        size: "large",
        group: "herding",
        temperament: "confident, courageous, smart",
        lifespan: "9-13 years",
        goodWith: "children, other pets",
        energy: 5,
        grooming: "medium",
        sound: "german-shepherd-bark.mp3"
    },
    {
        id: 7,
        name: "Dachshund",
        image: "dachshund.jpg",
        description: "Spunky, curious, and friendly.",
        fullDescription: "The Dachshund is a spunky, curious, and friendly dog breed, known for its long body and short legs.",
        size: "small",
        group: "hound",
        temperament: "spunky, curious, friendly",
        lifespan: "12-16 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "low",
        sound: "dachshund-bark.mp3"
    },
    {
        id: 8,
        name: "Boxer",
        image: "boxer.jpg",
        description: "Bright, fun-loving, and active.",
        fullDescription: "The Boxer is a bright, fun-loving, and active dog breed, known for its muscular build and playful nature.",
        size: "large",
        group: "working",
        temperament: "bright, fun-loving, active",
        lifespan: "10-12 years",
        goodWith: "children, other pets",
        energy: 5,
        grooming: "low",
        sound: "boxer-bark.mp3"
    },
    {
        id: 9,
        name: "Shih Tzu",
        image: "shih-tzu.jpg",
        description: "Outgoing, affectionate, and playful.",
        fullDescription: "The Shih Tzu is an outgoing, affectionate, and playful dog breed, known for its long flowing coat and friendly personality.",
        size: "small",
        group: "toy",
        temperament: "outgoing, affectionate, playful",
        lifespan: "10-16 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "high",
        sound: "shih-tzu-bark.mp3"
    },
    {
        id: 10,
        name: "Siberian Husky",
        image: "siberian-husky.jpg",
        description: "Friendly, outgoing, and energetic.",
        fullDescription: "The Siberian Husky is a friendly, outgoing, and energetic dog breed, known for its thick coat and striking blue eyes.",
        size: "medium",
        group: "working",
        temperament: "friendly, outgoing, energetic",
        lifespan: "12-14 years",
        goodWith: "children, other pets",
        energy: 5,
        grooming: "medium",
        sound: "siberian-husky-bark.mp3"
    },
    {
        id: 11,
        name: "Chihuahua",
        image: "chihuahua.jpg",
        description: "Lively, alert, and courageous.",
        fullDescription: "The Chihuahua is a lively, alert, and courageous dog breed, known for its small size and big personality.",
        size: "small",
        group: "toy",
        temperament: "lively, alert, courageous",
        lifespan: "12-20 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "low",
        sound: "chihuahua-bark.mp3"
    },
    {
        id: 12,
        name: "Great Dane",
        image: "great-dane.jpg",
        description: "Friendly, patient, and dependable.",
        fullDescription: "The Great Dane is a friendly, patient, and dependable dog breed, known for its giant size and gentle nature.",
        size: "large",
        group: "working",
        temperament: "friendly, patient, dependable",
        lifespan: "7-10 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "low",
        sound: "great-dane-bark.mp3"
    },
    {
        id: 13,
        name: "Corgi",
        image: "corgi.jpg",
        description: "Playful, smart, and affectionate.",
        fullDescription: "The Corgi is a playful, smart, and affectionate dog breed, known for its short legs and big ears.",
        size: "small",
        group: "herding",
        temperament: "playful, smart, affectionate",
        lifespan: "12-15 years",
        goodWith: "children, other pets",
        energy: 4,
        grooming: "medium",
        sound: "corgi-bark.mp3"
    },
    {
        id: 14,
        name: "Dalmatian",
        image: "dalmatian.jpg",
        description: "Outgoing, energetic, and playful.",
        fullDescription: "The Dalmatian is an outgoing, energetic, and playful dog breed, known for its distinctive spotted coat.",
        size: "medium",
        group: "sporting",
        temperament: "outgoing, energetic, playful",
        lifespan: "10-13 years",
        goodWith: "children, other pets",
        energy: 5,
        grooming: "low",
        sound: "dalmatian-bark.mp3"
    },
    {
        id: 15,
        name: "Border Collie",
        image: "border-collie.jpg",
        description: "Intelligent, energetic, and hardworking.",
        fullDescription: "The Border Collie is an intelligent, energetic, and hardworking dog breed, known for its herding abilities and high energy.",
        size: "medium",
        group: "herding",
        temperament: "intelligent, energetic, hardworking",
        lifespan: "12-15 years",
        goodWith: "children, other pets",
        energy: 5,
        grooming: "medium",
        sound: "border-collie-bark.mp3"
    },
    {
        id: 16,
        name: "French Bulldog",
        image: "french-bulldog.jpg",
        description: "Adaptable, playful, and smart.",
        fullDescription: "The French Bulldog is a small, muscular dog with a smooth coat, compact build, and distinctive bat-like ears.",
        size: "small",
        group: "non-sporting",
        temperament: "adaptable, playful, smart",
        lifespan: "10-12 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "low",
        sound: "french-bulldog-bark.mp3"
    },
    {
        id: 17,
        name: "Rottweiler",
        image: "rottweiler.jpg",
        description: "Loyal, confident, and fearless.",
        fullDescription: "The Rottweiler is a robust working breed of great strength, descended from the Roman drover dog.",
        size: "large",
        group: "working",
        temperament: "loyal, confident, fearless",
        lifespan: "9-10 years",
        goodWith: "children, other pets",
        energy: 4,
        grooming: "low",
        sound: "rottweiler-bark.mp3"
    },
    {
        id: 18,
        name: "Yorkshire Terrier",
        image: "yorkshire-terrier.jpg",
        description: "Affectionate, sprightly, and tomboyish.",
        fullDescription: "The Yorkshire Terrier is a small, energetic dog with a big personality and a beautiful silky coat.",
        size: "small",
        group: "toy",
        temperament: "affectionate, sprightly, tomboyish",
        lifespan: "11-15 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "high",
        sound: "yorkshire-terrier-bark.mp3"
    },
    {
        id: 19,
        name: "Doberman Pinscher",
        image: "doberman.jpg",
        description: "Alert, fearless, and loyal.",
        fullDescription: "The Doberman Pinscher is a sleek and powerful dog, known for its loyalty and intelligence.",
        size: "large",
        group: "working",
        temperament: "alert, fearless, loyal",
        lifespan: "10-12 years",
        goodWith: "children, other pets",
        energy: 5,
        grooming: "low",
        sound: "doberman-bark.mp3"
    },
    {
        id: 20,
        name: "Australian Shepherd",
        image: "australian-shepherd.jpg",
        description: "Smart, work-oriented, and exuberant.",
        fullDescription: "The Australian Shepherd is an intelligent, energetic herding dog with a beautiful coat and striking eyes.",
        size: "medium",
        group: "herding",
        temperament: "smart, work-oriented, exuberant",
        lifespan: "12-15 years",
        goodWith: "children, other pets",
        energy: 5,
        grooming: "medium",
        sound: "australian-shepherd-bark.mp3"
    },
    {
        id: 21,
        name: "Cavalier King Charles Spaniel",
        image: "cavalier-king-charles.jpg",
        description: "Affectionate, gentle, and graceful.",
        fullDescription: "The Cavalier King Charles Spaniel is a friendly, affectionate toy breed with a silky coat and expressive eyes.",
        size: "small",
        group: "toy",
        temperament: "affectionate, gentle, graceful",
        lifespan: "12-15 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "medium",
        sound: "cavalier-king-charles-bark.mp3"
    },
    {
        id: 22,
        name: "Shetland Sheepdog",
        image: "shetland-sheepdog.jpg",
        description: "Playful, energetic, and bright.",
        fullDescription: "The Shetland Sheepdog is a small, agile herding dog, known for its intelligence and beautiful coat.",
        size: "small",
        group: "herding",
        temperament: "playful, energetic, bright",
        lifespan: "12-14 years",
        goodWith: "children, other pets",
        energy: 4,
        grooming: "high",
        sound: "shetland-sheepdog-bark.mp3"
    },
    {
        id: 23,
        name: "Boston Terrier",
        image: "boston-terrier.jpg",
        description: "Friendly, bright, and amusing.",
        fullDescription: "The Boston Terrier is a compact, well-muscled dog with a tuxedo-like coat and a friendly personality.",
        size: "small",
        group: "non-sporting",
        temperament: "friendly, bright, amusing",
        lifespan: "11-13 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "low",
        sound: "boston-terrier-bark.mp3"
    },
    {
        id: 24,
        name: "Pug",
        image: "pug.jpg",
        description: "Charming, mischievous, and loving.",
        fullDescription: "The Pug is a small, sturdy dog with a wrinkled face and curled tail, known for its loving nature.",
        size: "small",
        group: "toy",
        temperament: "charming, mischievous, loving",
        lifespan: "13-15 years",
        goodWith: "children, other pets",
        energy: 2,
        grooming: "low",
        sound: "pug-bark.mp3"
    },
    {
        id: 25,
        name: "Maltese",
        image: "maltese.jpg",
        description: "Gentle, playful, and charming.",
        fullDescription: "The Maltese is a small, gentle dog with a long, silky white coat and a lively personality.",
        size: "small",
        group: "toy",
        temperament: "gentle, playful, charming",
        lifespan: "12-15 years",
        goodWith: "children, other pets",
        energy: 3,
        grooming: "high",
        sound: "maltese-bark.mp3"
    }
];

// Fun Facts
const funFacts = [
    "Dogs have three eyelids, including one to keep their eyes moist and protected.",
    "A dog’s sense of smell is 10,000 to 100,000 times more acute than a human’s.",
    "Dalmatians are born without spots; they develop them as they grow.",
    "The Basenji is the only dog breed that doesn’t bark, but it yodels instead.",
    "Dogs dream, especially puppies and senior dogs, often twitching in their sleep.",
    "The Labrador Retriever has been the most popular breed in the U.S. for over 30 years.",
    "A dog’s nose print is as unique as a human’s fingerprint.",
    "Greyhounds are the fastest dog breed, reaching speeds up to 45 mph.",
    "Dogs can understand up to 250 words and gestures.",
    "The Australian Shepherd was actually developed in the United States.",
    "Poodles were originally bred as water retrievers, not just show dogs.",
    "The Border Collie is considered one of the smartest dog breeds.",
    "Chihuahuas are named after the Mexican state of Chihuahua.",
    "Great Danes can stand over 7 feet tall on their hind legs.",
    "Corgis were bred to herd cattle, despite their small size.",
    "Siberian Huskies can withstand temperatures as low as -60°F.",
    "French Bulldogs can’t swim due to their short snouts and dense bodies.",
    "The Shih Tzu’s name means 'lion dog' in Chinese.",
    "Rottweilers were used to herd livestock in ancient Rome.",
    "Pugs were favored by Chinese emperors and often lived in luxury."
];

// Quiz Questions
const quizQuestions = [
    {
        key: "size",
        question: "What size dog are you looking for?",
        options: [
            { text: "Small", value: "small" },
            { text: "Medium", value: "medium" },
            { text: "Large", value: "large" }
        ]
    },
    {
        key: "energy",
        question: "What energy level do you prefer?",
        options: [
            { text: "Low", value: "low" },
            { text: "Medium", value: "medium" },
            { text: "High", value: "high" }
        ]
    },
    {
        key: "grooming",
        question: "How much grooming are you willing to do?",
        options: [
            { text: "Low", value: "low" },
            { text: "Medium", value: "medium" },
            { text: "High", value: "high" }
        ]
    }
];

// State Variables
let currentStep = 0;
let quizAnswers = {};
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentlyPlayingAudio = null;

const darkModeToggle = document.getElementById('darkModeToggle');

// Initialize the page
function init() {
    const year = new Date().getFullYear();
    currentYearElements.forEach(el => el.textContent = year);
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.removeAttribute('data-theme');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    displayDailyFact();
    
    if (breedGrid) {
        renderBreedCards(dogBreeds);
    }
    
    setupEventListeners();
// ...existing code...

// Set up event listeners
function setupEventListeners() {
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    if (breedSearch) {
        breedSearch.addEventListener('input', filterBreeds);
    }
    if (sizeFilter) {
        sizeFilter.addEventListener('change', filterBreeds);
    }
    if (groupFilter) {
        groupFilter.addEventListener('change', filterBreeds);
    }
    if (quizBtn) {
        quizBtn.addEventListener('click', openQuizModal);
    }
    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
    window.addEventListener('click', (e) => {
        if (e.target === quizModal || e.target === breedModal) {
            closeModal();
        }
    });
    if (prevBtn) {
        prevBtn.addEventListener('click', prevQuizStep);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuizStep);
    }
    if (restartQuiz) {
        restartQuiz.addEventListener('click', restartQuiz);
    }
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Toggle dark mode
function toggleDarkMode() {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
}

// Display daily fun fact
function displayDailyFact() {
    const factElement = document.getElementById('dailyFact');
    if (factElement) {
        const today = new Date().getDate();
        const factIndex = today % funFacts.length;
        factElement.textContent = funFacts[factIndex];
    }
}

// Render breed cards
function renderBreedCards(breeds = dogBreeds) {
    if (!breedGrid) return;
    breedGrid.innerHTML = '';

    breeds.forEach(breed => {
        const card = document.createElement('div');
        card.className = 'breed-card';

        card.innerHTML = `
            <img class="breed-img-clickable" src="assets/images/${breed.image}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.description}</p>
            <div class="breed-actions">
                <button class="sound-btn" data-sound="assets/sounds/${breed.sound}" title="Play Bark">
                    <i class="fas fa-volume-up"></i>
                </button>
            </div>
        `;

        // Play sound on click
        card.querySelector('.sound-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            const audio = new Audio(this.dataset.sound);
            audio.play();
        });

        // Clicking the image opens the modal
        card.querySelector('.breed-img-clickable').addEventListener('click', function(e) {
            e.stopPropagation();
            openBreedModal(breed.id);
        });

        // Optionally, clicking anywhere on the card (except the sound button) opens the modal
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('sound-btn')) {
                openBreedModal(breed.id);
            }
        });

        breedGrid.appendChild(card);
    });
}

// Call render on page load
renderBreedCards();

// Filter breeds
function filterBreeds() {
    const searchTerm = breedSearch.value.toLowerCase();
    const sizeValue = sizeFilter.value;
    const groupValue = groupFilter.value;
    
    const filteredBreeds = dogBreeds.filter(breed => {
        const matchesSearch = breed.name.toLowerCase().includes(searchTerm) || 
                            breed.description.toLowerCase().includes(searchTerm);
        const matchesSize = sizeValue ? breed.size === sizeValue : true;
        const matchesGroup = groupValue ? breed.group === groupValue : true;
        
        return matchesSearch && matchesSize && matchesGroup;
    });
    
    renderBreedCards(filteredBreeds);
}

document.addEventListener('DOMContentLoaded', function () {
    // --- THEME TOGGLE ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        // Set initial theme from localStorage
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        darkModeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // --- RENDER BREED CARDS ---
    function renderBreedCards(breeds = dogBreeds) {
        if (!breedGrid) return;
        breedGrid.innerHTML = '';
        breeds.forEach(breed => {
            const card = document.createElement('div');
            card.className = 'breed-card';
            card.innerHTML = `
                <img src="assets/images/${breed.image}" alt="${breed.name}">
                <h3>${breed.name}</h3>
                <p>${breed.description}</p>
                <div class="breed-actions">
                    <button class="sound-btn" data-sound="assets/sounds/${breed.sound}" title="Play Bark">
                        <i class="fas fa-volume-up"></i>
                    </button>
                    <button class="learn-more-btn" data-id="${breed.id}">Learn More</button>
                </div>
            `;
            // Sound button
            card.querySelector('.sound-btn').addEventListener('click', function(e) {
                e.stopPropagation();
                const audio = new Audio(this.dataset.sound);
                audio.play();
            });
            // Learn more modal
            card.querySelector('.learn-more-btn').addEventListener('click', function(e) {
                e.stopPropagation();
                openBreedModal(breed.id);
            });
            breedGrid.appendChild(card);
        });
    }

    // --- FILTER BREEDS ---
    function filterBreeds() {
        const searchTerm = breedSearch.value.toLowerCase();
        const sizeValue = sizeFilter.value;
        const groupValue = groupFilter.value;
        const filteredBreeds = dogBreeds.filter(breed => {
            const matchesSearch = breed.name.toLowerCase().includes(searchTerm) ||
                                  breed.description.toLowerCase().includes(searchTerm);
            const matchesSize = sizeValue ? breed.size === sizeValue : true;
            const matchesGroup = groupValue ? breed.group === groupValue : true;
            return matchesSearch && matchesSize && matchesGroup;
        });
        renderBreedCards(filteredBreeds);
    }

    // --- BREED MODAL LOGIC ---
    function openBreedModal(breedId) {
        const breed = dogBreeds.find(b => b.id === breedId);
        if (!breed) return;

        document.getElementById('modalBreedImage').src = `assets/images/${breed.image}`;
        document.getElementById('modalBreedImage').alt = breed.name;
        document.getElementById('modalBreedName').textContent = breed.name;
        document.getElementById('modalBreedDescription').textContent = breed.description;
        document.getElementById('modalBreedFullDescription').textContent = breed.fullDescription;
        document.getElementById('modalBreedSize').textContent = breed.size.charAt(0).toUpperCase() + breed.size.slice(1);
        document.getElementById('modalBreedGroup').textContent = breed.group.charAt(0).toUpperCase() + breed.group.slice(1);
        document.getElementById('modalBreedTemperament').textContent = breed.temperament.charAt(0).toUpperCase() + breed.temperament.slice(1);
        document.getElementById('modalBreedLifespan').textContent = breed.lifespan;
        document.getElementById('modalBreedGoodWith').textContent = breed.goodWith;
        document.getElementById('modalBreedEnergy').textContent = breed.energy;
        document.getElementById('modalBreedGrooming').textContent = breed.grooming;
        const modalSoundBtn = document.getElementById('modalSoundBtn');
        modalSoundBtn.setAttribute('data-sound', `assets/sounds/${breed.sound}`);
        modalSoundBtn.onclick = function(e) {
            e.stopPropagation();
            const audio = new Audio(this.dataset.sound);
            audio.play();
        };
        // Show modal with zoom effect
        const breedModal = document.getElementById('breedModal');
        breedModal.style.display = 'flex';
        breedModal.querySelector('.breed-modal-content').style.animation = 'modalZoom 0.25s';
        document.body.style.overflow = 'hidden';
    }
    // Close modal logic (should only be defined once)
    const closeBreedModal = document.getElementById('closeBreedModal');
    if (closeBreedModal) {
        closeBreedModal.addEventListener('click', () => {
            document.getElementById('breedModal').style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    window.addEventListener('click', function(e) {
        const breedModal = document.getElementById('breedModal');
        if (e.target === breedModal) {
            breedModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // --- EVENT LISTENERS ---
    if (breedSearch) breedSearch.addEventListener('input', filterBreeds);
    if (sizeFilter) sizeFilter.addEventListener('change', filterBreeds);
    if (groupFilter) groupFilter.addEventListener('change', filterBreeds);

    // --- INITIAL RENDER ---
    renderBreedCards();
});

// Remove duplicate/legacy DOMContentLoaded logic above. Use only the main renderBreedCards, filterBreeds, and openBreedModal below.

// Play breed sound
function playBreedSound(e) {
    const button = e.currentTarget;
    const soundFile = button.getAttribute('data-sound') || 'assets/sounds/bark.mp3';
    console.log('Attempting to play sound:', soundFile);
    
    if (button.classList.contains('playing')) {
        if (currentlyPlayingAudio) {
            currentlyPlayingAudio.pause();
            currentlyPlayingAudio = null;
        }
        button.classList.remove('playing');
        return;
    }
    
    document.querySelectorAll('.sound-btn.playing').forEach(btn => {
        btn.classList.remove('playing');
    });
    
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
    }
    
    button.classList.add('playing');
    currentlyPlayingAudio = new Audio(soundFile);
    currentlyPlayingAudio.play().catch(error => {
        console.warn('Failed to play audio:', soundFile, error);
        button.classList.remove('playing');
    });
    
    const bars = button.querySelectorAll('.sound-bar');
    bars.forEach(bar => {
        bar.style.animation = 'soundWave 0.6s ease infinite alternate';
    });
    
    currentlyPlayingAudio.onended = () => {
        button.classList.remove('playing');
        bars.forEach(bar => {
            bar.style.animation = 'none';
        });
        currentlyPlayingAudio = null;
    };
}

            // Clicking the image opens the modal
            card.querySelector('.breed-img-clickable').addEventListener('click', function() {
                openBreedModal(breed.id);
            });
    if (favorites.includes(breedId)) {
            // Optionally, clicking anywhere on the card (except the sound button) opens the modal
            card.addEventListener('click', function() {
                openBreedModal(breed.id);
            });
        button.setAttribute('aria-label', 'Remove from favorites');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Open breed modal
function openBreedModal(e) {
    const breedId = parseInt(e.currentTarget.getAttribute('data-id'));
    const breed = dogBreeds.find(b => b.id === breedId);
    
    if (!breed) return;
    
    console.log('Loading modal image for', breed.name, ':', `assets/images/${breed.image}`);
    document.getElementById('modalBreedName').textContent = breed.name;
    document.getElementById('modalBreedImage').src = `assets/images/${breed.image}`;
    document.getElementById('modalBreedImage').alt = breed.name;
    document.getElementById('modalBreedDescription').textContent = breed.fullDescription;
    document.getElementById('modalBreedSize').textContent = breed.size.charAt(0).toUpperCase() + breed.size.slice(1);
    document.getElementById('modalBreedGroup').textContent = breed.group.charAt(0).toUpperCase() + breed.group.slice(1);
    document.getElementById('modalBreedTemperament').textContent = breed.temperament.charAt(0).toUpperCase() + breed.temperament.slice(1);
    document.getElementById('modalBreedLifespan').textContent = breed.lifespan;
    document.getElementById('modalBreedGoodWith').textContent = breed.goodWith;
    
    const energyDots = document.querySelectorAll('.energy-dot');
    energyDots.forEach(dot => {
        const level = parseInt(dot.getAttribute('data-level'));
        dot.classList.toggle('active', level <= breed.energy);
    });
    
    const soundBtn = document.getElementById('modalSoundBtn');
    soundBtn.setAttribute('data-sound', `assets/sounds/${breed.sound}`);
    soundBtn.onclick = playBreedSound;
    
    breedModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open quiz modal
function openQuizModal() {
    currentStep = 0;
    quizAnswers = {};
    showQuizStep(currentStep);
    quizModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close any modal
function closeModal() {
    quizModal.style.display = 'none';
    breedModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    if (currentlyPlayingAudio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio = null;
    }
    
    document.querySelectorAll('.sound-btn.playing').forEach(btn => {
        btn.classList.remove('playing');
    });
}

// Show current quiz step
function showQuizStep(step) {
    document.querySelectorAll('.quiz-step').forEach((el, index) => {
        el.style.display = index === step ? 'block' : 'none';
    });
    
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('prevBtn').style.display = step === 0 ? 'none' : 'block';
    document.getElementById('nextBtn').style.display = step === quizQuestions.length - 1 ? 'none' : 'block';
    
    if (step === quizQuestions.length - 1) {
        document.getElementById('nextBtn').textContent = 'See Results';
    } else {
        document.getElementById('nextBtn').textContent = 'Next';
    }
    
    const currentQuestion = quizQuestions[step];
    const optionsContainer = document.querySelector(`#step${step + 1} .quiz-options`);
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            if (quizAnswers[currentQuestion.key] === option.value) {
                button.classList.add('selected');
            }
            button.textContent = option.text;
            button.setAttribute('data-value', option.value);
            button.addEventListener('click', () => selectQuizOption(step, option.value));
            optionsContainer.appendChild(button);
        });
    }
}

// Select quiz option
function selectQuizOption(step, value) {
    const currentQuestion = quizQuestions[step];
    quizAnswers[currentQuestion.key] = value;
    
    const options = document.querySelectorAll(`#step${step + 1} .quiz-option`);
    options.forEach(option => {
        option.classList.toggle('selected', option.getAttribute('data-value') === value);
    });
}

// Go to previous quiz step
function prevQuizStep() {
    if (currentStep > 0) {
        currentStep--;
        showQuizStep(currentStep);
    }
}

// Go to next quiz step
function nextQuizStep() {
    const currentQuestion = quizQuestions[currentStep];
    
    if (!quizAnswers[currentQuestion.key]) {
        alert('Please select an option to continue');
        return;
    }
    
    if (currentStep < quizQuestions.length - 1) {
        currentStep++;
        showQuizStep(currentStep);
    } else {
        showQuizResults();
    }
}

// Show quiz results
function showQuizResults() {
    document.querySelectorAll('.quiz-step').forEach(el => {
        el.style.display = 'none';
    });
    
    document.getElementById('quizResult').style.display = 'block';
    document.getElementById('prevBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
    
    const recommendedBreeds = getRecommendedBreeds();
    const resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = '';
    
    if (recommendedBreeds.length === 0) {
        resultContent.innerHTML = '<p>No breeds match your preferences perfectly, but these might be close:</p>';
        recommendedBreeds.push(...dogBreeds.slice(0, 3));
    } else {
        resultContent.innerHTML = '<p>Based on your answers, we recommend these breeds:</p>';
    }
    
    recommendedBreeds.forEach(breed => {
        console.log('Loading quiz result image for', breed.name, ':', `assets/images/${breed.image}`);
        const breedEl = document.createElement('div');
        breedEl.className = 'recommended-breed';
        breedEl.innerHTML = `
            <div class="recommended-breed-image">
                <img src="assets/images/${breed.image}" alt="${breed.name}" loading="lazy" onerror="this.src='assets/images/fallback.jpg'; console.warn('Failed to load image: assets/images/${breed.image}')">
            </div>
            <div class="recommended-breed-info">
                <h4>${breed.name}</h4>
                <p>${breed.description}</p>
                <button class="secondary-btn" data-id="${breed.id}">Learn More</button>
            </div>
        `;
        resultContent.appendChild(breedEl);
    });
    
    document.querySelectorAll('#resultContent .secondary-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            closeModal();
            openBreedModal(e);
        });
    });
}

// Get recommended breeds
function getRecommendedBreeds() {
    return dogBreeds.filter(breed => {
        let sizeMatch = true;
        if (quizAnswers.size) {
            sizeMatch = breed.size === quizAnswers.size;
        }
        
        let energyMatch = true;
        if (quizAnswers.energy) {
            if (quizAnswers.energy === 'low') {
                energyMatch = breed.energy <= 2;
            } else if (quizAnswers.energy === 'medium') {
                energyMatch = breed.energy >= 2 && breed.energy <= 4;
            } else if (quizAnswers.energy === 'high') {
                energyMatch = breed.energy >= 4;
            }
        }
        
        let groomingMatch = true;
        if (quizAnswers.grooming) {
            groomingMatch = breed.grooming === quizAnswers.grooming;
        }
        
        return sizeMatch && energyMatch && groomingMatch;
    });
}

// Restart quiz
function restartQuiz() {
    currentStep = 0;
    quizAnswers = {};
    showQuizStep(currentStep);
}

// Handle contact form submission
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
    
    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We'll get back to you soon at ${email}.`);
        contactForm.reset();
    }
}

// Day/Night Theme Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle logic
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        // Set initial theme from localStorage
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // Sound button functionality for static HTML
    document.querySelectorAll('.sound-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const audio = new Audio(this.dataset.sound);
            audio.play();
        });
    });
});

// --- Modal Logic for Breed Details ---
function openBreedModal(breedId) {
    const breed = dogBreeds.find(b => b.id === breedId);
    if (!breed) return;

    document.getElementById('modalBreedImage').src = `assets/images/${breed.image}`;
    document.getElementById('modalBreedImage').alt = breed.name;
    document.getElementById('modalBreedName').textContent = breed.name;
    document.getElementById('modalBreedDescription').textContent = breed.fullDescription;
    document.getElementById('modalBreedSize').textContent = breed.size.charAt(0).toUpperCase() + breed.size.slice(1);
    document.getElementById('modalBreedGroup').textContent = breed.group.charAt(0).toUpperCase() + breed.group.slice(1);
    document.getElementById('modalBreedTemperament').textContent = breed.temperament.charAt(0).toUpperCase() + breed.temperament.slice(1);
    document.getElementById('modalBreedLifespan').textContent = breed.lifespan;
    document.getElementById('modalBreedGoodWith').textContent = breed.goodWith;

    // Optionally set energy and grooming if those modal fields exist
    if (document.getElementById('modalBreedEnergy')) {
        document.getElementById('modalBreedEnergy').textContent = breed.energy;
    }
    if (document.getElementById('modalBreedGrooming')) {
        document.getElementById('modalBreedGrooming').textContent = breed.grooming;
    }

    const modalSoundBtn = document.getElementById('modalSoundBtn');
    if (modalSoundBtn) {
        modalSoundBtn.setAttribute('data-sound', `assets/sounds/${breed.sound}`);
        modalSoundBtn.onclick = function(e) {
            e.stopPropagation();
            const audio = new Audio(this.dataset.sound);
            audio.play();
        };
    }
    // Show modal with zoom effect
    const breedModal = document.getElementById('breedModal');
    if (breedModal) {
        breedModal.style.display = 'flex';
        if (breedModal.querySelector('.breed-modal-content')) {
            breedModal.querySelector('.breed-modal-content').style.animation = 'modalZoom 0.25s';
        }
    }
    document.body.style.overflow = 'hidden';
}

// Close modal logic (should only be defined once)
const closeBreedModal = document.getElementById('closeBreedModal');
if (closeBreedModal) {
    closeBreedModal.addEventListener('click', () => {
        document.getElementById('breedModal').style.display = 'none';
        document.body.style.overflow = '';
    });
}
window.addEventListener('click', function(e) {
    const breedModal = document.getElementById('breedModal');
    if (e.target === breedModal) {
        breedModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});