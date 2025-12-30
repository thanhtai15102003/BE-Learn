//Change status
const buttonChangeStatus = document.querySelectorAll('[button-change-status]');
if (buttonChangeStatus.length > 0) {
    const formChangeStatus = document.querySelector('#form-change-status');
    const path = formChangeStatus.getAttribute('data-path');

    buttonChangeStatus.forEach((button) => {
        button.addEventListener('click', () => {
            const statusCurrent = button.getAttribute('data-status');
            const id = button.getAttribute('data-id');

            let statusChange = statusCurrent == 'active' ? 'inactive' : 'active';
            const action = path + `/${statusChange}/${id}?_method=PATCH`;
            formChangeStatus.action = action;
            formChangeStatus.submit();
        });
    });
}
//End Change status

// Checkbox Multi All
const checkBoxMulti = document.querySelector('[checkbox-multi]');
if (checkBoxMulti) {
    const inputCheckAll = checkBoxMulti.querySelector("input[name='checkall']");
    const inputIds = checkBoxMulti.querySelectorAll("input[name='id']");

    inputCheckAll.addEventListener('click', () => {
        if (inputCheckAll.checked) {
            inputIds.forEach((input) => {
                input.checked = true;
            });
        } else {
            inputIds.forEach((input) => {
                input.checked = false;
            });
        }
    });

    inputIds.forEach((input) => [
        input.addEventListener('click', () => {
            const countChecked = checkBoxMulti.querySelectorAll("input[name='id']:checked").length;
            if (countChecked == inputIds.length) {
                inputCheckAll.checked = true;
            } else {
                inputCheckAll.checked = false;
            }
        })
    ]);
}
// End Checkbox Multi All

// Change Multi
const formChangeMulti = document.querySelector('[form-change-multi]');
if (formChangeMulti) {
    formChangeMulti.addEventListener('submit', (e) => {
        e.preventDefault();

        const checkBoxMulti = document.querySelector('[checkbox-multi]');
        const inputChecked = document.querySelectorAll("input[name='id']:checked");

        if (inputChecked.length > 0) {
            let ids = [];
            const inputIds = formChangeMulti.querySelector("input[name='ids']");

            inputChecked.forEach((input) => {
                const id = input.value;
                ids.push(id);
            });
            inputIds.value = ids.join(', ');
            formChangeMulti.submit();
        } else {
            alert('Vui lòng chọn sản phẩm');
        }
    });
}
// End Change Multi
