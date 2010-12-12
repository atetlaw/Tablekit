
Spry.Utils.addLoadListener(function() {
	Spry.$$("#p1").addEventListener('click', function(e){ newObjTwo.functionOne(); }, false);
	Spry.$$("#a1").addEventListener('click', function(e){ myObj.functionOne(); }, false);
});
