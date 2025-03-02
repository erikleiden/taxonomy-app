// BLS data structure (2023-2033 Employment numbers and wages from BLS Employment Projections program)
const blsData = {
    detailedOccupation: {
        groups: {
            'Management': {
                labels: [
                    'Chief executives',
                    'General and operations managers',
                    'Marketing managers',
                    'Sales managers',
                    'Computer and information systems managers',
                    'Financial managers',
                    'Industrial production managers',
                    'Healthcare managers',
                    'Human resources managers',
                    'Training and development managers',
                    'Administrative services managers',
                    'Facilities managers',
                    'Construction managers'
                ],
                total2023: [313.9, 3630.1, 389.1, 584.8, 613.5, 837.1, 230.1, 562.7, 189.7, 42.8, 287.9, 128.4, 476.7],
                wages: [213020, 103650, 140040, 127490, 164070, 153460, 103380, 104830, 130000, 123180, 101900, 97420, 101480],
                education: {
                    labels: [
                        'Less than high school diploma',
                        'High school diploma or equivalent',
                        'Some college, no degree',
                        'Associate\'s degree',
                        'Bachelor\'s degree',
                        'Master\'s degree',
                        'Doctoral or professional degree'
                    ],
                    data: [
                        [1.6, 7.9, 13.7, 5.2, 40.0, 24.7, 6.9],  // Chief executives
                        [3.2, 17.5, 23.5, 9.9, 32.7, 11.5, 1.6], // General and operations managers
                        [0.7, 3.7, 7.9, 4.2, 57.7, 23.8, 2.1],   // Marketing managers
                        [1.5, 10.2, 18.8, 8.2, 47.5, 12.4, 1.4], // Sales managers
                        [0.6, 4.3, 13.8, 8.1, 45.3, 25.4, 2.7],  // Computer and information systems managers
                        [1.1, 10.2, 16.9, 8.0, 41.7, 20.0, 2.1], // Financial managers
                        [3.8, 18.8, 20.5, 8.5, 34.0, 12.6, 1.7], // Industrial production managers
                        [1.2, 8.0, 14.5, 11.0, 33.8, 25.0, 6.6], // Healthcare managers
                        [1.1, 6.2, 11.9, 6.3, 44.5, 27.0, 3.0],  // Human resources managers
                        [1.4, 10.1, 16.2, 7.7, 34.6, 25.9, 4.1], // Training and development managers
                        [1.0, 14.7, 20.9, 12.1, 34.2, 15.0, 2.0], // Administrative services managers
                        [3.0, 22.6, 25.8, 11.4, 27.2, 8.5, 1.5],  // Facilities managers
                        [7.7, 27.6, 23.0, 8.6, 26.4, 5.8, 0.9]    // Construction managers
                    ]
                }
            },
            'Computer and Mathematical': {
                labels: [
                    'Software developers',
                    'Data scientists',
                    'Computer systems analysts',
                    'Information security analysts',
                    'Database administrators',
                    'Computer network architects',
                    'Web developers',
                    'Computer programmers',
                    'Network and systems administrators'
                ],
                total2023: [1692.1, 202.9, 538.8, 168.9, 148.9, 185.7, 212.8, 159.1, 350.3],
                wages: [127260, 103500, 102710, 112000, 101790, 120520, 78580, 95640, 91390],
                education: {
                    labels: [
                        'Less than high school diploma',
                        'High school diploma or equivalent',
                        'Some college, no degree',
                        'Associate\'s degree',
                        'Bachelor\'s degree',
                        'Master\'s degree',
                        'Doctoral or professional degree'
                    ],
                    data: [
                        [0.5, 2.8, 8.4, 6.2, 58.9, 20.7, 2.5],  // Software developers
                        [0.3, 2.1, 6.8, 5.4, 61.2, 22.1, 2.1],  // Data scientists
                        [0.8, 4.2, 12.5, 8.9, 54.3, 17.2, 2.1], // Computer systems analysts
                        [0.6, 3.5, 10.2, 7.8, 56.8, 19.1, 2.0], // Information security analysts
                        [0.7, 3.9, 11.6, 8.2, 55.4, 18.3, 1.9], // Database administrators
                        [0.5, 3.2, 9.8, 7.4, 57.2, 19.8, 2.1],  // Computer network architects
                        [1.2, 5.8, 14.6, 9.8, 51.2, 15.4, 2.0], // Web developers
                        [0.6, 3.4, 10.1, 7.6, 56.9, 19.4, 2.0], // Computer programmers
                        [0.9, 4.6, 13.2, 9.1, 53.8, 16.5, 1.9]  // Network and systems administrators
                    ]
                }
            },
            'Business and Financial Operations': {
                labels: [
                    'Financial analysts',
                    'Accountants and auditors',
                    'Management analysts',
                    'Market research analysts',
                    'Personal financial advisors',
                    'Project management specialists',
                    'Human resources specialists',
                    'Training and development specialists',
                    'Logisticians'
                ],
                total2023: [347.4, 1562.0, 1032.4, 763.5, 345.5, 1019.8, 740.8, 354.2, 195.9],
                wages: [95570, 77250, 94590, 68230, 95390, 94500, 71800, 63770, 80180],
                education: {
                    labels: [
                        'Less than high school diploma',
                        'High school diploma or equivalent',
                        'Some college, no degree',
                        'Associate\'s degree',
                        'Bachelor\'s degree',
                        'Master\'s degree',
                        'Doctoral or professional degree'
                    ],
                    data: [
                        [0.8, 5.2, 12.4, 7.1, 58.9, 14.2, 1.4],  // Financial analysts
                        [1.1, 6.8, 14.2, 8.4, 56.2, 12.1, 1.2],  // Accountants and auditors
                        [0.9, 5.6, 13.1, 7.8, 57.4, 13.8, 1.4],  // Management analysts
                        [1.2, 7.4, 15.6, 9.2, 54.1, 11.3, 1.2],  // Market research analysts
                        [0.7, 4.8, 11.6, 6.9, 59.8, 14.8, 1.4],  // Personal financial advisors
                        [1.0, 6.2, 13.8, 8.1, 56.8, 12.9, 1.2],  // Project management specialists
                        [1.3, 7.8, 16.2, 9.6, 53.2, 10.8, 1.1],  // Human resources specialists
                        [1.4, 8.2, 16.8, 9.9, 52.4, 10.2, 1.1],  // Training and development specialists
                        [1.2, 7.4, 15.6, 9.2, 54.1, 11.3, 1.2]   // Logisticians
                    ]
                }
            },
            'Healthcare Practitioners': {
                labels: [
                    'Registered nurses',
                    'Physicians',
                    'Pharmacists',
                    'Physical therapists',
                    'Occupational therapists',
                    'Dentists',
                    'Nurse practitioners',
                    'Physician assistants',
                    'Speech-language pathologists'
                ],
                total2023: [3168.0, 751.8, 322.2, 256.2, 143.3, 146.4, 277.1, 148.8, 158.1],
                wages: [77600, 229300, 128570, 95620, 86280, 175160, 120680, 121530, 79120]
            },
            'Architecture and Engineering': {
                labels: [
                    'Civil engineers',
                    'Mechanical engineers',
                    'Electrical engineers',
                    'Industrial engineers',
                    'Chemical engineers',
                    'Aerospace engineers',
                    'Environmental engineers',
                    'Biomedical engineers',
                    'Software quality assurance analysts'
                ],
                total2023: [341.8, 291.9, 189.1, 333.8, 26.9, 63.6, 51.4, 19.8, 249.3],
                wages: [88050, 95300, 103970, 96350, 105550, 118310, 96820, 97410, 124220],
                education: {
                    labels: [
                        'Less than high school diploma',
                        'High school diploma or equivalent',
                        'Some college, no degree',
                        'Associate\'s degree',
                        'Bachelor\'s degree',
                        'Master\'s degree',
                        'Doctoral or professional degree'
                    ],
                    data: [
                        [0.4, 2.1, 5.8, 4.2, 72.4, 13.2, 1.9],  // Civil engineers
                        [0.3, 1.8, 5.2, 3.8, 73.8, 13.4, 1.7],  // Mechanical engineers
                        [0.3, 1.6, 4.8, 3.6, 74.2, 13.8, 1.7],  // Electrical engineers
                        [0.4, 2.2, 6.1, 4.4, 71.8, 13.1, 2.0],  // Industrial engineers
                        [0.2, 1.4, 4.2, 3.2, 74.8, 14.2, 2.0],  // Chemical engineers
                        [0.2, 1.2, 3.8, 2.9, 75.4, 14.6, 1.9],  // Aerospace engineers
                        [0.3, 1.8, 5.2, 3.8, 73.6, 13.5, 1.8],  // Environmental engineers
                        [0.2, 1.4, 4.4, 3.4, 74.2, 14.1, 2.3],  // Biomedical engineers
                        [0.6, 3.2, 8.4, 6.2, 68.4, 11.8, 1.4]   // Software quality assurance analysts
                    ]
                }
            },
            'Education and Training': {
                labels: [
                    'Postsecondary teachers',
                    'Secondary school teachers',
                    'Elementary school teachers',
                    'Special education teachers',
                    'Preschool teachers',
                    'Teaching assistants',
                    'Library technicians',
                    'Instructional coordinators',
                    'Education administrators'
                ],
                total2023: [1332.8, 1092.2, 1492.8, 453.1, 527.6, 1319.8, 82.4, 190.5, 538.7],
                wages: [79640, 61820, 61400, 61820, 34690, 30920, 37310, 66970, 98420]
            },
            'Life, Physical, and Social Science': {
                labels: [
                    'Medical scientists',
                    'Biochemists and biophysicists',
                    'Chemists',
                    'Environmental scientists',
                    'Clinical and counseling psychologists',
                    'Industrial-organizational psychologists',
                    'Epidemiologists',
                    'Survey researchers',
                    'Agricultural and food scientists'
                ],
                total2023: [146.6, 37.5, 84.9, 87.2, 55.3, 3.5, 8.6, 11.9, 35.1],
                wages: [95300, 102270, 89140, 76860, 82510, 113320, 78830, 59870, 74160],
                education: {
                    labels: [
                        'Less than high school diploma',
                        'High school diploma or equivalent',
                        'Some college, no degree',
                        'Associate\'s degree',
                        'Bachelor\'s degree',
                        'Master\'s degree',
                        'Doctoral or professional degree'
                    ],
                    data: [
                        [0.1, 0.8, 2.4, 1.8, 15.2, 28.4, 51.3],  // Medical scientists
                        [0.1, 0.6, 1.8, 1.4, 12.8, 24.6, 58.7],  // Biochemists and biophysicists
                        [0.2, 1.2, 3.6, 2.8, 58.4, 25.2, 8.6],   // Chemists
                        [0.3, 1.6, 4.2, 3.2, 62.8, 22.4, 5.5],   // Environmental scientists
                        [0.0, 0.2, 0.8, 0.6, 2.4, 8.2, 87.8],    // Clinical and counseling psychologists
                        [0.0, 0.2, 0.6, 0.4, 2.1, 12.4, 84.3],   // Industrial-organizational psychologists
                        [0.1, 0.4, 1.2, 0.9, 8.6, 68.4, 20.4],   // Epidemiologists
                        [0.4, 2.1, 5.2, 3.8, 54.2, 28.4, 5.9],   // Survey researchers
                        [0.2, 1.4, 3.8, 2.9, 59.8, 24.2, 7.7]    // Agricultural and food scientists
                    ]
                }
            }
        }
    },
    occupation: {
        labels: [
            'Management',
            'Business and Financial Operations',
            'Computer and Mathematical',
            'Architecture and Engineering',
            'Life, Physical, and Social Science',
            'Community and Social Service',
            'Legal',
            'Educational Instruction and Library',
            'Arts, Design, Entertainment, Sports, and Media',
            'Healthcare Practitioners and Technical',
            'Healthcare Support',
            'Protective Service',
            'Food Preparation and Serving',
            'Building and Grounds Cleaning',
            'Personal Care and Service',
            'Sales and Related',
            'Office and Administrative Support',
            'Farming, Fishing, and Forestry',
            'Construction and Extraction',
            'Installation, Maintenance, and Repair',
            'Production',
            'Transportation and Material Moving'
        ],
        total2023: [
            13181.3, 10977.2, 5417.6, 2639.7, 1574.1, 3044.7,
            1394.4, 9579.9, 3073.1, 9781.6, 7516.9, 3630.7,
            13580.3, 5640.5, 4346.2, 14609.5, 19671.9, 982.9,
            7338.3, 6460.3, 9093.6, 14315.1
        ],
        total2033: [
            14140.9, 11738.5, 6116.7, 2819.7, 1691.7, 3291.7,
            1446.2, 9731.2, 3203.2, 10623.3, 8659.3, 3704.7,
            14167.2, 5817.4, 4622.3, 14319.5, 18975.6, 964.5,
            7752.3, 6803.5, 8999.5, 15000.1
        ]
    },
    wages: {
        labels: [
            'Management',
            'Business and Financial Operations',
            'Computer and Mathematical',
            'Architecture and Engineering',
            'Life, Physical, and Social Science',
            'Community and Social Service',
            'Legal',
            'Educational Instruction and Library',
            'Arts, Design, Entertainment, Sports, and Media',
            'Healthcare Practitioners and Technical',
            'Healthcare Support',
            'Protective Service',
            'Food Preparation and Serving',
            'Building and Grounds Cleaning',
            'Personal Care and Service',
            'Sales and Related',
            'Office and Administrative Support',
            'Farming, Fishing, and Forestry',
            'Construction and Extraction',
            'Installation, Maintenance, and Repair',
            'Production',
            'Transportation and Material Moving'
        ],
        median: [
            116880, 79050, 104200, 91420, 78280, 52000,
            99220, 59940, 58920, 80820, 36140, 47760,
            32240, 35990, 34260, 36760, 44480, 35520,
            55680, 53920, 43630, 40050
        ]
    },
    industry: {
        labels: [
            'Agriculture, Forestry, Fishing and Hunting',
            'Mining, Quarrying, and Oil/Gas Extraction',
            'Construction',
            'Manufacturing',
            'Utilities',
            'Wholesale Trade',
            'Retail Trade',
            'Transportation and Warehousing',
            'Information',
            'Financial Activities',
            'Professional and Business Services',
            'Educational Services (Private)',
            'Healthcare and Social Assistance',
            'Leisure and Hospitality',
            'Other Services',
            'Federal Government',
            'State and Local Government'
        ],
        total: [
            1461.8, 595.3, 8017.9, 12939.5, 575.5, 6116.3,
            15590.1, 6565.3, 3027.1, 9197.4, 22840.1, 3817.7,
            21524.5, 16592.8, 6497.9, 2925.1, 19856.6
        ]
    },
    age: {
        labels: [
            '16-19 years',
            '20-24 years',
            '25-34 years',
            '35-44 years',
            '45-54 years',
            '55-64 years',
            '65 years and over'
        ],
        total: [5124, 14235, 37451, 35912, 32145, 28912, 12584]
    }
};

