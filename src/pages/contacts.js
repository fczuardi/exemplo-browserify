import createHash from 'sha.js';

export default function (){
    let sha256 = createHash('sha256'),
        debugElement = document.getElementById('debug'),
        pageText = 'Contacts page loaded!',
        hash = sha256.update(pageText, 'utf8').digest('hex');
    debugElement.textContent = [pageText, hash].join('\n');
}
