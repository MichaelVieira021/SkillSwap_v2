import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, View } from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native-paper';

interface FiltroProps {
  filtragem: React.Dispatch<React.SetStateAction<any>>;
}

export const Filtro: React.FC<FiltroProps> = ({ filtragem }) => {
  const { control, handleSubmit } = useForm();

  const handleFiltroChange = (data: any) => {
    console.log(data);
    filtragem(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <View style={styles.opcoes}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <select
                style={styles.select}
                onChange={onChange}
                value={value}
              >
                <option label="Menor" value="<" />
                <option label="Maior" value=">" />
                <option label="Igual" value="=" />
              </select>
            )}
            name="filtro"
            defaultValue="="
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="filtrar level"
                onChangeText={onChange}
                value={value}
              />
            )}
            name="valor"
            defaultValue=""
          />
          <Button title="Submit" onPress={handleSubmit(handleFiltroChange)} />
        </View>
      </View>
    </View>
  );
};