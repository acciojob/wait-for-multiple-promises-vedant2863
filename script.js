//your JS code here. If required.
const tbody = document.getElementById("output");

// 🔹 Step 1: Show Loading row initially
tbody.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>
`;

// 🔹 Function to create a promise with random delay (1–3 sec)
function createPromise() {
  return new Promise((resolve) => {
    const delay = Math.random() * 2 + 1; // 1 to 3 seconds

    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
}

// 🔹 Create 3 promises
const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

// 🔹 Wait for all promises
Promise.all([p1, p2, p3]).then((times) => {
  // Remove loading row
  tbody.innerHTML = "";

  let totalTime = Math.max(...times);

  // Add rows for each promise
  times.forEach((time, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${time.toFixed(3)}</td>
    `;

    tbody.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime.toFixed(3)}</strong></td>
  `;

  tbody.appendChild(totalRow);
});