const hash = window.location.hash;
const val = hash.substring(1); // loại bỏ ký tự `#` đầu tiên
const memberF = document.getElementById('memberF');
const memberB = document.getElementById('memberB');

switch (val) {
    case '0':
        memberF.textContent = 'CẨM LY';
        memberB.textContent = 'CẨM LY';
        break;
    case '1':
        memberF.textContent = 'THANH TIỀN';
        memberB.textContent = 'THANH TIỀN';
        break;
    case '2':
        memberF.textContent = 'HOÀI PHƯƠNG';
        memberB.textContent = 'HOÀI PHƯƠNG';
        break;
    case '3':
        memberF.textContent = 'THANH PHƯƠNG';
        memberB.textContent = 'THANH PHƯƠNG';
        break;
    case '4':
        memberF.textContent = 'HUỲNH NHƯ';
        memberB.textContent = 'HUỲNH NHƯ';
        break;
    case '5':
        memberF.textContent = 'VĂN PHỤNG';
        memberB.textContent = 'VĂN PHỤNG';
        break;
    case '6':
        memberF.textContent = 'HỒNG LỰC';
        memberB.textContent = 'HỒNG LỰC';
        break;
    case '7':
        memberF.textContent = 'THÀNH QUỐC';
        memberB.textContent = 'THÀNH QUỐC';
        break;
    case '8':
        memberF.textContent = 'CẢNH ÂN';
        memberB.textContent = 'CẢNH ÂN';
        break;
    case '9':
        memberF.textContent = 'HỮU PHÚ';
        memberB.textContent = 'HỮU PHÚ';
        break;
    case '10':
        memberF.textContent = 'NGỌC HÂN';
        memberB.textContent = 'NGỌC HÂN';
        break;
    case '11':
        memberF.textContent = 'MỸ DUYÊN';
        memberB.textContent = 'MỸ DUYÊN';
        break;
    case '12':
        memberF.textContent = 'THIÊN THÚY';
        memberB.textContent = 'THIÊN THÚY';
        break;
    case '13':
        memberF.textContent = 'MỸ DUNG';
        memberB.textContent = 'MỸ DUNG';
        break;
    case '14':
        memberF.textContent = 'BẢO NGÂN';
        memberB.textContent = 'BẢO NGÂN';
        break;
    case '15':
        memberF.textContent = 'THANH THẢO';
        memberB.textContent = 'THANH THẢO';
        break;
    default:
        memberF.textContent = 'BẠN';
        memberB.textContent = 'BẠN';
        break;
}

// mở map
function openMap() {
    const url = `https://www.google.com/maps/place/140+L%C3%AA+Trọng+Tấn,+Tây+Thạnh,+Tân+Phú,+Thành+phố+Hồ+Chí+Minh,+Việt+Nam`;
    window.open(url, '_blank');
}
