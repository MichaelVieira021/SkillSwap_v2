
import { InputLabel, NativeSelect } from '@mui/material';
import FormControl from '@mui/material/FormControl';


export default function SelectBox() {
  

    return (

        <FormControl style={{ width: "150px", background: "white", height: "50px" }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Ordenar por
            </InputLabel >
            <NativeSelect style={{ background: "white" }}
                defaultValue={30}
                inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                }}
            >
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
            </NativeSelect>
        </FormControl>
    );
}