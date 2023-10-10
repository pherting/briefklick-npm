# briefklick-npm
NodeJS NPM Package for BriefKlick API

# how to use

```javascript

const briefklick = require('briefklick-npm');

const bk = new briefklick("YOURAPIKEYHERE");

bk.getBalance().then((res) => {
    console.log(res); // return Balance in €
});


// For HTML to PDF use this function for pdf file use createDocumentPDF
// sender: string of your adress like: Max Musterman, Musterstr. 12, 13371 Musterstadt
// receiver: string of valid german adress escaped with \n like: Max Musterman\nMusterstr. 12\n13371 Musterstadt
// html: string of you html text
// extrapage: 0 for no extrapage, 1 for extrapage with adress details on front of your html
bk.createDocument(sender, receiver, html, extraPage).then((res) => {
    console.log(res); // return documentId and page counts 
});



// For PDF you can read your PDF file and convert it to base64 string to call this function
// sender: string of your adress like: Max Musterman, Musterstr. 12, 13371 Musterstadt
// receiver: string of valid german adress escaped with \n like: Max Musterman\nMusterstr. 12\n13371 Musterstadt
// html: string of you html text
// extrapage: 0 for no extrapage, 1 for extrapage with adress details on front of your html
bk.createDocumentPDF(sender, receiver, pdf, extraPage).then((res) => {
    console.log(res); // return documentId and page counts 
});



// documentId:  result of createDocument
bk.previewDocument(documentId).then((res) => {
    console.log(res); // return pdf file as base64 string and page counts 
});


// documentId: result of createDocument
/* mode:
    0 = Normal
    1 = Einschreiben Einwurf
    2 = Einschreiben Standard
    3 = Einschreiben Eigenhändig
*/
// color: 0 for Black&White, 1 for colored print
bk.sendDocument(documentId, mode, color).then((res) => {
    console.log(res); // return orderId and price in €
});


// orderId: result of sendDocument
bk.statusDocument(orderId).then((res) => {
    console.log(res); // return status, tracking and created state
});
```