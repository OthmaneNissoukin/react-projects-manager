function formatDate() {
  const today = new Date();

  // Get day, month, and year
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = today.getFullYear();

  // Format as "DD-MM-YYYY"
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

export default formatDate;
