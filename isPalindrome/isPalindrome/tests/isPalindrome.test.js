// test('Jest is working', () => { expect(1 + 1).toBe(2); });

const isPalindrome = require('../src/isPalindrome');

test("returns true for single character", () => {
    expect(isPalindrome("a")).toBe(true);
});

test('handles non-string input gracefully', () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
    expect(isPalindrome({})).toBe(false);
});

test("returns false for two different characters", () => {
    expect(isPalindrome("ab")).toBe(false);
});

test("returns true for two same characters", () => {
    expect(isPalindrome("aa")).toBe(true);
});

test("returns true for one character with space after", () => {
    expect(isPalindrome("a ")).toBe(true);
});

test("returns true for one character with space before", () => {
    expect(isPalindrome(" a")).toBe(true);
});

test("returns true for one character with punctuation", () => {
    expect(isPalindrome("a!")).toBe(true);
});

test("returns true for two same letters with different capitalization", () => {
    expect(isPalindrome("aA")).toBe(true);
});

describe("Wikipedia Palindromic Phrases", () => {

    test("returns true for a classic palindrome with commas and punctuation", () => {
        expect(isPalindrome("A man, a plan, a canal – Panama!")).toBe(true);
    });

    test("returns true for a palindrome with mixed capitalization", () => {
        expect(isPalindrome("Able was I ere I saw Elba")).toBe(true);
    });

    test("returns true for a palindrome with an exclamation mark", () => {
        expect(isPalindrome("A dog! A panic in a pagoda!")).toBe(true);
    });

    test("returns true for a palindrome with an apostrophe", () => {
        expect(isPalindrome("Madam, I'm Adam")).toBe(true);
    });

    test("returns true for a palindrome with a question mark", () => {
        expect(isPalindrome("Do geese see God?")).toBe(true);
    });

    test("returns true for a palindrome containing multiple words", () => {
        expect(isPalindrome("Never odd or even")).toBe(true);
    });

    test("returns true for a palindrome containing a comma", () => {
        expect(isPalindrome("No lemon, no melon")).toBe(true);
    });

    test("returns true for a palindrome with different capitalization", () => {
        expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    });

    test("returns true for a palindrome with an apostrophe and question mark", () => {
        expect(isPalindrome("Won't lovers revolt now?")).toBe(true);
    });

    test("returns true for a palindrome with a period", () => {
        expect(isPalindrome("Mr. Owl ate my metal worm")).toBe(true);
    });

    test("returns true for a palindrome with punctuation in the middle", () => {
        expect(isPalindrome("Go hang a salami, I'm a lasagna hog")).toBe(true);
    });

    test("returns true for a palindrome with multiple spaces", () => {
        expect(isPalindrome("Step on no pets")).toBe(true);
    });

    test("returns true for a palindrome with a comma and exclamation mark", () => {
        expect(isPalindrome("Sit on a potato pan, Otis!")).toBe(true);
    });

    test("returns true for a palindrome with commas and mixed capitalization", () => {
        expect(isPalindrome("Rise to vote, sir")).toBe(true);
    });

    test("returns true for a palindrome with a hyphen", () => {
        expect(isPalindrome("If I had a hi-fi")).toBe(true);
    });

});

test("returns true for an extremely long and complicated palindrome phrase", () => {
    const input = [
        "A man, a plan, a canal: Panama!",
        "Was it a car or a cat I saw?",
        "Never odd or even.",
        "Do geese see God?",
        "No lemon, no melon!",
        "Madam, I'm Adam.",
        "Step on no pets.",
        "Able was I ere I saw Elba.",
        "Go hang a salami, I'm a lasagna hog!",
        "Mr. Owl ate my metal worm.",
        "Go hang a salami, I'm a lasagna hog!",
        "Able was I ere I saw Elba.",
        "Step on no pets.",
        "Madam, I'm Adam.",
        "No lemon, no melon!",
        "Do geese see God?",
        "Never odd or even.",
        "Was it a car or a cat I saw?",
        "A man, a plan, a canal: Panama!"
    ].join(" ");

    expect(isPalindrome(input)).toBe(true);
});

describe("Non-Palindromic Words", () => {

    test("returns false for a regular word", () => {
        expect(isPalindrome("hello")).toBe(false);
    });

    test("returns false for a regular sentence", () => {
        expect(isPalindrome("Hello world")).toBe(false);
    });

    test("returns false for an almost palindrome", () => {
        expect(isPalindrome("racecars")).toBe(false);
    });

    test("returns false for a palindrome with an extra character", () => {
        expect(isPalindrome("madams")).toBe(false);
    });

    test("returns false for a palindrome with one incorrect middle character", () => {
        expect(isPalindrome("raceXcar")).toBe(false);
    });

    test("returns false for a single character followed by a different character", () => {
        expect(isPalindrome("ab")).toBe(false);
    });

    test("returns false for a palindrome with an extra uppercase letter", () => {
        expect(isPalindrome("RacecaRZ")).toBe(false);
    });

});

describe("Non-Palindromic Strings With Special Characters", () => {

    test("returns false for a regular word with punctuation", () => {
        expect(isPalindrome("hello!")).toBe(false);
    });

    test("returns false for two different letters separated by punctuation", () => {
        expect(isPalindrome("a!b")).toBe(false);
    });

    test("returns false for a word with punctuation throughout", () => {
        expect(isPalindrome("h!e@l#l$o")).toBe(false);
    });

    test("returns false for an almost palindrome with punctuation", () => {
        expect(isPalindrome("r!a@c#e$x%c^a&r")).toBe(false);
    });

    test("returns false for a palindrome with an extra letter after punctuation", () => {
        expect(isPalindrome("racecar!!!x")).toBe(false);
    });

    test("returns false for a palindrome with an incorrect first letter", () => {
        expect(isPalindrome("X man, a plan, a canal: Panama!")).toBe(false);
    });

});

test("returns false for an extremely long almost-palindrome", () => {

    const input = `
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        A man, a plan, a canal: Panama!
        X
    `;

    expect(isPalindrome(input)).toBe(false);

});