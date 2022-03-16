# pass-by-value-vs-reference-links

## For JavaScript

The blog and all the Gists are actually written for JavaScript. Here is a link to the Gists -  
https://gist.github.com/shreyasg-git/e2bc12ad4eab540268a23d44dc6eba54

## For Java

I have translated the same examples in Java too. Here's the [link](https://github.com/Source-Code-Scout/pass-by-value-vs-reference-links/blob/c62b90b0b311b4779540a03ad85fa2ad2ea88235/PassBy.java).

## For Python

I have translated the same examples to Python too. Here's the [link](https://github.com/Source-Code-Scout/pass-by-value-vs-reference-links/blob/c62b90b0b311b4779540a03ad85fa2ad2ea88235/PassBy.py).

## For C++

I have translated the same examples to C++ too. Here's the [link](https://github.com/Source-Code-Scout/pass-by-value-vs-reference-links/blob/c62b90b0b311b4779540a03ad85fa2ad2ea88235/PassBy.cpp).

---

### Some raw information (unfiltered) apart from the blog -

### C++

This is the essence of pass by value vs. pass by reference. It doesn't matter if the parameters are primitive types, arrays, or objects, either a copy is made or an address is stored. As noted elsewhere, when objects are copied, the copy constructor is called to do the copying.

`fake pass by value` -
In C++, if the global variable/object is too big, then to save memory, you need to pass it as ref only so that we don't have duplicate data, so to Pass By Ref, but not let the function body make changes to the object, we can declare the formal parameter as a constant (read-only) in parameter definition. So you are passing by ref, but you are also avoiding making changes to the global object.

### Java -

Java does not have Pass By Reference (I haven't discovered yet maybe who knows). The Default is Pass By Value. Which can be the reason why concepts like Shallow Copy And Deep Copy are so popular in Java.
Java also works same as JS, It has both as default, but in different cases. If its a primitive data type, then it is pass By Value and if it is non-primitive, then its pass by reference.

### Further experimentation that you can do -

1. Create an actual non-primitive object of your own using classes. Check what is the behavior. 😁
2. In JavaScript, what is the behavior for the variable which accessed through Lexical Scoping? 🤔
3. C++ can have Pointers and References both... any behavioral changes there? 👀
