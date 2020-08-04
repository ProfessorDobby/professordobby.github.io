function salaryCalc(){
    var basic_sal = parseInt(document.getElementById("e_Bsal").value);
    var ded = document.getElementById("e_type").value;
    
    var  da, hra, cca, t_SALARY, net_sal, grand_sal, deduction;

    if(basic_sal > 10000 &&  basic_sal <= 15000){
        da = .85 * basic_sal;
        cca = .01 * basic_sal;
        hra = .10 * basic_sal;
        net_sal = parseInt(basic_sal) + parseInt(da) + parseInt(hra) + parseInt(cca);
        if(ded === "permanent"){
            grand_sal = net_sal - (.93*net_sal);
        }
        else if(ded === "non_permanent"){
            grand_sal = net_sal;
        }
        else {
            alert("Please Select the Employee Type")
        }

        document.getElementById("output").innerHTML = 
        "Your Basic Salary is :" + basic_sal +" Rs"+
        "<br><br>Your DA is :" + da +" Rs"+
        "<br><br>Your CCA :" + cca +" Rs"+
        "<br><br>Your HRA :" + hra +" Rs"+
        "<br><br>Your NET Salary is :"+ net_sal +" Rs"+
        "<br><br>Your Total Salary is: <b>"+ grand_sal+ " Rs"
    }

    else if(basic_sal > 15000 && basic_sal <= 20000){
        da = 1.10 * basic_sal;
        cca = .015 * basic_sal;
        hra = .15 * basic_sal;
        net_sal = parseInt(basic_sal) + parseInt(da) + parseInt(hra) + parseInt(cca);
        if(ded === "permanent"){
            grand_sal = net_sal - (.93*net_sal);
        }
        else if(ded === "non_permanent"){
            grand_sal = net_sal;
        }
        else {
            alert("Please Select the Employee Type")
        }

        document.getElementById("output").innerHTML = 
        "Your Basic Salary is :" + basic_sal +" Rs"+
        "<br><br>Your DA is :" + da +" Rs"+
        "<br><br>Your CCA :" + cca +" Rs"+
        "<br><br>Your HRA :" + hra +" Rs"+
        "<br><br>Your NET Salary is :"+ net_sal +" Rs"+
        "<br><br>Your Total Salary is: <b>"+ grand_sal+ " Rs"
    }

    else{
        alert("Employee Salary is out of range ")
    }
}