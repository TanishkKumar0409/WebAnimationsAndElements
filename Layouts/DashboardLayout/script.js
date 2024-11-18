(function ($) {
  "use strict";

  var spinner = function () {
    setTimeout(() => {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  $(".sidebar-toggler").click(function () {
    $(".sidebar, .content").toggleClass("open");
    return false;
  });

  var ctx1 = $("#worldWide-sale")[0].getContext("2d");
  var myChart1 = new Chart(ctx1, {
    type: "bar",
    data: {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      datasets: [
        {
          label: "USA",
          data: [10, 20, 35, 45, 60, 70, 85, 95, 110, 120],
          backgroundColor: "rgba(10,132,255,1)",
        },
        {
          label: "AU",
          data: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
          backgroundColor: "rgba(10,132,255,0.7)",
        },
        {
          label: "UK",
          data: [5, 10, 18, 30, 45, 60, 75, 85, 95, 105],
          backgroundColor: "rgba(10,132,255,0.5)",
        },
        {
          label: "Germany",
          data: [8, 16, 24, 40, 50, 70, 90, 100, 110, 120],
          backgroundColor: "rgba(10,132,255,0.3)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  var ctx2 = $("#sales-revenue")[0].getContext("2d");
  var myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      datasets: [
        {
          label: "Loss",
          data: [2, 5, 8, 12, 18, 25, 35, 40, 45, 50],
          backgroundColor: "rgba(10,132,255,1)",
          borderColor: "rgba(0,0,0,1)",
          fill: true,
        },
        {
          label: "Profit",
          data: [5, 12, 20, 35, 45, 60, 75, 85, 95, 110],
          backgroundColor: "rgba(10,132,255,0.7)",
          borderColor: "rgba(0,0,0,1)",
          fill: true,
        },
        {
          label: "Sales",
          data: [10, 20, 30, 45, 55, 70, 80, 90, 100, 110],
          backgroundColor: "rgba(10,132,255,0.5)",
          borderColor: "rgba(0,0,0,1)",
          fill: true,
        },
        {
          label: "Revenue",
          data: [12, 24, 38, 50, 60, 80, 95, 110, 120, 130],
          backgroundColor: "rgba(10,132,255,0.3)",
          borderColor: "rgba(0,0,0,1)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  $("#calender").datetimepicker({
    inline: true,
    format: "L",
  });
})(jQuery);
