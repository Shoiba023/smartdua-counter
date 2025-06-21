function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.group,
    data.name,
    data.dua,
    data.count,
    new Date(),
    data.location,
    data.notes
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 7).getValues();

  let duaTotals = {};

  data.forEach(row => {
    const key = row[0] + "-" + row[2]; // Group-Dua
    const count = parseInt(row[3]) || 0;
    if (duaTotals[key]) {
      duaTotals[key] += count;
    } else {
      duaTotals[key] = count;
    }
  });

  return ContentService.createTextOutput(
    JSON.stringify(duaTotals)
  ).setMimeType(ContentService.MimeType.JSON);
}
