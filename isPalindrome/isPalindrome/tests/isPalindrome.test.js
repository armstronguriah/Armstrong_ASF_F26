const isPalindrome = require('../src/isPalindrome');

describe("Valid Palindromes", () => {

    test("returns true for a single character", () => {
        expect(isPalindrome("a")).toBe(true);
    });

    test("returns true for two identical characters", () => {
        expect(isPalindrome("aa")).toBe(true);
    });

    test("returns true when letter casing differs", () => {
        expect(isPalindrome("aA")).toBe(true);
    });

    test("returns true for a simple palindrome word", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    test("returns true for a mixed-case palindrome word", () => {
        expect(isPalindrome("RaceCar")).toBe(true);
    });

});


describe("Punctuation and Spacing Normalization", () => {

    test("ignores trailing spaces", () => {
        expect(isPalindrome("a ")).toBe(true);
    });

    test("ignores leading spaces", () => {
        expect(isPalindrome(" a")).toBe(true);
    });

    test("ignores punctuation", () => {
        expect(isPalindrome("a!")).toBe(true);
    });

    test("ignores spaces between palindrome characters", () => {
        expect(isPalindrome("r a c e c a r")).toBe(true);
    });

    test("ignores punctuation between palindrome characters", () => {
        expect(isPalindrome("r!a@c#e$c%a^r")).toBe(true);
    });

    test("ignores capitalization, spaces, and punctuation together", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama!")).toBe(true);
    });

    test("returns true for a palindrome containing an apostrophe", () => {
        expect(isPalindrome("Madam, I'm Adam")).toBe(true);
    });

    test("returns true for a palindrome containing a question mark", () => {
        expect(isPalindrome("Do geese see God?")).toBe(true);
    });

    test("returns true for a palindrome containing a hyphen", () => {
        expect(isPalindrome("If I had a hi-fi")).toBe(true);
    });

});


describe("Valid Palindromic Phrases", () => {

    test("returns true for 'Able was I ere I saw Elba'", () => {
        expect(isPalindrome("Able was I ere I saw Elba")).toBe(true);
    });

    test("returns true for 'A dog! A panic in a pagoda!'", () => {
        expect(isPalindrome("A dog! A panic in a pagoda!")).toBe(true);
    });

    test("returns true for 'Never odd or even'", () => {
        expect(isPalindrome("Never odd or even")).toBe(true);
    });

    test("returns true for 'No lemon, no melon'", () => {
        expect(isPalindrome("No lemon, no melon")).toBe(true);
    });

    test("returns true for 'Was it a car or a cat I saw?'", () => {
        expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    });

    test("returns true for 'Won't lovers revolt now?'", () => {
        expect(isPalindrome("Won't lovers revolt now?")).toBe(true);
    });

    test("returns true for 'Mr. Owl ate my metal worm'", () => {
        expect(isPalindrome("Mr. Owl ate my metal worm")).toBe(true);
    });

    test("returns true for 'Go hang a salami, I'm a lasagna hog'", () => {
        expect(isPalindrome("Go hang a salami, I'm a lasagna hog")).toBe(true);
    });

    test("returns true for 'Step on no pets'", () => {
        expect(isPalindrome("Step on no pets")).toBe(true);
    });

    test("returns true for 'Sit on a potato pan, Otis!'", () => {
        expect(isPalindrome("Sit on a potato pan, Otis!")).toBe(true);
    });

    test("returns true for 'Rise to vote, sir'", () => {
        expect(isPalindrome("Rise to vote, sir")).toBe(true);
    });

});


describe("Non-Palindromic Strings", () => {

    test("returns false for two different characters", () => {
        expect(isPalindrome("ab")).toBe(false);
    });

    test("returns false for a regular word", () => {
        expect(isPalindrome("hello")).toBe(false);
    });

    test("returns false for a regular sentence", () => {
        expect(isPalindrome("Hello world")).toBe(false);
    });

    test("returns false for an almost-palindrome with an extra character", () => {
        expect(isPalindrome("racecars")).toBe(false);
    });

    test("returns false for a palindrome word with an extra character", () => {
        expect(isPalindrome("madams")).toBe(false);
    });

    test("returns false when one character breaks the palindrome", () => {
        expect(isPalindrome("raceXcar")).toBe(false);
    });

    test("returns false for a palindrome followed by an extra uppercase letter", () => {
        expect(isPalindrome("RacecaRZ")).toBe(false);
    });

});


describe("Non-Palindromic Strings With Special Characters", () => {

    test("returns false for a non-palindrome followed by punctuation", () => {
        expect(isPalindrome("hello!")).toBe(false);
    });

    test("returns false for different letters separated by punctuation", () => {
        expect(isPalindrome("a!b")).toBe(false);
    });

    test("returns false when punctuation is removed and remaining letters are not a palindrome", () => {
        expect(isPalindrome("h!e@l#l$o")).toBe(false);
    });

    test("returns false for an almost-palindrome containing punctuation", () => {
        expect(isPalindrome("r!a@c#e$x%c^a&r")).toBe(false);
    });

    test("returns false when an extra letter appears after punctuation", () => {
        expect(isPalindrome("racecar!!!x")).toBe(false);
    });

    test("returns false when the normalized phrase begins with an incorrect character", () => {
        expect(isPalindrome("X man, a plan, a canal: Panama!")).toBe(false);
    });

});


describe("Invalid Input Types", () => {

    test("returns false for a number", () => {
        expect(isPalindrome(123)).toBe(false);
    });

    test("returns false for null", () => {
        expect(isPalindrome(null)).toBe(false);
    });

    test("returns false for undefined", () => {
        expect(isPalindrome(undefined)).toBe(false);
    });

    test("returns false for an object", () => {
        expect(isPalindrome({})).toBe(false);
    });

    test("returns false for an array", () => {
        expect(isPalindrome(["racecar"])).toBe(false);
    });

    test("returns false for a boolean", () => {
        expect(isPalindrome(true)).toBe(false);
    });

    test("returns false for a function", () => {
        expect(isPalindrome(() => "racecar")).toBe(false);
    });

});


describe("Edge Cases", () => {

    test("returns true for an empty string", () => {
        expect(isPalindrome("")).toBe(true);
    });

    test("returns true for a string containing only spaces", () => {
        expect(isPalindrome("     ")).toBe(true);
    });

    test("returns true for a string containing only punctuation", () => {
        expect(isPalindrome("!@#$%^&*")).toBe(true);
    });

    test("returns true for a single letter surrounded by spaces", () => {
        expect(isPalindrome("   a   ")).toBe(true);
    });

    test("returns true for a single letter surrounded by punctuation", () => {
        expect(isPalindrome("!!!a???")).toBe(true);
    });

    test("returns true when punctuation is mixed into a palindrome", () => {
        expect(isPalindrome("r!a@c#e$c%a^r")).toBe(true);
    });

    test("returns false when normalization leaves a non-palindrome", () => {
        expect(isPalindrome("h!e@l#l$o")).toBe(false);
    });

});


describe("Long Inputs", () => {

    test("returns true for a very long palindrome", () => {
        const half = "abcdefghijklmnopqrstuvwxyz".repeat(100);
        const input = half + half.split("").reverse().join("");

        expect(isPalindrome(input)).toBe(true);
    });

    test("returns false for a very long almost-palindrome", () => {
        const half = "abcdefghijklmnopqrstuvwxyz".repeat(100);
        const input = half + "X" + half;

        expect(isPalindrome(input)).toBe(false);
    });

});