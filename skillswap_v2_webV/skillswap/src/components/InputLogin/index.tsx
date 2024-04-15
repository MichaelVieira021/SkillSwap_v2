import { FieldValues, UseFormRegister } from 'react-hook-form';
import './styles.css';
import { GiCrownedSkull } from "react-icons/gi";


interface inputLoginProps {
    register: UseFormRegister<any>
    placeholder: string,
    style?: any,
    id:string,
    nome:string,
    value:string
}

const stylePadrao = {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
    position: 'relative',
};


export const InputLogin = ({ register, placeholder, id, nome, style, value}:inputLoginProps) => {


    const juntarStyles = {...stylePadrao,...style};

    return (
        <div id='inputLogin' style={juntarStyles} >
            <GiCrownedSkull
                style={{
                    width: '40px',
                    position: 'absolute',
                    left: '-6px',
                    top: '7%',
                    color: 'gray',
                    fontSize: 25
                }}
            />

            <input
                type="text"
                id={id}
                placeholder={placeholder}
                {...register(nome)}
                value={value}
            />

        </div>
    )
}