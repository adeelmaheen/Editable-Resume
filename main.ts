// Get form elements and resume fields
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeName = document.getElementById('resume-name') as HTMLElement;
const resumeEmail = document.getElementById('resume-email') as HTMLElement;
const resumePhone = document.getElementById('resume-phone') as HTMLElement;
const resumeEducation = document.getElementById('resume-education-content') as HTMLElement;
const resumeWorkExperience = document.getElementById('resume-work-experience-content') as HTMLElement;
const resumeSkillsList = document.getElementById('resume-skills-list') as HTMLElement;

// Form submission listener
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form from reloading the page

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Update resume with the new form values
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = education;
    resumeWorkExperience.textContent = workExperience;

    // Update skills list
    const skillsArray = skills.split(',').map(skill => skill.trim());
    resumeSkillsList.innerHTML = '';  // Clear the current list
    skillsArray.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        resumeSkillsList.appendChild(listItem);
    });
});

// Enable editing directly on the resume
const editableElements = document.querySelectorAll('[contenteditable="true"]');

// Listen for input changes and update the resume in real-time
editableElements.forEach((element) => {
    element.addEventListener('input', (event) => {
        const target = event.target as HTMLElement;
        console.log(`Updated: ${target.textContent}`);
    });
});
