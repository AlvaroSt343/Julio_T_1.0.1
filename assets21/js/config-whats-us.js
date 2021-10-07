
$(function () {
    $('#WAButton').floatingWhatsApp({
        phone: '+525563269449', //WhatsApp Business phone number
        headerTitle: 'Chat with us on Whats App!', //Popup Title
        popupMessage: 'Hi, how I can help you?', //Popup Message
        showPopup: true, //Enables popup display
        buttonImage: '<img src="../assets21/img/whatsapp.svg" />', //Button Image
        //headerColor: 'crimson', //Custom header color
        //backgroundColor: 'crimson', //Custom background button color
        position: "right" //Position: left | right
    });
});