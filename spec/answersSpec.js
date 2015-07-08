describe('JavaScript Refresher', function() {
  var n, a, b;
 
  it('selects elements starting with a', function() {
    n = selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);

    expect(n).toEqual(['apples', 'avocados']);
  });

  it('selects elements starting with a vowel', function() {
    n = selectElementsStartingWithAVowel(
      ['john', 'david', 'omar', 'fred', 'idris', 'angela']);

    expect(n).toEqual(['omar', 'idris', 'angela']);
  });

  it('removes nulls from an array', function() {
    n = removeNullsFromArray(['a', 'b', null, null, false, 'c', null]);

    expect(n).toEqual(['a', 'b', false, 'c']);
  });

  it('removes nils and false from an array', function() { 
    n = removeNilsAndFalseFromAnArray(['a', 'b', null, null, false, 'c', null]);

    expect(n).toEqual(['a', 'b', 'c'])
  })

  it('reverses every element in an array', function() {
    n = reverseElementsInArray(['dog', 'monkey', 'elephant']);

    expect(n).toEqual(['god', 'yeknom', 'tnahpele']);
  });

  it('all elements except first 3', function() {
    n = allElementsExceptFirstThree([1, 2, 3, 4, 5, 6, 7]);

    expect(n).toEqual([4, 5, 6, 7]);
  });

  it('adds elements to the beginning of an array', function() {
    n = addElementsToBeginningOfArray([2, 3, 4, 5], 1);

    expect(n).toEqual([1, 2, 3, 4, 5]);
  });

  it('sorts words by last letter', function() {
    n = sortWordsByLastLetter(['sky', 'puma', 'maker']);

    expect(n).toEqual(['puma', 'maker', 'sky']);
  });

  it('gets the first half of a string', function() {
    a = getFirstHalfOfString('banana');
    b = getFirstHalfOfString('apple');

    expect(a).toEqual('ban');
    expect(b).toEqual('app');
  });

  it('makes numbers negative', function() {
    a = makeNumberNegative(-5);
    b = makeNumberNegative(-2);

    expect(a).toEqual(5);
    expect(b).toEqual(2);
  });

  it('separates numbers into even and odd', function() {
    n = separateNumbersIntoEvenAndOdd([1, 2, 3, 4, 5, 6, 7]);

    expect(n).toEqual([[2, 4, 6], [1, 3, 5, 7]]);
  });

  it('counts the number of words that are palindromes', function() {
    n = countNumberOfPalindromes(['bob', 'radar', 'alex', 'noon', 'banana']);

    expect(n).toEqual(3);
  });

  it('gets the shortest word in an array', function() {
    n = shortestWordInArray('here', 'is', 'a', 'bunch', 'of', 'words');

    expect(n).toEqual('a');
  });

  it('gets the longest word in an array', function() {
    n = longestWordInArray('a', 'bunch', 'of', 'words', 'of', 'different', 'lengths');

    expect(n).toEqual('a');
  });

  it('calculates the total of a set of numbers', function() {
    n = totalOfNumbers([1, 3, 5, 6, 2, 8]);

    expect(n).toEqual(25);
  });

  it('doubles an array', function() {
    n = doubleArray([1, 2, 3]);

    expect(n).toEqual([1, 2, 3, 1, 2, 3]);
  });

  it('averages a set of numbers', function() {
    n = calculateAverage([10, 15, 25]);

    expect(n).toEqual(17);
  });

  it('gets elements until one is greater than five', function() {
    n = getElementsUntilGreaterThanFive([1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7]);

    expect(n).toEqual([1, 3, 5, 4, 1, 2]);
  });

  it('gets all letters from an array of words', function() {
    n = getAllLetters(['cat', 'dog', 'fish']);

    expect(n).toEqual(['a', 'c', 'd', 'f', 'g', 'h', 'i', 'o', 's', 't']);
  });

  it('removes capital letters from a string', function() {
    n = removeCapitalLetters('Hello JohnDoe');

    expect(n).toEqual('ello ohnoe');
  });

  it('rounds up numbers', function() {
    n = roundUp(3.142);

    expect(n).toEqual(4);
  });

  it('rounds down numbers', function() {
    n = roundDown(4.9);

    expect(n).toEqual(4);
  });

  it('formats date nicely', function() {
    n = formatDateNicely(Date(2015, 6, 3));

    expect(n).toEqual('03/06/2015');
  });

  it('gets a domain name from an email address', function() {
    n = getDomainName('ptolemy@makersacademy.com');

    expect(n).toEqual('makersacademy.com');
  });

  it('titleize a string', function() {
    n = titleizeString('the lion the witch and the wardrobe');

    expect(n).toEqual('The Lion the Witch and the Wardrobe');
  });

  it('gets square root of a number', function() {
    n = getSquareRoot(9);

    expect(n).toEqual(3);
  });

});
