function CreateAccountViewModel() {
    var self = this;
   
    self.firstName = ko.observable("").extend({
       required: true,
       minLength: 2,
    });
    self.lastName = ko.observable("").extend({
        required: true,
        minLength: 2,
     });
    self.emailAddress = ko.observable("").extend({
       required: true,
       email: true
    });
    this.course = ko.observable([]).extend({required:true}),
    this.gender = ko.observable("").extend({required:true}),
    self.hasBeenSubmitted = ko.observable(false);
    self.handleSubmit = function() {   
       var errors = ko.validation.group(self);
       if (errors().length > 0) {
          errors.showAllMessages();
          return;
       }
       self.hasBeenSubmitted(true);
       console.log('submit the form!')
       const value1= {
            firstName: self.firstName(),
           lastName: this.lastName(),
            emailAddress: self.emailAddress(),
            gender: self.gender(),
            courses:self.course()     
         }
         const myJSON = JSON.stringify(value1);
         console.log(myJSON)
    }
 };
 const knockoutApp = document.querySelector("#knockout-app");
 ko.applyBindings(new CreateAccountViewModel(), knockoutApp);
