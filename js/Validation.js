function Validation() {
    this.checkEmpty = function (valInput, msgErr, spanID) {

        if (valInput.trim() == "") {
            //!không hợp lệ
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = msgErr
            return false
        }
        //?Hợp lệ
        document.getElementById(spanID).style.display = 'none';
        document.getElementById(spanID).innerHTML = "";
        return true

    }

    this.kiemTraDoDaiTaiKhoan = function (valInput, msgErr, spanID) {

        if (valInput.length >= 4 && valInput.length <= 6 ) {
            //!không hợp lệ
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = ''
            return true
        }
        //?Hợp lệ
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = msgErr;
        return false

    }

    this.kiemTraChucVu = function (selectID, msgErr, spanID) {
        var index = document.getElementById(selectID).selectedIndex;
        if (index == 0) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = msgErr
            return false
        }

        document.getElementById(spanID).style.display = 'none';
        document.getElementById(spanID).innerHTML = "";
        return true
    }

    this.kiemTraID = function (taiKhoan, msgErr, spanID) {
        var kiemtraTrung = DSNV.mangNV.some(function (nv) {
            return nv.taiKhoan === taiKhoan
        })

        if (kiemtraTrung) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = msgErr
            return false
        }
        document.getElementById(spanID).style.display = 'none';
        document.getElementById(spanID).innerHTML = "";
        return true
    }

    this.kiemTraHoTen = function (hoTen, msgErr, spanID) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if (hoTen.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = msgErr
        return false
    }

    this.kiemTraEmail = function (email, msgErr, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = msgErr
        return false
    }

    this.kiemTraMK = function (matKhau, msgErr, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

        if (matKhau.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = msgErr
        return false
    }

    this.kiemTraluongCB = function (luongCB, spanID) {

        if (luongCB >= 1e6 && luongCB <= 20e6) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else if (luongCB < 1e6) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = 'Lương không được dưới 1 triệu đồng';
            return false;
        } else if (luongCB > 20e6) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = 'Lương không được lớn hơn 20 triệu đồng';
            return false;
        } else {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = 'Tiền lương nhập không hợp lệ';
            return false;
        }


    }

    this.kiemTraSoGiolam = function (soGioLam, spanID) {
        if (soGioLam >= 80 && soGioLam <= 200) {
            document.getElementById(spanID).style.display = 'none';
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else if (soGioLam < 80 || soGioLam > 200) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = 'Số giờ làm không được dưới 80 hoặc trên 200 giờ';
            return false;
        }
        document.getElementById(spanID).style.display = 'block';
        document.getElementById(spanID).innerHTML = 'Số giờ làm không hợp lệ';
        return false;

    }

    this.KiemTraNgay = function (ngayLam, msgErr, spanID, id) {
        var ngayLam = new Date(document.getElementById(id).value)
        var ngayHienTai = new Date()
        if (ngayLam > ngayHienTai) {
            document.getElementById(spanID).style.display = 'block';
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).style.display = 'none';
        document.getElementById(spanID).innerHTML = '';
        return true;

    }
}
