jQuery(document).ready(function($){

    // * Update subject on todolists page
    let izabraniRestoran = {
        _id: 'test',
        ime: 'def',
        lokacija: 'def',
        opis: 'def'
    }

    let restoranId = $("#restoranId");
    let restoranIme = $("#restoranIme");
    let restoranLokacija = $("#restoranLokacija");
    let restoranOpis = $("#restoranOpis");

    $( ".dugme-za-edit" ).on( "click", function() {
        console.log('IZMENI');
        izabraniRestoran._id = $(this).data('restoran-id');
        izabraniRestoran.ime = $(this).data('ime');
        izabraniRestoran.lokacija = $(this).data('lokacija');
        izabraniRestoran.opis = $(this).data('opis');

        restoranId.attr('value', `${izabraniRestoran._id}`)
        restoranIme.attr('value', `${izabraniRestoran.ime}`)
        restoranLokacija.attr('value', `${izabraniRestoran.lokacija}`)
        restoranOpis.attr('value', `${izabraniRestoran.opis}`)
    });

})