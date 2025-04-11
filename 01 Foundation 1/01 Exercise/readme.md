## Name Convention to nameing variables &mdash;

- camelCase - firstName, firstPersonName
- underscore - first_name (ruby style)

> cannot write naming start by number

```js
    let 3years = 3; // syntax error

    let jonas&Matilda = 'JM' // syntax error

    let jonas_matilda  = 'JM';

    let new = 27 // reserve keyword

    let function = 27 // reserve keyword

    let $function = 27 // can use

    let name = 'Jonas' // reserve keyword

    let Person = 'jonas' // OOP form so can't use as variable

    let PI = 3.1415 // constant must use uppercase
```

## Data Types &mdash;

1. Primitive Data Types in JS &mdash;

   - Numbers - Floating point numbers, used for `decimals` and `integers`
   - String - Sequence of characters, used for text
   - Boolean - Logical type that can only be `true` or `false`, used for taking decision
   - null - also mean `empty value`
   - undefined - value taken by a variable that is `not yet defined` (`empty value`)
   - symbol(ES2015) - value that is` unique and cannot be changed` (not useful for now)
   - bigInt(ES2020) - `Large integers` than the number type can hold

<br/>

> `JavaScript has dynamic typing`: We do not have to manually define the data type of the value stored in a variable, Instead, data types are determined automatically.
