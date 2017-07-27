/**
 * Created by easter on 17-7-25.
 */
'use strict'

    // 先判断再初始化初始化---保留旧值，初始化一次只能存一条值
    function init()
    {
        var allStudent;

        if(localStorage.length == 0)
        {
            allStudent = [];
        }else {
            allStudent = JSON.parse(localStorage.allStudent);
        }

        return allStudent;

    }

    /* 学生信息添加到本地存储 */
    function addStudentTolocalStorage()
    {
        var allStudent = init();


        // event.preventDefault();  // 拦截submit表单提交动作，使提交内容留在本地console中

        var student = {
            sno: document.getElementsByName("sno")[0].value,
            name: document.getElementsByName("name")[0].value,
            nation: document.getElementsByName("nation")[0].value,
            chinese: document.getElementsByName("chinese")[0].value,
            math: document.getElementsByName("math")[0].value,
            english: document.getElementsByName("english")[0].value,
            prom: document.getElementsByName("prom")[0].value
        };


        allStudent.push(student);
         // console.log(allStudent);
        localStorage.allStudent = JSON.stringify(allStudent);

        // localStorage.clear();
    }


    /* 查找学生信息 */

// function searchStudent()
// {
//     var inputSno = document.getElementById("input_studentIds").value;
//     //alert(inputSno);
//     var allStudent = JSON.parse(localStorage.getItem("allStudent"));
//     event.preventDefault();
//     console.log(allStudent);
//     for(let i=0;i<input_json_data.length;i++)
//     {
//         if(inputSno == input_json_data('sno')[i].id)
//         {
//             return `<tr>
//                             <td>${input_json_data.name}</td>
//                             <td>${input_json_data.math}</td>
//                             <td>${input_json_data.chinese}</td>
//                             <td>${input_json_data.english}</td>
//                             <td>${input_json_data.prom}</td>
//                             <td>${input_json_data.total}</td>
//                             <td>${input_json_data.average}</td>
//                         </tr>`
//         }
//
//     }
//
// }

