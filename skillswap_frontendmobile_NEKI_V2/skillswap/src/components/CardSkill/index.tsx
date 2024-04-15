import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
// import { TouchableOpacity } from "react-native-gesture-handler";

interface CardProps {
  skill: {
    id: number;
    nome: string;
    tecAmp: number;
    atkAdicional: number;
    duracao?: number;
    resfriamento: number;
    foto: string;
  };
  baixarLevelSkill?: (idSkill: number) => void,
  deletarSkillUser?: (idSkill: number) => void,
  aumentarLevelSkill?: (idSkill: number) => void,
  idSkillUser?: number,
  level?: number,
}

export const CardSkill: React.FC<CardProps> = ({skill, baixarLevelSkill, deletarSkillUser, aumentarLevelSkill, idSkillUser, level }) => {
  return (
    <View key={idSkillUser || undefined} style={styles.visualizarSkillUserPorId}>
      <View style={styles.boxSkillUserLvl}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: skill.foto }} style={styles.visualizarSkillUserPorIdImg} />
        </View>

        <View style={styles.boxCardUnique}>
          <Text style={[styles.visualizarSkillUserPorIdTextos, { fontWeight: "bold", fontSize: 22 }]}>
            {skill.nome}
          </Text>

          <Text style={styles.visualizarSkillUserPorIdTextos}>
            AMP: {skill.tecAmp}%
          </Text>

          <Text style={styles.visualizarSkillUserPorIdTextos}>
            ATK: {skill.atkAdicional}
          </Text>

          <Text style={styles.visualizarSkillUserPorIdTextos}>
            DURAÇÃO: {skill.duracao.toFixed(2)}
          </Text>

        </View>
        {idSkillUser && (
          <Text style={{ position: 'absolute', top: '-15%', right: '0%', color: 'tomato', fontSize: 36 }}
            onPress={() => deletarSkillUser(skill.id)}
          >x</Text>
        )}

      </View>

      {idSkillUser && (
        <View style={styles.containerLevel}>
          <Text style={[styles.containerLevelText, { backgroundColor: '#0f0f0f', width: '95%', textAlign: "center", margin: 10 }]}>LEVEL {level}</Text>
          <View style={styles.containerBotoesLevel}>
            {/* <View style={styles.botaoDiminuirAumentar}> */}
              <TouchableOpacity style={styles.botaoDiminuirAumentar} onPress={() => baixarLevelSkill(skill.id)}>
                <Text style={styles.containerLevelText}>-</Text>
              </TouchableOpacity>
            {/* </View> */}

            {/* <View style={styles.botaoDiminuirAumentar}> */}
              <TouchableOpacity style={styles.botaoDiminuirAumentar} onPress={() => aumentarLevelSkill(skill.id)}>
                <Text style={styles.containerLevelText}>+</Text>
              </TouchableOpacity>
            {/* </View> */}
          </View>
        </View>
      )}
    </View>
  )
} 