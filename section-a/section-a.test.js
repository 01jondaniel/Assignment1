// Not all functions are imported, be careful 👇
const {
    subtract,
    divide,
    isDivisibleBy,
    gradeAssignment,
    areaOrPerimeter,
    disemvowel,
    removeUrlAnchor,
    strEndsWith,
    numberToString
} = require("./section-a.js");

// Section A 01. Write a smoke test

// Section A 02. Test the subtraction() function


describe('Testing the subtract function', () => {
    it('Should subtract a smaller number from a number', () => {
        expect(subtract(6, 5)).toEqual(1)
        expect(subtract(30, 20)).toEqual(10)
        expect(subtract(14, 14)).toEqual(0)
    })

    it('Should return NaN when trying to subtract a letter', () => {
        expect(subtract(5 - "A")).toBeNaN();
        expect(subtract(13 - "c")).toBeNaN();
        expect(subtract(103 - "DF")).toBeNaN();
    })

    it('Should subtract negative numbers with the correct result', () => {
        expect(subtract(-6, -8)).toEqual(2)
        expect(subtract(10, -2)).toEqual(12)
        expect(subtract(-14, 5)).toEqual(-19)

    })

});

// Section A 03. Test the divide() function
describe('Testing the divide function', () => {
    it('Should divide a number correctly', () => {
        expect(divide(10, 5)).toEqual(2)
        expect(divide(9, 3)).toEqual(3)
    })

    it('Should throw an error when something is not divisible', () => {
        expect(() => {
            divide(3, 0)
        }).toThrow("The value 0 cannot be used as the denominator");

        expect(() => {
            divide(3, "B")
        }).toThrow("The value B cannot be used as the denominator");
    })


    it('Should divide numbers with a decimal anwser', () => {
        expect(divide(3, 2)).toBeCloseTo(1.5, 1)
        expect(divide(10, 3)).toBeCloseTo(3.33, 2)
        expect(divide(15, 4)).toBeCloseTo(3.75, 2)

    });
});


// Section A 04. Test the isDivisibleBy() function


describe('Checking the divisible function', () => {

    it('Should return true if numbers are divisible', () => {
        expect(isDivisibleBy(10, 2, 5)).toBeTruthy()
        expect(isDivisibleBy(24, 12, 8)).toBeTruthy()
    })

    it('Should return false if numbers are not divisible', () => {
        expect(isDivisibleBy(13, 2, 6)).toBeFalsy()
        expect(isDivisibleBy(19, 7, 3)).toBeFalsy()
    })

    it('Should return false if just 1 number is divisible', () => {
        expect(isDivisibleBy(14, 7, 8)).toBeFalsy()
        expect(isDivisibleBy(16, 8, 3)).toBeFalsy()
    })

});

// Section A 05. Test the areaOrPerimeter() function

describe('Testing the perimeter and area function with different types of numbers ', () => {

    it('Should return perimiter if numbers are the different', () => {
        expect(areaOrPerimeter(4, 2)).toEqual(12)
        expect(areaOrPerimeter(9, 4)).toEqual(26)
    })

    it('Should return area if numbers are the same', () => {
        expect(areaOrPerimeter(6, 6)).toEqual(36)
        expect(areaOrPerimeter(12, 12)).toEqual(144)
    })

    it('Should return Decimal areas', () => {
        expect(areaOrPerimeter(3.5, 3.5)).toEqual(12.25)
        expect(areaOrPerimeter(4.15, 4.15)).toBeCloseTo(17.22, 2)
    })

    it('Should return correct decimal perimiter', () => {
        expect(areaOrPerimeter(3.5, 2.1)).toEqual(11.2)

        expect(areaOrPerimeter(8.24, 2.005)).toBeCloseTo(20.49, 2)
    })

});

// Section A 06. Test the gradeAssignment() function