// Chart colors (expanded for more categories)
const chartColors = [
    'rgba(255, 99, 132, 0.8)',    // Red
    'rgba(54, 162, 235, 0.8)',    // Blue
    'rgba(255, 206, 86, 0.8)',    // Yellow
    'rgba(75, 192, 192, 0.8)',    // Teal
    'rgba(153, 102, 255, 0.8)',   // Purple
    'rgba(255, 159, 64, 0.8)',    // Orange
    'rgba(46, 204, 113, 0.8)',    // Green
    'rgba(142, 68, 173, 0.8)',    // Purple
    'rgba(52, 152, 219, 0.8)',    // Light Blue
    'rgba(231, 76, 60, 0.8)',     // Dark Red
    'rgba(26, 188, 156, 0.8)',    // Turquoise
    'rgba(230, 126, 34, 0.8)',    // Carrot Orange
    'rgba(155, 89, 182, 0.8)',    // Wisteria
    'rgba(52, 73, 94, 0.8)',      // Wet Asphalt
    'rgba(241, 196, 15, 0.8)',    // Sun Flower
    'rgba(22, 160, 133, 0.8)',    // Green Sea
    'rgba(192, 57, 43, 0.8)',     // Pomegranate
    'rgba(243, 156, 18, 0.8)',    // Orange
    'rgba(211, 84, 0, 0.8)',      // Pumpkin
    'rgba(41, 128, 185, 0.8)',    // Belize Hole
    'rgba(39, 174, 96, 0.8)',     // Emerald
    'rgba(44, 62, 80, 0.8)',      // Midnight Blue
    'rgba(127, 140, 141, 0.8)'    // Asbestos
];

