/*
		a
b				c
			d		e
convert
			a
	c				b
e		d

*/
/*arrrrghh we were supposed to write a recursive solution*/
function convert(root) {
	var q = new Queue();
	var counter = 1;
	q.push(root);
	while (!q.isEmpty()) {
		if (counter)  {
			if (node.left) {
				q.add(node.left);
			}
			if (node.right) {
				q.add(node.right);
			}
		} else if (counter) {
			if (node.right) {
				q.add(node.right);
			}
			if (node.left) {
				q.add(node.left);
			}
		}
	}
}

/*recursive solution - looked at other's code*/
function convertTree(root) {
	if (!root) {
		return null;
	}
	leftNode = convertTree(root.left);
	rightNode = convertTree(root.right);
	root.right = leftNode;
	root.left = rightNode;
	return root;
}


/*replication of every node on its left side
			a
		b		c
			   d e

				a
	      a  		 	 c
	    b			  c    	 e
	  b				d 	   e
	  			  d

*/
// TO-DO: incorrect/incomplete solution
function dupLeft(root) {
	if (!root) {
		return null;
	}
	// leftNode = root.left.;
	// root.left = root;
	// root.left.left = leftNode;
	leftNode = dupLeft(root.left);
	rightNode = dupLeft(root.right);

	root.left = leftNode;

	// root.left.push(root)
}