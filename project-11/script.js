

async function getCovidData() {
  // You can also read the date if needed, currently unused
  const dateInput = document.getElementById("dateInput").value;

  try {
    const response = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const data = await response.json();

    if (data.success) {
      const summary = data.data.summary;

      document.getElementById("result").innerHTML = `
        <p><strong>Total Confirmed Cases:</strong> ${summary.total}</p>
        <p><strong>Confirmed (Indian):</strong> ${summary.confirmedCasesIndian}</p>
        <p><strong>Confirmed (Foreign):</strong> ${summary.confirmedCasesForeign}</p>
        <p><strong>Discharged:</strong> ${summary.discharged}</p>
        <p><strong>Deaths:</strong> ${summary.deaths}</p>
        <p><strong>Last Refreshed:</strong> ${data.lastRefreshed}</p>
      `;
    } else {
      document.getElementById("result").innerText = "Failed to load COVID-19 data.";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("result").innerText = "Error fetching data.";
  }
}
