(function ($) {
	const hideModalClickOutside = (parent, modalWrapper) => {
		$(document).on('click', function (e) {
			let field = $(parent);
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				$(modalWrapper).removeClass('active');
			}
		});
	};

	const hideModalMouseoutOutside = (parent, modalWrapper) => {
		$(document).on('mouseout', function (e) {
			let field = $(parent);
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				$(modalWrapper).removeClass('show');
			}
		});
	};

	// Start: show modal on hover
	const showModal = (btn, modal) => {
		$(btn).on('mouseover', function () {
			$(modal).addClass('show');
		});

		hideModalMouseoutOutside('.dropdown-ensemble-wrapper-points_btn', '.dropdown-ensemble-points_modal');
	};

	showModal('.dropdown-ensemble__item-points_btn', '.dropdown-ensemble-points_modal');
	// End: show modal on hover

	// Start: smooth appearance of the block (display: none)
	const smoothAppearanceBlock = (modal) => {
		if (modal.hasClass('d-none')) {
			modal.removeClass('d-none');
			setTimeout(function () {
				modal.removeClass('opacity-null');
			}, 20);
		} else {
			modal.addClass('opacity-null');
			modal.addClass('d-none');
		}
	};
	// End: smooth appearance of the block (display: none)

	// Start Modal tab_project-dropdown
	const tabProjectModal = () => {
		const tabProjectDropdown = $('.tab_project-dropdown');
		const tabsProjectModal = $('.tabs_project-modal');

		tabProjectDropdown.mouseover(function (e) {
			e.stopPropagation();
			let elm = $(this);
			let dropHeight = elm.outerHeight();
			let top = elm.offset().top + dropHeight;
			let left = elm.offset().left;

			elm.addClass('active');

			tabsProjectModal.css({ top: top, left: left });
			tabsProjectModal.addClass('show');
		});

		$(document).mouseover(function (e) {
			let drop = $('.tab_project-dropdown');
			let modal = $('.tabs_project-modal');
			if (
				!drop.is(e.target) &&
				!modal.is(e.target) &&
				drop.has(e.target).length === 0 &&
				modal.has(e.target).length === 0
			) {
				modal.removeClass('show');
				drop.removeClass('active');
			}
		});
	};

	tabProjectModal();
	// End Modal tab_project-dropdown

	// Start actions Modal on hover dynamic position
	const actionsModal = () => {
		const actionBtn = $('.action-btn');
		const actionsModal = $('.dropdown-actions__modal');
		const moveActorBtn = $('.move-actor_js');
		const moveActorModal = $('.move-actor__modal');
		const closeBtn = $('.move-actor__modal .create_copy_column-close-btn');

		actionBtn.mouseenter(function (e) {
			e.stopPropagation();

			let btnHeight = $(this).outerHeight();
			let top = $(this).offset().top + $(this).outerHeight();
			let left = $(this).offset().left;
			let win_h = $(window).height();

			$(this).addClass('active');

			function showModal(el) {
				if (el.hasClass('d-none')) {
					el.removeClass('d-none');
					setTimeout(function () {
						el.removeClass('opacity-null');
					}, 20);
				}

				let moveActorModalHeight = moveActorModal.outerHeight();

				let actionsModalHeight = actionsModal.outerHeight();

				if (win_h - top < actionsModalHeight) {
					actionsModal.css({ top: top - actionsModalHeight - btnHeight - 1, left: left });
				} else {
					actionsModal.css({ top: top + 1, left: left });
				}

				if (win_h - top < moveActorModalHeight) {
					moveActorModal.css({ top: top - moveActorModalHeight - btnHeight - 1, left: left });
				} else {
					moveActorModal.css({ top: top + 1, left: left });
				}
			}

			showModal(actionsModal);

			moveActorBtn.click(function () {
				showModal(moveActorModal);
			});
		});

		$(document).mouseout(function (e) {
			function hideModal(modal) {
				modal.addClass('opacity-null');
				modal.addClass('d-none');
				$(modal).css('top', '');
				$(modal).css('left', '');
			}

			if (
				!actionsModal.is(e.target) &&
				actionsModal.has(e.target).length === 0 &&
				!actionBtn.is(e.target) &&
				actionBtn.has(e.target).length === 0 &&
				!moveActorModal.is(e.target) &&
				moveActorModal.has(e.target).length === 0
			) {
				actionBtn.removeClass('active');
				hideModal(actionsModal);
				hideModal(moveActorModal);
			}
		});

		closeBtn.click(function () {
			moveActorModal.addClass('opacity-null d-none');
		});
	};

	actionsModal();
	// End actions Modal on hover dynamic position

	// Start: custom select
	$('.select-wrapper').each(function () {
		let thisEl = $(this);
		const selectField = thisEl.find('.selectField');
		const selectText = thisEl.find('.selectField-text');
		const list = thisEl.find('.selectField-list');
		const options = thisEl.find('.selectField-options');
		const icon = thisEl.find('.selectField-icon');

		selectField.click(function () {
			$(this).toggleClass('open');
			list.toggleClass('active');
			icon.toggleClass('active');
		});

		options.each(function () {
			let el = $(this);
			el.click(function () {
				selectText.html(el.html()); // выбор текущего элемента и вставка
				selectField.toggleClass('open');
				list.toggleClass('active');
				icon.toggleClass('active');
			});
		});

		$(document).click(function (e) {
			let select = $('.select-wrapper');

			if (!select.is(e.target) && select.has(e.target).length === 0) {
				selectField.removeClass('open');
				list.removeClass('active');
				icon.removeClass('active');
			}
		});
	});
	// End: custom select

	$(function () {
		const btnNext = $('.training-slider-btnNext');
		const btnPrev = $('.training-slider-btnPrev');

		btnNext.on('touchstart', function () {
			$(this).addClass('active');
		});

		btnNext.on('touchend', function () {
			$(this).removeClass('active');
		});

		btnPrev.on('touchstart', function () {
			$(this).addClass('active');
		});

		btnPrev.on('touchend', function () {
			$(this).removeClass('active');
		});
	});

	$(function () {
		$('.select-btn-map').mouseup(function () {
			$('.dropdown-map-menu').toggleClass('active');
			$('.select-btn-map-icon').toggleClass('active');
		});

		$(document).mousedown(function (e) {
			let field = $('.dropdown-map');
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				$('.dropdown-map-menu').removeClass('active');
				$('.select-btn-map-icon').removeClass('active');
			}
		});
	});

	// Start: Появление бара с фильтрами

	$(document).ready(function () {
		const box = $('.smooth-appearance-js');
		const form = $('.create__casting-form');

		setTimeout(function () {
			form.removeClass('--filter');
			if (box.hasClass('d-none')) {
				box.removeClass('d-none');
				setTimeout(function () {
					box.removeClass('opacity-null');
				}, 20);
			}
		}, 1700);
	});

	// End: Появление бара с фильтрами

	$(document).ready(function () {
		const role = $('.configurable-role');
		const filter = $('.sidebar-filter');

		setTimeout(function () {
			filter.removeClass('--animate');
			if (role.hasClass('d-none')) {
				role.removeClass('d-none');
				setTimeout(function () {
					role.removeClass('opacity-null');
				}, 20);
			}
		}, 2300);
	});

	// Start: Все кнопки с переключением
	$(document).ready(function () {
		$('.switch__wrapper').each(function () {
			const switchItem = $(this).find('.switch__item');
			const switchSlider = $(this).find('.switch__slider');
			const switchItemsCount = switchItem.length;
			const step = switchItemsCount && 100 / switchItemsCount;

			switchItem.css('width', `${step}%`);
			switchSlider.css('width', `${step}%`);

			$(this).click(function (e) {
				const targetIndex = $(e.target.closest('.switch__item')).data('index');
				switchSlider.css('left', `${step * targetIndex}%`);
			});
		});
	});
	// End: Все кнопки с переключением

	// Start: Dropdown Select
	function showDropdownSelect() {
		const area = $('.dropdown-select');

		$('.dropdown-select-btn').click(function () {
			$(this).siblings('.dropdown-select-menu').toggleClass('menu-active');
			$(this).parent().toggleClass('dropdown-select_active');
		});

		$(document).click(function (e) {
			if (!area.is(e.target) && area.has(e.target).length === 0) {
				$('.dropdown-select-menu').removeClass('menu-active');
				area.removeClass('dropdown-select_active');
			}
		});
	}

	showDropdownSelect();

	// End: Dropdown Select

	// Start: Открытие спойлеров в сайдбаре
	function openSpoiler() {
		$('.spoiler-item-header').click(function () {
			$(this).next('.spoiler-item-body').slideToggle(300);
			$(this).parent().toggleClass('active');
		});
	}

	openSpoiler();

	// End: Открытие спойлеров

	// Start: Создание новой роли
	function createNewRole() {
		$('.dropdown-select-menu-item.--create').click(function () {
			$(this).addClass('--hide-js');
			$('.create-new-object').addClass('--active');
		});

		$('.new-role-btn-close-js').click(function () {
			$('.create-new-object').removeClass('--active');
			$('.dropdown-select-menu-item.--create').removeClass('--hide-js');
		});
	}

	createNewRole();
	// End: Создание новой роли

	// Start: custom select dropdown
	function showDropSelect() {
		const dropdown = $('.dropdown-sum-select');
		const items = dropdown.find('li');

		$('.dropdown-sum-select').click(function () {
			$(this).toggleClass('active');
		});

		items.mousedown(function () {
			let container = $(this).parents('.dropdown-sum-select');
			let input = container.find('input');
			let inner = container.find('.dropdown-sum-select-inner');

			inner.html($(this).html());
			container.toggleClass('active');
			input.attr('value', $(this).attr('data-option'));

			$('.dropdown-flag-btn-icon').css({
				transition: 'transform 0.2s',
				transform: 'rotate("180"deg)',
			});
		});

		$(document).mousedown(function (e) {
			let dropdowns = $('.dropdown-sum-select');

			if (!dropdowns.is(e.target) && dropdowns.has(e.target).length === 0) {
				dropdowns.removeClass('active');
			}
		});
	}

	showDropSelect();

	// End: custom select dropdown

	// Start: All Tabs
	$('.tabs-wrapper').each(function () {
		let thisEl = $(this);
		thisEl.find('.tab-item').not(':first').hide();
		thisEl
			.find('.tab')
			.click(function () {
				thisEl.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
				thisEl.find('.tab-item').hide().eq($(this).index()).fadeIn();
			})
			.eq(0)
			.addClass('active');
	});
	// End: All Tabs

	// Start: Tabs Project
	$('.tabs-inner').each(function () {
		let thisEl = $(this);
		thisEl.find('.tab-item').not(':first').hide();
		thisEl
			.find('.tab_project__inner')
			.click(function () {
				thisEl.find('.tab_project__inner').removeClass('active').eq($(this).index()).addClass('active');
				thisEl.find('.tab-item').hide().eq($(this).index()).fadeIn();
			})
			.eq(0)
			.addClass('active');
	});
	// End: Tabs Project

	// Start: Разворачивание колонки с заявками
	const expandColumnRequest = () => {
		const toggleRequest = $('.request-js');
		const mainItemRequest = $('.main__item');

		toggleRequest.click(function () {
			mainItemRequest.toggleClass('--expand');
		});
	};

	expandColumnRequest();
	// End: Разворачивание колонки с заявками

	// Start: Трансформация кнопок .main-header  (ОТПРАВИТЬ ПРИГЛАШЕНИЕ, input-top-search-js)

	function transformMainHeaderBtn() {
		let sendInvitationBtn = $('.send-invitation-btn');
		let mainHeaderBottomLeft = $('.main-header-bottom-left');
		let sendInvitationBtnTextJs = $('.send-invitation-btn-text-js');
		let mainHeaderTopSearch = $('.main-header-top-search');
		let hideMediaStatus = $('.hide-media-status');
		let statusCounterInner = $('.status-counter-inner');
		let statusDefault = $('.status-default');
		let inputTopSearch = $('.input-top-search-js');

		let isSearchSmall = false;
		let isBtnSmall = false;
		let isMediaStatusHide = false;

		$(window).on('load resize', function () {
			if (mainHeaderBottomLeft.length > 0) {
				let mainLeft = mainHeaderBottomLeft.offset().left + mainHeaderBottomLeft.width() + 56;
				let sendLeft = sendInvitationBtn.offset().left; // кнопка
				let statusleft = statusDefault.offset().left;
				let hideMediaStatusLeft = hideMediaStatus.offset().left + hideMediaStatus.width();
				let topSearchLeft = mainHeaderTopSearch.offset().left;

				if (topSearchLeft - mainLeft < 220) {
					if (!isSearchSmall) {
						smallTopSearch();
					}
				}

				if (topSearchLeft - mainLeft > 350) {
					fullTopSearch();
				}

				if (mainHeaderTopSearch.hasClass('lower') && topSearchLeft - mainLeft < 210) {
					smallSendBtn();
				}

				if (sendLeft - mainLeft > 180 && !isMediaStatusHide) {
					fullSendBtn();
				}

				if (sendLeft - hideMediaStatusLeft < 40 && isSearchSmall && isBtnSmall) {
					hideMedia();
				}

				if (sendLeft - statusleft > 300 && isSearchSmall && isBtnSmall) {
					showMedia();
				}

				// Start: Трансформация кнопки Отправить приглашение на главной при нажатии на инпут

				$('.input-top-search-js').focus(function () {
					if (mainHeaderTopSearch.hasClass('lower') && $(window).width() > 1366) {
						$('.send-invitation-btn').addClass('active');
						$('.send-invitation-btn-text-js').addClass('hide');
						mainHeaderTopSearch.removeClass('lower');
						mainHeaderTopSearch.addClass('transform');
					}
				});

				$('.input-top-search-js').focusout(function () {
					if (mainHeaderTopSearch.hasClass('transform')) {
						if (sendLeft > mainLeft && $(window).width() > 1366) {
							$('.send-invitation-btn').removeClass('active');
							setTimeout(function () {
								$('.send-invitation-btn-text-js').removeClass('hide');
							}, 200);
							mainHeaderTopSearch.removeClass('transform');
							mainHeaderTopSearch.addClass('lower');
						}
					}
				});
			}

			// End: Трансформация кнопки Отправить приглашение на главной при нажатии на инпут
		});

		function smallTopSearch() {
			mainHeaderTopSearch.addClass('lower');
			inputTopSearch.attr('placeholder', 'Актёры');
			isSearchSmall = true;
		}

		function fullTopSearch() {
			mainHeaderTopSearch.removeClass('lower');
			inputTopSearch.attr('placeholder', 'Актёры в этом кастинге');
			isSearchSmall = false;
		}

		function smallSendBtn() {
			sendInvitationBtn.addClass('active');
			sendInvitationBtnTextJs.addClass('hide');
			isBtnSmall = true;
		}

		function fullSendBtn() {
			sendInvitationBtn.removeClass('active');
			sendInvitationBtnTextJs.removeClass('hide');
			isBtnSmall = false;
		}

		function hideMedia() {
			hideMediaStatus.addClass('hide');
			statusCounterInner.addClass('show');
			isMediaStatusHide = true;
		}

		function showMedia() {
			hideMediaStatus.removeClass('hide');
			statusCounterInner.removeClass('show');
			isMediaStatusHide = false;
		}
	}

	transformMainHeaderBtn();

	// ------------------------------------------------------------------------------------>

	// Start: Range input slider in filter
	function rangeFilterSlider() {
		const rangeOne = $('input[name="rangeOne"]');
		const rangeTwo = $('input[name="rangeTwo"]');
		const outputOne = $('.outputOne');
		const outputTwo = $('.outputTwo');
		const inclRange = $('.incl-range');
		const updateView = function () {
			const oneLeft = (this.val() / this.attr('max')) * (100 - 3.5) + '%';
			const twoLeft = (this.val() / this.attr('max')) * (100 - 3.5) + '%';
			const inclRangeWidthFirst = ((rangeOne.val() - rangeTwo.val()) / this.attr('max')) * 100 + '%';
			const inclRangeWidthSecond = ((rangeTwo.val() - rangeOne.val()) / this.attr('max')) * 100 + '%';
			const inclRangeLeftFirst = (rangeTwo.val() / this.attr('max')) * 100 + '%';
			const inclRangeLeftSecond = (rangeOne.val() / this.attr('max')) * 100 + '%';

			if (this.attr('name') === 'rangeOne') {
				outputOne.html(this.val());
				outputOne.css('left', `${oneLeft}`);
			} else {
				outputTwo.html(this.val());
				outputTwo.css('left', `${twoLeft}`);
			}
			if (parseInt(rangeOne.val()) > parseInt(rangeTwo.val())) {
				inclRange.css('width', `${inclRangeWidthFirst}`);
				inclRange.css('left', `${inclRangeLeftFirst}`);
			} else {
				inclRange.css('width', `${inclRangeWidthSecond}`);
				inclRange.css('left', `${inclRangeLeftSecond}`);
			}
		};

		$(document).ready(function () {
			updateView.call(rangeOne);
			updateView.call(rangeTwo);
			$('.double-range')
				.on('mouseup', function () {
					this.blur();
				})
				.on('mousedown input', function () {
					updateView.call($(this));
				});
		});
	}

	rangeFilterSlider();

	// End: Range input slider in filter ------------------------------------------------------------------------------->

	// Start: add/remove class active on hover -------------------------------------------------------------->

	function addActiveHover(parent, child) {
		$(parent)
			.mouseover(function () {
				$(child).addClass('active');
			})
			.mouseout(function () {
				$(child).removeClass('active');
			});
	}

	addActiveHover('.dropdown-blue-points', '.points-blue-btn-sidebar');
	addActiveHover('.dropdown-grey-points', '.points-grey-btn-header');
	addActiveHover('.question-menu,  .question-button', '.question-button');
	addActiveHover('.language-menu, .language-button', '.language-button');
	addActiveHover('.dropdown-request', '.request-btn');
	addActiveHover('.dropdown-approved', '.approved-btn');
	addActiveHover('.dropdown-mainRole', '.mainRole-dropdown-btn');
	addActiveHover('.main-header-top-filter', '.filter-dropdown-btn');
	addActiveHover('.sidebar-burger', '.burger-btn');
	addActiveHover('.sidebar-dropdown-question', '.sidebar-question-btn');
	addActiveHover('.sidebar-dropdown-calendar', '.sidebar-calendar-btn');
	addActiveHover('.actor__profile-nav-btn', '.points-grey-btn-profile');
	addActiveHover('.dropdown-request-js', '.dropdown-request-inner');
	addActiveHover('.dropdown-request-js', '.main__item-project-modal');

	// End: add/remove class active on hover -------------------------------------------------------------->

	$('.filter-dropdown-input').click(function () {
		$(this).toggleClass('active');
	});

	$(document).mouseup(function (e) {
		var modal = $('.filter-dropdown-input');
		if (!modal.is(e.target) && modal.has(e.target).length === 0) {
			$('.filter-dropdown-input').removeClass('active');
		}
	});

	function addActiveOnClick(name) {
		$(name).click(function (e) {
			$(this).toggleClass('--active');
		});

		$(document).click(function (e) {
			let field = $(name);
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				field.removeClass('--active');
			}
		});
	}

	addActiveOnClick('.dropdown-date');

	$('.filter-dropdown-input .--profile-actor').click(function () {
		$(this).toggleClass('active');
	});

	// Start: двойное меню с переключением
	$(function () {
		$('ul.profile-menu-wrapper').on('click', 'li:not(.active)', function () {
			$(this)
				.addClass('active')
				.siblings()
				.removeClass('active')
				.closest('div.profile-menu__tabs')
				.find('div.tabs__content')
				.removeClass('active')
				.eq($(this).index())
				.addClass('active');
		});
	});
	// End: двойное меню с переключением

	$('.castings-menu-agent, .promo-menu-actors, .castings-menu, .promo-menu').on('mouseover', function () {
		$(this).siblings().addClass('active');
	});

	$('.castings-menu-agent, .promo-menu-actors, .castings-menu, .promo-menu').on('mouseout', function () {
		$(this).siblings().removeClass('active');
	});

	$('.menu-header__info-item').click(function () {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	$('.castings-menu-item.hasMenu').click(function () {
		$('.menu-header__info').addClass('active');
	});

	$('.menu-header__bottom-list .hasMenu').click(function () {
		$('.menu-header__info').addClass('active');
	});

	const burgerWrapper = $('.burger__menu-wrapper');
	const burgerMenuBtn = $('.burger__menu-btn');
	const menuHeader = $('.menu-header');

	burgerMenuBtn.on('click', (e) => {
		e.stopPropagation();
		burgerMenuBtn.toggleClass('burger__menu-btn_active');
		burgerWrapper.toggleClass('active');
		langMenuMobile.removeClass('active');
		questionMenuMobile.removeClass('active');
	});

	menuHeader.on('click', (e) => {
		if (e.target.closest('.burger__menu-wrapper')) return;
		burgerWrapper.removeClass('active');
	});

	const langMenuMobile = $('.language-menu-mobile');
	const languageBtnMobile = $('.language-btn-mobile');

	languageBtnMobile.on('click', (e) => {
		e.stopPropagation();
		langMenuMobile.toggleClass('active');
		questionMenuMobile.removeClass('active');
	});

	menuHeader.on('click', (e) => {
		if (e.target.closest('.language-menu-mobile')) return;
		langMenuMobile.removeClass('active');
	});

	const questionBtnMobile = $('.question-btn-mobile');
	const questionMenuMobile = $('.question-menu-mobile');

	questionBtnMobile.on('click', (e) => {
		e.stopPropagation();
		questionMenuMobile.toggleClass('active');
		langMenuMobile.removeClass('active');
	});

	menuHeader.on('click', (e) => {
		if (e.target.closest('.question-menu-mobile')) return;
		questionMenuMobile.removeClass('active');
	});

	$('.hidden-btn').click(function (e) {
		burgerMenuBtn.toggleClass('burger__menu-btn_active');
		e.stopPropagation();
		burgerWrapper.toggleClass('active');
		questionMenuMobile.removeClass('active');
		langMenuMobile.removeClass('active');
	});

	$('.dropdown-language').each(function () {
		$(this)
			.find('.language-options')
			.on('click', function () {
				$('.dropdown-language > .language-button span').html($(this).html());
			});
	});

	// Start: Переключение проектов в create-step-3
	const switchProjects = () => {
		let createNewOne = $('.create-new-one');
		let selectExistingOne = $('.select-existing-one');
		let switchBtnLeft = $('.switch-button-case-project.--left');
		let switchBtnRight = $('.switch-button-case-project.--right');

		switchBtnLeft.click(function () {
			selectExistingOne.hide();
			createNewOne.show();
		});

		switchBtnRight.click(function () {
			selectExistingOne.show();
			createNewOne.hide();
		});
	};

	switchProjects();

	// End: Переключение проектов в create-step-3

	// Start: 2 кнопки переключения рассылка приглашений
	const switchDoubleInviteButtons = () => {
		let switchBtnLeft = $('.switch-button-left');
		let switchBtnRight = $('.switch-button-right');
		let sendInvitation = $('.send-invitation-wrapper');
		let sendInvitationOnline = $('.send-invitation-wrapper.--online');

		switchBtnLeft.click(function () {
			sendInvitation.show();
			sendInvitationOnline.hide();
		});

		switchBtnRight.click(function () {
			sendInvitation.hide();
			sendInvitationOnline.show();
		});
	};

	switchDoubleInviteButtons();
	// End: 2 кнопки переключения рассылка приглашений

	// Start: Переключение локации в спойлере Территория
	const switchLocation = () => {
		let city = $('.spoiler-item-location-city');
		let country = $('.spoiler-item-location-country');
		let world = $('.spoiler-item-location-world');
		let switchBtnLeft = $('.spoiler-item-location-left');
		let switchBtnMiddle = $('.spoiler-item-location-middle');
		let switchBtnRight = $('.spoiler-item-location-right');

		switchBtnLeft.click(function () {
			city.show();
			country.hide();
			world.hide();
		});

		switchBtnMiddle.click(function () {
			city.hide();
			country.show();
			world.hide();
		});

		switchBtnRight.click(function () {
			city.hide();
			country.hide();
			world.show();
		});
	};

	switchLocation();

	// End: Переключение локации в спойлере Территория

	// Start: Скрытие сайдбара
	function removeSidebar() {
		const sidebarBtnLeft = $('.roll-up-btn-left');
		const sidebarBtnRight = $('.roll-up-btn-right');
		const sidebar = $('.sidebar');
		const sidebarTabs = $('.sidebar-tabs-js');
		const sidebarHeaderTitle = $('.sidebar-dropdown-header-title');
		const sidebarBurger = $('.sidebar-burger');
		const sidebarPlus = $('.sidebar-plus');
		const sidebarTopBtns = $('.sidebar-top-btns');
		const sidebarLeftBtns = $('.sidebar-left-btns');
		const mainItemsWrapper = $('.main-items-wrapper');
		const mainItemsProjectWrapper = $('.main-items_project-wrapper');
		const wrapText = $('.wrap-text');

		let isSidebarHidden = false;

		$(window).on('load resize', function () {
			if ($(window).width() < 1025) {
				if (!isSidebarHidden) {
					hideSidebar();
				}
			} else {
				if (isSidebarHidden) {
					showSidebar();
				}
			}
		});

		sidebarBtnLeft.click(function () {
			hideSidebar();
		});

		function hideSidebar() {
			sidebarTabs.toggleClass('done');
			sidebarHeaderTitle.toggleClass('done');
			wrapText.addClass('active');
			sidebarTopBtns.removeClass('active');
			mainItemsWrapper.addClass('active'); // width 0.4s
			sidebar.toggleClass('--rolled'); // transition: opacity 0.2s, flex 0.4s, width 0.4s;
			mainItemsProjectWrapper.addClass('active'); // width 0.4s

			setTimeout(function () {
				sidebarBurger.toggleClass('done');
				sidebarPlus.toggleClass('done');
				sidebarLeftBtns.addClass('active');
			}, 100);

			sidebarBtnLeft.toggleClass('active');
			sidebarBtnRight.toggleClass('active');

			isSidebarHidden = true;
		}

		sidebarBtnRight.click(function () {
			showSidebar();
		});

		function showSidebar() {
			mainItemsWrapper.removeClass('active'); // width 0.4s
			sidebar.toggleClass('--rolled'); // transition: opacity 0.2s, flex 0.4s, width 0.4s;

			sidebarLeftBtns.removeClass('active');
			sidebarBurger.toggleClass('done');
			sidebarPlus.toggleClass('done');
			sidebarBtnLeft.toggleClass('active');
			sidebarBtnRight.toggleClass('active');

			setTimeout(function () {
				sidebarTopBtns.addClass('active');
				wrapText.removeClass('active');
			}, 400);

			setTimeout(function () {
				sidebarTabs.toggleClass('done');
				sidebarHeaderTitle.toggleClass('done');
			}, 400);

			isSidebarHidden = false;
		}

		// Start: Убрать overflow у блока, чтобы отобразить dropdown и вернуть обратно при клике при закрытии
		const removeOverflowAtBlock = () => {
			const massActors = $('.dropdown-text-js');
			const transferActorsCloseBtn = $('.transfer-actors-close-btn');

			massActors.click(function () {
				mainItemsWrapper.css('overflow', 'inherit');
			});

			transferActorsCloseBtn.click(function () {
				mainItemsWrapper.css('overflow', 'overlay');
			});
		};

		removeOverflowAtBlock();
		// End: Убрать overflow у блока, чтобы отобразить dropdown и вернуть обратно при закрытии

		// Start: Скрытие окна Массовое одобрение актеров
		const hideMassActors = () => {
			let dropTransferActors = $('.dropdown-transfer-actors');

			dropTransferActors.on('mouseenter', (event) => {
				event.stopPropagation();
			});

			dropTransferActors.on('mouseleave', (event) => {
				$(event.currentTarget).removeClass('active');
				mainItemsWrapper.css('overflow', 'overlay');
			});
		};

		hideMassActors();

		// End: Скрытие окна Массовое одобрение актеров
	}

	removeSidebar();

	// End: Скрытие сайдбара

	// Start: Увеличение рабочей области
	const increaseWorkspace = () => {
		const expandBtnOut = $('.main-header-top-expandBtn.--out');
		const expandBtnIn = $('.main-header-top-expandBtn.--in');
		const sidebar = $('.sidebar');
		const main = $('.main');
		const mainInner = $('.main-inner');
		const mainContainer = $('.main-container');
		const mainItemsWrapper = $('.main-items-wrapper');
		const mainItemsProjectWrapper = $('.main-items_project-wrapper');
		const tabsInner = $('.tabs-inner');
		const rightSidebarInner = $('.right__sidebar-inner');
		const tabsProject = $('.tabs_project');

		expandBtnOut.click(function () {
			hideSidebar();
		});

		expandBtnIn.click(function () {
			showSidebar();
		});

		function changeBtn() {
			expandBtnOut.toggleClass('d-none');
			expandBtnIn.toggleClass('d-none');
		}

		function hideSidebar() {
			sidebar.addClass('opacity-null'); // transition: opacity .2s,flex .4s,width .4s,-ms-flex .4s;

			sidebar.one('transitionend', function (e) {
				sidebar.addClass('d-none');
				main.addClass('no-transition');
				mainInner.addClass('active'); // transition: width .3s;
				tabsInner.addClass('active');

				if (sidebar.hasClass('--rolled')) {
					main.addClass('shortSidebar');
				} else {
					main.addClass('notSidebar');
				}

				setTimeout(function () {
					main.removeClass('no-transition');
					main.addClass('active'); // transition: padding-left .4s;
					mainItemsWrapper.removeClass('active'); // transition: width .4s;
					mainItemsWrapper.addClass('expanded'); // transition: width .4s;
					mainItemsProjectWrapper.addClass('expanded'); // transition: width .4s;
				}, 200);

				setTimeout(function () {
					mainContainer.addClass('isWorkspace'); // transition: padding-top .3s;
					mainItemsWrapper.addClass('expanded_height');
					mainItemsProjectWrapper.addClass('expanded_height');
					rightSidebarInner.addClass('active');
					tabsProject.addClass('active'); // transition: 0.2s;

					changeBtn();
				}, 1000);
			});
		}

		function showSidebar() {
			if (sidebar.hasClass('d-none')) {
				mainContainer.removeClass('isWorkspace');
				tabsProject.removeClass('active');
				mainItemsWrapper.removeClass('expanded_height');
				mainItemsProjectWrapper.removeClass('expanded_height');
				rightSidebarInner.removeClass('active');

				setTimeout(function () {
					if (sidebar.hasClass('--rolled')) {
						main.removeClass('active');
						mainItemsWrapper.addClass('active');
						mainItemsProjectWrapper.addClass('active');
					} else {
						main.addClass('notSidebar');
						main.removeClass('shortSidebar');
					}
				}, 300);

				setTimeout(function () {
					mainInner.removeClass('active');
					tabsInner.removeClass('active');
					main.removeClass('active');
				}, 400);

				setTimeout(function () {
					mainItemsWrapper.removeClass('expanded');
					mainItemsProjectWrapper.removeClass('expanded');
				}, 400);

				setTimeout(function () {
					main.removeClass('notSidebar');
					main.removeClass('shortSidebar');
					sidebar.removeClass('d-none');

					setTimeout(function () {
						sidebar.removeClass('opacity-null');
					}, 20);
				}, 800);

				changeBtn();
			}
		}
	};

	increaseWorkspace();
	// End: Разворачивание рабочей области

	// Start: add/remove border active focus

	function addActiveBorderFocus(parent, child) {
		$(parent)
			.focus(function () {
				$(child).addClass('active');
			})
			.focusout(function () {
				$(child).removeClass('active');
			});
	}

	addActiveBorderFocus('.main-header-top-search input', '.main-header-top-search');

	// End: add/remove border active focus

	// Start: show and Hide Modal With Close Btn
	const showHideModalWithCloseBtn = (textEl, modal, closeBtn) => {
		$(textEl).click(function () {
			$(modal).addClass('active');

			if ($('.js-send-role').hasClass('active')) {
				$('.js-dropdown-ensemble__item-content').addClass('show');
			}
		});

		$(closeBtn).click(function () {
			$(modal).removeClass('active');

			$('.js-dropdown-ensemble__item-content').removeClass('show');
		});

		$(modal).mouseover(function (e) {
			e.stopPropagation();
		});

		hideModalClickOutside('.dropdown-grey-points', '.send_role_text__inner');
		hideModalClickOutside('.dropdown-grey-points', '.send_project_pdf__inner');
		hideModalClickOutside('.dropdown-request-js', '.create_copy_column__inner');
		hideModalClickOutside('.dropdown-request-js', '.change_column_name-modal');
		hideModalClickOutside('.dropdown-mainRole', '.js-send-role');
	};

	showHideModalWithCloseBtn('.sendText-js', '.send_role_text__inner', '.send_role_text-close-btn'); // send role text project
	showHideModalWithCloseBtn('.sendProjectEmail-js', '.send_project_pdf__inner', '.send_project_pdf-close-btn'); // send project pdf
	showHideModalWithCloseBtn('.dublicate-column-js', '.create_copy_column__inner', '.create_copy_column-close-btn'); // create copy column
	showHideModalWithCloseBtn('.rename-js', '.change_column_name-modal', '.change_column_name-close-btn'); // change column name
	showHideModalWithCloseBtn('.js-sendText', '.js-send-role', '.send_role_text-close-btn'); // send role text in ensemble-dropdown

	// End: show and Hide Modal With Close Btn

	$(function () {
		$('.dropdown-text-js').click(function () {
			$('.dropdown-transfer-actors').addClass('active');
			$('.request-btn').addClass('active');
		});

		$('.transfer-actors-close-btn').click(function () {
			$('.dropdown-transfer-actors').removeClass('active');
		});
	});

	// Start: Range input slider in transfer-actors
	function showRangeSliderActors() {
		const rangeTransferOne = $('input[name="rangeTransferOne"]');
		const outputTransferOne = $('.outputTransferOne');
		const transferinclRange = $('.transfer-incl-range');

		const updateTransferView = function () {
			if (this.attr('name') === 'rangeTransferOne') {
				const left = (this.val() / this.attr('max')) * (100 - 3.5) + '%';
				outputTransferOne.html(this.val());
				outputTransferOne.css('left', `${left}`);
			}

			if (this.val()) {
				const width = (this.val() / this.attr('max')) * 100 + '%';
				transferinclRange.css('width', `${width}`);
			}
		};

		$(document).ready(function () {
			updateTransferView.call(rangeTransferOne);
			$('.rangeTransferOne')
				.on('mouseup', function () {
					this.blur();
				})
				.on('mousedown input', function () {
					updateTransferView.call($(this));
				});
		});
	}

	showRangeSliderActors();
	// End: Range input slider in transfer-actors

	// Start: Tabs Массовый перенос актёров
	const switchTabsMassTransferActors = () => {
		let transferActorsFirst = $('.transfer-actors-first');
		let transferActorsSecond = $('.transfer-actors-second');
		let switchBtnLeft = $('.transfer-actors-btn-left');
		let switchBtnRight = $('.transfer-actors-btn-right');

		switchBtnLeft.click(function () {
			transferActorsFirst.show();
			transferActorsSecond.hide();
		});

		switchBtnRight.click(function () {
			transferActorsFirst.hide();
			transferActorsSecond.show();
		});
	};

	switchTabsMassTransferActors();

	// End: Tabs Массовый перенос актёров

	// Start: Tabs Profile Actor Foto Video
	const switchTabsProfileMedia = () => {
		let actorProfileTabsPanelFirst = $('#media-tab_1');
		let actorProfileTabsPanelSecond = $('#media-tab_2');
		let switchBtnLeft = $('.actor__profile-media-tabs-menu-left');
		let switchBtnRight = $('.actor__profile-media-tabs-menu-right');

		switchBtnLeft.click(function () {
			actorProfileTabsPanelFirst.show();
			actorProfileTabsPanelSecond.hide();
		});

		switchBtnRight.click(function () {
			actorProfileTabsPanelFirst.hide();
			actorProfileTabsPanelSecond.show();
		});
	};

	switchTabsProfileMedia();

	// End: Tabs Tabs Profile Actor Foto Video

	// Start: Tabs menu profile actor add class active
	$('.tabs-menu').click(function () {
		$(this).siblings().removeClass('tabs-menu-active');
		$(this).addClass('tabs-menu-active');
	});
	// End: Tabs menu profile actor add class active

	// Маска для input-date
	$(document).ready(function ($) {
		if ($('.input-time').length > 0) {
			$('.input-time').mask('99:99');
			$('.input-phone').mask('+7 (999) 999-99-99');
		}
	});

	// Trigger focus input
	$(function () {
		$('.input-box').click(function () {
			$(this).find('input').focus();
		});
	});

	// Start: Trigger focus textarea and custom scroll
	$(function () {
		const field = $('.area-field-wrapper');

		field.click(function () {
			$(this).find('textarea').focus();
			$(this).addClass('active');
		});

		$(document).click(function (e) {
			if (!field.is(e.target) && field.has(e.target).length === 0) {
				field.removeClass('active');
			}
		});
	});

	// End: Trigger focus textarea and custom scroll
})(jQuery);

