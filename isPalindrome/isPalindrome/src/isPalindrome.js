function isPalindrome(input) {
    if (typeof input !== "string") return false;

    const lower = input
        .replace(/[^a-zA-Z]/g, '')
        .toLowerCase();

    if (lower.length === 0) return false;
    if (lower.length === 1) return true;

    for (let i = 0; i < lower.length / 2; i++) {
        if (lower.charAt(i) !== lower.charAt(lower.length - i - 1)) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;