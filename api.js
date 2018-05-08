$(document).ready(function () {
      {
                 $.ajax({

                     url: 'https://www.themealdb.com/api/json/v1/1/random.php',

                     type: 'GET',
                     dataType: 'json',
                     success: function (id) {


                        
                        var name= id.meals[0].strMeal;
                        var category = id.meals[0].strCategory;
                        var strInstructions = id.meals[0].strInstructions;
                        var strMealThumb=id.meals[0].strMealThumb;

                        
                         
                         var foodname = document.getElementById('foodname');
                         var foodcategory = document.getElementById('foodcategory');
                         var instructions = document.getElementById('instructions')
                        document.getElementById("image").src = strMealThumb;

                         foodname.appendChild(document.createTextNode(name));
                         foodcategory.appendChild(document.createTextNode(category));
                         instructions.appendChild(document.createTextNode(strInstructions));
                         

                                
                                  
                         },

                     error: function (xhr, textStatus, errorThrown) {
                         console.log('Error in Operation');
                     }
          
             });}
});

function button() {
      {
                 $.ajax({

                     url: 'https://www.themealdb.com/api/json/v1/1/random.php',

                     type: 'GET',
                     dataType: 'json',
                     success: function (id) {


                        
                        var name= id.meals[0].strMeal;
                        var category = id.meals[0].strCategory;
                        var strInstructions = id.meals[0].strInstructions;
                        var strMealThumb=id.meals[0].strMealThumb;

                        
                         
                         var foodname = document.getElementById('foodname');
                         

                         var foodcategory = document.getElementById('foodcategory');
                         var instructions = document.getElementById('instructions');
                         foodname.value = "";
                         foodcategory.value = "";
                         instructions.value = "";
                         document.getElementById("image").src = strMealThumb;

                         foodname.replaceChild(document.createTextNode(name), foodname.childNodes[0]);
                         foodcategory.replaceChild(document.createTextNode(category),foodcategory.childNodes[0]);
                      
                         instructions.replaceChild(document.createTextNode(strInstructions),instructions.childNodes[0]);
                 

                                
                                  
                         },

                     error: function (xhr, textStatus, errorThrown) {
                         console.log('Error in Operation');
                     }
          
             });}
};