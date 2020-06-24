var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

( function( $ ) {

	// Focus styles for menus.
	$( '.main-navigation' ).find( 'a' ).on( 'focus.sela blur.sela', function() {
		$( this ).parents().toggleClass( 'focus' );
	} );

	// Additional class for posts with thumbnails
    function addHentryClass() {
        $( '.hentry + .has-post-thumbnail' ).prev().addClass( 'has-post-thumbnail-prev' );
    }

	$( document.body ).on( 'post-load',  addHentryClass );

	addHentryClass();

} )( jQuery );


}
/*
     FILE ARCHIVED ON 05:50:18 Aug 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:08:55 Jun 23, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 42.289 (3)
  PetaboxLoader3.resolve: 57.601 (2)
  RedisCDXSource: 9.894
  esindex: 0.014
  CDXLines.iter: 11.585 (3)
  captures_list: 66.845
  PetaboxLoader3.datanode: 67.454 (5)
  exclusion.robots.policy: 0.186
  exclusion.robots: 0.199
  load_resource: 118.778
*/