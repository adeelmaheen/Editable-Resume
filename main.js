"use strict";
// Get form elements and resume fields
var resumeForm = document.getElementById('resume-form');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumePhone = document.getElementById('resume-phone');
var resumeEducation = document.getElementById('resume-education-content');
var resumeWorkExperience = document.getElementById('resume-work-experience-content');
var resumeSkillsList = document.getElementById('resume-skills-list');
// Form submission listener
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from reloading the page
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Update resume with the new form values
    resumeName.textContent = name;
    resumeEmail.textContent = "Email: ".concat(email);
    resumePhone.textContent = "Phone: ".concat(phone);
    resumeEducation.textContent = education;
    resumeWorkExperience.textContent = workExperience;
    // Update skills list
    var skillsArray = skills.split(',').map(function (skill) { return skill.trim(); });
    resumeSkillsList.innerHTML = ''; // Clear the current list
    skillsArray.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill;
        resumeSkillsList.appendChild(listItem);
    });
});
// Enable editing directly on the resume
var editableElements = document.querySelectorAll('[contenteditable="true"]');
// Listen for input changes and update the resume in real-time
editableElements.forEach(function (element) {
    element.addEventListener('input', function (event) {
        var target = event.target;
        console.log("Updated: ".concat(target.textContent));
    });
});
