import * as React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel'; import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect(props) {

    const setSelectStock = props.setSelectStock
    const [stock, setStock] = React.useState('');

    const handleChange = (event) => {
        setStock(event.target.value);
        setSelectStock(event.target.value);
    };

    return (

        <Box sx={{ minWidth: 120 }}>
            <FormControl style={{ width: "15%", padding: "5px", backgroundColor: "white", textSizeAdjust: "center" }}>
                <InputLabel id="demo-simple-select-label" style={{ textAlignLast: "center" }}> Select the Stock</InputLabel>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={stock}
                    label="Currency"
                    onChange={handleChange}
                >
                    <MenuItem value={"BTC"}>BTC</MenuItem>
                    <MenuItem value={"ETH"}>ETH</MenuItem>
                    <MenuItem value={"USDT"}>USDT</MenuItem>
                    <MenuItem value={"BNB"}>BNB</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
