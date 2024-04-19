//your JS code here. If required.
let student = {
	name: "myName"
}
student.prototype.getKeys = function(){
	return Object.keys(this)
}
// alert(student.getKeys())