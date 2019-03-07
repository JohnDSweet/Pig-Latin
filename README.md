Turn each word into an array.

Specs:

If word contains non-alphabetical char: do nothing
      Example Input: 3
      Example Output: 3

If words begin with a vowel: append with "way"
      Example Input: apple
      Example Output: appleway

If the first letter is q AND next letter is U, then: append both letters to end
                               remove both letters (fruits.shift();)
       Example Input: quiet
       Example Output: ietquay

If words begin with consonant (include y): append first letter to end
                               remove first letter (fruits.shift();)
                               repeat until first letter is vowel

       Example Input: yes
       Example Output: esy

       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
