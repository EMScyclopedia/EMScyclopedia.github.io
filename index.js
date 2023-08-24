/*Chief Complaints: 1-weakness 2-ams 3-Abdominal Pain 4-Change in Responsiveness 5-Bleeding 6-Difficulty Breathing
* 7-choking 8-diarrhea 9-dizziness 10-wound 11-headache 12-malaise 13-nausea 14-pain 15-palpitations 16-rash
* 17-swelling 18-lesion/mass 19-fever 20-drainage/discharge 21-device/equipment problem 22-seizure-like symptoms
* 23-chest pain
*/

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    if (evt.target.value*10+parseInt(evt.key) > 999) return false;
    return true;
}
function refresh(){
    $("#searchresults").empty();
    var results = [];
    var cc = Number($('input[name="cc"]:checked').val());
    var pAge = $("input[name=pAge]").val();
    var sysbp = $("#sysbp").val();
    var dysbp = $("#dysbp").val();
    var hr = $("#hr").val();
    var SpO2 = $("#SpO2").val();
    $.getJSON('./treatment.json', function(data) {
        $.each(data, function(i, f) {
            if (f.indc.cc.includes(cc)) {
                results.push(f);
            }
        });
        $.each(results, function(i, f) {
            var resultrow = '<div class="row result">\
            <div class="col-3"><h1>'+f.name+'<p style="font-size: 15px;">'+f.brandnames+'</p></h1></div>\
            <div class="col-4">'+f.desc+'</div>\
            <div class="col-4">'+f.indc.desc+'</div></div>';
            $("#searchresults").append(resultrow);
        });
    });
}
function main(){
    $(".form-control").on("input", function(evt){
        refresh();
    });
}
window.onload = main;
