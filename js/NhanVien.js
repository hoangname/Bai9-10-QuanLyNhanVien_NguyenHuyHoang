function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLamTrongThang, tongLuong, loaiNhanVien) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.tenChucVu = function () {
        var chucVu = this.chucVu
        var viTri = document.getElementById('chucvu').selectedIndex
        if (chucVu == 'sep') {
            return this.chucVu = 'Sếp'
        } else if (chucVu == 'truongPhong') {
            return this.chucVu = 'Trưởng phòng'
        } else if (chucVu == 'nhanVien') {
            return this.chucVu = 'Nhân viên'
        }
    }
    this.gioLamTrongThang = gioLamTrongThang
    this.tongLuong = 0;
    this.loaiNhanVien = loaiNhanVien;
    this.tongTienLuong = function () {
        var chucVu = this.chucVu
        if (chucVu == 'sep') {
            return this.tongLuong = this.luongCB * 3;
        } else if (chucvu == 'truongPhong') {
            return this.tongLuong = this.luongCB * 2;
        } else {
            return this.tongLuong = this.luongCB * 1
        }
    }

    this.loaiNV = function () {
        var soGioLam = this.gioLamTrongThang
        if (soGioLam >= 192) {
            return this.loaiNhanVien = 'Nhân viên xuất sắc'
        } else if (soGioLam >= 176) {
            return this.loaiNhanVien = 'Nhân viên giỏi'
        } else if (soGioLam >= 160) {
            return this.loaiNhanVien = 'Nhân viên khá'
        } else {
            return this.loaiNhanVien = 'Nhân viên trung bình'
        }
    }
}

