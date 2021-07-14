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
    // var x = {

    //     courses: ko.observable(false),

    //     a: ko.observableArray(["JAVA", "PYTHON","C++"])

    // };

    // x.a.push("msg");
    
    self.hasBeenSubmitted = ko.observable(false);
    
    
   
    
    self.handleSubmit = function() {
       
       //Check for errors      
       var errors = ko.validation.group(self);
       if (errors().length > 0) {
          errors.showAllMessages();
          return;
       }
 
       self.hasBeenSubmitted(true);
       
       //Form is valid!
       console.log('submit the form!')
       //Api call would go here...
       //
       //
      
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