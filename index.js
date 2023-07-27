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
    var results = [];
    var cc = $("input[name='cc']").val();
    var pAge = $("input[name=pAge]").val();
    var sysbp = $("#sysbp").val();
    var dysbp = $("#dysbp").val();
    var hr = $("#hr").val();
    var SpO2 = $("#SpO2").val();
    $.getJSON('./treatment.json', function(data) {
        $.each(data.treatment, function(i, f) {
            if (f.indc.cc == cc) {
                results.push(f);
            }
        });
        console.log(results);
    });
}
function main(){
    $(".form-control").on("input", function(evt){
        refresh();
    });
}
window.onload = main;