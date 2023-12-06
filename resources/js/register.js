import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery-steps/build/jquery.steps.min.js';
import 'jquery-validation/dist/jquery.validate.js';

var form = $("#example-form");

form.steps({
    headerTag: "h6",
    bodyTag: "section",
    transitionEffect: "fade",
    titleTemplate: '<span class="step">#index#</span> #title#'
});