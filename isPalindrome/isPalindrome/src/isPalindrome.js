function isPalindrome(input) {
    if (typeof input !== "string") return false

    input = input.replace(/[^a-zA-Z]/g, '')

    const trimmed = input.trim()
    const lower = trimmed.toLowerCase()

    if (lower.length === 1) return true;

    for (let i = 0; i < lower.length / 2; i++) {
        if (lower.charAt(i) !== lower.charAt(lower.length - i - 1))
            return false
    } return true
}

module.exports = isPalindrome;