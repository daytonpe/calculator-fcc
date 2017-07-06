function roundForView(flt){
	if (flt>9999999 || /\d{8,}\./.test(flt)){ //8 digits before dot (big number)

		return flt.toExponential(4);

	} else if (flt<.000001){ //six zeros before dot (small number)
		flt = flt.toPrecision(5);
		return flt;

	} else { //numbers for which scinot is unnecessary

		flt = flt.toString();
		flt = flt.slice(0,8);
		return parseFloat(flt);
	}
}

// console.log(roundForView(9899.5995959));
// console.log(roundForView(98999999.5995959));
// console.log(roundForView(0.0000005995959));
// console.log(roundForView(0.1000005995959));
console.log(roundForView(449549550450));