// Math summation on columns
var myClasses= "column_one, column_two, column_three"; //give your columns key, you can use multiple by using comma
var totalText = "Total: "; // you can change the 'Total' text here



if(!$table.find('tfoot').length){
    jQuery("<tfoot></tfoot>").appendTo($table);
}

function getSum(classes)
{
    var sum = 0;
    var index = 0;
    $table.find("."+classes+"").each(function() {
        var val = $.trim( $(this).text() );
        if ( val ) {
            val = parseFloat( val.replace( /^$/, "" ) );
            sum += !isNaN( val ) ? val : 0;
        }
    });
    index +=  jQuery("."+classes+"").index()+1;
    return [sum, index];


}
getSum();


function renderTfoot(){
    var counts = $table.find(".footable-header th").length;
    var num = parseInt(counts);
    var container = $("<tr class='final_result' />");
    var notThis = [];
    jQuery('.footable-header th').each(function(){
        if(jQuery(this).css('display') == 'none'){
            var index = parseInt(jQuery(this).index(),10) + 1;
            notThis.push(index);
        }
    }) 
    for(var i = 1; i <= num; i++) {
        if ($.inArray(i, notThis) != -1)
        {
         i;
        }
        else{
        $('<td />', {
            id: "id" + i,
            name: "name" + i
        }).appendTo(container);}
    }

    $('tfoot').prepend(container);
}



function setSumAmount() {
    var substr = myClasses.split(',');
    $.each(substr , function(index, val) {
        var singleClass = "ninja_clmn_nm_"+val.trim();
        $table.find('tfoot .final_result td#id'+getSum(singleClass)[1]+'').html(totalText + getSum(singleClass)[0] );
        
        function responisveChanges(){
            if(jQuery('th.'+singleClass).css('display') == 'none'){
                $table.find('tfoot .final_result td:nth-child('+getSum(singleClass)[1]+')').hide();
            }
            else{
                $table.find('tfoot .final_result td:nth-child('+getSum(singleClass)[1]+')').show();
            }
        }
        responisveChanges();

        jQuery(window).on('resize', function(){
            responisveChanges();
        });
    });
}
setSumAmount(renderTfoot(), getSum());

$table.on('after.ft.filtering', function() {
    setSumAmount();
});
$table.on('after.ft.paging', function() {
    setSumAmount();
});