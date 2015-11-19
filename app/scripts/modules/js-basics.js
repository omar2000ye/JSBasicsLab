(function(global) {
    'use strict';

    var JS_BASICS = {};

    JS_BASICS.isNumberEven = function(i) {
        // i will be an integer.
        // Return true if it's even, and false if it isn't.

        if ((parseFloat(i) == parseInt(i)) && !isNaN(i)) {
            if (i % 2 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false

        if (str.split('.').pop() != str) {
            return str.split('.').pop();
        } else {
            return false;
        }
    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
        // Return the longest string in the array

        var arrstring = [];var j = 0;

        for (var i = 0; i < arr.length; i++) {

            if (typeof arr[i] == "string") {
                arrstring[j] = arr[i];
                j = j + 1;
            }
        }

        arrstring.sort(function(a, b) {
            return b.length - a.length;
        });
        return arrstring[0];
      };

      JS_BASICS.reverseString = function(str) {
         // str will be an string
         // Return a new string who's characters are in the opposite order to str's.

         return str.split('').reverse().join('');
      };

      JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.

        var palindrom = JS_BASICS.reverseString(str).replace(" ","").toLowerCase();

        str = str.replace(" ","").toLowerCase();

        if (palindrom === str) {
          return true;
        }
        else {
          return false;
        }
      };

      JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.

        var sum = 0;

        for(var i=0; i<arr.length;i++){
          if(typeof arr[i] == "object") {
            sum += JS_BASICS.nestedSum(arr[i]);
          }
          else if(typeof arr[i] == "number") {
            sum += arr[i];
          }
        }

        return sum;
      };

    global.JS_BASICS = JS_BASICS;
}(this));
