    
    $(document).ready(function () {
            for (var i=1; i<11;i++){
                 $.ajax({

                     url: 'https://jsonplaceholder.typicode.com/users/'+i,

                     type: 'GET',
                     dataType: 'json',
                     success: function (id) {

                         console.log(id.name);
                        var num= id.id;

                         var text = id.name +" , " +id.email+" , "+id.company.name;
                         var list = document.getElementById('namelist');
                         var entry = document.createElement('p');
                        
                         entry.appendChild(document.createTextNode(text));

                         

                         entry.onclick = function(todo){
                                var todoList = document.createElement('ul');
                                entry.appendChild(todoList);
                                console.log("clicl");
                                $.ajax({
                                  url :'https://jsonplaceholder.typicode.com/todos/',
                                  type :'GET',
                                  dataType: 'json',
                                  success :function (todos){


                                    for (var i = 0; i < todos.length; i++) {
                                          if(todos[i].userId == num){
                                            console.log(todos[i].title);
                                            var item = document.createElement('li');
                                            item.appendChild(document.createTextNode("TODO :"+todos[i].completed+" : "+todos[i].title));
                                            todoList.appendChild(item);

                                          }
                                        }
                                  
                                  },
                                  error: function (xhr, textStatus, errorThrown) {
                                  console.log('Error in Operation');
                                  }

                                });



                                                                console.log("clicl");
                                $.ajax({
                                  url :'https://jsonplaceholder.typicode.com/albums/',
                                  type :'GET',
                                  dataType: 'json',
                                  success :function (albums){

                                    var albumlist = document.createElement('ul');
                                    entry.appendChild(albumlist);
                                    for (var i = 0; i < albums.length; i++) {
                                          if(albums[i].userId == num){
                                            console.log(albums[i].title);
                                            var item = document.createElement('li');
                                            item.appendChild(document.createTextNode("ALBUM :"+albums[i].title));
                                            albumlist.appendChild(item);

                                          }
                                        }
                                  
                                  },
                                  error: function (xhr, textStatus, errorThrown) {
                                  console.log('Error in Operation');
                                  }

                                });


                              }
                                list.appendChild(entry);
                                  
                         },

                     error: function (xhr, textStatus, errorThrown) {
                         console.log('Error in Operation');
                     }
          
             });}
         });