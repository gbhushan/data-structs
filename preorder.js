function preorder(node) {
	if (!node) {
		return;
	}
	console.log(node.val);
	/*no need to return, you're just going left/right*/
	// return preorder(node.left);
	preorder(node.left);
	// return preorder(node.right);
	preorder(node.right);
}

// w/o recursion
var stack = new Stack();
function noRecPreorder(node) {
	while (node) {
		stack.push(node);
		stack.pop(node);
		stack.push(node.right);
		stack.push(node.left);
		if (node.left) {
			node = node.left;
		} else {
			node = node.right;
		}
	}
}