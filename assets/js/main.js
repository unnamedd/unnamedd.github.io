/*
	Astral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Speed to resize panel.
			resizeSpeed: 600,

		// Speed to fade in/out.
			fadeSpeed: 300,

		// Size factor.
			sizeFactor: 11.5,

		// Minimum point size.
			sizeMin: 15,

		// Maximum point size.
			sizeMax: 20

	};

	// projects I've worked
	var listProjects = function(){
		var projects = [
			{
				"year": 2011,
				"name": "Dufry Duty Free",
				"itunes": "https://itunes.apple.com/br/app/dufry-reserva/id499010581?mt=8",
				"available": true,
				"thumb": "images/projects/dufrydutyfree.jpeg",
				"done": true
			},
			{
				"year": 2011,
				"name": "Tablet Menu",
				"itunes": "https://itunes.apple.com/us/app/tablet-menu/id498480991?mt=8",
				"available": true,
				"thumb": "images/projects/tabletmenu.png",
				"done": true
			},
			{
				"year": 2013,
				"name": "GNT A Carioca",
				"itunes": "https://itunes.apple.com/br/app/a-carioca/id590227351?mt=8",
				"available": true,
				"thumb": "images/projects/gntacarioca.jpeg",
				"done": true
			},
			{
				"year": 2014,
				"name": "Guia de Brincadeiras",
				"itunes": "https://itunes.apple.com/br/app/guia-brincadeiras-da-crescer/id804132458?mt=8",
				"available": false,
				"thumb": "images/projects/guiadebrincadeiras.jpeg",
				"done": true
			},
			{
				"year": 2014,
				"name": "Lance! na Copa",
				"itunes": null,
				"available": false,
				"thumb": "images/projects/lancecopa.png",
				"done": true
			},
			{
				"year": 2014,
				"name": "Globo Esporte",
				"itunes": null,
				"available": false,
				"thumb": "images/projects/globoesporte.png",
				"done": true
			},
			{
				"year": 2014,
				"name": "Eu Atleta",
				"itunes": "https://itunes.apple.com/br/app/eu-atleta/id572977180?mt=8",
				"available": true,
				"thumb": "images/projects/euatleta.png",
				"done": true
			},
			{
				"year": 2014,
				"name": "Qual Comprar",
				"itunes": "https://itunes.apple.com/br/app/qual-comprar-autoesporte/id920524835?mt=8",
				"available": true,
				"thumb": "images/projects/qualcomprar.png",
				"done": true
			},
			// {
			// 	"year": 2015,
			// 	"name": "Carnaval 2015",
			// 	"itunes": null,
			// 	"available": false,
			// 	"thumb": "images/projects/carnaval2015.png",
			// 	"done": true
			// },
			// {
			// 	"year": 2015,
			// 	"name": "CriaTrip",
			// 	"itunes": null,
			// 	"available": false,
			// 	"thumb": "images/projects/criatrip.png",
			// 	"done": false
			// }
			{
				"year": 2016,
				"name": "Humor Multishow",
				"itunes": "https://itunes.apple.com/br/app/humor-multishow/id1067459902?mt=8",
				"available": true,
				"thumb": "images/projects/humor-multishow.jpg",
				"done": true
			},
			{
				"year": 2016,
				"name": "Receitas GNT",
				"itunes": "https://itunes.apple.com/br/app/receitas-gnt/id668151960?mt=8",
				"available": true,
				"thumb": "images/projects/receitas-gnt.jpg",
				"done": true
			},
			{

				"year": 2016,
				"name": "SporTV - Gols",
				"itunes": "https://itunes.apple.com/br/app/sportv-gols/id990348110?mt=8",
				"available": true,
				"thumb": "images/projects/sportv-gols.jpg",
				"done": true
			},
			{
				"year": 2017,
				"name": "Evolution - App",
				"itunes": "https://itunes.apple.com/br/app/swift-evolution/id1210898168?mt=8",
				"available": true,
				"thumb": "images/projects/evolution.jpg",
				"done": true
			},
			{
				"year": 2017,
				"name": "Homer",
				"itunes": "https://itunes.apple.com/br/app/corretorvip-mobile/id739773776?mt=8",
				"available": true,
				"thumb": "images/projects/homer.jpg",
				"done": true
			}
		];

		projects = projects.sort(function(a,b){return b.year-a.year});
		var rows = $("article.panel > section > div.row");
		for (var i = 0, len = projects.length; i < len; i++) {
			var project = projects[i];
			var row = $("<div/>").addClass("4u 12u$(mobile)");
			var a = $("<a/>").addClass("image").addClass("fit");

			var img = $("<img/>").attr("src", project.thumb);
			a.append(img);

			var altText = "{0} - {1}".format(project.name, project.year);
			var strong = $("<strong/>").text(altText);
			a.attr("title", altText);
			a.attr("target", "_blank");
			a.append(strong);
			a.append("<br/>");

			if (!project.itunes && !project.available && project.done) {
				var span = $("<span/>").text("Not Available in AppStore");
				a.append(span);
			}
			else if (!project.done) {
				var span = $("<span/>").text("Under development");
				a.append(span);
			}
			else
				a.attr("href", project.itunes);

			row.append(a);
			rows.append(row);
		}
	};

	var $window = $(window);

	$window.on('load', function() {

		listProjects();

		skel
			.breakpoints({
				desktop: '(min-width: 737px)',
				mobile: '(max-width: 736px)'
			})
			.viewport({
				breakpoints: {
					desktop: {
						width: 1080,
						scalable: false
					}
				}
			})
			.on('+desktop', function() {

				var	$body = $('body'),
					$main = $('#main'),
					$panels = $main.find('.panel'),
					$hbw = $('html,body,window'),
					$footer = $('#footer'),
					$wrapper = $('#wrapper'),
					$nav = $('#nav'), $nav_links = $nav.find('a'),
					$jumplinks = $('.jumplink'),
					$form = $('form'),
					panels = [],
					activePanelId = null,
					firstPanelId = null,
					isLocked = false,
					hash = window.location.hash.substring(1);

				if (skel.vars.touch) {

					settings.fadeSpeed = 0;
					settings.resizeSpeed = 0;
					$nav_links.find('span').remove();

				}

				// Body.
					$body._resize = function() {
						var factor = ($window.width() * $window.height()) / (1440 * 900);
						$body.css('font-size', Math.min(Math.max(Math.floor(factor * settings.sizeFactor), settings.sizeMin), settings.sizeMax) + 'pt');
						$main.height(panels[activePanelId].outerHeight());
						$body._reposition();
					};

					$body._reposition = function() {
						if (skel.vars.touch && (window.orientation == 0 || window.orientation == 180))
							$wrapper.css('padding-top', Math.max((($window.height() - (panels[activePanelId].outerHeight() + $footer.outerHeight())) / 2) - $nav.height(), 30) + 'px');
						else
							$wrapper.css('padding-top', ((($window.height() - panels[firstPanelId].height()) / 2) - $nav.height()) + 'px');
					};

				// Panels.
					$panels.each(function(i) {
						var t = $(this), id = t.attr('id');

						panels[id] = t;

						if (i == 0) {

							firstPanelId = id;
							activePanelId = id;

						}
						else
							t.hide();

						t._activate = function(instant) {

							// Check lock state and determine whether we're already at the target.
								if (isLocked
								||	activePanelId == id)
									return false;

							// Lock.
								isLocked = true;

							// Change nav link (if it exists).
								$nav_links.removeClass('active');
								$nav_links.filter('[href="#' + id + '"]').addClass('active');

							// Change hash.
								if (i == 0)
									window.location.hash = '#';
								else
									window.location.hash = '#' + id;

							// Add bottom padding.
								var x = parseInt($wrapper.css('padding-top')) +
										panels[id].outerHeight() +
										$nav.outerHeight() +
										$footer.outerHeight();

								if (x > $window.height())
									$wrapper.addClass('tall');
								else
									$wrapper.removeClass('tall');

							// Fade out active panel.
								$footer.fadeTo(settings.fadeSpeed, 0.0001);
								panels[activePanelId].fadeOut(instant ? 0 : settings.fadeSpeed, function() {

									// Set new active.
										activePanelId = id;

										// Force scroll to top.
											$hbw.animate({
												scrollTop: 0
											}, settings.resizeSpeed, 'swing');

										// Reposition.
											$body._reposition();

										// Resize main to height of new panel.
											$main.animate({
												height: panels[activePanelId].outerHeight()
											}, instant ? 0 : settings.resizeSpeed, 'swing', function() {

												// Fade in new active panel.
													$footer.fadeTo(instant ? 0 : settings.fadeSpeed, 1.0);
													panels[activePanelId].fadeIn(instant ? 0 : settings.fadeSpeed, function() {

														// Unlock.
															isLocked = false;

													});
											});

								});

						};

					});

				// Nav + Jumplinks.
					$nav_links.add($jumplinks).click(function(e) {
						var t = $(this), href = t.attr('href'), id;

						if (href.substring(0,1) == '#') {

							e.preventDefault();
							e.stopPropagation();

							id = href.substring(1);

							if (id in panels)
								panels[id]._activate();

						}

					});

				// Window.
					$window
						.resize(function() {

							if (!isLocked)
								$body._resize();

						});

					$window
						.on('orientationchange', function() {

							if (!isLocked)
								$body._reposition();

						});

					if (skel.vars.IEVersion < 9)
						$window
							.on('resize', function() {
								$wrapper.css('min-height', $window.height());
							});

				// Fix: Placeholder polyfill.
					$('form').placeholder();

				// Prioritize "important" elements on mobile.
					skel.on('+mobile -mobile', function() {
						$.prioritize(
							'.important\\28 mobile\\29',
							skel.breakpoint('mobile').active
						);
					});

				// CSS polyfills (IE<9).
					if (skel.vars.IEVersion < 9)
						$(':last-child').addClass('last-child');

				// Init.
					$window
						.trigger('resize');

					if (hash && hash in panels)
						panels[hash]._activate(true);

					$wrapper.fadeTo(400, 1.0);

			})
			.on('-desktop', function() {
				window.setTimeout(function() {
					location.reload(true);
				}, 50);
			});
	});

})(jQuery);
