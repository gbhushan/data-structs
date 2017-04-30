function sum(root) {
	if (!root) {
		return null;
	}
	// leftNode = sum(root.left);
	// rightNode = sum(root.right);

	// return leftNode.value + rightNode.value;
	// correct is below:=
	return root.value + sum(root.left) + sum(root.right);
}