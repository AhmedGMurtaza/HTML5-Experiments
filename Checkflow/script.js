  var container = new Array(),
				con_x = 27,
				con_y = 27,
				na = 27,
				con = document.createElement( 'div' );
				con.className = 'con';
				con.style.width = ( con_x * na ) + 'px';
				con.style.height = ( con_y * na ) + 'px';


function toggle( targetEntity ) {

				var checked = targetEntity.element.checked;

				container.forEach( function( basic_el ) {

					var dx = targetEntity.x - basic_el.x;
					var dy = targetEntity.y - basic_el.y;
					var distance = Math.sqrt( dx * dx + dy * dy );

					setTimeout( function() {
						basic_el.element.checked = checked;
	basic_el.element.className = '';
						basic_el.element.offsetWidth;
						basic_el.element.className = 'glow';
					}, Math.round( distance * 2.72 ) );

				} );

			}

	var body = document.getElementsByTagName('body')[0];
body.appendChild( con );
			for( var x = 0; x < con_x; x++ ) {
				for( var y = 0; y < con_y; y++ ) {
					var cb = document.createElement( 'input' );
					cb.setAttribute( 'type', 'checkbox' );
					con.appendChild( cb );

					var basic_el = {
						element: cb,
						x: x * na,
						y: y * na
					}

					cb.style.left = basic_el.x + 'px';
					cb.style.top = basic_el.y + 'px';
					cb.addEventListener( 'change', this.toggle.bind( this, basic_el ) );
					container.push( basic_el );
				}
			}

			requestAnimationFrame( function() {
				container[ 0 ].element.checked = true;
				toggle( container[ 0 ] );
			});

