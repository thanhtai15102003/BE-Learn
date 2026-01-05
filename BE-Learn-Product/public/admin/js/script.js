const buttonStatus = document.querySelectorAll('[button-status]');

if (buttonStatus.length > 0) {
    let url = new URL(window.location.href);
    buttonStatus.forEach((button) => {
        button.addEventListener('click', () => {
            const status = button.getAttribute('button-status');
            if (status) {
                url.searchParams.set('status', status);
            } else {
                url.searchParams.delete('status');
            }
            window.location.href = url.href;
        });
    });
}

//Chức năng tìm kiếm sản phẩm
const formSearch = document.querySelector('#form-search');
if (formSearch) {
    let url = new URL(window.location.href);
    formSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;
        console.log(keyword);
        if (keyword) {
            url.searchParams.set('keyword', keyword);
        } else {
            url.searchParams.delete('keyword');
        }
        window.location.href = url.href;
    });
}
// End Chức năng tìm kiếm sản phẩm

//Pagination
const buttonPagination = document.querySelectorAll('[button-pagination]');
if (buttonPagination) {
    let url = new URL(window.location.href);
    buttonPagination.forEach((button) => {
        button.addEventListener('click', () => {
            const page = button.getAttribute('button-pagination');
            url.searchParams.set('page', page);
            window.location.href = url.href;
        });
    });
}
//End Pagination

//Show Alert
const alertShow = document.querySelector('[show-alert]');
if (alertShow) {
    const time = parseInt(alertShow.getAttribute('data-time'));
    const closeAlert = alertShow.querySelector('[close-alert]');
    setTimeout(() => {
        alertShow.classList.add('alert-hidden');
    }, time);

    closeAlert.addEventListener('click', () => {
        alertShow.classList.add('alert-hidden');
    })
}
//End Show Alert