// eslint-disable-next-line
const morris = new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { label: 'Markets', value: 20 },
        { label: 'Financial', value: 30 },
        { label: 'Electricity', value: 12 },
    ],
    colors: ['rgb(242, 246, 248)', 'rgb(53, 61, 74)', 'rgb(41, 126, 246)'],
    resize: true,
});
