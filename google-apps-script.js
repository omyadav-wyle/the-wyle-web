// Replace with your actual Sheet ID
const SHEET_ID = '1_cwS3lBUXXGliyb1xJ5i5dFjY-TvabSWqxj5bhKAz8Q';

function doPost(e) {
  try {
    let data;
    
    // Parse incoming data
    if (e.parameter && e.parameter.data) {
      data = JSON.parse(e.parameter.data);
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'No data received' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Detect which form based on fields present
    // Contact form (UserContact) has: name, phone, email, message
    // Partner Contacts form (Contact) has: businessName, contactName, contactTitle, email, phone, city
    
    if (data.name && data.email && data.phone) {
      // This is the Contact form (UserContact component)
      return handleContactForm(data);
    } else if (data.businessName && data.contactName) {
      // This is the Partner Contacts form (Contact component)
      return handlePartnerContactsForm(data);
    } else {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'Invalid form data' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    console.error('Unexpected Error:', error);
    return ContentService.createTextOutput(
      JSON.stringify({ 
        status: 'error', 
        message: 'An error occurred: ' + error.toString() 
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleContactForm(data) {
  const SHEET_NAME = 'Contact';
  
  // Validate required fields
  if (!data.name || !data.email || !data.phone) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'Name, Email, and Phone Number are required' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Create sheet if it doesn't exist and add headers
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Name', 'Phone Number', 'Email', 'Ph. No', 'Comments/Message']);
  }

  // Map form data to sheet columns:
  // A: Name
  // B: Phone Number
  // C: Email
  // D: Ph. No (duplicate of phone number)
  // E: Comments/Message
  sheet.appendRow([
    data.name || '',                    // Column A: Name
    data.phone || '',                   // Column B: Phone Number
    data.email || '',                   // Column C: Email
    data.phone || '',                   // Column D: Ph. No (same as phone)
    data.message || '',                 // Column E: Comments/Message
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success', message: 'Your message has been received successfully!' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function handlePartnerContactsForm(data) {
  const SHEET_NAME = 'Partner Contacts';
  
  // Validate required fields
  if (
    !data.businessName || !data.contactName || !data.contactTitle || 
    !data.email || !data.phone || !data.city
  ) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: 'All fields are required' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Create sheet if it doesn't exist and add headers
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      'Business Name', 
      'Contact Person Name', 
      'Contact Person Title', 
      'Email', 
      'Phone No', 
      'City'
    ]);
  }

  // Map form data to sheet columns:
  // A: Business Name
  // B: Contact Person Name
  // C: Contact Person Title
  // D: Email
  // E: Phone No
  // F: City
  sheet.appendRow([
    data.businessName || '',            // Column A: Business Name
    data.contactName || '',             // Column B: Contact Person Name
    data.contactTitle || '',           // Column C: Contact Person Title
    data.email || '',                   // Column D: Email
    data.phone || '',                   // Column E: Phone No
    data.city || '',                    // Column F: City
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: 'success', message: 'Your form has been submitted successfully!' })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Web app is running' })
  ).setMimeType(ContentService.MimeType.JSON);
}


