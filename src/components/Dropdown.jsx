// Desc: Component to display a dropdown menu for asset class selection

const Dropdown = (props) => {
    return (
        <div>
            <div style={{ fontStyle: 'italic', marginBottom: '10px', display: 'inline-flex' }}>Asset Class:</div>
            <select onChange={props.handleSelection} default={props.assetClass}>
                <option value="pe">Private Equity</option>
                <option value="pd">Private Debt</option>
                <option value="re">Real Estate</option>
                <option value="inf">Infrastructure</option>
                <option value="nr">Natural Resources</option>
                <option value="hf">Hedge Funds</option>
            </select>
        </div>
    );
}

export default Dropdown;