function toggleDescription(projectId) {
    var project = document.getElementById(projectId);
    var description = project.querySelector('p');

    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}
