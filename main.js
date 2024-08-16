// الحصول على عناصر الإدخال والزر
let dayInput = document.getElementById('day');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');
let Gbtn = document.getElementById('calculate');

// الحصول على عناصر عرض العمر
let sy = document.getElementById('sy');
let sm = document.getElementById('sm');
let sd = document.getElementById('sd');

// إضافة حدث للنقر على الزر
Gbtn.addEventListener('click', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على القيم من عناصر الإدخال
    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    // التحقق من صحة القيم
    if (isNaN(day) || day < 1 || day > 31) {
        alert('يوم غير صحيح. يجب أن يكون بين 1 و31.');
        return;
    }
    if (isNaN(month) || month < 1 || month > 12) {
        alert('شهر غير صحيح. يجب أن يكون بين 1 و12.');
        return;
    }
    if (isNaN(year) || year < 1900 || year > 2100) {
        alert('سنة غير صحيحة. يجب أن تكون بين 1900 و2100.');
        return;
    }

    // حساب العمر
    function calculateAge(day, month, year) {
        let today = new Date();
        let birthDate = new Date(year, month , day); 
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDifference = today.getMonth() - birthDate.getMonth();
        
        // تصحيح العمر إذا كانت الشهر الحالي قبل شهر الميلاد
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    // حساب العمر وعرضه في العناصر المناسبة
    let age = calculateAge(day, month, year);
    sy.textContent = `${age}`;
    sm.textContent = ` ${month}`;
    sd.textContent = ` ${day}`;
});