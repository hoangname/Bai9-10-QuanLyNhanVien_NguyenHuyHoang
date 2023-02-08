var DSNV = new DanhSachNhanVien()
const validation = new Validation()

function getMyEle(id) {
    return document.getElementById(id)
}

function setLocal() {
    localStorage.setItem('DSNV', JSON.stringify(DSNV.mangNV))
}

function getLocal() {
    if (localStorage.getItem('DSNV') != null) {
        DSNV.mangNV = JSON.parse(localStorage.getItem('DSNV'))
        hienThiTable(DSNV.mangNV)
    }
}

getLocal()

function themNhanVien() {
    var taiKhoan = getMyEle('tknv').value
    taiKhoan = taiKhoan.replace(/\s/g,"")
    console.log(taiKhoan)
    var hoTen = getMyEle('name').value
    var email = getMyEle('email').value
    email = email.replace(/\s/g,"")
    var matKhau = getMyEle('password').value
    var ngayLam = getMyEle('datepicker').value
    var luongCB = getMyEle('luongCB').value
    var chucVu = getMyEle('chucvu').value
    var gioLamTrongThang = getMyEle('gioLam').value

    var isValid = true
    isValid &= validation.checkEmpty(taiKhoan, 'Tài khoản không được để trống', 'tbTKNV') && validation.kiemTraDoDaiTaiKhoan(taiKhoan, 'Tài khoản phải tối đa 4 đến 6 ký tự', 'tbTKNV') && validation.kiemTraID(taiKhoan, 'Mã nhân viên bị trùng', 'tbTKNV')

    isValid &= validation.checkEmpty(hoTen, 'Họ tên không được để trống', 'tbTen') && validation.kiemTraHoTen(hoTen, 'Họ tên không hợp lệ', 'tbTen')

    isValid &= validation.checkEmpty(email, 'Email không được để trống', 'tbEmail') && validation.kiemTraEmail(email, 'Email không hợp lệ', 'tbEmail')

    isValid &= validation.checkEmpty(matKhau, 'Mật khẩu không được để trống', 'tbMatKhau') && validation.kiemTraMK(matKhau, 'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt, 6 - 10 kí tự ', 'tbMatKhau')

    isValid &= validation.checkEmpty(luongCB, 'Lương không được để trống', 'tbLuongCB') && validation.kiemTraluongCB(luongCB, 'tbLuongCB')

    isValid &= validation.kiemTraChucVu('chucvu', 'Chức vụ không không được để trống', 'tbChucVu')

    isValid &= validation.checkEmpty(gioLamTrongThang, 'Giờ làm không không được để trống', 'tbGiolam') && validation.kiemTraSoGiolam(gioLamTrongThang, 'tbGiolam')

    isValid &= validation.checkEmpty(ngayLam, 'Ngày làm không được để trống', 'tbNgay') && validation.KiemTraNgay(ngayLam, 'Ngày không hợp lệ', 'tbNgay', 'datepicker')
    if (isValid) {
        const NV = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLamTrongThang)
        NV.tongTienLuong()
        NV.loaiNV()
        NV.tenChucVu()
        DSNV.themNV(NV)
        hienThiTable(DSNV.mangNV)
        setLocal()
    }
}


function hienThiTable(mang) {
    content = '';
    mang.map(function (NV) {
        content += `<tr>
        <td>${NV.taiKhoan}</td>
        <td>${NV.hoTen}</td>
        <td>${NV.email}</td>
        <td>${NV.ngayLam}</td>
        <td>${NV.chucVu}</td>
        <td>${NV.tongLuong}</td>
        <td>${NV.loaiNhanVien}</td>
        <td><button class="btn btn-success" onclick="xoaNV('${NV.taiKhoan}')">Xóa</button></td>
        <td><button class="btn btn-success" data-toggle="modal"
        data-target="#myModal" onclick="xemNV('${NV.taiKhoan}')">Xem</button></td>
        </tr>`
    })
    getMyEle('tbody').innerHTML = content;
}

function xoaNV(taiKhoan) {
    DSNV.xoaNV(taiKhoan)
    console.log(DSNV.xoaNV(taiKhoan))
    setLocal()
    getLocal()
}