const trainingSlider = () => {
	let slides = document.querySelectorAll('.casting__training-slider-item');
	let nextBtn = document.querySelector('.training-slider-btnNext');
	let prevBtn = document.querySelector('.training-slider-btnPrev');
	let count = document.querySelector('.casting__training-header-text');
	let index = 0;

	function next() {
		slides[index].classList.remove('active');
		index = (index + 1) % slides.length;
		prevBtn.classList.remove('--inactive');
	}

	function prev() {
		slides[index].classList.remove('active');
		index = (index - 1 + slides.length) % slides.length;
	}

	function changeEl() {
		count.textContent = `Шаг ${index + 1} из 13`;
		slides[index].classList.add('active');

		if (index === 0) {
			prevBtn.classList.add('--inactive');
			prevBtn.disabled = true;
		} else {
			prevBtn.disabled = false;
		}

		if (index === 12) {
			prevBtn.classList.add('--end');
			nextBtn.textContent = 'Завершить';
			nextBtn.disabled = true;
		} else {
			prevBtn.classList.remove('--end');
			nextBtn.textContent = 'Вперёд';
			nextBtn.disabled = false;
		}
	}

	nextBtn &&
		nextBtn.addEventListener('click', function () {
			next();
			changeEl();
		});

	prevBtn &&
		prevBtn.addEventListener('click', function () {
			prev();
			changeEl();
		});
};

trainingSlider();

// Start: Show modal sidebar
$('.js-right__sidebar_item-btn').click(function () {
	$('.right__sidebar_item-menu').toggleClass('menu-active');
});

// End: Show modal sidebar

$('#example-picker').picker(
	{
		data: ['Актёры запаска', 'Части тела', 'Большие гонки', 'Древо жизни (копия)', 'Проверенный'],
		lineHeight: 19,
		selected: 0,
	},
	function (s) {
		$('.output').html(s);
		$('.example-picker').data('value', s);
	}
);
