window._ = require('lodash');
TableExport = require("tableexport")

TableExport.prototype.formatConfig.xlsx = {
    defaultClass: 'btn btn-secondary',
    buttonContent: 'Exportar xlsx',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    fileExtension: '.xlsx'
}
TableExport.prototype.formatConfig.csv = {
    defaultClass: 'btn btn-secondary',
    buttonContent: 'Exportar csv',
    separator: ',',
    mimeType: 'text/csv',
    fileExtension: '.csv',
    enforceStrictRFC4180: true
}
TableExport.prototype.formatConfig.txt = {
    defaultClass: 'btn btn-secondary',
    buttonContent: 'Exportar txt',
    separator: '  ',
    mimeType: 'text/plain',
    fileExtension: '.txt',
    enforceStrictRFC4180: true
}

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf-token"]').getAttribute("content");
window.token = token
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}





// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
