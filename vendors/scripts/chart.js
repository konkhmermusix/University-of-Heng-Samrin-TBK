const ctx = document.getElementById('negativeBarChart').getContext('2d');

const data = {
    labels: ['ទិន្នន័យ A', 'ទិន្នន័យ B', 'ទិន្នន័យ C', 'ទិន្នន័យ D', 'ទិន្នន័យ E'],
    datasets: [{
        label: 'តម្លៃប្រចាំខែ',
        data: [12, -19, 3, 5, -2], // មានតម្លៃអវិជ្ជមាន
        backgroundColor: [
            'rgba(75, 192, 192, 0.6)', // វិជ្ជមាន
            'rgba(255, 99, 132, 0.6)', // អវិជ្ជមាន (អាចប្រើពណ៌ផ្សេង)
            'rgba(75, 192, 192, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(255, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
    }]
};

const myChart = new Chart(ctx, {
    type: 'bar', // ប្រភេទក្រាហ្វរបារ
    data: data,
    options: {
        responsive: true, // កំណត់ឱ្យក្រាហ្វឆ្លើយតបនឹងទំហំ container
        maintainAspectRatio: true, // អាចកំណត់ជា false បើចង់គ្រប់គ្រង aspect ratio ទាំងស្រុង
        scales: {
            y: {
                beginAtZero: false, // មិនចាប់ផ្តើមពី 0 ទេ តែនឹងស្វ័យប្រវត្តិទៅតាមតម្លៃ
                title: {
                    display: true,
                    text: 'តម្លៃ'
                }
            },
            x: {
                 grid: {
                    zeroLineColor: 'black' // អាចកំណត់បន្ទាត់ 0
                 }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});