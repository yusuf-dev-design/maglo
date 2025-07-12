// src/data/ChartData.js

function generateWorkingCapitalData(startDate, days) {
  const data = [];
  let current = new Date(startDate);

  for (let i = 0; i < days; i++) {
    const dateStr = current.toISOString().split("T")[0];

    data.push({
      date: dateStr,
      income: Math.floor(Math.random() * 1500) + 10,   // 1000 - 6000 arası
      expenses: Math.floor(Math.random() * 1000) + 5,  // 500 - 4500 arası
    });

    current.setDate(current.getDate() + 1); // bir gün ileri
  }

  return data;
}

export const workingCapitalDaily = generateWorkingCapitalData("2024-12-30", 30);
