/* 
Bài 1: Quản lý sinh viên
Input: Điểm tổng kết 3 môn (mon1, mon2, mon3) và 2 điểm ưu tiên
(diemKhuVuc, doiTuong)

Process: Cho người dùng nhập điểm tổng 3 môn và 2 điểm ưu tiên
sau đó tạo 2 function tính điểm ưu tiên và kết quả của thí sinh
dùng if else song song để kiểm tra nếu 1 trong 3 môn có điểm
bằng 0 hoặc điểm tổng kết nhỏ hơn điểm chuẩn thì rớt.

Output:Kết quả và số điểm của sinh viên.
*/ 

// Fun
function diemUuTien(diemKhuVuc, doiTuong) {
    var diemUuTien1, diemUuTien2, tongDiemUuTien;
    if (diemKhuVuc === "X") {
        diemUuTien1 = 0;
    }else if(diemKhuVuc === "A") {
        diemUuTien1 = 2;
    }else if(diemKhuVuc === "B") {
        diemUuTien1 = 1;
    }else if(diemKhuVuc === "C") {
        diemUuTien1 = 0.5;
    }

    if (doiTuong === 0) {
        diemUuTien2 = 0;
    }else if(doiTuong === 1) {
        diemUuTien2 = 2.5;
    }else if(doiTuong === 2) {
        diemUuTien2 = 1.5;
    }else if(doiTuong === 3) {
        diemUuTien2 = 1;
    }
    tongDiemUuTien = diemUuTien1 + diemUuTien2;
    
    return tongDiemUuTien;
}
var tongDiemUuTien = diemUuTien("A", 1);

// Function để kiểm tra xem thí sinh rớt hay không
function ketqua(mon1, mon2, mon3, diemChuan) {
    var tongKet = mon1 + mon2 + mon3 + tongDiemUuTien;
    
    if(mon1 === 0 || mon2 === 0 || mon3 === 0) {
        console.log(`Kết quả: Rớt (Một hoặc nhiều môn có điểm bằng 0), tổng điểm của thí sinh: ${tongKet}`);
    }else if(tongKet < diemChuan) {
        console.log(`Kết quả: Rớt (Điểm tổng kết nhỏ hơn điểm chuẩn), tổng điểm của thí sinh ${tongKet}, điểm chuẩn ${diemChuan}`);
    }else {
        console.log(`Kết quả: Đạt, tổng điểm của thí sinh ${tongKet}, điểm chuẩn ${diemChuan}`);
    }
}
console.log("Bài 1")
ketqua(7, 7, 7, 20);


/*
Bài 2: Tính tiền điện
Input: Tên (userName), số Kw (soKW)

Process: Tạo một function để tính tiền điện sau đó dùng thêm if
else để kiểm tra số tiền điện theo bậc mà đề bài đã cho


Output:Số tiền điện phải trả
*/

function tongTienDien(soKW, userName) {
    var tongTien;
    if (soKW <= 50) {
        tongTien = soKW * 500;
    }else if (soKW <= 100) {
        tongTien = 50 * 500 + ((soKW - 50) * 650);
    }else if (soKW <= 200) {
        tongTien = 50 * 500 + (50 * 650) + ((soKW - 100) * 850);
    }else if (soKW <= 350) {
        tongTien = 50 * 500 + (50 * 650) + (100 * 850) + ((soKW - 200) * 1100);
    }else if (soKW > 350) {
        tongTien = 50 * 500 + (50 * 650) + (100 * 850) + (150 * 1100) + ((soKW - 350) * 1300);
    }

    console.log(`Anh(Chị) ${userName} tháng này phải trả ${tongTien} đồng`);
}
var tongTien = tongTienDien(400, "Thu");





