odoo.define('toggle_debug_mode.DebugModeJs', function (require) {
    "use strict";

var DebugModeJs = require('web.UserMenu');

DebugModeJs.include({
    start: function () {
        var self = this;
        return this._super.apply(this, arguments).then(function () {
            var mMode = 'normal';
            if (window.location.href.indexOf('debug') > -1)
                mMode = 'debug';
            if (mMode == 'normal')
                self.$('[data-menu="quitdebug"]').hide();
            if (mMode == 'debug')
                self.$('[data-menu="debug"]').hide();
        });
    },

    _onMenuDebug: function () {
        window.location = $.param.querystring(window.location.href, 'debug');
    },
    _onMenuQuitdebug: function () {
        window.location.search = "?";
    },
})

});
