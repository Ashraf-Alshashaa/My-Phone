
export const createSelectElement = () => {

    const element = document.createElement('div');
    element.id = "select-div"
    return element;
}

export const createOptionElement = (name, url) => {
    const option = document.createElement('option');
        option.innerText = name;
        option.value = url
        return option
}