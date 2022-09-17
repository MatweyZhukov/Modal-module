function modalOpen(modalSelector, modalTimerId) {
	const windowModal = document.querySelector(modalSelector);

	windowModal.style.display = 'block';
	document.body.style.overflow = 'hidden';

	console.log(modalTimerId);
	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function modalClose(modalSelector) {
	const windowModal = document.querySelector(modalSelector);
	windowModal.style.display = 'none';
	document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {

	const openModal = document.querySelectorAll(triggerSelector),
		windowModal = document.querySelector(modalSelector);

	openModal.forEach(e => {
		e.addEventListener('click', () => modalOpen(modalSelector, modalTimerId));
	});

	windowModal.addEventListener('click', (e) => {
		if (e.target === windowModal || e.target.getAttribute('data-close') == '') {
			modalClose(modalSelector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && windowModal.style.display == 'block') {
			modalClose(modalSelector);
		}
	});

	const showModalByScroll = () => {
		if (window.pageYOffset +
			document.documentElement.clientHeight >=
			document.documentElement.scrollHeight - 1) {
			modalOpen(modalSelector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	};

	window.addEventListener('scroll', showModalByScroll);

}

export default modal;
export {
	modalClose
};
export {
	modalOpen
};