// General Variables
let query = window.location.search;

window.onload = function() {
    // Srvice type variables
    let type = document.getElementById('type');
    let service = document.getElementById('service');
    let plan = document.getElementById('plan');

    // Form label variables
    let nameLabel = document.getElementById('nameLabel');
    let emailLabel = document.getElementById('emailLabel');
    let dateLabel = document.getElementById('dateLabel');
    let placeLabel = document.getElementById('placeLabel');
    let extraLabel = document.getElementById('extraLabel');

    // Form input variables
    let nameInput = document.getElementById('nameInput');
    let emailInput = document.getElementById('emailInput');
    let dateInput = document.getElementById('dateInput');
    let placeInput = document.getElementById('placeInput');
    let extraInput = document.getElementById('extraInput');

    // Defaults
    nameInput.value = '';
    emailInput.value = '';
    dateInput.value = '';
    placeInput.value = '';
    extraInput.value = '';

    // PERSONAL PLANS
    if (query.includes('type=personal')) {
        type.value = 'Personal';

        nameLabel.innerHTML = '* Your Name';
        emailLabel.innerHTML = '* Your Email';
        dateLabel.innerHTML = '* When would you like to meet?';
        placeLabel.innerHTML = '* Do you have a preferred location?';
        extraLabel.innerHTML = 'Details & Comments (optional)';

        // Complete Photo Production
        if (query.includes('service=photography')) {
            service.value = 'Photography';

            // Explorer Plan
            if (query.includes('plan=explorer')) {
                plan.value = 'Explorer';
            }

            // Professional Plan
            if (query.includes('plan=professional')) {
                plan.value = 'Professional';
            }

            // Enterprise Plan
            if (query.includes('plan=enterprise')) {
                plan.value = 'Enterprise';
            }
        }

        // Complete Video Production
        if (query.includes('service=videography')) {
            service.value = 'Videography';

            // Explorer Plan
            if (query.includes('plan=explorer')) {
                plan.value = 'Explorer';
            }

            // Professional Plan
            if (query.includes('plan=professional')) {
                plan.value = 'Professional';
            }

            // Enterprise Plan
            if (query.includes('plan=enterprise')) {
                plan.value = 'Enterprise';
            }
        }
    }
    
    // COMPANY PLANS
    else if (query.includes('type=company')) {
        type.value = 'Company';

        nameLabel.innerHTML = '* Company Name';
        emailLabel.innerHTML = '* Company Email';
        dateLabel.innerHTML = '* When is the event taking place?';
        placeLabel.innerHTML = '* What is the event location?';
        extraLabel.innerHTML = 'Details & Comments (optional)';

        // Complete Photo Production
        if (query.includes('service=photography')) {
            service.value = 'Photography';

            // Explorer Plan
            if (query.includes('plan=explorer')) {
                plan.value = 'Explorer';
            }

            // Professional Plan
            if (query.includes('plan=professional')) {
                plan.value = 'Professional';
            }

            // Enterprise Plan
            if (query.includes('plan=enterprise')) {
                plan.value = 'Enterprise';
            }
        }

        // Complete Video Production
        if (query.includes('service=videography')) {
            service.value = 'Videography';

            // Explorer Plan
            if (query.includes('plan=explorer')) {
                plan.value = 'Explorer';
            }

            // Professional Plan
            if (query.includes('plan=professional')) {
                plan.value = 'Professional';
            }

            // Enterprise Plan
            if (query.includes('plan=enterprise')) {
                plan.value = 'Enterprise';
            }
        }
    }
    else {
        // Errors on form page
        nameLabel.innerHTML = 'Err';
        emailLabel.innerHTML = 'Err';
        dateLabel.innerHTML = 'Err';
        placeLabel.innerHTML = 'Err';
        extraLabel.innerHTML = 'Err';

        // For the confirmation page
        confirmation.style.visibility = 'hidden';
        setTimeout (function () {
            confirmation.style.visibility = 'visible';
        }, 1000)
    }
}

