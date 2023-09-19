window.onload = () => {
    const d = new Date();

    const current_year_span = document.getElementById("current-year");
    current_year_span.innerHTML = `${d.getFullYear()}`;

    const my_years_span = document.getElementById("years");

    my_years_span.innerHTML = `${d.getFullYear() - 2007}`;
};