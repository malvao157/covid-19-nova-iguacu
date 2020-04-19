chartIt();
async function chartIt() {
    const data = await getData();
    const ctx = document.getElementById('chart');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Casos confirmados',
                data: data.ys,
                fill: false,
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2.5

            }, {
                label: 'Casos de óbito',
                data: data.dys,
                fill: false,
                backgroundColor: 'transparent',
                borderColor: 'rgba(250, 184, 34, 1)',
                borderWidth: 2.5

            }, ]
        },



    });
}

// Get data from data source e other things 
async function getData() {
    const xs = [];
    const ys = [];
    const dys = [];
    const response = await fetch('covid19-b3fa104b34e647bd89a18524f2da15ad.csv');
    const data = await response.text();


    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const day = columns[0];
        xs.push(day);
        const confirmed = columns[4];
        ys.push(confirmed);
        const deaths = columns[5]
        dys.push(deaths)
            //console.log(day, confirmed, deaths);
    });
    return {
        xs,
        ys,
        dys
    };
}