/**
 * Created by easter on 17-7-25.
 */
inputToLocalStoreage()
{
    var student = [];

    var name = document.getElementsByName('name')[0].value;
    var sno = document.getElementsByName('sno')[0].value;
    var klass = document.getElementsByName('klass')[0].value;
    var chinese = document.getElementsByName('chinese')[0].value;
    var math = document.getElementsByName('math')[0].value;
    var english = document.getElementsByName('english')[0].value;

    student.push(name,sno,klass,chinese,math,english);
    var str = JSON.stringify(student);
    localStorage.obj = str;
    localStorage.setItem('obj',str);
}

inputToLocalStoreage = function () {

}


function inputToLocalStoreage(){

}


let obj={
    fun1:function () {

    }
};



class Pe {
    cons(){

    }

    fun(){

    }
}