function xemNV(taiKhoan) {
    document.getElementById('btnCapNhat').style.display = 'block'
    document.getElementById('btnThemNV').style.display = 'none'
    var viTri = DSNV.timViTri(taiKhoan)
    if (viTri > -1) {
        getMyEle('tknv').value = DSNV.mangNV[viTri].taiKhoan
        getMyEle('tknv').disabled = true;
        getMyEle('name').value = DSNV.mangNV[viTri].hoTen
        getMyEle('email').value = DSNV.mangNV[viTri].email
        getMyEle('password').value = DSNV.mangNV[viTri].matKhau
        getMyEle('datepicker').value = DSNV.mangNV[viTri].ngayLam
        getMyEle('luongCB').value = DSNV.mangNV[viTri].luongCB
        getMyEle('chucvu').value = DSNV.xemChucVu(DSNV.mangNV[viTri].chucVu)
        getMyEle('gioLam').value = DSNV.mangNV[viTri].gioLamTrongThang
        console.log(DSNV.xemChucVu())
    }
    anThongBao()
}

function capNhatNV() {

    var taiKhoan = getMyEle('tknv').value
    var hoTen = getMyEle('name').value
    var email = getMyEle('email').value
    var matKhau = getMyEle('password').value
    var ngayLam = getMyEle('datepicker').value
    var luongCB = getMyEle('luongCB').value
    var chucVu = getMyEle('chucvu').value
    var gioLamTrongThang = getMyEle('gioLam').value

    var isValid = true


    isValid &= validation.checkEmpty(hoTen, 'Họ tên không được để trống', 'tbTen') && validation.kiemTraHoTen(hoTen, 'Họ tên không hợp lệ', 'tbTen')

    isValid &= validation.checkEmpty(email, 'Email không được để trống', 'tbEmail') && validation.kiemTraEmail(email, 'Email không hợp lệ', 'tbEmail')

    isValid &= validation.checkEmpty(matKhau, 'Mật khẩu không được để trống', 'tbMatKhau') && validation.kiemTraMK(matKhau, 'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt, 6 - 10 kí tự ', 'tbMatKhau')

    isValid &= validation.checkEmpty(luongCB, 'Lương không được để trống', 'tbLuongCB') && validation.kiemTraluongCB(luongCB, 'tbLuongCB')

    isValid &= validation.kiemTraChucVu('chucvu', 'Chức vụ không không được để trống', 'tbChucVu')

    isValid &= validation.checkEmpty(gioLamTrongThang, 'Giờ làm không không được để trống', 'tbGiolam') && validation.kiemTraSoGiolam(gioLamTrongThang, 'tbGiolam')

    isValid &= validation.checkEmpty(ngayLam, 'Ngày làm không được để trống', 'tbNgay') && validation.KiemTraNgay(ngayLam, 'Ngày không hợp lệ', 'tbNgay', 'datepicker')
    if (isValid) {
        var NVCAPNHAT = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLamTrongThang)
        NVCAPNHAT.tongTienLuong()
        NVCAPNHAT.loaiNV()
        NVCAPNHAT.tenChucVu()
        DSNV.capNhatNV(NVCAPNHAT)
        console.log(DSNV.mangNV)
        setLocal()
        getLocal()
    }
}



function btnNV() {
    anThongBao()
    getMyEle('formNV').reset()
    getMyEle('tknv').disabled = false;
    document.getElementById('btnThemNV').style.display = 'block'
    document.getElementById('btnCapNhat').style.display = 'none'
}

function anThongBao() {
    getMyEle('tbTKNV').style.display = 'none'
    getMyEle('tbTen').style.display = 'none'
    getMyEle('tbMatKhau').style.display = 'none'
    getMyEle('tbLuongCB').style.display = 'none'
    getMyEle('tbChucVu').style.display = 'none'
    getMyEle('tbGiolam').style.display = 'none'
    getMyEle('tbEmail').style.display = 'none'
    getMyEle('tbNgay').style.display = 'none'
}

function timKiemLoai() {
    var loaiNV = getMyEle('searchName').value
    DSNV.timKiemLoaiNV(loaiNV)
    hienThiTable(DSNV.timKiemLoaiNV(loaiNV))
}

getMyEle('searchName').onkeyup = timKiemLoai

