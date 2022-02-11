$('.counter').counterUp({
    delay: 10,
    time: 2000,
})

// slick product image
$(".product-slick").slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
})

// chart of Order and Viewer
let dateArr = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
let orderCountArr = [7,5,6,4,6,4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16]

const ctx = document.getElementById('OrderChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [{
                label: 'Order',
                data: orderCountArr,
                backgroundColor: [
                    '#007bff'
                ],
                borderColor: [
                    '#007bff'
                ],
                borderWidth: 1
            },
            {
                label: 'Viewer',
                data: viewerCountArr,
                backgroundColor: [
                    '#dc3545'
                ],
                borderColor: [
                    '#dc3545'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    display: false,
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: 'rgb(125, 25, 25)'
                    }
                }
            }
        }
    }
);

// Chart of Order Places
let orderFromPlace = [5,15,4,9,7];
let place = ["YGN","MDY","NPY","SHAN","MGW"];

const ctx2 = document.getElementById('myChart').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: place,
        datasets: [{
            label: 'Order From Places',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.75)',
                'rgba(54, 162, 235, 0.75)',
                'rgba(255, 206, 86, 0.75)',
                'rgba(75, 192, 192, 0.75)',
                'rgba(153, 102, 255, 0.75)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: 'rgb(125, 25, 25)'
                }
            }
        }
    }
});