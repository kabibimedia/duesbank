const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

btnPopup.addEventListener
(
    'click', ()=>
    {
        wrapper.classList.add('active-popup');
    }
);

iconClose.addEventListener
(
    'click', ()=>
    {
        wrapper.classList.remove('active-popup');
    }
);

/*login function*/
function submit_form() {
  var un = document.getElementById("un1").value;
  var p = document.getElementById("p1").value;
  var password_val = /^[A-Za-z0-9_\.\-]+$/;
  var user_val = /^[a-zA-Z0-9_\.\-]+$/;

  if (un === '' || p === '') {
    alert("Enter each detail correctly");
  } else if (!user_val.test(un)) {
    alert('Invalid Username, please enter a valid Username');
  } else if (!password_val.test(p)) {
    alert('Invalid password format, please enter a valid password id');
  } else if (p.length > 32) {
    alert("Password maximum length is 32");
  } else if (p.length < 8) {
    alert("Password minimum length is 8");
  } else {
    alert("Login successfully..");
    window.location = "home.html";
  }
}

/*date and time*/

    // Function to update the date and time
    /*function updateDateTime()
     {
      var currentDateTime = new Date();

      var day = currentDateTime.getDate();
      var month = currentDateTime.getMonth() + 1; // Adding 1 because JavaScript months are zero-based
      var year = currentDateTime.getFullYear();
      var formattedDate = ('0' + day).slice(-2) + '/' + ('0' + month).slice(-2) + '/' + year;

      var hours = currentDateTime.getHours();
      var minutes = currentDateTime.getMinutes();
      var formattedTime = ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);

      // Display the formatted date and time
      document.getElementById('date').textContent = formattedDate;
      document.getElementById('time').textContent = formattedTime;
    }

    // Call the function to display the date and time immediately
    updateDateTime();

    // Update the date and time every second (1000 milliseconds)
    setInterval(updateDateTime, 1000);*/
  

    /*linking pages to button*/
    function redirectToPage(pageURL) {
      window.location.href = pageURL;
    }

    /*Refresh page and confirm prompt*/

    function refreshPage() {
      location.reload();
    }

    
/*sumbit functions for collection*/
function confirmSubmission() {
  // Get form field values
  const accountName = document.getElementById('account').value.trim();
  const accountNumber = document.getElementById('accountNumber').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const description = document.getElementById('description').value.trim();

  // Check if any field is empty
  if (accountName === '' || accountNumber === '' || amount === '' || description === '') {
    alert('Please fill in all the required fields.');
    return false; // Prevent form submission
  }

  // Show a confirmation dialog
  const isConfirmed = confirm('Are you sure you want to submit this transaction?');

  // If the user confirms, proceed with the form submission
  if (isConfirmed) {
    // Show success message
    alert('Transaction submitted successfully!');

    // Print the submitted data
    printData(accountName, accountNumber, amount, description);
    
    // Clear form fields
    clearFormFields();
  }

  // Return the confirmation status to trigger form submission
  return isConfirmed;
}

function printData(accountName, accountNumber, amount, description) {
  // Prepare the data for printing
  const dataToPrint = `
    Account Name: ${accountName}
    Account Number: ${accountNumber}
    Amount: ${amount}
    Description: ${description}
  `;

  // Create a new window for printing
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<pre>' + dataToPrint + '</pre>');

  // Print the data
  printWindow.print();
  printWindow.close();
}
    
/*sumbit functions for payment*/
/*function paymentSubmission() {
  // Get form field values
  const accountName = document.getElementById('account').value.trim();
  const accountNumber = document.getElementById('accountNumber').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const description = document.getElementById('description').value.trim();

  // Check if any field is empty
  if (accountName === '' || accountNumber === '' || amount === '' || description === '') {
    alert('Please fill in all the required fields.');
    return false; // Prevent form submission
  }

  // Show a confirmation dialog
  const isConfirmed = confirm('Are you sure you want to submit this transaction?');

  // If the user confirms, proceed with the form submission
  if (isConfirmed) {
    // Show success message
    alert('Transaction submitted successfully!');

    // Print the submitted data
    printData(accountName, accountNumber, amount, description);
    
    // Clear form fields
    clearFormFields();
  }

  // Return the confirmation status to trigger form submission
  return isConfirmed;
}

function printData(accountName, accountNumber, amount, description) {
  // Prepare the data for printing
  const dataToPrint = `
    Account Name: ${accountName}
    Account Number: ${accountNumber}
    Amount: ${amount}
    Description: ${description}
  `;

  // Create a new window for printing
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<pre>' + dataToPrint + '</pre>');

  // Print the data
  printWindow.print();
  printWindow.close();
}
*/

