$(document).ready(function(){
    $("button").click(function(){
        console.log("done")
        $.ajax({
            url: "https://cloudapi.skavacommerce.com/orchestrationservices/storefront/customers",
            type: 'POST',
            data: JSON.stringify({
                "firstName":"karunya",
                "lastName":"shiva",
                "email":"karunya@skava.com",
                "phoneNumber":"123451890",
                "userName":"karun",
                "isGuestCustomer":false,
                "gender":"female",
                "dateOfBirth":"24-04-1996",
                "photo":"string_url",
                "customProperties":{
                    "additionalProp1":"string",
                    "additionalProp2":"string",
                    "additionalProp3":"string"
                    },
                "credentials":{
                    "password":"Skava@123",
                    "securityQuestions":[
                        {
                        "answer":"Company name is skava",
                        "question":"What is your company name ?"
                        }
                     ]
                    }
                }),
           headers: {
                  'accept': 'application/json',
                  'x-store-id':'601',
                  'x-version': '8.4.0',
                  'Content-Type': 'application/json',
                  'x-skava':'hKS7YuHG2W6PtMA1c9QR'
            },
            dataType: 'json',
            success: function (data) {
                console.info(data);
            }
          })
    })
 })

 
 