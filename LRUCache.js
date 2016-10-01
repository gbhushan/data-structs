// create a hashmap
// var jsMap = new Map();
// constant lookup O(1) from a js object
var jsMap = {};
// create a LinkedList
var list = new LinkedList();

function LinkedList() {
	this.head = null;
}
function Node(value) {
	this.value = value;
	this.next = null;
	this.prev = null;
}
LinkedList.prototype.insert = function(val) {
	// insert the new value in the list...
	var node = new Node(val);
	var nextNode = null;
	if (!this.head) {
		this.head = node;
	} else {
		// reposition head
		this.moveHead(node);
	}
};
LinkedList.prototype.moveHead = function(node) {
	// basically swap the head and the new Node...
	var prevHeadNode = this.head;
	this.head = node;
	node.next = prevHeadNode;
	prevHeadNode.prev = node;
};
LinkedList.prototype.moveToHead = function(node) {
	// body...
	this.remove(node);
	this.moveHead(node);
};
Link.prototype.remove = function(node) {
	// body...
	var currNode = this.head;
	var prevNode = currNode;
	var nextNode = null;
	while (currNode) {
		if (node === currNode) {
			nextNode = currNode.next ? currNode.next : null;
			prevNode.next = nextNode;
			nextNode.prev = prevNode;
		}
		prevNode = currNode;
		currNode = currNode.next;
	}
};

// we need an O(1) lookup so for that we can use 
// insert a new node in the list and pts at the head

lruCache.prototype.get = function(key, val) {
	// var node = new Node(val);
	if (!jsMap[key]) {
		return false;
	}
}
lruCache.prototype.insert = function(key, val) {
	// body...
	var node = new Node(val);
	var list;
	if (!jsMap[key]) {
		list = new LinkedList();
		jsMap[key] = node;
	}
};

function main() {
	var cache = new lruCache();
	cache.insert("10", "what");
	cache.get("10", "what");
}