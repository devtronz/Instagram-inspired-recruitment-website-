const jobData = [
    {
        id: 1,
        company: "Creative Studio",
        logo: "https://via.placeholder.com/150/FF5733/FFFFFF?text=CS",
        location: "Paris, France",
        title: "Senior UI/UX Designer",
        description: "Looking for a visionary designer to lead our creative department. Focus on luxury brand experiences.",
        salary: "€70k - €90k"
    },
    {
        id: 2,
        company: "TechNexus",
        logo: "https://via.placeholder.com/150/33FF57/FFFFFF?text=TN",
        location: "Remote",
        title: "Full Stack Developer",
        description: "Join a fast-paced startup building the next generation of social collaboration tools.",
        salary: "$120k - $140k"
    },
    {
        id: 3,
        company: "Vogue Media",
        logo: "https://via.placeholder.com/150/3357FF/FFFFFF?text=VM",
        location: "Milan, Italy",
        title: "Fashion Content Manager",
        description: "Elegant storyteller needed to manage our high-fashion digital presence and recruiter engagement.",
        salary: "€50k - €65k"
    }
];

function renderJobs() {
    const feed = document.getElementById('jobFeed');
    
    jobData.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        
        card.innerHTML = `
            <div class="card-header">
                <img src="${job.logo}" alt="${job.company}" class="company-pfp">
                <div class="header-info">
                    <h4>${job.company}</h4>
                    <p>${job.location}</p>
                </div>
            </div>
            <div class="card-content">
                <h3 class="job-title">${job.title}</h3>
                <p class="job-desc">${job.description}</p>
                <p style="margin-top:10px; font-size: 12px; color: #8e8e8e;"><strong>Salary:</strong> ${job.salary}</p>
            </div>
            <div class="card-actions">
                <button class="btn-apply" onclick="alert('Applying for ${job.title}...')">Apply Now</button>
                <button class="btn-secondary">Save</button>
                <button class="btn-secondary">Share</button>
            </div>
        `;
        feed.appendChild(card);
    });
}

// Run the function when page loads
document.addEventListener('DOMContentLoaded', renderJobs)
    ;
