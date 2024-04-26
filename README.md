# Google Sheets Data Splitter

## Description
This Google Apps Script divides data from a source sheet into multiple sheets, each containing 'n' rows (excluding headers). It ensures that headers are copied to every sheet and prevents the last entry of each sheet from repeating in the next.

## Usage
1. Open your Google Sheets document containing the data to be split.
2. Go to "Extensions" -> "Apps Script" to open the Google Apps Script editor.
3. Copy the provided script into the editor.
4. Replace `"SourceSheetName"` with the name of your source sheet.
5. Save the script and close the Apps Script editor.
6. Run the `splitDataIntoSheets()` function by clicking the play button ▶️ in the toolbar.
7. Follow any authorization prompts to grant necessary permissions.
8. The script will create new sheets with divided data.

## Notes
- Ensure your Google Sheet has enough rows available to accommodate the new sheets.
- The script assumes each sheet will contain 'n' data rows excluding headers.
- Verify that the source sheet name matches exactly with the actual sheet name.
- Check the Google Apps Script logs for any error messages or issues during execution.

## License
This project is licensed under the [MIT License](LICENSE).
