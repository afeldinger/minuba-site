/** @module objects/validation */
/* globals $ */
'use strict';


$(function() {
	$('form').validate({
		highlight: function(element, errorClass, validClass) {
            if(element.type === 'radio') {
                $(element.form).find('[name="' + element.name + '"]').each(function(){
                    var $this = $(this);
                    $this.addClass(errorClass).removeClass(validClass);
                    $this.closest('.field').addClass('field--' + errorClass);
                });
            } else {
				$(element).addClass(errorClass).removeClass(validClass);
				$(element).closest('.field').addClass('field--' + errorClass);
            }

		},
		unhighlight: function(element, errorClass, validClass) {
            if(element.type === 'radio') {
                $(element.form).find('[name="' + element.name + '"]').each(function(){
                    var $this = $(this);
                    $this.removeClass(errorClass).addClass(validClass);
                    $this.closest('.field').removeClass('field--' + errorClass);
                });
            } else {
				$(element).removeClass(errorClass).addClass(validClass);
				$(element).closest('.field').removeClass('field--' + errorClass);
			}
		},
		errorPlacement: function(error, element) {
			//return true; // Disable error messages entirely
			if (element.is('select')) {
				error.insertAfter(element.closest('.field__select__wrapper'));
			} else {
				error.insertAfter(element);
			}
		},
		/*
		submitHandler: function() {

		}
		*/
	});

	// required fields
	var fields = new Array(
		':input[id*="-catheterdate-"]',
		':input[id$="-firstname"]',
		':input[id$="-first-name"]',
		':input[id$="-lastname"]',
		':input[id$="-last-name"]',
		':input[id$="-email"]',
		':input[id*="-gender"]',
		':input[id$="-message"]',
		':input[id$="-phone"]',
		':input[id$="-address1"]',
		':input[id$="-address2"]',
		':input[id$="-state"]',
		':input[id$="-city"]',
		':input[id$="-zip"]',
		':input[id$="-accept-legal"]',
		':input[id$="-organization"]',
		':input[id$="-title"]',
		':input[id$="-terms"]'
	).join(', ');

	$(fields, this).each(function() {
		$(this).rules('add','required');
	});

	// has care receiver field - remove rule for gender
	if ($('#profile-receiver-firstname', this).length) {
		$('input[name="gender"]', this).each(function() {
			$(this).rules('remove');
		});
	}
});


