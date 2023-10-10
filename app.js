const axios = require('axios');
const FormData = require('form-data');

const apiURL = "https://api.briefklick.de/v2/";

const briefklick = class{
    constructor(apikey){
        this.apikey = apikey;
    }

    getBalance() {
        var bodyFormData = new FormData();
        bodyFormData.append('apikey', this.apikey);

        return axios({
            method: "get",
            url: apiURL + "balance",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            return response.data;
        });
    }

    createDocument(sender, receiver, html, extraPage) {
        var bodyFormData = new FormData();
        bodyFormData.append('apikey', this.apikey);
        bodyFormData.append('sender', sender);
        bodyFormData.append('receiver', receiver);
        bodyFormData.append('html', html);
        bodyFormData.append('extraPage', extraPage);

        return axios({
            method: "post",
            url: apiURL + "create",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            return response.data;
        });
    }

    createDocumentPDF(sender, receiver, pdf, extraPage) {
        var bodyFormData = new FormData();
        bodyFormData.append('apikey', this.apikey);
        bodyFormData.append('sender', sender);
        bodyFormData.append('receiver', receiver);
        bodyFormData.append('pdf', pdf);
        bodyFormData.append('extraPage', extraPage);

        return axios({
            method: "post",
            url: apiURL + "create",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            return response.data;
        });
    }

    previewDocument(documentId) {
        var bodyFormData = new FormData();
        bodyFormData.append('apikey', this.apikey);
        bodyFormData.append('id', documentId);

        return axios({
            method: "post",
            url: apiURL + "preview",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            return response.data;
        });
    }

    sendDocument(documentId, mode, color) {
        var bodyFormData = new FormData();
        bodyFormData.append('apikey', this.apikey);
        bodyFormData.append('id', documentId);
        bodyFormData.append('einschreiben', mode);
        bodyFormData.append('farbig', color);

        return axios({
            method: "post",
            url: apiURL + "send",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            return response.data;
        });
    }

    statusDocument(documentId) {
        var bodyFormData = new FormData();
        bodyFormData.append('apikey', this.apikey);
        bodyFormData.append('id', documentId);

        return axios({
            method: "post",
            url: apiURL + "status",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            return response.data;
        })
        .catch(function (response) {
            return response.data;
        });
    }
}

module.exports = briefklick;