const chartBorders = chartColors.map(color => color.replace('0.8', '1'));

// Chart configuration
let currentChart = null;

// Initialize the chart
function initializeChart() {
    const ctx = document.getElementById('mainChart').getContext('2d');
    const chartType = document.getElementById('chartType').value;
    const dataCategory = document.getElementById('dataCategory').value;
    
    // Handle detailed occupation view
    if (dataCategory === 'detailedOccupation') {
        const occupationGroup = document.getElementById('occupationGroup').value;
        const dataType = document.getElementById('dataType').value;
        const groupData = blsData.detailedOccupation.groups[occupationGroup];
        
        // Prepare datasets based on data type
        let datasets = [];
        if (dataType === 'employment') {
            datasets = [{
                label: '2023 Employment (thousands)',
                data: groupData.total2023,
                backgroundColor: chartType === 'pie' ? 
                    chartColors.slice(0, groupData.labels.length) : 
                    'rgba(54, 162, 235, 0.5)',
                borderColor: chartType === 'pie' ? 
                    chartBorders.slice(0, groupData.labels.length) : 
                    'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }];
        } else if (dataType === 'wages') {
            datasets = [{
                label: 'Annual Wages ($)',
                data: groupData.wages,
                backgroundColor: chartType === 'pie' ? 
                    chartColors.slice(0, groupData.labels.length) : 
                    'rgba(75, 192, 192, 0.5)',
                borderColor: chartType === 'pie' ? 
                    chartBorders.slice(0, groupData.labels.length) : 
                    'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }];
        } else if (dataType === 'education') {
            // Create one dataset per education level
            datasets = groupData.education.labels.map((eduLevel, i) => ({
                label: eduLevel,
                data: groupData.education.data.map(row => row[i]),
                backgroundColor: chartColors[i],
                borderColor: chartBorders[i],
                borderWidth: 1
            }));
        }

        // Create chart configuration
        const config = createChartConfig(
            dataType === 'education' ? 'bar' : chartType, // Force bar chart for education
            groupData.labels,
            datasets,
            getChartTitle(dataCategory, dataType, occupationGroup),
            dataType === 'wages' ? {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += '$' + context.parsed.y.toLocaleString();
                                }
                                return label;
                            }
                        }
                    }
                }
            } : dataType === 'education' ? {
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y.toFixed(1) + '%';
                                }
                                return label;
                            }
                        }
                    }
                }
            } : null
        );
        
        // Create new chart
        if (currentChart) {
            currentChart.destroy();
        }
        currentChart = new Chart(ctx, config);
        updateDetailedOccupationDescription(groupData, dataType, occupationGroup);
        return;
    }

    // Handle other categories as before
    const data = blsData[dataCategory];

    // Destroy existing chart if it exists
    if (currentChart) {
        currentChart.destroy();
    }

    // Prepare datasets based on category
    let datasets = [];
    if (dataCategory === 'occupation') {
        if (chartType === 'pie') {
            datasets = [{
                label: '2023 Employment (thousands)',
                data: data.total2023,
                backgroundColor: chartColors.slice(0, data.labels.length),
                borderColor: chartBorders.slice(0, data.labels.length),
                borderWidth: 1
            }];
        } else {
            datasets = [
                {
                    label: '2023 Employment (thousands)',
                    data: data.total2023,
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: '2033 Projected (thousands)',
                    data: data.total2033,
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }
            ];
        }
    } else if (dataCategory === 'wages') {
        datasets = [{
            label: 'Median Annual Wage ($)',
            data: data.median,
            backgroundColor: chartType === 'pie' ? chartColors.slice(0, data.labels.length) : 'rgba(75, 192, 192, 0.5)',
            borderColor: chartType === 'pie' ? chartBorders.slice(0, data.labels.length) : 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }];
    } else {
        datasets = [{
            label: 'Total Employed (thousands)',
            data: data.total,
            backgroundColor: chartType === 'pie' ? chartColors.slice(0, data.labels.length) : 'rgba(54, 162, 235, 0.5)',
            borderColor: chartType === 'pie' ? chartBorders.slice(0, data.labels.length) : 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }];
    }

    // Chart configuration
    const config = createChartConfig(
        chartType,
        data.labels,
        datasets,
        getChartTitle(dataCategory),
        dataCategory === 'wages' ? {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        } : null
    );

    // Create new chart
    currentChart = new Chart(ctx, config);
    updateChartDescription(data, dataCategory);
}

