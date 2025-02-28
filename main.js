document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("input[type='text'], input[type='email']").forEach(input => {
        input.addEventListener("input", function() {
            this.value = this.value.toUpperCase();
        });
    });
});
