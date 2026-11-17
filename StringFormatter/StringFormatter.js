function CleanText(text) {
    return text.trim();
}

function capitalize(text) {
    const cleaned = CleanText(text).toLowerCase();

    if (cleaned.length === 0) {
        return '';
    }

    return cleaned[0].toUpperCase() + cleaned.slice(1);
}

function formatDisplayName(firstName, lastName) {
    const cleanedFirstName = capitalize(firstName);
    const cleanedLastName = capitalize(lastName);

    return cleanedFirstName + ' ' + cleanedLastName;
}

console.log(formatDisplayName('heLlo ', ' world')); // Output: HelloWorld