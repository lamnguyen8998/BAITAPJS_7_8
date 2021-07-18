var arr = [];

function btnArr(){
var inpNumber = document.getElementById("nhapSo").value;
document.getElementById("nhapSo").value = "";
arr.push(+inpNumber);

    document.getElementById("mangHienThi").innerHTML = `[ ${arr} ]`;
}


function btnTinhSoDuong() {


            var sum = 0;
   for (var i = 0; i< arr.length; i++){
     if (arr[i] >= 0){
        sum += arr[i];
    }
   }
   console.log(sum);
   document.getElementById("sumSoDuong").innerHTML = ` Tổng số dương là :${sum}` ;


}

function btndemSoDuong(){
    var count = 0;
for(var i = 0; i < arr.length; ++i){
    if(arr[i] > 0)
        count++;
}
console.log(count);
document.getElementById("demSoDuong").innerHTML = ` Có tất cả :${count} số dương` ;

}

function btnTimSoNhoNhat() {
Array.min = function( arr ){
    return Math.min.apply( Math, arr );
};

var minimum = Array.min(arr);

console.log(minimum);
document.getElementById("timsoNhoNhat").innerHTML = ` Số nhỏ nhất là :${minimum} ` ;

}

function btnSoDuongNhoNhat(){
    for (var i = 0; i< arr.length; i++){
        if (arr[i] > 0){
           min = Math.min(...arr);
       }
    }
    
    document.getElementById("soDuongNhoNhat").innerHTML = ` Số nhỏ nhất là :${min} ` ;

}

function btnTimSoChanCuoiCung(){
    var last = arr[arr.length - 1]

    if(last % 2 == 0) {
        last = last +" " + "số chắn cuối cùng";
    }
    else{
        last = last - 1;
    }

    console.log(last);
    document.getElementById("timSoChanCuoiCung").innerHTML = last ;
}

function btnSapXep(){
    var tmp_arr = arr;
    tmp_arr.sort(function(a, b){return a - b});

    document.getElementById('sapXepTangDan').innerHTML = `[ ${tmp_arr} ]`;
}

function btnDoivitri() {
    var vi_tri_1 = parseInt(document.getElementById("vi_tri_1").value);
    var vi_tri_2 = parseInt(document.getElementById("vi_tri_2").value);
    if(
        (vi_tri_1 < 0 || vi_tri_1 < 0)
        || (vi_tri_1 >= arr.length || vi_tri_2 >= arr.length )
    ) {
        document.getElementById("Doivitri").innerHTML = "Vị Trí Không Hợp Lệ" ;
    } else {
        mang_hien_thi = arr;
        var tmp = mang_hien_thi[vi_tri_1];
        mang_hien_thi[vi_tri_1] = mang_hien_thi[vi_tri_2];
        mang_hien_thi[vi_tri_2] = tmp;
        document.getElementById("Doivitri").innerHTML = "Mảng mới: " + `[ ${mang_hien_thi} ]`;
    }
}

function timSoNguyenTo() {
    for (var i = 0; i< arr.length; i++){
        if(laSoNguyenTo(arr[i])) {
            document.getElementById("timSoNguyenTo").innerHTML = "Số nguyên tố đầu tiên là: " + arr[i];
            return;
        }
    }
    document.getElementById("timSoNguyenTo").innerHTML = "không có số nguyên tố";
}

function laSoNguyenTo(n) {
    if (n < 2){
        return false;
    }  
    for (var i = 2; i < (n - 1); i++){
        if (n % i == 0){ // n chia hết cho i
            return false;
        }   
    }
    return true;
}



function btndemSoNguyen() {
    var count = 0;
    for(var i = 0; i < arr.length; ++i){
        if(Number.isInteger(arr[i]))
            count++;
    }
    console.log(count);
    document.getElementById("demSoNguyen").innerHTML = ` Có tất cả :${count} số n nguyên` ;

}


function btnSoSanh() {
    var countDuong = 0;
    var countAm = 0;
    
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] > 0)
            countDuong++;
    }
    for(var i = 0; i < arr.length; ++i){
        if(arr[i] < 0)
            countAm++;
    }
    console.log(countDuong);
    console.log(countAm);

    if(countDuong > countAm){
        document.getElementById("soSanhAmDuong").innerHTML = " Số dương nhiều hơn số âm"
    }
    if(countDuong < countAm){
        document.getElementById("soSanhAmDuong").innerHTML = " Số âm nhiều hơn số dương"
    }
    if (countDuong = countAm){
        document.getElementById("soSanhAmDuong").innerHTML = " Dương và âm bằng nhau"
    }

 
}
