chartIt();

async function chartIt() {
    const data = await getData();
    const ctx = document.getElementById('chart-bar');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Bairros com casos confirmados',
                data: data.ys,
                fill: false,
                backgroundColor: '(#blue)',
                borderColor: '(#blue)',
                borderWidth: 2

            }]

        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]

            }
        }

    });
}

// Get data from data source e other things 
async function getData() {
    const xs = [];
    const ys = [];
    const response = await fetch('PAINEL CORONAVIRUS COVID-19.csv');
    const data = await response.text();


    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const brr = columns[0];
        xs.push(brr);
        const cbrr = columns[1];
        ys.push(cbrr);
        console.log(brr, cbrr);
    });
    return {
        xs,
        ys
    };
}