function splitDataIntoSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sourceSheet = ss.getSheetByName("SourceSheetName"); // Replace "SourceSheetName" with the name of your source sheet
  var sourceData = sourceSheet.getDataRange().getValues();
  
  var numRowsPerSheet = n; // Replace n with the number of rows you want to make each splited sheet into
  var numSheets = Math.ceil((sourceData.length - 1) / (numRowsPerSheet - 1));
  
  for (var i = 0; i < numSheets; i++) {
    var startRow = i * (numRowsPerSheet - 1) + 1; // Start from the second row (excluding headers)
    var endRow = Math.min(startRow + numRowsPerSheet - 2, sourceData.length); // Adjusted to exclude the last entry
    var newData = sourceData.slice(startRow - 1, endRow);
    
    var newSheet = ss.insertSheet("Sheet " + (i + 1)); // Create a new sheet
    newSheet.getRange(1, 1, 1, sourceData[0].length).setValues([sourceData[0]]); // Copy headers
    newSheet.getRange(2, 1, newData.length, newData[0].length).setValues(newData); // Copy data to the new sheet
  }
}