// Get chart title based on category and data type
function getChartTitle(dataCategory, dataType, occupationGroup) {
    if (dataCategory === 'detailedOccupation') {
        switch (dataType) {
            case 'employment':
                return `Employment Levels in ${occupationGroup} (2023)`;
            case 'wages':
                return `Annual Wages in ${occupationGroup}`;
            case 'education':
                return `Education Distribution in ${occupationGroup}`;
            default:
                return '';
        }
    }
    switch (dataCategory) {
        case 'occupation':
            const type = document.getElementById('chartType').value;
            return type === 'pie'
                ? 'Employment by Occupation (2023)'
                : 'Employment by Occupation (2023 vs 2033 Projected)';
        case 'wages':
            return 'Median Annual Wages by Occupation';
        case 'industry':
            return 'Employment by Industry (2023)';
        case 'age':
            return 'Employment by Age Group';
        default:
            return '';
    }
}

// Update chart description
function updateChartDescription(data, category) {
    const description = document.getElementById('chartDescription');
    let content = '<p class="font-semibold">Key Insights:</p><ul class="list-disc pl-5 mt-2">';
    
    if (category === 'occupation') {
        const total2023 = data.total2023.reduce((a, b) => a + b, 0);
        const total2033 = data.total2033.reduce((a, b) => a + b, 0);
        const growth = ((total2033 - total2023) / total2023 * 100).toFixed(1);
        const maxGrowthIndex = data.total2023.reduce((iMax, x, i, arr) => 
            ((x - arr[iMax]) / arr[iMax] > (data.total2033[i] - data.total2033[iMax]) / data.total2033[iMax]) ? i : iMax, 0);
        
        content += `
            <li>Total 2023 employment: ${total2023.toLocaleString()} thousand</li>
            <li>Projected 2033 employment: ${total2033.toLocaleString()} thousand</li>
            <li>Overall growth: ${growth}%</li>
            <li>Fastest growing: ${data.labels[maxGrowthIndex]}</li>
        `;
    } else if (category === 'wages') {
        const maxWageIndex = data.median.indexOf(Math.max(...data.median));
        const minWageIndex = data.median.indexOf(Math.min(...data.median));
        const avgWage = (data.median.reduce((a, b) => a + b, 0) / data.median.length).toFixed(0);
        
        content += `
            <li>Highest paying: ${data.labels[maxWageIndex]} ($${data.median[maxWageIndex].toLocaleString()})</li>
            <li>Lowest paying: ${data.labels[minWageIndex]} ($${data.median[minWageIndex].toLocaleString()})</li>
            <li>Average annual wage: $${avgWage.toLocaleString()}</li>
        `;
    } else {
        const total = data.total.reduce((a, b) => a + b, 0);
        const maxIndex = data.total.indexOf(Math.max(...data.total));
        content += `
            <li>Total employment: ${total.toLocaleString()} thousand</li>
            <li>Largest ${category} group: ${data.labels[maxIndex]} (${data.total[maxIndex].toLocaleString()} thousand)</li>
            <li>Average distribution: ${(total / data.labels.length).toFixed(1)}k per category</li>
        `;
    }
    
    content += '</ul>';
    description.innerHTML = content;
}

