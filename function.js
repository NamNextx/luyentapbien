/*
Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
Sau đó hiển thị điểm trung bình và tổng của những điểm này.
Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). [Hướng dẫn: C/5 = (F-32)/9]
Bài 3: Viết chương trình tính diện tích hình tròn
Bài 4: Viết chương trình chu vi hình tròn*/



function diemTB() {
    var diemly = parseInt(prompt("nhap vao diem mon ly:"));
    var diemHoa= parseInt(prompt("Nhap vao diem hoa:"));
    var diemSinh=parseInt(prompt("Nhap  vao diem mon Sinh"));
    var diemtb=(diemly+diemHoa+diemSinh)/3;
    document.write("Diem trung binh la:" +diemtb+"</br>");
    document.write("Diem tong cua ba mon la: "+ diemtb*3);
}

function doind() {
    var doc=parseInt(prompt("Nhap vao gia tri nhiet do ban muon chuyen doi"));
    var change=5*((doc-32)/9);
    document.write("gia tri chuyen doi tu do C sang do F la:"+ change);
}

function dthinhchon() {
    var bankinh=parseInt(prompt("Xin moi nhap vao ban kinh: "));
    if(bankinh>0)
        {
            var dthinhtron=parseFloat(bankinh*2*Math.PI);

            document.write("Dien tich hinh chon la: "+dthinhtron);
        }
        else
            document.write(" gia tri ban nhap vao khong co thuc");
}

