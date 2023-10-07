function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
console.log(isIsogram("khg"));