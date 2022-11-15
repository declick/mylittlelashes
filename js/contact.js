"use strict";
jQuery(document).ready(function($) {
    $("#submit_btn").on("click", function() {

        let proceed = true;
        //validation simple chez le client
        //boucle à travers chaque champ et nous changeons simplement la couleur de la bordure en rouge pour les champs invalides	
        $("#contact_form input[required], #contact_form textarea[required]").each(function() {
            $(this).css('background-color', '');
            if (!$.trim($(this).val())) { //si ce champ est vide 
                $(this).css('background-color', 'rgb(255 222 222 / 21%)'); //change border color en rgb(255 222 222 / 21%)   
                proceed = false; //définir l'indicateur Ne pas continuer
					document.getElementById('error-message').innerHTML = '<div class="alert alert-danger mb-4">Veuillez remplir tous les champs obligatoires</div>';
            }
            //check invalid email
            let email_reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if ($(this).attr("type") === "email" && !email_reg.test($.trim($(this).val()))) {
                $(this).css('background-color', 'rgb(255 222 222 / 21%)'); //change border color en rgb(255 222 222 / 21%)   
                proceed = false; //définir l'indicateur Ne pas continuer
				document.getElementById('error-message').innerHTML = '<div class="alert alert-danger mb-4">Veuillez entrer un email valide</div>';
			
            }
        });

        if (proceed) // tout a l'air bien ! procéder...
        {
            // obtenir les données des valeurs des champs d'entrée à envoyer au serveur
            let post_data = {
                'user_name': $('input[name=name]').val(),
                'user_email': $('input[name=email]').val(),
				'phone': $('input[name=phone]').val(),
                'subject': $('input[name=subject]').val(),
                'msg': $('textarea[name=message]').val()
            };

            //Ajax publier des données sur le serveur
            $.post('php/sendmail.php', post_data, function(response) {
                if (response.type === 'error') { //charger les données json du serveur et afficher le message   
                    let output = '<br><br><div class="alert alert-danger">Impossible d envoyer le courrier ! Veuillez vérifier votre configuration de messagerie.</div>';
                } else {
                    var output = '<br><br><div class="alert alert-success" role="alert">Merci pour votre message. Nous vous contacterons bientôt.</div>';
                    //réinitialiser les valeurs dans tous les champs de saisie et masquer l'erreur
                    $("#contact_form input, #contact_form textarea").val('');
					 $("#error-message").hide();

                }
				$('html, body').animate({scrollTop: $("#contact_form").offset().top-50}, 2000);
			
                $("#contact_results").hide().html(output).slideDown();
            }, 'json');
        }
    });

    //réinitialiser les couleurs de bordure précédemment définies et masquer tous les messages sur .keyup()
    $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function() {
        $(this).css('background-color', '');
        $("#result").slideUp();
    });
});