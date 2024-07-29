function separateNames() {
    const nameInput = document.getElementById('nameInput').value;
    const names = nameInput.split('\n').map(name => name.trim()).filter(name => name.length > 0);
    let resultHtml = '<table><tr><th>First Name</th><th>Last Name</th></tr>';

    names.forEach(name => {
        const [firstName, ...rest] = name.split(' ');
        const lastName = rest.join(' ');
        resultHtml += `<tr><td>${firstName}</td><td>${lastName}</td></tr>`;
    });

    resultHtml += '</table>';
    document.getElementById('result').innerHTML = resultHtml;
}

function copyToClipboard() {
    const result = document.getElementById('result').innerHTML;
    const el = document.createElement('textarea');
    el.value = result.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML tags
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Table copied to clipboard!');
}
