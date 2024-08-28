(function ($) {
    jQuery.expr[':'].Contains = function (elem, i, m) {
        return (elem.textContent || elem.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    function listFilter(input, list) {
        $(input).change(function () {
            var filter = $(this).val();
            if (filter) {
                $(list).find("li:not(:Contains(" + filter + "))").hide();
                $(list).find("li:Contains(" + filter + ")").show();
            } else {
                $(list).find("li").show();
            }
            return false;
        }).keyup(function () {
            $(this).change();
        });
    }

    $(function () {
        listFilter("#inputFilter", "#list");
    });
}(jQuery));