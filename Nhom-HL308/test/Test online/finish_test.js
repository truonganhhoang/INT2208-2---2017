'use strict';

module.exports = function finish_test() {
    return {
        url: "nop_bai",
        getButtonByName: function (buttonName) {
            var mapping = {
                "nopbai": ".btn"
            };

            return mapping[buttonName];
        },
        url: "xem_dap_an",
        getButtonByName: function (buttonName) {
            var mapping = {
                "xem_dap_an": ".btn"
            };

            return mapping[buttonName];
        }
}();