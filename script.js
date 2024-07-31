function separateNames() {
    const input = document.getElementById('nameInput').value;
    const names = input.split('\n').filter(name => name.trim() !== '');
    const resultTableBody = document.getElementById('result');
    resultTableBody.innerHTML = ''; // Clear any previous results

    names.forEach(name => {
        let parts = name.trim().toLowerCase().split(' ');
        if (parts.length > 1) {
            parts[0] = capitalizeFirstLetter(parts[0]);
            parts[parts.length - 1] = capitalizeFirstLetter(parts[parts.length - 1]);
        } else {
            parts[0] = capitalizeFirstLetter(parts[0]);
        }
        
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const lastNameCell = document.createElement('td');
        
        firstNameCell.textContent = parts[0];
        lastNameCell.textContent = parts[parts.length - 1];
        
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        resultTableBody.appendChild(row);
    });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function copyToClipboard() {
    const resultTable = document.getElementById('resultTable');
    const range = document.createRange();
    range.selectNode(resultTable);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range); // Select the table content
    document.execCommand('copy');
    window.getSelection().removeAllRanges(); // Clear selection after copying

    const copyButton = document.getElementById('copyButton');
    copyButton.textContent = 'Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy';
    }, 2000);
}
