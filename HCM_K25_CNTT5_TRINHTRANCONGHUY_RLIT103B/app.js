let currentBookingCode = "";
let isBookingValid = false;
let totalRevenue = 0;
let totalBookings = 0;

while (true) {
    let menu = "HE THONG BAN VE MOONLIGHT CINEMA\n";
    menu += "1. Nhap ma dat ve\n";
    menu += "2. Tinh tien ve\n";
    menu += "3. So seri may man\n";
    menu += "0. Thoat\n";
    menu += "Moi ban chon (0 - 3):";
    
    let choice = prompt(menu);

    if (choice !== null) {
        choice = choice.trim();
    }

   
    switch (choice) {
        
        case "0":
            console.log("========================================");
            console.log("BAO CAO TONG KET CA BAN VE");
            console.log("========================================");
            console.log("Tong so don dat ve : " + totalBookings);
            
            if (totalBookings === 0) {
                console.log("Chua phat sinh don dat ve nao trong ca");
            } else {
                let average = Math.round(totalRevenue / totalBookings);
                console.log("Tong doanh thu     : " + totalRevenue.toLocaleString("vi-VN") + " VND"); 
                console.log("Doanh thu trung binh: " + average.toLocaleString("vi-VN") + " VND");
            }
            break; 

        case "1": 
            currentBookingCode = "";
            isBookingValid = false;
            
            let code = prompt("Nhap ma dat ve:");
            
            if (code === null || code.trim() === "") {
                console.log("Chua nhap ma dat ve"); 
                break;
            }
            
            code = code.trim().toUpperCase();
            
            if (code.length < 6) {
                console.log("Loi: Do dai nho hon 6 ky tu");
            } else if (code.startsWith("CIN-") === false) {
                console.log('Loi: Sai tien to "CIN-"');
            } else if (code.includes(" ") === true) {
                console.log("Loi: Chua khoang trang o giua");
            } else {
                currentBookingCode = code;
                isBookingValid = true;
                console.log("Hop le!");
            }
            break;

        case "2":
            if (isBookingValid === false) {
                console.log("Loi: Chua co ma dat ve hop le. Hay chon Case 1 truoc.");
                break;
            }
            
            let tickets = 0;
            let price = 0;
            let isCancel = false;
            
            while (true) {
                let inputTicket = prompt("Nhap so luong ve:");
                if (inputTicket === null) {
                    isCancel = true;
                    break;
                }
                tickets = Number(inputTicket.trim());
                if (tickets > 0 && Number.isInteger(tickets) === true) {
                    break; 
                } else {
                    console.log("Loi: Vui long nhap so nguyen lon hon 0"); 
                }
            }
            if (isCancel === true) break; 

            while (true) {
                let inputPrice = prompt("Nhap gia 1 ve (VND):");
                if (inputPrice === null) {
                    isCancel = true;
                    break;
                }
                price = Number(inputPrice.trim());
                if (price > 0 && Number.isInteger(price) === true) {
                    break;
                } else {
                    console.log("Loi: Vui long nhap so nguyen lon hon 0");
                }
            }
            if (isCancel === true) break;

            let baseCost = tickets * price;
            let discount = 0;
            if (tickets >= 4) {
                discount = Math.round(baseCost * 0.1);
            }
            let fee = Math.round((baseCost - discount) * 0.08);
            let total = (baseCost - discount) + fee;

            totalRevenue = totalRevenue + total;
            totalBookings = totalBookings + 1;

            console.log("HOA DON THANH TOAN (Ma: " + currentBookingCode + ")");
            console.log("Tong thanh toan: " + total.toLocaleString("vi-VN") + " VND"); 
            
            currentBookingCode = "";
            isBookingValid = false;
            break;

        case "3":
            let seri = prompt("Nhap chuoi so seri:");
            if (seri === null || seri.trim() === "") {
                console.log("Loi: Khong duoc de trong."); 
                break;
            }
            seri = seri.trim();
            
            let isOnlyNumbers = true;
            for (let i = 0; i < seri.length; i++) {
                if (seri[i] < '0' || seri[i] > '9') {
                    isOnlyNumbers = false;
                }
            }

            if (isOnlyNumbers === false || seri.length < 2 || Number(seri) === 0) {
                console.log("Loi: Chuoi so seri khong hop le.");
                break;
            }
            
            let reversed = "";
            for (let i = seri.length - 1; i >= 0; i--) {
                reversed = reversed + seri[i];
            }
            let isPalindrome = (seri === reversed);
            
            let sum = 0;
            for (let i = 0; i < seri.length; i++) {
                sum = sum + Number(seri[i]);
            }
            let isDivisibleBy9 = (sum % 9 === 0);

            if (isPalindrome === true && isDivisibleBy9 === true) {
                console.log("Ket qua: Giai Dac biet");
            } else if (isPalindrome === true && isDivisibleBy9 === false) {
                console.log("Ket qua: Giai Nhat");
            } else if (isPalindrome === false && isDivisibleBy9 === true) {
                console.log("Ket qua: Giai Nhi");
            } else {
                console.log("Ket qua: Khong trung thuong");
            }
            break;

        default:
            console.log("Loi: Lua chon khong hop le (hay nhap tu 0 den 3)."); 
            break;
    }
    
    if (choice === "0") {
        break;
    }
}