function placeOrder() {
    // Function Confirmation
    console.log('placeOrder initiated.')
    
    // Order Validation
    let inputs = [nameInput.value, emailInput.value, dateInput.value, placeInput.value];
    console.log(inputs);
    
    if (inputs.includes('')) {
        console.log('Empty inputs detected!')

        let nameInputCheck = nameInput.value;
        let emailInputCheck = emailInput.value;
        let dateInputCheck = dateInput.value;
        let placeInputCheck = placeInput.value;

        // PERSONAL PLANS
        if (query.includes('type=personal')) {
            console.log('Empty inputs detected for the Personal Plan.');
            // Checking Name
            if (nameInputCheck.length === 0) {
                console.log('Name input detected as empty.');
                nameLabel.style.color = 'red';
            } else if (nameInputCheck.length >= 0) {
                console.log('Name input is filled.');
                nameLabel.innerHTML = '* Your Name';
                nameLabel.style.color = 'black';
            }

            // Checking Email
            if (emailInputCheck.length === 0) {
                console.log('Email input detected as empty.');
                emailLabel.innerHTML = '* Your Email';
                emailLabel.style.color = 'red';
            } else if (emailInputCheck.length >= 0) {
                console.log('Email input is filled.');
                emailLabel.innerHTML = '* Your Email';
                emailLabel.style.color = 'black';
            } 

            // Checking Date
            if (dateInputCheck.length === 0) {
                console.log('Date input detected as empty.');
                dateLabel.style.color = 'red';
            } else if (dateInputCheck.length >= 0) {
                console.log('Date input is filled.');
                dateLabel.innerHTML = '* When would you like to meet?';
                dateLabel.style.color = 'black';
            }

            // Checking Location
            if (placeInputCheck.length === 0) {
                console.log('Location input detected as empty.');
                placeLabel.style.color = 'red';
            } else if (placeInputCheck.length >= 0) {
                console.log('Location input is filled.');
                placeLabel.innerHTML = '* Do you have a preferred location?';
                placeLabel.style.color = 'black';
            }
        }
        
        // COMPANY PLANS
        else if (query.includes('type=company')) {
            console.log('Empty inputs detected for the Company Plan.');
            // Checking Name
            if (nameInputCheck.length === 0) {
                console.log('Company Name input detected as empty.');
                nameLabel.style.color = 'red';
            } else if (nameInputCheck.length >= 0) {
                console.log('Company Name input is filled.');
                nameLabel.innerHTML = '* Company Name';
                nameLabel.style.color = 'black';
            }

            // Checking Email
            if (emailInputCheck.length === 0) {
                console.log('Company Email input detected as empty.');
                emailLabel.innerHTML = '* Company Email';
                emailLabel.style.color = 'red';
            } else if (emailInputCheck.length >= 0) {
                console.log('Company Email input is filled.');
                emailLabel.innerHTML = '* Company Email';
                emailLabel.style.color = 'black';
            } 

            // Checking Date
            if (dateInputCheck.length === 0) {
                console.log('Company Date input detected as empty.');
                dateLabel.style.color = 'red';
            } else if (dateInputCheck.length >= 0) {
                console.log('Company Date input is filled.');
                dateLabel.innerHTML = '* When is the event taking place?';
                dateLabel.style.color = 'black';
            }

            // Checking Location
            if (placeInputCheck.length === 0) {
                console.log('Company Location input detected as empty.');
                placeLabel.style.color = 'red';
            } else if (placeInputCheck.length >= 0) {
                console.log('Company Location input is filled.');
                placeLabel.innerHTML = '* What is the event location?';
                placeLabel.style.color = 'black';
            }
        }
    }
    else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        // PERSONAL PLANS
        if (query.includes('type=personal')) {
            // Confirmation for the previews fields
            console.log('Name input is filled.');
            nameLabel.innerHTML = '* Your Name';
            nameLabel.style.color = 'black';

            console.log('Date input is filled.');
            dateLabel.innerHTML = '* When would you like to meet?';
            dateLabel.style.color = 'black';

            console.log('Location input is filled.');
            placeLabel.innerHTML = '* Do you have a preferred location?';
            placeLabel.style.color = 'black';

            // Second email validation
            console.log('Email field is filled but ivalid!')
            emailLabel.innerHTML = '* Your Email (invalid)';
            emailLabel.style.color = 'red';
        }

        // COMPANY PLANS
        else if (query.includes('type=company')) {
            // Confirmation for the previews fields
            console.log('Company Name input is filled.');
            nameLabel.innerHTML = '* Company Name';
            nameLabel.style.color = 'black';

            console.log('Company Date input is filled.');
            dateLabel.innerHTML = '* When is the event taking place?';
            dateLabel.style.color = 'black';

            console.log('Company Location input is filled.');
            placeLabel.innerHTML = '* What is the event location?';
            placeLabel.style.color = 'black';

            // Second email validation
            console.log('Company Email field is filled but ivalid!')
            emailLabel.innerHTML = '* Company Email (invalid)';
            emailLabel.style.color = 'red';
        }
    }
    else {
        // Allow the button to send data to the database
        let submitBtn = document.getElementById("submitBtn");
        submitBtn.type = "submit";

        // Confirmation for email validity
        if (query.includes('type=personal')) {
            // Confirmation for the previews fields
            console.log('Name input is filled.');
            nameLabel.innerHTML = '* Your Name';
            nameLabel.style.color = 'black';

            console.log('Date input is filled.');
            dateLabel.innerHTML = '* When would you like to meet?';
            dateLabel.style.color = 'black';

            console.log('Location input is filled.');
            placeLabel.innerHTML = '* Do you have a preferred location?';
            placeLabel.style.color = 'black';
            
            // Third email validation
            console.log('Email input contains all the characters.');
            emailLabel.innerHTML = '* Your Email';
            emailLabel.style.color = 'black';
        }
        else if (query.includes('type=company')) {
            // Confirmation for the previews fields
            console.log('Company Name input is filled.');
            nameLabel.innerHTML = '* Company Name';
            nameLabel.style.color = 'black';

            console.log('Company Date input is filled.');
            dateLabel.innerHTML = '* When is the event taking place?';
            dateLabel.style.color = 'black';

            console.log('Company Location input is filled.');
            placeLabel.innerHTML = '* What is the event location?';
            placeLabel.style.color = 'black';

            // Third email validation
            console.log('Email input contains all the characters.');
            emailLabel.innerHTML = '* Company Email';
            emailLabel.style.color = 'black';
        }

        // Order Registration UI
        let timing = 300;
        setTimeout (function orderRegistrationUI() {
            submitBtn.innerHTML = 'Registering Order';
            submitBtn.disabled = true;
            submitBtn.style.cursor = 'wait';
            submitBtn.style.textAlign = 'left';
            submitBtn.style.paddingLeft = '25px';
            setTimeout (function () {
                submitBtn.innerHTML = 'Registering Order.';
                setTimeout (function () {
                    submitBtn.innerHTML = 'Registering Order..';
                    setTimeout (function () {
                        submitBtn.innerHTML = 'Registering Order...';
                        setTimeout (function () {
                            orderRegistrationUI();
                        }, timing)
                    }, timing)
                }, timing)
            }, timing)
        }, timing)

        // Order Confirmaton
        setTimeout (function () {
            console.log('orderConfirmation')
            document.getElementById("newOrder").submit();
        }, 3000)
    }
}