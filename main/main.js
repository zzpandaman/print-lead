module.exports = function main(a) {
	let actual = new Array();
	if(a.length <= 0){
		return "";
	}
	let line1 = new Array();
	let line2 = new Array();
	let line3 = new Array();
	for(i=0;i<a.length;i++){
		if(a[i] === '1' || a[i]==='4'){
			line1.push('...');
		}else{
			line1.push('._.');
		}
	}
	for(i=0;i<a.length;i++){
		if(a[i] === '0'){
			line2.push('|.|');
		}else
		if(a[i] === '1' || a[i]==='7'){
			line2.push('..|');
		}else
		if(a[i] === '2' || a[i]==='3'){
			line2.push('._|');
		}else
		if(a[i] === '5' || a[i]==='6'){
			line2.push('|_.');
		}else{
			line2.push('|_|');
		}
	}
	for(i=0;i<a.length;i++){
		if(a[i] === '2'){
			line3.push('|_.');
		}else if(a[i] === '3' || a[i] === '5'){
			line3.push('._|');
		}else if(a[i] === '0' || a[i] === '6' || a[i] === '8'){
			line3.push('|_|');
		}else{
			line3.push('..|');
		}
	}
	actual[0] = line1.join(' ');
	actual[2] = line2.join(' ');
	actual[4] = line3.join(' ');
	actual[1] = '\n';
	actual[3] = '\n';
	actual[5] = '\n';
    console.log(actual.join(''));
	return actual.join('');
};