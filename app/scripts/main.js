/* global Dinglake, Vue */
(function () {
    'use strict';
    
    $.ajax({
        url: 'config.json',
        dataType: 'json',
        success: function (data) {
            new Dinglake(data);
            new Vue({
                el: '#sounds',
                data: { sounds: data }
            });
        }
    });
})();
