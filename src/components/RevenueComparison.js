import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

function RevenueComparison({ options }) {
    const chart = useRef(null);

    useEffect(() => {
        const chartInit = echarts.init(chart.current);
        chartInit.setOption(options);
    });

    return <div ref={chart} style={{ width: '100%', height: '100%' }} />;
}

export default RevenueComparison;
