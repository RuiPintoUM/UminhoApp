import React from 'react';
import { Linking } from 'react-native';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';



export default function FAQ() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Possíveis Dúvidas</Text>

        <Text style={styles.question}>Aplicação SASUM?</Text>
        <Text style={styles.answer}>
        A aplicação SASUM da Universidade do Minho, disponível para dispositivos Android e iOS, oferece aos estudantes acesso direto e simplificado a diversos serviços essenciais, como alimentação, alojamento, bolsas de estudo, apoio médico e psicológico, e atividades desportivas e culturais. 
        Caso pretenda almocar ou jantar na cantina, podes verificar os horários através da aplicação e deves fazer a reserva através desta. É também com esta aplicação que deves comprar senhas para o ginásio e usa-la para entrar no complexo desportivo.
        </Text>
        <Text style={styles.question}>Onde posso consultar o meu horário?</Text>
        <Text style={styles.answer}>
  Os horários podem ser consultados em{' '}
  <Text 
    style={styles.link}
    onPress={() => Linking.openURL('https://alunos.uminho.pt/pt/estudantes/paginas/infouteishorarios.aspx')}>
    https://alunos.uminho.pt/pt/estudantes/paginas/infouteishorarios.aspx
  </Text>, 
  ainda que, se o teu curso tiver um grande número de estudantes, podes ser dividido por turmas. Nesses casos, a tua direção de curso dar-te-á mais informações.
</Text>


        <Text style={styles.question}>O que é a Blackboard? Como acedo à Blackboard?</Text>
        <Text style={styles.answer}>
        A Blackboard é uma plataforma web de gestão e distribuição de informação e de recursos