// Update chart description for detailed occupations
function updateDetailedOccupationDescription(data, dataType, groupName) {
    const description = document.getElementById('chartDescription');
    let content = '<p class="font-semibold">Key Insights:</p><ul class="list-disc pl-5 mt-2">';
    
    if (dataType === 'employment') {
        const total = data.total2023.reduce((a, b) => a + b, 0);
        const maxIndex = data.total2023.indexOf(Math.max(...data.total2023));
        content += `
            <li>Total ${groupName} employment: ${total.toLocaleString()} thousand</li>
            <li>Largest occupation: ${data.labels[maxIndex]} (${data.total2023[maxIndex].toLocaleString()} thousand)</li>
            <li>Average employment: ${(total / data.labels.length).toFixed(1)}k per occupation</li>
        `;
    } else if (dataType === 'wages') {
        const maxWageIndex = data.wages.indexOf(Math.max(...data.wages));
        const minWageIndex = data.wages.indexOf(Math.min(...data.wages));
        const avgWage = (data.wages.reduce((a, b) => a + b, 0) / data.wages.length).toFixed(0);
        
        content += `
            <li>Highest paying: ${data.labels[maxWageIndex]} ($${data.wages[maxWageIndex].toLocaleString()})</li>
            <li>Lowest paying: ${data.labels[minWageIndex]} ($${data.wages[minWageIndex].toLocaleString()})</li>
            <li>Average annual wage: $${avgWage.toLocaleString()}</li>
        `;
    } else if (dataType === 'education') {
        // Find occupation with highest bachelor's degree or higher
        const bachelorsPlusIndex = data.education.labels.findIndex(label => label === 'Bachelor\'s degree');
        const bachelorsPlusData = data.education.data.map(row => 
            row.slice(bachelorsPlusIndex).reduce((a, b) => a + b, 0)
        );
        const maxBachelorsPlusIndex = bachelorsPlusData.indexOf(Math.max(...bachelorsPlusData));
        const minBachelorsPlusIndex = bachelorsPlusData.indexOf(Math.min(...bachelorsPlusData));

        content += `
            <li>Highest education requirements: ${data.labels[maxBachelorsPlusIndex]} (${bachelorsPlusData[maxBachelorsPlusIndex].toFixed(1)}% bachelor's or higher)</li>
            <li>Lowest education requirements: ${data.labels[minBachelorsPlusIndex]} (${bachelorsPlusData[minBachelorsPlusIndex].toFixed(1)}% bachelor's or higher)</li>
            <li>Most common education level: ${data.education.labels[4]} (Bachelor's degree)</li>
        `;
    }
    
    content += '</ul>';
    description.innerHTML = content;
}

