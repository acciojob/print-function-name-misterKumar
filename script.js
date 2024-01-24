function functionName() {
  alert(arguments.callee.name);
}

// Calling the function to print its own name
functionName();

