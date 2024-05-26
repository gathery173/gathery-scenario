

  function loadActors() {
    const actors = JSON.parse(localStorage.getItem('actors')) || [];
    const dropdowns = document.querySelectorAll('.actor-dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.innerHTML = '';
      actors.forEach(actor => {
        const option = document.createElement('option');
        option.value = actor;
        option.textContent = actor;
        dropdown.appendChild(option);
      });
    });
  }

  function addActorToStorage(actorName) {
    const actors = JSON.parse(localStorage.getItem('actors')) || [];
    if (!actors.includes(actorName)) {
      actors.push(actorName);
      localStorage.setItem('actors', JSON.stringify(actors));
      loadActors();
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    loadActors();



    document.querySelectorAll('.add-actor-btn').forEach(button => {
      button.addEventListener('click', () => {
        $('#addActorModal').modal('show');
      });
    });

    document.getElementById('addActorForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const actorNameInput = document.getElementById('actorName');
      const actorName = actorNameInput.value.trim();
      if (actorName) {
        addActorToStorage(actorName);
        actorNameInput.value = '';
        $('#addActorModal').modal('hide');
      }
    });
  });