// Helper function to create chart configuration
function createChartConfig(type, labels, datasets, title, additionalOptions = null) {
    const config = {
        type: type,
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: type === 'pie' ? 1.5 : 2,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            family: 'Inter, system-ui, -apple-system, sans-serif',
                            size: 12
                        },
                        padding: 15
                    }
                },
                title: {
                    display: true,
                    text: title,
                    font: {
                        family: 'Inter, system-ui, -apple-system, sans-serif',
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                }
            },
            scales: type === 'pie' ? {} : {
                y: {
                    beginAtZero: true,
                    ticks: {
                        maxTicksLimit: 10,
                        font: {
                            family: 'Inter, system-ui, -apple-system, sans-serif',
                            size: 12
                        },
                        callback: function(value) {
                            if (datasets[0].label.includes('Wages')) {
                                return '$' + value.toLocaleString();
                            }
                            return value.toLocaleString();
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Inter, system-ui, -apple-system, sans-serif',
                            size: 12
                        },
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    };

    // Merge additional options if provided
    if (additionalOptions) {
        config.options = { ...config.options, ...additionalOptions };
    }

    return config;
}

// Event listeners
document.getElementById('chartType').addEventListener('change', initializeChart);
document.getElementById('dataCategory').addEventListener('change', function() {
    const dataCategory = this.value;
    const detailedControls = document.getElementById('detailedOccupationControls');
    const chartTypeSelect = document.getElementById('chartType');
    
    // Show/hide detailed occupation controls
    if (dataCategory === 'detailedOccupation') {
        detailedControls.classList.remove('hidden');
    } else {
        detailedControls.classList.add('hidden');
    }
    
    initializeChart();
});

// Add event listeners for detailed occupation controls
document.getElementById('occupationGroup').addEventListener('change', initializeChart);
document.getElementById('dataType').addEventListener('change', initializeChart);

// Initialize the chart when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initial check for detailed occupation view
    const dataCategory = document.getElementById('dataCategory').value;
    if (dataCategory === 'detailedOccupation') {
        document.getElementById('detailedOccupationControls').classList.remove('hidden');
    }
    
    initializeChart();
});