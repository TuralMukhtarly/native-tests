window.addEventListener('load', function () {
    const input = document.getElementById('name_input')
    const startValue = input.value

    function onChangeTextColor (e) {
        startValue !== e.currentTarget.value
            ? input.classList.add('red')
            : input.classList.remove('red')
    }

    input.addEventListener('input', onChangeTextColor)
})