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

/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var container, button, menu;

	container = document.getElementById( 'site-navigation' );
	if ( ! container )
		return;

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button )
		return;

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += ' nav-menu';

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) )
			container.className = container.className.replace( ' toggled', '' );
		else
			container.className += ' toggled';
	};

    // Fix child menus for touch devices.
    function fixMenuTouchTaps( container ) {
            var touchStartFn,
                parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

            if ( 'ontouchstart' in window ) {
                    touchStartFn = function( e ) {
                            var menuItem = this.parentNode;

                            if ( ! menuItem.classList.contains( 'focus' ) ) {
                                    e.preventDefault();
                                    for( var i = 0; i < menuItem.parentNode.children.length; ++i ) {
                                            if ( menuItem === menuItem.parentNode.children[i] ) {
                                                        continue;
                                            }
                                            menuItem.parentNode.children[i].classList.remove( 'focus' );
                                    }
                                    menuItem.classList.add( 'focus' );
                            } else {
                                    menuItem.classList.remove( 'focus' );
                            }
                    };

                    for ( var i = 0; i < parentLink.length; ++i ) {
                            parentLink[i].addEventListener( 'touchstart', touchStartFn, false )
                    }
            }
    }

    fixMenuTouchTaps( container );
} )();


}
/*
     FILE ARCHIVED ON 05:44:00 Aug 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:46:06 Jun 24, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.282
  RedisCDXSource: 9.14
  esindex: 0.036
  LoadShardBlock: 353.008 (3)
  CDXLines.iter: 23.177 (3)
  captures_list: 391.065
  PetaboxLoader3.resolve: 209.191 (4)
  load_resource: 242.171
  exclusion.robots.policy: 0.263
  PetaboxLoader3.datanode: 329.303 (5)
*/