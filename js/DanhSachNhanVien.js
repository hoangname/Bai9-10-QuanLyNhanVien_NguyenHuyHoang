function DanhSachNhanVien() {
  this.mangNV = [];
  this.themNV = function (nv) {
    this.mangNV.push(nv)
  }

  this.timViTri = function (taiKhoan) {
    var viTri = -1;
    var viTri = this.mangNV.findIndex(function (nv) {
      return taiKhoan == nv.taiKhoan
    })
    return viTri;
  }

  this.xoaNV = function (taiKhoan) {
    var viTri = this.timViTri(taiKhoan)
    if (viTri > -1) {
      this.mangNV.splice(viTri, 1)
    }
  }

  this.capNhatNV = function (nvCapNhat) {
    var viTri = this.timViTri(nvCapNhat.taiKhoan)
    if (viTri > -1) {
      this.mangNV[viTri] = nvCapNhat
    }
  }

  this.xemChucVu = function (value) {
    if (value == 'Trưởng phòng') {
      return value = 'truongPhong'
    } else if (value == 'Nhân viên') {
      return value = 'nhanVien'
    } else {
      return value = 'sep'
    }
  }

  this.timKiemLoaiNV = function(tuKhoaloaiNV) {
   var mangTimKiem = [];
   var tuKhoa = tuKhoaloaiNV.toLowerCase().replace(/\s/g,"")
   this.mangNV.map(function(nv) {
    var loaiNV = nv.loaiNhanVien.toLowerCase().replace(/\s/g,"")
    var viTri  = loaiNV.indexOf(tuKhoa)
    if(viTri > -1){
      mangTimKiem.push(nv)
    }
   })
   return mangTimKiem
  }
}
