function playMusic() {
    // جلب النص الذي كتبه المستخدم
    const textInput = document.querySelector('textarea, input').value;
    
    if (textInput) {
        // تحويل النص إلى صوت حقيقي مسموع باللغة العربية
        const utterance = new SpeechSynthesisUtterance(textInput);
        utterance.lang = 'ar-SA'; 
        utterance.rate = 0.9; 
        window.speechSynthesis.speak(utterance);
    } else {
        alert('الرجاء كتابة كلمات الأغنية أولاً!');
    }
}
