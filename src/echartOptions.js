export const options = {
    timeline: {
        show: true,
        data: ['06-16', '05-16', '04-16'],
        padding: [10, 0, 0, 0],
        autoPlay: true,
        loop: true,
        playInterval: 2e3,
        label: {
            show: false,
        },
    },
    options: [
        {
            color: ['#dddddd', '#64c5b1', '#414b4f', '#ee4b82', '#45bbe0'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },

            series: [
                {
                    name: '06-16',
                    radius: [20, '80%'],
                    roseType: 'none',
                    type: 'pie',
                    center: ['50%', '50%'],
                    data: [
                        {
                            value: 35,
                            name: 'iPhone 7',
                        },
                        {
                            value: 16,
                            name: 'Windows',
                        },
                        {
                            value: 27,
                            name: 'Desktop',
                        },
                        {
                            value: 29,
                            name: 'Mobiles',
                        },
                        {
                            value: 12,
                            name: 'Others',
                        },
                    ],
                },
            ],
        },
        {
            series: [
                {
                    name: '05-16',
                    type: 'pie',
                    data: [
                        {
                            value: 42,
                            name: 'iPhone 7',
                        },
                        {
                            value: 51,
                            name: 'Windows',
                        },
                        {
                            value: 39,
                            name: 'Desktop',
                        },
                        {
                            value: 25,
                            name: 'Mobiles',
                        },
                        {
                            value: 9,
                            name: 'Others',
                        },
                    ],
                },
            ],
        },
        {
            series: [
                {
                    name: '04-16',
                    type: 'pie',
                    data: [
                        {
                            value: 29,
                            name: 'iPhone 7',
                        },
                        {
                            value: 16,
                            name: 'Windows',
                        },
                        {
                            value: 24,
                            name: 'Desktop',
                        },
                        {
                            value: 19,
                            name: 'Mobiles',
                        },
                        {
                            value: 5,
                            name: 'Others',
                        },
                    ],
                },
            ],
        },
    ],
};
