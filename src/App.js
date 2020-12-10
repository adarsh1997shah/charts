import React from 'react';
import { options } from './echartOptions';
import RevenueComparison from './components/RevenueComparison';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                width: '90%',
                margin: 'auto',
                alignItems: 'stretch',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    flex: '1',
                    backgroundColor: 'white',
                    margin: '5px',
                    borderRadius: '5px',
                    padding: '5px',
                }}
            >
                <h3>Donut Chart</h3>
                <div
                    style={{
                        display: 'flex',
                        marginBottom: '25px',
                        marginTop: '20px',
                    }}
                >
                    <div style={{ flex: '1', textAlign: 'center' }}>
                        <h3>2561</h3>
                        <p>LIFETIME TOTAL SALES</p>
                        <p>
                            89%<span>&darr;</span>
                        </p>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                        <h3>412</h3>
                        <p>INCOME AMOUNTS</p>
                        <p>
                            23%<span>&uarr;</span>
                        </p>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                        <h3>9520</h3>
                        <p>TOTAL VISITS</p>
                        <p>
                            5.5%<span>&uarr;</span>
                        </p>
                    </div>
                </div>
                <div style={{ height: '320px', width: '100%' }}>
                    <div
                        id="chart"
                        className="morris-charts"
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
            </div>
            <div
                style={{
                    flex: '1',
                    backgroundColor: 'white',
                    margin: '5px',
                    borderRadius: '5px',
                    padding: '5px',
                }}
            >
                <h3>Revenue Comparison</h3>
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom: '25px',
                        marginTop: '20px',
                    }}
                >
                    <h5>You have to pay</h5>
                    <h3>
                        <span>&uarr;</span>25643<small>USD</small>
                    </h3>
                </div>
                <div
                    style={{
                        height: '320px',
                        width: '100%',
                    }}
                >
                    <RevenueComparison options={options} />
                </div>
            </div>
        </div>
    );
}

export default App;
