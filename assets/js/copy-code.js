function createIcon(name) {
    const icon = document.createElement('i')
    icon.classList.add('fa', name);
    return icon
}

const addCopyButtons = (clipboard) => {
    document.querySelectorAll("pre > code").forEach((codeBlock) => {
        const header = document.createElement('div')
        header.classList.add('code-header');

        const lang = document.createElement('span')
        lang.classList.add('code-lang')
        lang.setAttribute('data-lang', codeBlock.getAttribute('data-lang'));

        lang.append(createIcon('fa-code'));
        header.append(lang);

        const button = document.createElement("button");
        button.className = "clipboard-button";
        button.type = "button";
        button.append(createIcon('fa-clipboard'))
        button.addEventListener("click", () => {
            clipboard.writeText(codeBlock.innerText).then(
                () => {
                    button.blur();
                    button.classList.add('copied')
                    setTimeout(() => (button.classList.remove('copied')), 2000);
                },
                (error) => (button.innerHTML = "Error")
            );
        });


        header.append(button);

        const pre = codeBlock.parentNode;
        pre.parentNode.insertBefore(header, pre);
    });
};

addCopyButtons(navigator.clipboard)