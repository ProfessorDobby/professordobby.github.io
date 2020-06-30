var day_finder = () => {
    var year = document.getElementById("yearr").value
    month = document.getElementById("monthh").value - 1
    dater = document.getElementById("datee").value
    var date = new Date(year, month, dater)
    var day = date.getDay()
    var dayVal = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    var year2 = document.getElementById("yearr2").value
    month2 = document.getElementById("monthh2").value - 1
    dater2 = document.getElementById("datee2").value
    var n_date = new Date(year2, month2, dater2)


    var f_year, tDays = 0, i, y_days, imonthdays, tidays = 0, idays, tfdays = 0, fdays


    var iyear = parseInt(year)
    var tyear = parseInt(year2)
    var imonth , fmonth
   


//  For calculating days 

    for (i = iyear + 1; i <= tyear - 1; i++) {
        if (i % 4 == 0) {
            y_days = 366;
        }
        else {
            y_days = 365;
        }
        tDays += y_days
    }

    if(iyear%4==0)
    {
        if (month==0 || month==2 || month==4 || month==6 || month==7 || month==9 || month== 11) 
        {
            imonthdays = 31 - dater;
        }
        else if(month==1){
            imonthdays=29-dater
        }
        else {
            imonthdays = 30 - dater;
        }
    }
    else
    {
        if (month==0 || month==2 || month==4 || month==6 || month==7 || month==9 || month== 11) 
        {
            imonthdays = 31 - dater;
        }
        else if(month==1){
            imonthdays=28-dater
        }
        else {
            imonthdays = 30 - dater;
        } 
    }

    for (i = month+1; i<=11; i++) {
         if (i==0 || i==2 || i==4 || i==6 || i==7 || i==9 || i== 11)
        {
            idays=31
        }
        else if (i==1) 
        {
            if (year2%4==0) 
            {
                idays = 29;
            }
            else 
            {
                idays = 28;
            }
        }
        else 
        {
            idays = 30;
        }
        tidays += idays
    }

    for (i=month2-1; i>=0; i--) {
        if (i==0 || i==2 || i==4 || i==6 || i==7 || i==9 || i== 11) {
            fdays = 31
        }
        else if (i==1) {
            if (tyear%4==0) {
                fdays = 29;
            }
            else {
                fdays = 28;
            }
        }
        else {
            fdays = 30;
        }
        tfdays += fdays
    }

    tDays = parseInt(tDays) + parseInt(dater2) + parseInt(imonthdays) + parseInt(tidays) + parseInt(tfdays)




// For calculating Hour,min,secs
var tHours=tDays*24
var tMin=tHours*60
var tSec=tMin*60



// For calculating weeks
var weeks , week_days

weeks = parseInt(tDays/7)
week_days=tDays%7



//  For calculating number of months 

    if (month2 == month & dater2 >= dater) {

        var f_year = year2 - year
        var f_month = ((f_year - 1) * 12) + (12 - (12 - (month2 + 1))) + (12 - (month + 1))

    }
    else if (month2 > month) {
        f_year = year2 - year
        var f_month = ((f_year - 1) * 12) + (12 - (12 - (month2 + 1))) + (12 - (month + 1))
    }
    else {
        f_year = year2 - year - 1
        var f_month = ((f_year) * 12) + (12 - (12 - (month2 + 1))) + (12 - (month + 1))
    }


     
    
// Final output

    imonth=parseInt(month)
    fmonth=parseInt(month2)
var idates,fdates
idates=parseInt(dater)
fdates=parseInt(dater2)


// For limiting the values of Year Month and days
if(idates>31 || fdates> 31)
{
    alert("Entered Wrong Date")
    document.getElementById("datee").value=""
    document.getElementById("datee2").value=''
}

else if(imonth>12 || fmonth>12) 
{
alert("Entered Wrong Month Number")
document.getElementById("monthh").value=""
document.getElementById("monthh2").value=''
}
else if(iyear<0 || tyear<0){
    alert("You Entered Negative Year")
    document.getElementById("yearr").value=""
    document.getElementById("yearr2").value=''
}
else{
document.getElementById("day_find").innerHTML =  "<center>You were born on : <b>" + dayVal[day] + 
        "</b><br><br> Your <b>AGE</b> is : <b>" + f_year + 
        " years </b><br><br> You are now of :<b> " + f_month + "</b> Months<br><br>"+
        "Total number of weeks are : <b>" + weeks + "</b> weeks<b> " + week_days + " </b>days<br><br>"+
        "NO of Days since the starting day is : <b>"+ tDays +"</b><br><br>"+
        "Total Time is  : <b>"+tHours+"</b> Hours <b>"+tMin+"</b> Minutes <b>"+tSec+"</b> Seconds</center>"
// console.log(tdays); 
}   

}   