let previewData = ''; // Variable to store the preview data

function collectForm() {
  // Get form field values
  const accountName = document.getElementById('account').value.trim();
  const accountNumber = document.getElementById('accountNumber').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const description = document.getElementById('description').value.trim();

  // Check if any field is empty
  if (accountName === '' || accountNumber === '' || amount === '' || description === '') {
    alert('Please fill in all the required fields.');
    return;
  }

  // Show a confirmation dialog
  const isConfirmed = confirm('Are you sure you want to submit this transaction?');

  // If the user confirms, proceed with the form submission
  if (isConfirmed) {
    // Show success message
    alert('Transaction submitted successfully!');
    // Store the preview data
    previewData = getPreviewData(accountName, accountNumber, amount, description);
    // Show the preview dialog
    showPreviewDialog();
    // Clear form fields
    clearFormFields();
  }
}

function showPreviewDialog() {
  // Update the preview dialog content with form data
  const previewContent = `
    <h2>Preview Transaction Data</h2>
    <pre>${previewData}</pre>
    <button onclick="printPreview()">Print</button>
    <button onclick="hidePreviewDialog()">Close</button>
  `;

  // Set the preview dialog content
  document.getElementById('previewDialog').innerHTML = previewContent;

  // Show the preview dialog
  document.getElementById('previewDialog').style.display = 'block';
}

function printPreview() {
  // Print the data from the preview dialog
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<pre>' + previewData + '</pre>');
  printWindow.print();
  printWindow.close();
}

function hidePreviewDialog() {
  // Hide the preview dialog
  document.getElementById('previewDialog').style.display = 'none';
}

function getPreviewData(accountName, accountNumber, amount, description) {
  // Combine the data into a single string
  const previewData = `
    Account Name: ${accountName}
    Account Number: ${accountNumber}
    Amount: ${amount}
    Description: ${description}
  `;

  return previewData;
}

function clearFormFields() {
  // Clear the form fields
  document.getElementById('account').value = '';
  document.getElementById('accountNumber').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('description').value = '';
}



// Function to handle the payment form submission
function paymentForm() {
  // Get form field values
  const accountName = document.getElementById('account').value.trim();
  const accountNumber = document.getElementById('accountNumber').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const description = document.getElementById('description').value.trim();
  const userName = "John Doe"; // Replace this with the user's name, you can get it from your authentication system

  // Check if any field is empty
  if (accountName === '' || accountNumber === '' || amount === '' || description === '') {
    alert('Please fill in all the required fields.');
    return; // Prevent form submission
  }

  // Show a confirmation dialog
  const isConfirmed = confirm('Are you sure you want to submit this transaction?');

  // If the user confirms, proceed with the form submission
  if (isConfirmed) {
    // Show success message
    alert('Transaction submitted successfully!');
    // Show the preview dialog
    showPreviewDialog(accountName, accountNumber, amount, description, userName);
    // Clear form fields
    clearFormFields();
  }
}

// Function to show the preview dialog
function showPreviewDialog(accountName, accountNumber, amount, description, userName) {
  // Update the preview dialog content with form data
  const previewContent = `
    <p>User: ${userName}</p>
    <p>Account Name: ${accountName}</p>
    <p>Account Number: ${accountNumber}</p>
    <p>Amount: ${amount}</p>
    <p>Description: ${description}</p>
  `;

  // Set the preview dialog content
  document.getElementById('previewContent').innerHTML = previewContent;

  // Show the preview dialog
  document.getElementById('previewDialog').style.display = 'block';
}