describe('Testing the Grade Assignment function with different sets of numbers', () => {

    it('Should return correct grading based on averages', () => {
        expect(gradeAssignment(80, 100, 70)).toBe("B") //83.34 should be B
        expect(gradeAssignment(30, 40, 10)).toBe("F") //26.67 should be f
        expect(gradeAssignment(90, 100, 95)).toBe("A") // 95 should be A
    })

    it('Should return an empty string not an error if one or more of the parameters are a letter', () => {
        expect(gradeAssignment(65, "B", 30)).toBe("")
        expect(gradeAssignment(23, "f", 100)).toBe("")
        expect(gradeAssignment("B", "g", 100)).toBe("")
    })

    it('Should return grade with even if one of the parameters are negative ', () => {
        expect(gradeAssignment(-40, 100, 30)).toBe("F")
        expect(gradeAssignment(-100, 100, 30)).toBe("F")
        expect(gradeAssignment(90, 90, -20)).toBe("F")
    })

    it('Should return empty string with all negative numbers ', () => {
        expect(gradeAssignment(-40, -100, -25)).toBe("")
        expect(gradeAssignment(-30, -30, -30)).toBe("")
        expect(gradeAssignment(-8.5, -2, -20)).toBe("")
    })

});
// Section A 07. Test the disemvowel() function

//Random Word Generator Letters Only
var RandomString = Math.random().toString(36).substring(2, 7);

var RandomWord = RandomString.replace(/[0-9]/g, '');

console.log(RandomWord);

describe('checking that the strings dont contain vowels', () => {

    it('Should match the Regex when the function is used', () => {
        expect(disemvowel(RandomWord)).toMatch(/[^aeiou]/)
    })

    it('Should display the correct word length with the vwels removed ', () => {
        expect(disemvowel("aidan")).toHaveLength(2)
        expect(disemvowel("aeiou")).toHaveLength(0)
        expect(disemvowel("batman")).toHaveLength(4)
    })

    it('Should remove the Vowels of words', () => {
        expect(disemvowel("Jon")).toBe("Jn")
        expect(disemvowel("Katia")).toBe("Kt")
        expect(disemvowel("Suzie")).toBe("Sz")
    })

});

// Section A 08. Test the removeUrlAnchor() function

describe('Checking that the url gets split at the #', () => {

    it('Should cut the string after the # including the #', () => {
        expect(removeUrlAnchor('https://thisisjon#websitetestng')).toEqual("https://thisisjon")

        expect(removeUrlAnchor('https://batmanincopo#rated')).toBe("https://batmanincopo")
    })

    it('Should cut the string correctly and not detect the word that was cut', () => {
        expect(removeUrlAnchor('https://waynetechnolgies#info')).toEqual(expect.not.stringMatching(/info/));
    });

});

// Section A 09. Test the strEndsWith() function

describe('Checks the ending of the strings', () => {

    it('Should return true if the ending matches', () => {
        expect(strEndsWith("Batman", "man")).toBeTruthy();
        expect(strEndsWith("Alfred9", "9")).toBeTruthy();
        expect(strEndsWith("House Works", " Works")).toBeTruthy();
    })

    it('Should false true if the ending doesnt match', () => {
        expect(strEndsWith("Movie", "vie ")).toBeFalsy();
        expect(strEndsWith("Wine", "nee")).toBeFalsy();
        expect(strEndsWith("Testing Testing", "Testing ")).toBeFalsy();
    })

});
// Section A 10. Test the numberToString() function


describe('Turns Numbers into string form', () => {

    it('Should return a string not just the number', () => {
        expect(numberToString(3)).not.toBe(3);
        expect(numberToString(13)).toBe("13");
    })


    it('Should return the sum of the two numbers as a string', () => {
        expect(numberToString(3 + 3)).toBe("6");

        expect(numberToString(19 - 12)).toBe("7");

    })

    it('Should return negative numbers as a string', () => {
        expect(numberToString(-2)).toBe("-2");
        expect(numberToString(-4 - (-5))).toBe("1");
    })

});
