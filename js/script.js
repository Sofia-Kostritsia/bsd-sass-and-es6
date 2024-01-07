var count = 0
const bloks = [ kenji=0, kunikida=0, ranpo=0, yosano=0, dazai=0, kyuoka=0, atsushi=0];

$(document).ready(function(){
    $("#kenji-click").on("click", function() {
        ++bloks[0]
        $('#kenji').css('display', 'block');
        if(bloks[0] == 2){
            $('#kenji').css('display', 'none');
            bloks[0]=0
        }
        });
        $("#kunikida-click").on("click", function() {
            ++bloks[1];
            $('#kunikida').css('display', 'block');
            if(bloks[1] == 2){
                $('#kunikida').css('display', 'none');
                bloks[1]=0
            }
            });
        $("#ranpo-click").on("click", function() {
            ++bloks[2];
            $('#ranpo').css('display', 'block');
            if(bloks[2] == 2){
                $('#ranpo').css('display', 'none');
                bloks[2]=0
            }
            });
        $("#yosano-click").on("click", function() {
            ++bloks[3];
            $('#yosano').css('display', 'block');   
            if(bloks[3] == 2){
                $('#yosano').css('display', 'none');
                bloks[3]=0
            }
            });
        $("#dazai-click").on("click", function() {
            ++bloks[4];
            $('#dazai').css('display', 'block');
            if(bloks[4] == 2){
                $('#dazai').css('display', 'none');
                bloks[4]=0
            }
            });
        $("#kyuoka-click").on("click", function() {
            ++bloks[5];
            $('#kyuoka').css('display', 'block');
            if(bloks[5] == 2){
                $('#kyuoka').css('display', 'none');
                bloks[5]=0
            }
            });
        $("#atsushi-click").on("click", function() {
            ++bloks[6];
            $('#atsushi').css('display', 'block');
            if(bloks[6] == 2){
                $('#atsushi').css('display', 'none');
                bloks[6]=0
            }
            });

        $(".click").on("click", function() {
            ++count;
            $('.menu').css('display', 'block');
            if(count == 2){
                $('.menu').css('display', 'none');
                count=0
            }
        });
});