// Function to print the preview data
function printPreview() {
  // Print the data from the preview dialog
  const printWindow = window.open('', '_blank');
  const previewData = getPreviewData();
  printWindow.document.write('<pre>' + previewData + '</pre>');
  printWindow.print();
  printWindow.close();
}

// Function to hide the preview dialog
function hidePreviewDialog() {
  // Hide the preview dialog
  document.getElementById('previewDialog').style.display = 'none';
}

// Function to get the preview data
function getPreviewData() {
  // Get the data from the preview dialog
  const accountName = document.getElementById('account').value.trim();
  const accountNumber = document.getElementById('accountNumber').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const description = document.getElementById('description').value.trim();
  const userName = "John Doe"; // Replace this with the user's name, you can get it from your authentication system

  // Combine the data into a single string
  const previewData = `
    User: ${userName}
    Account Name: ${accountName}
    Account Number: ${accountNumber}
    Amount: ${amount}
    Description: ${description}
  `;

  return previewData;
}

// Function to clear form fields
function clearFormFields() {
  // Clear the form fields
  document.getElementById('account').value = '';
  document.getElementById('accountNumber').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('description').value = '';
}

/*function for edit and reversal*/
// Store the submitted transactions in an array
/*let submittedTransactions = [];

function confirmSubmission() {
  // Get form field values and create a transaction object
  const transaction = {
    accountName: document.getElementById('account').value.trim(),
    accountNumber: document.getElementById('accountNumber').value.trim(),
    amount: document.getElementById('amount').value.trim(),
    description: document.getElementById('description').value.trim(),
    date: document.getElementById('date').value.trim(),
    transactionType: document.getElementById('transaction-type').value.trim(),
    category: document.getElementById('category').value.trim(),
  };

  // Check if any field is empty
  if (Object.values(transaction).some(value => value === '')) {
    alert('Please fill in all the required fields.');
    return false; // Prevent form submission
  }

  // Show a confirmation dialog
  const isConfirmed = confirm('Are you sure you want to submit this transaction?');

  // If the user confirms, proceed with the form submission
  if (isConfirmed) {
    // Add the transaction to the array of submitted transactions
    submittedTransactions.push(transaction);

    // Clear form fields
    clearFormFields();

    // Show success message
    alert('Transaction submitted successfully!');

    // Update the transaction list display
    updateTransactionList();
  }

  // Return the confirmation status to trigger form submission
  return isConfirmed;
}

function updateTransactionList() {
  const transactionList = document.querySelector('.transaction-list');
  transactionList.innerHTML = ''; // Clear the previous list

  // Create and append a table or list with the submitted transactions
  submittedTransactions.forEach((transaction, index) => {
    const row = document.createElement('div');
    row.classList.add('transaction-row');

    // Display transaction details (you can use a table or list here)
    const details = document.createElement('div');
    details.textContent = `Account Name: ${transaction.accountName}, Amount: ${transaction.amount}, ...`;

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTransaction(index));

    // Reverse button
    const reverseButton = document.createElement('button');
    reverseButton.textContent = 'Reverse';
    reverseButton.addEventListener('click', () => reverseTransaction(index));

    row.appendChild(details);
    row.appendChild(editButton);
    row.appendChild(reverseButton);

    transactionList.appendChild(row);
  });
}

function editTransaction(index) {
  // Retrieve the transaction data from the array using the index
  const transaction = submittedTransactions[index];

  // Populate the form fields with the transaction data
  document.getElementById('account').value = transaction.accountName;
  document.getElementById('accountNumber').value = transaction.accountNumber;
  document.getElementById('amount').value = transaction.amount;
  document.getElementById('description').value = transaction.description;
  document.getElementById('date').value = transaction.date;
  document.getElementById('transaction-type').value = transaction.transactionType;
  document.getElementById('category').value = transaction.category;
}

function reverseTransaction(index) {
  // Remove the transaction from the array using the index
  submittedTransactions.splice(index, 1);

  // Update the transaction list display
  updateTransactionList();
}
*/