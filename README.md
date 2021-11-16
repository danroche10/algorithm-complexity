## Algorithmic Complexity

There were two main learning objectives for this course:

- Can you mention efficiency as one of the dimension of a good piece of code?
- Can you join a conversation about algorithms and their complexity?

# Overview

- The first step was to set up a timer and a 'for loop' to create an array of different sizes. This meant I could time my algorithms on increasing
  array sizes in order to work out the time complexity.
- I then worked out the time complexity for four standard Javascript methods: `sort`, `shuffle`, `reverse` and `last`
- I then set up the Jasmine testing framework and test drove the development of some custom functions (see list below). Again I worked out the time complexity for each one.
- For each algorithm, I created a graph showing the increase in time versus the increase in data size.
- Once I created an initial version of each algorithm I attempted to create a new version of each with improved effiency. I timed them again and compared to my initial attempts.

# Algoritms implemented

Standard library functions:

- last
- reverse
- shuffle
- sort

Custom functions:

- shuffling
- reversing
- finding duplicates
- most frequent words
- sorting 0s and 1s
- sorting
- fibonacci
- mechacoach pairing
- sub-sequence sum

## Install and run program (for development)

Clone this repo and navigate to its directory.

`npm install`

In `timer.js`, uncomment the function you want to time and then run program using:

`npm start`

You can then update the array size on line 14 and run again

## Running tests with Jasmine

- Run `npm test`.
- When writing tests, include `Spec.js` on the end of the test file.
