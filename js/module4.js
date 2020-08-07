function formatString(string, maxLength = 40) {
    // Write code under this line
    const array = string.split('');
    let shortLength = '';

    for (let i = 0; i < array.length; i += 1) {
        if (array.length > maxLength) {
            shortLength = string.slice(0, maxLength) + "...";
        } else {
            shortLength = string;
        }
    }
    return shortLength;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'