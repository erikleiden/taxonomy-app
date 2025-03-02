// Function to process CSV data and convert it to the required JSON structure
function processCSVData(csvData) {
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    const skillsData = {};

    // Process each line starting from index 1 (skipping headers)
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(value => value.trim());
        if (values.length < headers.length) continue;

        const occupation = values[0];
        const skillName = values[1];
        
        // Initialize occupation object if it doesn't exist
        if (!skillsData[occupation]) {
            skillsData[occupation] = { skills: {} };
        }

        // Create skill object
        skillsData[occupation].skills[skillName] = {
            category: values[2],
            subcategory: values[3],
            definition: values[4].replace(/^"|"$/g, ''),
            utilization: values[5].replace(/^"|"$/g, ''),
            proficiencyLevel: values[6],
            proficiencyExamples: {
                level1: values[7].replace(/^"|"$/g, ''),
                level2: values[8].replace(/^"|"$/g, ''),
                level3: values[9].replace(/^"|"$/g, '')
            },
            label: values[10],
            frequency: values[11],
            specificity: values[12],
            growthRate: values[13],
            wagePremium: values[14].trim() === '#N/A' ? 'N/A' : values[14]
        };
    }

    return skillsData;
}

// Initialize empty skillsData object
let skillsData = {};

// Function to populate the occupation dropdown
function populateOccupations() {
    const occupationSelect = document.getElementById('occupation');
    occupationSelect.innerHTML = '<option value="">Choose an occupation...</option>';
    
    const occupations = Object.keys(skillsData).sort();
    
    occupations.forEach(occupation => {
        const option = document.createElement('option');
        option.value = occupation;
        option.textContent = occupation;
        occupationSelect.appendChild(option);
    });

    // Add event listener for occupation change
    occupationSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            displaySkillCategories(e.target.value);
            resetUI();
        }
    });
}

// Function to display skill categories for selected occupation
function displaySkillCategories(occupation) {
    const categoriesContainer = document.getElementById('skills-categories');
    categoriesContainer.innerHTML = '';

    // Group skills by category
    const skillsByCategory = {};
    const occupationSkills = skillsData[occupation].skills;

    Object.entries(occupationSkills).forEach(([skillName, skillInfo]) => {
        if (!skillsByCategory[skillInfo.category]) {
            skillsByCategory[skillInfo.category] = [];
        }
        skillsByCategory[skillInfo.category].push({
            name: skillName,
            ...skillInfo
        });
    });

    // Create category sections
    Object.entries(skillsByCategory).forEach(([category, skills]) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'mb-6';

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'text-md font-semibold text-gray-700 mb-2';
        categoryTitle.textContent = category;

        const skillsList = document.createElement('ul');
        skillsList.className = 'space-y-2';

        skills.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.className = 'cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors';
            
            const skillButton = document.createElement('button');
            skillButton.className = 'text-left w-full flex items-center justify-between';
            skillButton.innerHTML = `
                <span>${skill.name}</span>
                <span class="text-xs px-2 py-1 rounded ${getLabelClass(skill.label)}">${skill.label}</span>
            `;
            
            skillItem.appendChild(skillButton);
            skillItem.addEventListener('click', () => selectSkill(occupation, skill.name));
            skillsList.appendChild(skillItem);
        });

        categorySection.appendChild(categoryTitle);
        categorySection.appendChild(skillsList);
        categoriesContainer.appendChild(categorySection);
    });
}

// Helper function to get label styling
function getLabelClass(label) {
    switch (label) {
        case 'High Value Skill':
            return 'bg-blue-100 text-blue-800';
        case 'High Growth Skill':
            return 'bg-green-100 text-green-800';
        case 'Declining Skill':
            return 'bg-red-100 text-red-800';
        case 'Durable Skill':
            return 'bg-purple-100 text-purple-800';
        default:
            return 'bg-gray-100 text-gray-800';
    }
}

// Function to display selected skill details
function selectSkill(occupation, skillName) {
    const skill = skillsData[occupation].skills[skillName];
    const skillDetails = document.getElementById('skill-details');
    const skillContent = skillDetails.querySelector('.skill-content');
    
    // Update skill title
    document.getElementById('selected-skill').textContent = skillName;
    
    // Show skill content
    skillContent.classList.remove('hidden');
    
    // Update market trends
    const marketTrends = document.getElementById('market-trends');
    marketTrends.innerHTML = `
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 p-4 rounded">
                <p class="text-sm text-gray-600">Growth Rate</p>
                <p class="text-lg font-semibold ${parseFloat(skill.growthRate) >= 0 ? 'text-green-600' : 'text-red-600'}">${skill.growthRate}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded">
                <p class="text-sm text-gray-600">Frequency in Role</p>
                <p class="text-lg font-semibold">${skill.frequency}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded">
                <p class="text-sm text-gray-600">Skill Specificity</p>
                <p class="text-lg font-semibold">${skill.specificity}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded">
                <p class="text-sm text-gray-600">Wage Premium</p>
                <p class="text-lg font-semibold">${skill.wagePremium !== 'N/A' ? skill.wagePremium : 'Not Available'}</p>
            </div>
        </div>
    `;
    
    // Update skill description
    const skillDescription = document.getElementById('skill-description');
    skillDescription.innerHTML = `
        <div class="space-y-4">
            <p><strong>Category:</strong> ${skill.category} - ${skill.subcategory}</p>
            <p><strong>Definition:</strong> ${skill.definition}</p>
            <p><strong>How it's used:</strong> ${skill.utilization}</p>
        </div>
    `;
    
    // Update proficiency levels
    const proficiencyLevels = document.getElementById('proficiency-levels');
    proficiencyLevels.innerHTML = `
        <div class="bg-blue-50 p-4 rounded">
            <h4 class="font-semibold text-blue-900 mb-2">Current Required Level: ${skill.proficiencyLevel}</h4>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="bg-gray-50 p-4 rounded">
                <h4 class="font-semibold text-gray-900 mb-2">Level 1</h4>
                <p class="text-sm text-gray-600">${skill.proficiencyExamples.level1}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded ${skill.proficiencyLevel === 'Level 2' ? 'ring-2 ring-blue-500' : ''}">
                <h4 class="font-semibold text-gray-900 mb-2">Level 2</h4>
                <p class="text-sm text-gray-600">${skill.proficiencyExamples.level2}</p>
            </div>
            <div class="bg-gray-50 p-4 rounded ${skill.proficiencyLevel === 'Level 3' ? 'ring-2 ring-blue-500' : ''}">
                <h4 class="font-semibold text-gray-900 mb-2">Level 3</h4>
                <p class="text-sm text-gray-600">${skill.proficiencyExamples.level3}</p>
            </div>
        </div>
    `;
}

// Function to reset UI when changing occupation
function resetUI() {
    const skillDetails = document.getElementById('skill-details');
    const skillContent = skillDetails.querySelector('.skill-content');
    document.getElementById('selected-skill').textContent = 'Select a skill to view details';
    skillContent.classList.add('hidden');
}

// Initialize the app
document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Initializing app...');
        
        // Fetch CSV data
        const response = await fetch('COMBINED Skill Profiles for Selected Roles 12.02.2024.csv');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvData = await response.text();
        
        // Process CSV data
        skillsData = processCSVData(csvData);
        console.log('CSV data loaded successfully');
        
        // Initialize UI
        populateOccupations();
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        alert('Error loading data. Please try refreshing the page.');
    }
}); 