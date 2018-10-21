"use strict";
$(document).ready(function () {
    $(".bootstrap_validator .btn").removeClass('disabled');
    $('.date_picker1').datepicker({
        todayHighlight: true,
        format: 'yyyy-mm-dd',
        autoclose: true
    }).on("changeDate", function() {
        $('#basic_validator').bootstrapValidator('revalidateField', 'date_inline');
    });
    $('#basic_validator').bootstrapValidator({
        fields: {
            Name1: {
                validators: {
                    notEmpty: {
                        message: 'Enter your name'
                    }
                }
            },
            Email1: {
                validators: {
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address.'
                    },
                    notEmpty: {
                        message: 'The email address is required'
                    }
                }
            },
            Password1: {
                validators: {
                    notEmpty: {
                        message: 'Please provide a password'
                    }
                }
            },
            Confirmpassword1: {
                validators: {
                    notEmpty: {
                        message: 'Confirm the password.'
                    },
                    identical: {
                        field: 'Password1',
                        message: 'Please enter the same password as above'
                    }
                }
            },
            activate1: {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the terms and conditions'
                    }
                }
            }
        }
    });
    $('#horizontal_validator').bootstrapValidator({
        fields: {
            Name2: {
                validators: {
                    notEmpty: {
                        message: 'Enter your name'
                    }
                }
            },
            Email2: {
                validators: {
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address.'
                    },
                    notEmpty: {
                        message: 'The email address is required'
                    }
                }
            },
            Password2: {
                validators: {
                    notEmpty: {
                        message: 'Please provide a password'
                    }
                }
            },
            confirmPassword2: {
                validators: {
                    notEmpty: {
                        message: 'Confirm the password.'
                    },
                    identical: {
                        field: 'Password2',
                        message: 'Please enter the same password as above'
                    }
                }
            },
            message2: {
                validators: {
                    notEmpty: {
                        message: 'The field is required and cannot be empty.'
                    }
                }
            },
            skills: {
                validators: {
                    notEmpty: {
                        message: 'The field is required and cannot be empty.'
                    }
                }
            },
            activate2: {
                validators: {
                    notEmpty: {
                        message: 'You have to accept the terms and conditions'
                    }
                }
            }
        }
    });

    var start = new Date();
    var end = new Date(new Date().setYear(start.getFullYear()+1));

    $('#startDate').datepicker({
        startDate : start,
        endDate   : end,
        autoclose: true
    }).on('changeDate', function(){
        $('#endDate').datepicker('setStartDate', new Date($(this).val()));
        $('#advanced_forms').bootstrapValidator('revalidateField', 'startDate');
    });

    $('#endDate').datepicker({
        startDate : start,
        endDate   : end,
        autoclose: true
    }).on('changeDate', function(){
        $('#startDate').datepicker('setEndDate', new Date($(this).val()));
        $('#advanced_forms').bootstrapValidator('revalidateField', 'endDate');
    });

    $('#advanced_forms').bootstrapValidator({
        fields:{
            website: {
                validators: {
                    notEmpty: {
                        message: 'The website address is required'
                    },
                    uri: {
                        message: 'The website address is not valid'
                    }
                }
            },
            telephone: {
                validators: {
                    notEmpty: {
                        message: 'Enter digits only'
                    },
                    regexp: {
                        regexp: /^\d{10}$/,
                        message: 'Enter a 10 digits number'
                    }
                }
            },
            startDate: {
                validators: {
                    notEmpty: {
                        message: 'The start date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        max: 'endDate',
                        message: 'The start date is not a valid'
                    }
                }
            },
            endDate: {
                validators: {
                    notEmpty: {
                        message: 'The end date is required'
                    },
                    date: {
                        format: 'MM/DD/YYYY',
                        min: 'startDate',
                        message: 'The end date is not a valid'
                    }
                }
            },
            digits: {
                validators: {
                    notEmpty: {
                        message: 'This field is required.'
                    },
                    regexp: {
                        regexp: /^\d+$/,
                        message: 'Contains digits only.'
                    }
                }
            }

        }
    });

    $('#advanced_forms2').bootstrapValidator({
        fields:{
            range: {
                validators: {
                    notEmpty: {
                        message: 'Enter digits between 5 to 16.'
                    },
                    between: {
                        min: 5,
                        max: 16,
                        message: 'Please enter a value between 5 and 16.'
                    },
                    regexp: {
                        regexp: /^\d+$/,
                        message: 'The value is not an integer'
                    }
                }
            },
            Minsize3: {
                validators: {
                    notEmpty: {
                        message: 'Enter min 3 characters.'
                    },
                    regexp: {
                        regexp: /^\S.{2,}$/,
                        message: 'Please enter at least 3 characters and should not start with space.'
                    }
                }
            },
            Maxsize3: {
                validators: {
                    notEmpty: {
                        message: 'Enter max 6 characters'
                    },
                    regexp: {
                        regexp: /^\S.{0,5}$/,
                        message: 'Should not be more than 6 characters and should not start with space.'
                    }
                }
            },

            MinNum: {
                validators: {
                    notEmpty: {
                        message: 'Enter the minimum number 3.'
                    },
                    greaterThan: {
                        value: 3,
                        message: 'Please enter a value greater than or equal to 3.'
                    },
                    regexp: {
                        regexp: /^\d+$/,
                        message: 'The value is not an integer'
                    }
                }
            },
            maxNum: {
                validators: {
                    notEmpty: {
                        message: 'Enter maximum number 16.'
                    },
                    lessThan: {
                        value: 16,
                        message: 'Please enter a value less than or equal to 16.'
                    },
                    regexp: {
                        regexp: /^\d+$/,
                        message: 'The value is not an integer'
                    }

                }
            }
        }
    })
})