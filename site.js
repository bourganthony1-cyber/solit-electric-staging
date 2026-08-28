document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-review-carousel]").forEach(function (carousel) {
        var track = carousel.querySelector(".carousel-container");
        var card = carousel.querySelector(".review-card");

        carousel.querySelectorAll("[data-carousel-direction]").forEach(function (button) {
            button.addEventListener("click", function () {
                if (!track || !card) return;
                var direction = Number(button.dataset.carouselDirection);
                var distance = card.getBoundingClientRect().width + 20;
                track.scrollBy({ left: direction * distance, behavior: "smooth" });
            });
        });
    });

    var quoteForm = document.querySelector("[data-quote-form]");
    if (quoteForm) {
        quoteForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var data = new FormData(quoteForm);
            var subject = "Website quote request from " + data.get("name");
            var body = [
                "Name: " + data.get("name"),
                "Phone: " + data.get("phone"),
                "Service: " + data.get("service"),
                "Details: " + (data.get("details") || "Not provided")
            ].join("\n");

            window.location.href = "mailto:service@solitelectric.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        });
    }
});

