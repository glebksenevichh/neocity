var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var site_data = JSON.parse(this.responseText);
        var num_arr = site_data.info.views.toString().split("");
        var num_str = "";
        
        for (var i = 0; i < num_arr.length; i++) {
            num_str += num_arr[i];
            if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {
                num_str += ",";
            }
        }
        
        var date_obj = new Date(site_data.info.last_updated);
        
        // Update all elements with class 'hitcount'
        var hitcountElements = document.getElementsByClassName('hitcount');
        for (var j = 0; j < hitcountElements.length; j++) {
            hitcountElements[j].innerHTML = num_str;
        }
        
        // Update all elements with class 'lastupdate'
        var lastupdateElements = document.getElementsByClassName('lastupdate');
        for (var k = 0; k < lastupdateElements.length; k++) {
            lastupdateElements[k].innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
        }
    }
};
xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=nordo7", true);
xhttp.send();