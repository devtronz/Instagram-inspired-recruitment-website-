function createJobListingElement(job) {
    const jobListingDiv = document.createElement('div');
    jobListingDiv.classList.add('job-listing');

    jobListingDiv.innerHTML = `
        <div class="job-listing-header">
            <img src="images/company-logo-placeholder.png" alt="${job.company} Logo" class="company-logo-profile"> <div class="job-listing-header-info">
                <h3>${job.title}</h3>
                <p>${job.company}</p>
            </div>
        </div>
        <div class="job-listing-content">
            <p>${job.description.substring(0, 100)}...</p>
        </div>
        <div class="job-listing-actions">
            <button class="job-action-button">Apply Now</button>
            <button class="job-action-button">Save</button>
            <button class="job-action-button">Share</button> </div>
        <p class="read-more-link"><a href="#">Read More</a></p>
    `;
    return jobListingDiv;
}
