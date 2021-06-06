var getEle = function(id){
    return document.getElementById(id);
}
var getEleValue = function(id){
    return document.getElementById(id).value;
}

// Bài tập xét tuyển sinh
// Input điểm chuẩn
const diemChuan = 6.5;

var btnApplication = getEle('btnApplication');
btnApplication.onclick= function() {
    // Input khu vực tuyển sinh, kiểm tra đã chọn
    var khuVuc = getEleValue('khuVuc');
    if(khuVuc == 'Open this select menu'){
        alert('Please select');
    }

    // Input đối tượng tuyển sinh, kiểm tra đã chọn
    var doiTuong = 0;
    if(customRadioInline0.checked){
        doiTuong = 0;
    }else if(customRadioInline1.checked){
        doiTuong = 2.5;
    }else if(customRadioInline2.checked){
        doiTuong = 1.5;
    }else if(customRadioInline3.checked){
        doiTuong = 1;
    }else if(customRadioInlineW.checked){
        doiTuong = -100;
    }else{
        // alert('Chọn đối tượng tuyển sinh');
    }

    // Operation tính điểm ưu tiên = khu vực + đối tượng
    var uuTien = khuVuc*1 + doiTuong*1;

    // Input điểm 3 môn và điểm tổng kết
    var theDuc = getEleValue('grade1');
    var giaoDucCongDan = getEleValue('grade2');
    var daoDuc = getEleValue('grade3');
    var diemTongKet = 0;
    if (theDuc == '' || giaoDucCongDan == '' || daoDuc == '') {// kiểm tra đã nhập
        alert('Chưa điền đủ điểm');
    }else if(theDuc == 0 || giaoDucCongDan == 0 || daoDuc == 0){// Operation xét điểm liệt

    }
    else{// tính điểm tổng kết
        diemTongKet = uuTien*1 + theDuc*1 + giaoDucCongDan*1 + daoDuc*1;
    }

    //Operation tuyển khi tổng kết >= điểm chuẩn
    if(diemTongKet >= diemChuan){// Output khi đã đạt
        alert('Thí sinh đã vượt qua vòng xét tuyển');
    }else{// Output khi trượt
        alert('Chúc thí sinh may mắn lần sau');
    }
    
    
}


// Bài tập tính tiền điện
var txtkWh = getEle('txtkWh');
var showDiv = getEle('showDiv');

var clickkWh = function(){
    // Input thông tin khách hàng, số điện tiêu thụ và tiền điện
    var khachHang = getEleValue('khachHang');
    var soDien = getEleValue('soDien');
    var tienDien;

    if(khachHang == '' || soDien == ''){// Kiểm tra nhập
        alert('Vui lòng nhập thông tin');
    }else if(soDien <= 50){// Tính tiền điện
        tienDien = (soDien - 0) * 500;
    }else if(soDien <= 100){
        tienDien = (soDien - 50) * 650 + 50 * 500;
    }else if(soDien <= 150){
        tienDien = (soDien - 100)* 850 + 50 * 650 + 50 * 500;
    }else{
        tienDien = (soDien - 150)* 1100 + 100 * 850 + 50 * 650 + 50 * 500;
    }
    txtkWh.innerHTML = 'Khách hàng ' + khachHang + ' đã tiêu thụ ' + soDien + ' kWh và phải trả ' + tienDien + ' VND';
    showDiv.style.visibility = 'visible';
}

