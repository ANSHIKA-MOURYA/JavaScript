/*
     What is Lexical Scope?
Lexical Scope means that the scope of a variable is determined 
by its position in the code (i.e., where it's written
 — not where it's called).

🧠 Think: "Lexical = Location"

*/
function outer() {
  const name = "Anshika";

  function inner() {
    console.log(name); // ✅ Accesses variable from outer scope
  }

  inner();
}
outer();
// Output: Anshika

/*
📦 Scope Chain:
JavaScript checks:

Current scope

Outer scope (lexical parent)

All the way to the global scope
*/

/*
What is Closure?
 What is a Closure?
A closure is when a function remembers its lexical scope even after the outer function has finished execution.

It closes over the variables it needs.
*/