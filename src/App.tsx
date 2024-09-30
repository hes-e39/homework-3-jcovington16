const colors = [
    {
        hex: 'EFDECD',
        name: 'Almond',
        comp: [
            { hex: 'ADC6E0', name: 'Periwinkle Gray' },
            { hex: 'D8E6F5', name: 'Link Water' },
            { hex: 'FFFFFF', name: 'White' },
        ],
    },
    {
        hex: 'CD9575',
        name: 'Antique Brass',
        comp: [
            { hex: '649DBE', name: 'Cerulean Frost' },
            { hex: '88BCDA', name: 'Half Baked' },
            { hex: 'EFC9B3', name: 'Desert Sand' },
        ],
    },
];

const App = () => {
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Colors</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {colors.map(color => (
                <div
                    key={color.hex}
                    style={{
                        margin: '10px',
                        padding: '10px',
                        backgroundColor: `#${color.hex}`,
                        color: '#fff',
                        borderRadius: '8px',
                        minWidth: '150px',
                    }}
                >
                    <h2>{color.name}</h2>
                    <p>Hex: #{color.hex}</p>
                    <h3>Complementary Colors:</h3>
                    <ul>
                        {color.comp.map(compColor => (
                            <li key={compColor.hex} style={{ color: `#${compColor.hex}` }}>
                                {compColor.name} (#{compColor.hex})
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>;
};

export default App;
