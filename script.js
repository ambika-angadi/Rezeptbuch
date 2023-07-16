// Function to open the add recipe form in a new window/tab
function openAddRecipeForm() {
    window.open('add_recipe.html', '_blank', 'width=600,height=400');
  }

  // Event listener for the "Add Recipe" link
  document.getElementById('addRecipeLink').addEventListener('click', openAddRecipeForm);