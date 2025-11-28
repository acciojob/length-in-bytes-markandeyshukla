const byteSize = (str) => {
  // write your code here
	const encoded = new TextEncoder().encode(str);
	return encoded.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
