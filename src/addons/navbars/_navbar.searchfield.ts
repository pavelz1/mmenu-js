Mmenu.addons.navbars.searchfield = function( 
	this	: Mmenu,
	$navbar	: JQuery
) {
	if ( typeof this.opts.searchfield != 'object' )
	{
		(this.opts.searchfield as mmLooseObject) = {};
	}
	this.opts.searchfield.add 	= true;
	this.opts.searchfield.addTo = $navbar;
};