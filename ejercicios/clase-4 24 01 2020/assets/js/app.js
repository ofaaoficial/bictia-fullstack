document.querySelectorAll('button:not(.igual)').forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('input').value += e.target.innerHTML;
    })
});

const operar = () => {
    try {
        let $input = document.querySelector('input');
        $input ? $input.value = eval($input.value) : null;
    } catch (e) {
        alert('No se puede realizar esta operacion.');
    }
};

document.querySelector('.igual').addEventListener('click', () => operar());
