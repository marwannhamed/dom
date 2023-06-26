function increaseQuantity(itemId) {
  const quantityInput = document.getElementById(itemId + "-quantity");
  const currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}

function decreaseQuantity(itemId) {
  const quantityInput = document.getElementById(itemId + "-quantity");
  const currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
}
function deleteItem(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function toggleLike(span) {
  span.classList.toggle("liked");
}
