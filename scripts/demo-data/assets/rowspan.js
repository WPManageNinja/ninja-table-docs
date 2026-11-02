/*!
 * jQuery Rowspanizer Plugin (Modified) v0.2
 * https://github.com/marcosesperon/jquery.rowspanizer.js
 *
 * Copyright 2011, 2015 Marcos EsperÃƒÂ³n
 * Released under the MIT license
 * 
 * https://github.com/jquery-boilerplate/boilerplate/
 */

;( function( $, window, document, undefined ) {

  "use strict";

    var rowspanizer = "rowspanizer",
      defaults = {
        vertical_align: "top",
        columns: []
      };

    function f ( element, options ) {
      this.element = element;
      this.settings = $.extend( {}, defaults, options );
      this._defaults = defaults;
      this._name = rowspanizer;
      this.init();

    }

    $.extend( f.prototype, {
      init: function() {

        var _this = this;

        var $table = $(this.element);
        var arr = [];
        
        $table.find('tr td.combine').removeClass('rowspan-remove').removeClass('rowspan-combine').removeAttr('rowspan').removeData('rowspan');

        $table.find('tr').each(function (r, tr) {
          $(this).find('td.combine').each(function (d, td) {
            if (_this.settings.columns.length === 0 || _this.settings.columns.indexOf(d) !== -1) {
              var $td = $(td);
              var v_dato = $td.html();
              if(typeof arr[d] != 'undefined' && 'dato' in arr[d] && arr[d].dato == v_dato) {
                var rs = arr[d].elem.data('rowspan');
                if(rs == 'undefined' || isNaN(rs)) rs = 1;
                arr[d].elem.data('rowspan', parseInt(rs) + 1).addClass('rowspan-combine');
                $td.addClass('rowspan-remove').hide();
              } else {
                arr[d] = {dato: v_dato, elem: $td};
              };
            }
          });
        });

        $('.rowspan-combine').each(function (r, tr) {
          var $this = $(this);
          $this.attr('rowspan', $this.data('rowspan')).css({'vertical-align': _this.settings.vertical_align});
        });
      }
    } );

    $.fn[ rowspanizer ] = function( options ) {
      return this.each( function() {
        if ( !$.data( this, "plugin_" + rowspanizer ) ) {
          $.data( this, "plugin_" +
            rowspanizer, new f( this, options ) );
       }
      } );
    };

} )( jQuery, window, document );

$table.rowspanizer({vertical_align: 'middle'});


// Add the following lines if you have custom filters enabled
// No need to add if you don't have custom filters.
$table.on('after_ft_filtering', function() {
    $table.removeData('plugin_rowspanizer');
    $table.rowspanizer({vertical_align: 'middle'});
});

// Add the following lines if you have paginated data.
jQuery($table).on('after.ft.paging', function () {
    jQuery($table).removeData('plugin_rowspanizer');
    jQuery($table).rowspanizer({vertical_align: 'middle'});
})