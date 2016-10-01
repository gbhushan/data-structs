// create a hashmap
// var jsMap = new Map();
// constant lookup O(1) from a js object
// var jsMap = {};
// create a LinkedList -> LRUCache
var cache = new LRUCache();

function LRUCache() {
	this.head = null;
	this.end = null;
	this.map = {};
}
function Node() {
	this.value = value;
	this.key = key;
	this.next = null;
	this.prev = null;
}
LRUCache.prototype.add = function(node) {
	// insert the new value in the list...
	// var node = new Node();
	// node.value = val;
	// node.key = key;
	// jsMap[key] 
	// var nextNode = null;
	if (!this.head) {
		this.head = node;
		this.end = node;
	} else {
		// reposition head
		// this.moveHead(node);
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
	}
};
/*LRUCache.prototype.moveToHead = function(node) {
	// basically swap the head and the new Node...
	var prevHeadNode = this.head;
	this.head = node;
	node.next = prevHeadNode;
	prevHeadNode.prev = node;
};*/
LRUCache.prototype.moveToHead = function(node) {
	// body...
	this.remove(node);
	this.add(node);
};
LRUCache.prototype.remove = function(node) {
	// body...
	// var headNode = this.head;
	var prevNode = null;
	var nextNode = null;
	if (this.head === this.end) {
		this.head = null;
		this.end = null;
		return;
	}
	if (node === this.head) {
		// nextNode = currNode.next ? currNode.next : null;
		// prevNode.next = nextNode;
		// nextNode.prev = prevNode;
		this.head = this.head.next;
		this.head.prev = null;
		return;
	}
	if (node === this.end) {
		// node.prev.next = null;
		this.end.prev.next = null;
		this.end = this.end.prev;
		return;
	}
	prevNode = node.prev;
	nextNode = node.next;
	prevNode.next = nextNode;
	nextNode.prev = prevNode;
};
LRUCache.prototype.set = function(key, value) {
	// body...
	var node;
	if (this.data[key]) {
		node = this.data[key];
		this.remove(node);
		this.add(node);
		return;
	}
	// first time set
	// var node = new Node();
	node = new Node();
	node.key = key;
	node.value = value;
	this.add(node);
	this.map[key] = node;
};

// we need an O(1) lookup so for that we can use 
// insert a new node in the list and pts at the head

LRUCache.prototype.get = function(key) {
	var node;
	if (!jsMap[key]) {
		return false;
	} else {
		node = jsMap[key];
		this.moveToHead(node);
		return node.value;
	}
}
/*lruCache.prototype.insert = function(key, val) {
	// body...
	var node = new Node(val);
	var list;
	if (!jsMap[key]) {
		list = new LRUCache();
		jsMap[key] = node;
	}
};*/

function main() {
	var cache = new LRUCache();
	cache.insert("10", "what");
	// cache.get("10", "what");
}