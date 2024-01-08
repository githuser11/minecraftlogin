document.addEventListener("DOMContentLoaded", function () {
    var postJobForm = document.getElementById("postJobForm");
    var jobListingsContainer = document.getElementById("jobListings");

    if (postJobForm) {
        postJobForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Validate the form before submission
            if (validateForm()) {
                // You can add logic to submit the form data to a server-side script.
                // For simplicity, let's create a new job listing element.
                var jobTitle = document.getElementById("jobTitle").value;
                var companyName = document.getElementById("companyName").value;
                var jobDescription = document.getElementById("jobDescription").value;
                var jobType = document.getElementById("jobType").value;
                var location = document.getElementById("location").value;

                createJobListing(jobTitle, companyName, jobDescription, jobType, location);

                // Redirect to index.html after job submission
                window.location.href = "f2/index.html";
            }
        });
    }

    function validateForm() {
        // Basic form validation
        var jobTitle = document.getElementById("jobTitle").value;
        var companyName = document.getElementById("companyName").value;
        var jobDescription = document.getElementById("jobDescription").value;
        var jobType = document.getElementById("jobType").value;
        var location = document.getElementById("location").value;

        if (!jobTitle || !companyName || !jobDescription || !jobType || !location) {
            alert("Please fill in all required fields.");
            return false;
        }

        return true;
    }

    function createJobListing(title, company, description, type, location) {
        var jobListing = document.createElement("div");
        jobListing.classList.add("job");

        jobListing.innerHTML = `
            <h3>${title}</h3>
            <p>Company: ${company}</p>
            <p>Location: ${location}</p>
            <p>Description: ${description}</p>
            <a href="#">Apply Now</a>
        `;

        jobListingsContainer.appendChild(jobListing);
    }
});
