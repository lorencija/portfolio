function sudeti(a, b){
    return a+b;
}

function atimti(a, b){
    return a-b;
}
function dauginti(a, b){
    return a*b;
}
function dalinti(a,b){
    return a/b;
}

$('[value=Dauginti]').click(function(){
    let a=$('#vardas').val();
    let b=$('#zinute').val();
    let ats =  dauginti(a,b);
    keistiAtsakyma(ats);
});

$('[value=Sudeti]').click(function(){
    let a=parseInt($('#vardas').val());
    let b=parseInt($('#zinute').val());
    let ats =  sudeti(a,b);
    keistiAtsakyma(ats);
});

$('[value=Atimti]').click(function(){
    let a=parseInt($('#vardas').val());
    let b=parseInt($('#zinute').val());
    let ats =  atimti(a,b);
    keistiAtsakyma(ats);
});

$('[value=Dalinti]').click(function(){
    let a=parseInt($('#vardas').val());
    let b=parseInt($('#zinute').val());
    let ats =  dalinti(a,b);
    keistiAtsakyma(ats);
});

function sukurtiJeiNera(rez) {
    if (rez.find('span').length === 0) {
        span = document.createElement("span");
        rez.append(span);
    }
}

function keistiAtsakyma(atsakymas){
    let rez=$('#rez');
    const span = sukurtiJeiNera(rez);
    rez.find('span').html(atsakymas);
}


//turinio keitimas

$('#darbas1').click(function(){
    $('#maincontent').load('darbas1.html');
    }
    );
$('#darbas2').click(function(){
        $('#maincontent').load('darbas2.html');
    }
);
$('#darbas3').click(function(){
        $('#maincontent').load('darbas3.html');
    }
);
$('#about').click(function(){
        $('#maincontent').load('pagrindinis.html');
    }
);
$('#maincontent').load('pagrindinis.html');
//kitas variantas
// $(document).ready(function(){
//     $('meniu_item').click(function(){
//         let fileName=$(this).attr('href');
//         let file=fileName.replace()
//     })
// });


//duomenu siuntimas is formos

let vardas1, pastas1,zinute1, json;

function paimtiDuomenis(){
    $('#siusti').click(function(){
        vardas1=$('#vardas').val();
        pastas1=$('#pastas').val();
        zinute1=$('#zinute').val();
    })
}

function suformuotiJson(){
 json={
      'name': vardas1,
     'email': pastas1,
     'message': zinute1
    };
 console.log();
}

paimtiDuomenis();
console.log(vardas1);

suformuotiJson();
console.log(json);
//
// function siustiJson(){
//     $.post('kur_siusti_duomenis.php',json,function(data, stautus){
//         $('#rez').html('IŠSIUSTA');
//     })
// }
//
// siustiJson();