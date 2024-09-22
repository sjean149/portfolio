const sections = ['About Me', 'Work', 'Contact'];

sections.forEach(section => {
    main.innerHTML += `
        <div class='row'>
            <aside>
                <h1>${section}</h1>
            </aside>

            <section>
                <p>asdfj'asdf;ajs ;asldf;asdf; a;jsdj;asd;fja;sdfl</p>
                <p>asdfj'asdf;ajs ;asldf;asdf; a;jsdj;asd;fja;sdfl</p>
                <p>asdfj'asdf;ajs ;asldf;asdf; a;jsdj;asd;fja;sdfl</p>
            </section>
        </div>
    `;
});
