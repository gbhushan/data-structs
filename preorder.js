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
function noRecPreorder(root) {
	if (root) {
		stack.push(root);
	} else {
		return;
	}
	// while (node) {
	while (!stack.isEmpty()) {
		// stack.push(node);
		stack.pop(node);
		// stack.push(node.right);
		// stack.push(node.left);
		if (node.right) {
			// node = node.left;
			stack.push(node.right);
		} else if (node.left) {
			// node = node.right;
			stack.push(node.left);
		}
	}
}