didáticos. Essencialmente é o local onde os docentes partilham os recursos necessários à
unidade curricular. Além disso, ao selecionares uma unidade curricular, podes aceder aos
contactos da equipa docente em "Dossiê de UC".
Pode ser acedida através do browser ou podes instalar a aplicação com as credenciais
definidas na matrícula (número de aluno (ex: a12345 e palavra-passe).
Será também com estas credenciais que irás ter acesso ao teu email institucional (através do
outlook), portal do aluno (alunos.uminho.pt) e à Eduroam        </Text>

        <Text style={styles.question}>O que é o email institucional?</Text>
        <Text style={styles.answer}>
        É o meio formal de comunicação entre a comunidade académica. Esta caixa de email tem
proteção anti-spam e antivírus e oferece armazenamento de 50GB e a capacidade de fazeres
download das últimas versões do Office 365.
Podes aceder-lhe a partir de outlook.office.com/mail/, ao inserires o teu email no formato
axxxxx@alunos.uminho.pt, sendo axxxxx o teu número de aluno, e a palavra-passe definida na
matrícula.        </Text>

        <Text style={styles.question}>O que é a Eduroam?</Text>
        <Text style={styles.answer}>
        É a rede wi-fi utilizada nos vários edifícios da Universidade do Minho. Caso precises de aceder
remotamente a algum recurso que só está disponível na rede Eduroam podes utilizar a VPN
disponível.
        </Text>

        <Text style={styles.question}>Onde fica a minha sala de aula?</Text>
        <Text style={styles.answer}>
          No teu horário tens uma sala associada a cada aula no formato edifício - piso.sala (exemplo: edifício 2 - 0.20 -> sala 20, piso 0, no edifício 2).
          Nos primeiros dias é normal sentires-te perdido no campus, pelo que podes procurar a tua sala em:{' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://campi.uminho.pt/')}
          >
            https://campi.uminho.pt/
          </Text>.
        </Text>

        <Text style={styles.question}>Tenho instalações para praticar desporto na Universidade do Minho?</Text>
        <Text style={styles.answer}>
          Sim! A UMinho Sports tem espaços nos Campus de Azurém, Gualtar e na Residência de Santa Tecla para que possas praticar desporto.
          Tens a possibilidade de alugar espaços desportivos e de frequentar as aulas disponíveis:{' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('http://www.sas.uminho.pt/Default.aspx?tabid=11&pageid=96&lang=pt-PT')}
          >
            http://www.sas.uminho.pt/Default.aspx?tabid=11&pageid=96&lang=pt-PT
          </Text>.
        </Text>
        <Text style={styles.answer}>
          Podes consultar a tabela de preços de serviços desportivos em:{' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('http://www.sas.uminho.pt/Default.aspx?tabid=11&pageid=50&lang=pt-PT')}
          >
            http://www.sas.uminho.pt/Default.aspx?tabid=11&pageid=50&lang=pt-PT
          </Text>.
        </Text>
        <Text style={styles.answer}>
          E também no Facebook:{' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://www.facebook.com/UMinhoSports/')}
          >
            https://www.facebook.com/UMinhoSports/
          </Text>.
        </Text>

        <Text style={styles.question}>O que é a Associação Académica da Universidade do Minho?</Text>
        <Text style={styles.answer}>
          A AAUMinho é o órgão representativo dos estudantes que promove atividades e iniciativas no âmbito da ação educativa e associativismo, ação social, cultura e tradições académicas.
          São exemplos de atividades organizadas pela AAUMinho:
        </Text>
        <Text style={styles.answer}>
          <Text style={styles.bold}>1. Acolhimento</Text>{'\n'}
          <Text style={styles.bold}>2. Cerimónia de Boas-Vindas do Reitor</Text>{'\n'}
          <Text style={styles.bold}>3. GPS do Caloiro</Text>{'\n'}
          <Text style={styles.bold}>4. Caloiro de Molho</Text>{'\n'}
          {/* Adicione os outros itens aqui */}
        </Text>

        <Text style={styles.question}>Porquê ser sócio da AAUMinho?</Text>
        <Text style={styles.answer}>
          Ao seres sócio da AAUMinho tens acesso a descontos nos nossos parceiros e nas formações promovidas pela Start Point, e condições especiais na Receção ao Caloiro e no Enterro da Gata.
        </Text>

        <Text style={styles.question}>Há algum serviço de transporte na universidade?</Text>
        <Text style={styles.answer}>
          A AAUMinho dispõe de um serviço de transporte que liga os dois campi de Gualtar e Azurém. Os bilhetes podem ser comprados nos espaços recurso ou através da aplicação Recurso.
          Consulta os horários mais atualizados em:{' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://www.aaum.pt/academia/transportes/')}
          >
            https://www.aaum.pt/academia/transportes/
          </Text>.
        </Text>

        <Text style={styles.question}>Posso levar o meu carro para a universidade?</Text>
        <Text style={styles.answer}>
          A UMinho tem parques de estacionamento disponíveis para os alunos. Para efetuares o pedido de acesso aos parques de estacionamento acede à tua área pessoal de aluno do Portal Académico, em Secretária Eletrónica > Parques.
        </Text>

        <Text style={styles.question}>Em que atividades extra-curso posso participar?</Text>
        <Text style={styles.answer}>
          Grupos culturais: {' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://www.aaum.pt/grupos-culturais/')}
          >
            https://www.aaum.pt/grupos-culturais/
          </Text>
        </Text>
        <Text style={styles.answer}>
          Núcleos e secções: {' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://www.aaum.pt/nucleos-seccoes-e-delegacoes/')}
          >
            https://www.aaum.pt/nucleos-seccoes-e-delegacoes/
          </Text>
        </Text>

        <Text style={styles.question}>Onde posso fazer refeições na universidade?</Text>
        <Text style={styles.answer}>
          Estão disponíveis 3 cantinas em Gualtar, Santa Tecla e Azurém em que podes fazer uma refeição completa. As senhas individuais têm um custo de 2,70€ e um pack de 10 senhas tem um custo de 25€. Caso seja o prato simples, a senha tem um custo de 2,05€. As senhas podem ser adquiridas nos bares ou na cantina.
        </Text>
        <Text style={styles.answer}>
          Há ainda serviços de refeições não subsidiadas, como a Rampa B em Azurém (4,60€/senha), Grill em Azurém e Gualtar (6,50€/senha) e o Restaurante Panorâmico em Gualtar (11€/buffet ou 8€/prato do dia).
        </Text>

        <Text style={styles.question}>Que espaços tenho disponíveis para estudar?</Text>
        <Text style={styles.answer}>
          Tens várias bibliotecas disponíveis. Em particular, a biblioteca geral em Gualtar e a biblioteca de Azurém têm salas abertas 24h por dia, 7 dias por semana, além dos espaços restantes com horário menos livre.
          Além disso, podes reservar gabinetes, com um mínimo de 3 pessoas e máximo de 6 ou 8 pessoas; é aconselhado que dês check-in mal entres no gabinete: {' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://reservas.sdum.uminho.pt/Web/')}
          >
            https://reservas.sdum.uminho.pt/Web/
          </Text>
        </Text>
        <Text style={styles.question}>Porquê ser sócio da AAUMinho?</Text>
        <Text style={styles.answer}>
          Ao seres sócio da AAUMinho tens acesso a descontos nos nossos parceiros e nas formações promovidas pela Start Point, e condições especiais na Receção ao Caloiro e no Enterro da Gata.
        </Text>

        <Text style={styles.question}>Há algum serviço de transporte na universidade?</Text>
        <Text style={styles.answer}>
          A AAUMinho dispõe de um serviço de transporte que liga os dois campi de Gualtar e Azurém. Os bilhetes podem ser comprados nos espaços recurso ou através da aplicação Recurso.
          Consulta os horários mais atualizados em:{' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://www.aaum.pt/academia/transportes/')}
          >
            https://www.aaum.pt/academia/transportes/
          </Text>.
        </Text>

        <Text style={styles.question}>Posso levar o meu carro para a universidade?</Text>
        <Text style={styles.answer}>
          A UMinho tem parques de estacionamento disponíveis para os alunos. Para efetuares o pedido de acesso aos parques de estacionamento acede à tua área pessoal de aluno do Portal Académico, em Secretária Eletrónica > Parques.
        </Text>

        <Text style={styles.question}>Em que atividades extra-curso posso participar?</Text>
        <Text style={styles.answer}>
          Grupos culturais: {' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://www.aaum.pt/grupos-culturais/')}
          >
            https://www.aaum.pt/grupos-culturais/
          </Text>
        </Text>
        <Text style={styles.answer}>
          Núcleos e secções: {' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://www.aaum.pt/nucleos-seccoes-e-delegacoes/')}
          >
            https://www.aaum.pt/nucleos-seccoes-e-delegacoes/
          </Text>
        </Text>

        <Text style={styles.question}>Onde posso fazer refeições na universidade?</Text>
        <Text style={styles.answer}>
          Estão disponíveis 3 cantinas em Gualtar, Santa Tecla e Azurém em que podes fazer uma refeição completa. As senhas individuais têm um custo de 2,70€ e um pack de 10 senhas tem um custo de 25€. Caso seja o prato simples, a senha tem um custo de 2,05€. As senhas podem ser adquiridas nos bares ou na cantina.
        </Text>
        <Text style={styles.answer}>
          Há ainda serviços de refeições não subsidiadas, como a Rampa B em Azurém (4,60€/senha), Grill em Azurém e Gualtar (6,50€/senha) e o Restaurante Panorâmico em Gualtar (11€/buffet ou 8€/prato do dia).
        </Text>

        <Text style={styles.question}>Que espaços tenho disponíveis para estudar?</Text>
        <Text style={styles.answer}>
          Tens várias bibliotecas disponíveis. Em particular, a biblioteca geral em Gualtar e a biblioteca de Azurém têm salas abertas 24h por dia, 7 dias por semana, além dos espaços restantes com horário menos livre.
          Além disso, podes reservar gabinetes, com um mínimo de 3 pessoas e máximo de 6 ou 8 pessoas; é aconselhado que dês check-in mal entres no gabinete: {' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://reservas.sdum.uminho.pt/Web/')}
          >
            https://reservas.sdum.uminho.pt/Web/
          </Text>
        </Text>

        <Text style={styles.question}>Que tipo de estatutos existem?</Text>
        <Text style={styles.answer}>
          1. Trabalhador-Estudante — estatuto disponível para estudantes que trabalhem durante o período letivo. Este estatuto pode ser pedido no portal académico > pedidos > novo pedido > regimes especiais de frequência > trabalhador-estudante.
        </Text>
        <Text style={styles.answer}>
          2. Estudante Dirigente Associativo — estatuto obtido ao ser eleito dirigente da AAUMinho.
        </Text>
        <Text style={styles.answer}>
          3. Estudante Praticante Desportivo de Alto Rendimento — estudantes que constem do registo organizado pelo Instituto Português do Desporto e Juventude.
        </Text>
        {/* Adicionar os outros estatutos conforme necessário */}

        <Text style={styles.question}>Posso colaborar com os serviços da universidade?</Text>
        <Text style={styles.answer}>
          Sim! Estas oportunidades são divulgadas no email institucional. É atribuída uma bolsa de acordo com o Regulamento Académico da Universidade do Minho no valor de 3€/hora. A colaboração não deve exceder 5 horas por dia e o máximo de 20 horas por semana.
        </Text>

        <Text style={styles.question}>Onde posso consultar mais informações?</Text>
        <Text style={styles.answer}>
          Para mais informações, consulte os seguintes links: {' '}
          <Text 
            style={styles.link}
            onPress={() => Linking.openURL('https://docs.google.com/document/u/0/d/1CsncjQUSLpUihC2fwJaBXXEGpFzKTbtvkwTI9j4_1JE/mobilebasic')}
          >
            https://docs.google.com/document/u/0/d/1CsncjQUSLpUihC2fwJaBXXEGpFzKTbtvkwTI9j4_1JE/mobilebasic
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}


const { width, height } = Dimensions.get('window');
const marginPercentage = 0.05; // 5%
const leftMargin = width * marginPercentage;
const bottomMargin = height * marginPercentage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  answer: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555',
  },
  link: {
    color: '#007AFF', // Cor do link
    textDecorationLine: 'underline', // Sublinha o link
  },
});
