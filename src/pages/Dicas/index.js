import React, {useState} from 'react';
import { StyleSheet, Modal, Pressable, Text, TextInput, TouchableOpacity, View, ScrollView,} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Dicas() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation()
    
  
return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.containerHeader}>
        <Text style={styles.message}>Dicas de Saúde</Text>
        </View>
        <View style={styles.containerForm}>
        <Text style={styles.title}>Hidratação</Text>
        <Text style={styles.Text}>
            Beba água regularmente ao longo do dia para manter-se hidratado. 
            Durante o exercício, beba água antes, durante e após para evitar a desidratação.
        </Text>
        <Text style={styles.title}>Equilíbrio de Macronutrientes</Text>
        <Text style={styles.Text}>
            Consuma uma dieta equilibrada que inclua carboidratos, proteínas e gorduras saudáveis. 
            Os carboidratos fornecem energia, as proteínas ajudam na recuperação muscular e as gorduras 
            saudáveis são essenciais para a função do corpo.
        </Text>
        <Text style={styles.title}>Porções Controladas</Text>
        <Text style={styles.Text}>
            Evite porções excessivas, pois comer em excesso pode anular seus esforços de condicionamento 
            físico. Use pratos menores para ajudar a controlar as porções.
        </Text>
        <Text style={styles.title}>Refeições Regulares</Text>
        <Text style={styles.Text}>
            Tente comer refeições pequenas e equilibradas a cada 3-4 horas para manter seu metabolismo 
            ativo e evitar picos de fome.
        </Text>
        <Text style={styles.title}>Lanches saudáveis</Text>
        <Text style={styles.Text}>
            Opte por lanches saudáveis, como frutas, iogurte natural, nozes ou cenouras baby, entre as 
            refeições para evitar o consumo excessivo de alimentos não saudáveis.
        </Text>
        <Text style={styles.title}>Alimentos integrais</Text>
        <Text style={styles.Text}>
            Prefira alimentos integrais, como grãos inteiros, frutas e vegetais, em vez de produtos 
            processados e refinados.
        </Text>
        <Text style={styles.title}>Proteína magra</Text>
        <Text style={styles.Text}>
            Inclua fontes de proteína magra em sua dieta, como peito de frango, peixe, carne magra, 
            tofu, feijão e lentilhas.
        </Text>
        <Text style={styles.title}>Evite o excesso de açúcar</Text>
        <Text style={styles.Text}>
            Reduza o consumo de açúcares adicionados, como refrigerantes, doces e alimentos processados 
            ricos em açúcar.
        </Text>
        <Text style={styles.title}>Controle a ingestão de gordura saturada e trans</Text>
        <Text style={styles.Text}>
            Limite a ingestão de gorduras saturadas e evite gorduras trans, geralmente encontradas em 
            alimentos fritos e processados.
        </Text>
        <Text style={styles.title}>Planejamento de refeições</Text>
        <Text style={styles.Text}>
            Planeje suas refeições com antecedência para evitar escolhas alimentares impulsivas e garantir 
            que você esteja recebendo os nutrientes necessários.
        </Text>
        <Text style={styles.title}>Suplementos com cuidado</Text>
        <Text style={styles.Text}>
            Seu objetivo deve ser obter a maioria dos nutrientes de alimentos inteiros, mas, se necessário, 
            consulte um profissional de saúde para orientação sobre suplementos.
        </Text>
        <Text style={styles.title}>Escute seu corpo</Text>
        <Text style={styles.Text}>
            Aprenda a reconhecer os sinais de fome e saciedade do seu corpo. Não coma apenas por tédio ou 
            emoções.
        </Text>
        <Text style={styles.title}>Variedade</Text>
        <Text style={styles.Text}>
            Varie sua dieta para garantir que você obtenha uma ampla gama de nutrientes. Quanto mais 
            colorido for seu prato, melhor!
        </Text>
        <Text style={styles.title}>Pós-treino</Text>
        <Text style={styles.Text}>
            Após o exercício, consuma uma refeição ou lanche que inclua proteínas e carboidratos para 
            ajudar na recuperação muscular e repor a energia.
        </Text>
        <Text style={styles.title}>Consulte um profissional</Text>
        <Text style={styles.Text}>
            Se você tiver metas específicas de condicionamento físico ou preocupações dietéticas, 
            considere consultar um nutricionista ou dietista registrado para obter orientação personalizada.
        </Text>
        </View>
        </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8b008b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      containerHeader: {
        marginTop: '15%',
        marginBottom: '8%',
        paddingEnd:'3%'
      },
      containerForm: {
        backgroundColor: '#9932cc',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
      },
      message: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'Bold',
      },
      title: {
        textAling: 'center',
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'Bold',
        color: '#ffff00',
      },
      Text: {
        color: '#EEEEEE',
        fontSize: 18,
        color: '#f5f5f5',
        marginTop: '2%',
      },
})