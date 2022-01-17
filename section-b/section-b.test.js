const {
    largestValue,
    getEven,
    houseForSale,
    sortNumbers,
    countCharsInString
} = require("./section-b.js");

//B11
describe('Testing largest number in an array function ', () => {

    it('Should return the largest value in a list', () => {
        expect(largestValue([1, 2, 3, 4, 5, 6, 7, 8])).toBe(8);
        expect(largestValue([-4, -7, -2, -19,])).toBe(-2);
        expect(largestValue([-1, -3, -10, -19,])).toBe(-1);

    })

    it('Should select the largest number based on final sum', () => {
        expect(largestValue([1 + 9, 2, 3, 4, 5, 6, 7, 8])).toBe(10);
        expect(largestValue([20 - 10, 18, 9, 3, -9, 2, -7, -8])).toBe(18);
        expect(largestValue([-20 + 12, -10 - 6, -30 + 2, -18])).toBe(-8);
    })

    it('Should selectletters based on their position in the alphabet with capitals being lower down', () => {
        expect(largestValue(["h", "e", "l", "l", "o"])).toBe("o");
        expect(largestValue(["k", "n", "e", "e", "l"])).toBe("n");
        expect(largestValue(["a", "B"])).toBe("a");
    })

});

//B12

describe("Test the getEven function", () => {
    it("Should remove the odd numbers and leave the correct length in array", () => {
        expect(getEven([18, 14, 7])).toHaveLength(2);
        expect(getEven([1982, 1418, 77, 33, 68])).toHaveLength(3);
        expect(getEven([-4, -8, -16, -10, -5])).toHaveLength(4);
    })
    it("Should leave remove the odd equalling sums", () => {
        expect(getEven([4 - 2, 10 - 4, 17 - 6, 8 - 8, 10 - 10])).toEqual([2, 6, 0, 0]);
        expect(getEven([3, 4, 9, 8])).toStrictEqual([4, 8]);
    })
    it("Should leave an empty array", () => {
        expect(getEven([13, 19, -47])).toStrictEqual([]);
        expect(getEven([8 - 27, 42 - 13, 38 - 3])).toStrictEqual([]);
    })
});

//B13 

const Neighborshouse = {
    bath: true,
    bedrooms: 2,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'grey',
    },
};

const Familyhouse = {
    bath: true,
    bedrooms: 2,
    kitchen: {
        amenities: ['oven', 'fan', 'sink'],
        area: 20,
        wallColor: 'blue',
    },
};

const Houseblueprints = {
    bath: true,
    bedrooms: 4,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        'nice.oven': true
    },
};

const SellingHouse = houseForSale()


describe("Test the houseForSale function", () => {
    it('Should have all of the required facilities in a house', () => {
        expect(houseForSale()).toHaveProperty('bedrooms');
        expect(houseForSale()).toHaveProperty('kitchen');
        expect(houseForSale()).not.toHaveProperty('kitchen.amenities', ['Electric Oven']);
    })



    it('Should check if the houses match the object variables', () => {
        expect(SellingHouse).not.toMatchObject(Neighborshouse);
        expect(SellingHouse).not.toMatchObject(Familyhouse);
        expect(SellingHouse).toMatchObject(Houseblueprints);

    });
});


//B14

var MultipleofThree = [3, 6, 9, 12, 15]
var MultipleofFour = [4, 8, 12, 16, 20]
var Multipleof10 = [10, 20, 30, 40, 50]


describe("Test the sortNumbers function", () => {

    it('Should sort the numbers to match variable arraysa', () => {
        expect(sortNumbers([6, 3, 15, 9, 12])).toMatchObject(MultipleofThree);
        expect(sortNumbers([20, 8, 4, 16, 12])).toMatchObject(MultipleofFour);
        expect(sortNumbers([50, 20, 10, 30, 40])).toMatchObject(Multipleof10);
    })

    it('Should sort decimal numbers', () => {
        expect(sortNumbers([0.23, 0.8, 1.9, 1.2])).toStrictEqual([0.23, 0.8, 1.2, 1.9]);;
        expect(sortNumbers([14.22, 14.23, 14.22, 14.21])).toStrictEqual([14.21, 14.22, 14.22, 14.23]);;
        expect(sortNumbers([0.1, 0.3, 0.2, 0.5, 0.4])).toStrictEqual([0.1, 0.2, 0.3, 0.4, 0.5]);;
    })

});

//B15

describe("Test the countCharsInString function", () => {
    it("Should count all the characters in a string", () => {
        expect(countCharsInString("Rare")).toMatchObject({ "R": 1, "a": 1, "r": 1, "e": 1 });
        expect(countCharsInString("Rarer")).toMatchObject({ "R": 1, "a": 1, "r": 2, "e": 1 });
    })

    it("Should see if the output is an object", () => {
        expect(typeof countCharsInString("What Am I")).toBe('object');
        expect(typeof countCharsInString("Good Morning")).not.toBe('string');
        expect(typeof countCharsInString("Wine and Dine")).not.toBe('Array');
    })
});