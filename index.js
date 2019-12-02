$(document).ready(function () {
    let users = [
        {
            name: 'ASDFGH',
            address: 'BarProp',
            password: '123456789',
            code: 'C123',
            email: 'axempal@thisinh.com',
            userName: 'ÁDFGH'
        }
    ]

    function drawRow(rowData, index) {
        
        var row = $('<tr> <th scope="row"><input type="radio" name="choose" data-index="' + index + '" id=""></th>/>')
        $("#bodyTable").append(row); 
        row.append($("<td>" + rowData.code + "</td>"));
        row.append($("<td>" + rowData.name + "</td>"));
        row.append($("<td>" + rowData.address + "</td>"));
        row.append($("<td>" + rowData.email + "</td>"));
        row.append($("<td>" + rowData.userName + "</td>"));
    }
    function drawTable(datas) {
        $("#bodyTable").html("") ;
        datas.forEach((data, index) => {
            drawRow(data, index);
        })
    }
    $("#formUser").validate({
        rules: {
            name: {           
                required: true,
                minlength: 5
            },    
            address: {           
                required: true,
                
            },
            pass: {
                required: true
            },
            code: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            userName: {
                required: true
            }
        },
        messages: {
            name: {           
                required: "Không để trống mục này",
                minlength: "Nhập tối thiểu 5 ký tự"
            },    
            address: {           
                required: "Không để trống mục này",
                
            },
            pass: {
                required: "Không để trống mục này",
            },
            code: {
                required: "Không để trống mục này",
                minlength: "Nhập tối thiểu 3 ký tự"
            },
            email: {
                required: "Không để trống mục này",
                email: "Điền đúng định dạng email"
            },
            userName: {
                required: "Không để trống mục này"
            }
        }
    });
    $("#addButton").click( function() {
        let formOK=$("#formUser").valid();
        if (formOK){
            let newUser={};
            newUser.name=$("#name").val();
            newUser.address=$("#address").val();
            newUser.password=$("#pass").val();
            newUser.code=$("#code").val();
            newUser.email=$("#email").val();
            newUser.userName=$("#userName").val();
            users.push(newUser);
            console.log(users);
            drawTable(users);
            $('#formUser').trigger("reset");
            $("#name").focus();
        } 
    })
    $("#deleteButton").click( function() {
      let row=$('[type="radio"]:checked')[0];
      let index=parseInt(row.dataset.index);
      if(confirm("Bạn thật sự muốn xóa User:" +users[index].userName)){
        users.splice(index,1);
        drawTable(users);
      }

    })
    $("#editButton").click( function() {
        $("#addButton").attr("disabled", true);
        $("#saveButton").attr("disabled", false);
        let row=$('[type="radio"]:checked')[0];
        let index=parseInt(row.dataset.index);
        let editUser=users[index];
        $("#name").val(editUser.name);
        $("#address").val(editUser.address);
        $("#pass").val(editUser.password);
        $("#code").val(editUser.code);
        $("#email").val(editUser.email);
        $("#userName").val(editUser.userName);
        $("#formUser")[0].dataset.index=index;
      })
    $("#saveButton").click( function() {
        let formOK=$("#formUser").valid();
        if (formOK){
            let index=$("#formUser")[0].dataset.index;
            let newUser={};
            newUser.name=$("#name").val();
            newUser.address=$("#address").val();
            newUser.password=$("#pass").val();
            newUser.code=$("#code").val();
            newUser.email=$("#email").val();
            newUser.userName=$("#userName").val();
            users[index]=newUser;
            console.log(users);
            drawTable(users);
            $('#formUser').trigger("reset");
            $("#name").focus();
            $("#addButton").attr("disabled", false);
            $("#saveButton").attr("disabled", true);
        }
        })
    $("#exitButton").click( function() {
            location.reload();      
          })
    drawTable(users);


    

});