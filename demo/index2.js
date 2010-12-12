
Spry.Utils.addLoadListener(function() {
	Spry.$$("#p1").addEventListener('click', function(e){ newObjTwo.functionOne(); }, false);

		  (function(){
				window['newObj'] = {
					functionOne : function(){},
					functionTwo : function(){},
					functionThree : function(){}
				};
			})();
			
			function newObjTwo(){}
			newObjTwo.functionOne = function(){};
			newObjTwo.param = 3;
			newObjTwo.paramTwo = 4;
			
			TableKit.Sortable.addSortType(new TableKit.Sortable.Type('status', {
					pattern : /^[New|Assigned|In Progress|Closed]$/,
					normal : function(v) {
						var val = 4;
						switch(v) {
							case 'New':
								val = 0;
								break;
							case 'Assigned':
								val = 1;
								break;
							case 'In Progress':
								val = 2;
								break;
							case 'Closed':
								val = 3;
								break;
						}
						return val;
					}
				}
			));
			TableKit.options.editAjaxURI = '/echo/';
			TableKit.Editable.selectInput('urgency', {}, [
						['1','1'],
						['2','2'],
						['3','3'],
						['4','4'],
						['5','5']																												
					]);
			TableKit.Editable.multiLineInput('title');
			var _tabs = new Fabtabs('tabs');
			$$('a.next-tab').each(function(a) {
				Event.observe(a, 'click', function(e){
					Event.stop(e);
					var t = $(this.href.match(/#(\w.+)/)[1]+'-tab');
					_tabs.show(t);
					_tabs.menu.without(t).each(_tabs.hide.bind(_tabs));
				}.bindAsEventListener(a));
			});
		

});
