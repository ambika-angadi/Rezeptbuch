// Function to open the add recipe form in a new window/tab
function openAddRecipeForm() {
    window.open('add_recipe.html', '_blank', 'width=600,height=400');
  }

  // Event listener for the "Add Recipe" link
  document.getElementById('addRecipeLink').addEventListener('click', openAddRecipeForm);

  // Function to open the delete recipe in a new window/tab
function openAddRecipeForm() {
  window.open('delete_recipe.html', '_blank', 'width=600,height=400');
}

// Event listener for the "Delete Recipe" link
document.getElementById('deleteRecipeLink').addEventListener('click', openAddRecipeForm);

// Function to open the edit recipe form in a new window/tab
function openAddRecipeForm() {
  window.open('edit_recipe.html', '_blank', 'width=600,height=400');
}

// Event listener for the "Edit Recipe" link
document.getElementById('editRecipeLink').addEventListener('click', openAddRecipeForm);