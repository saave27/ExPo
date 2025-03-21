import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen() {
  const { width, height } = useWindowDimensions(); // Obtener dimensiones dinámicas

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/bof.jpg')}
          style={[styles.reactLogo, { width, height: height * 0.4, borderRadius: width * 0.05 }]}
          resizeMode="cover"
        />
      }>
      
      {/* Nombre y presentación */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.nameText}>Wilson Andres Saavedra Urbano</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Analista de Soporte</ThemedText>
      </ThemedView>  

      {/* Contacto con diseño mejorado */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Información</ThemedText>

        <ThemedView style={styles.contactRow}>
          <Ionicons name="call-outline" size={24} color="#66B3FF" />
          <ThemedText style={styles.contactText}>320 730 22 50</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contactRow}>
          <Ionicons name="mail-outline" size={24} color="#66B3FF" />
          <ThemedText style={styles.contactText}>u20221203289@usco.edu.co</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contactRow}>
          <Ionicons name="id-card-outline" size={24} color="#66B3FF" />
          <ThemedText style={styles.contactText}>ID: 1106226014</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contactRow}>
          <Ionicons name="location-outline" size={24} color="#66B3FF" />
          <ThemedText style={styles.contactText}>CRA 15A #3-26</ThemedText>
        </ThemedView>

      </ThemedView>

      {/* Separador */}
      <ThemedView style={styles.divider} />

      {/* Sobre mí */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Sobre mí:</ThemedText>
        <ThemedText>
        Soy un profesional con una combinación única de experiencia y habilidades para la resolución de problemas tanto técnicas como creativas. Me desenvuelvo con éxito en entornos colaborativos y de trabajo en equipo, destacándome por mis habilidades de comunicación.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.divider} />
      {/* Experiencia */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Experiencia:</ThemedText>
        <ThemedText>
          <ThemedText style={styles.expTitle}></ThemedText>Cuento con 2.5 años de experiencia en atención al cliente como agente virtual bilingüe B2C y 1 año como analista de soporte de nivel 1 en el sector tecnológico con B2B. En este rol, trabajé con metodologías Scrum y Kanban, utilizando herramientas como Jira, Emma, MongoDB y Elmah.io, con el apoyo de ChatGPT.
        Tengo conocimientos básicos en plataformas como Figma, AutoCAD, SolidWorks, Photoshop y Camtasia Studio, adquiridos de manera autodidacta. Además, tengo experiencia en programación con C++ y Python, y actualmente estoy cursando una técnica en Desarrollo de Software, donde he aprendido HTML, CSS, MySQL y Visual Studio.
        Mi compromiso con el aprendizaje continuo y mi capacidad de adaptación me permiten estar al día con las tendencias y tecnologías de la industria, estando preparado para enfrentar nuevos desafíos profesionales.
 </ThemedText>
      </ThemedView>
      <ThemedView style={styles.divider} />

      {/* Habilidades con iconos */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.subtitleText}>Skills</ThemedText>

        <ThemedView style={styles.skillsGrid}>
          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="java" size={24} color="#F89820" />
            <ThemedText style={styles.skillText}>Java</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="database" size={24} color="#4479A1" />
            <ThemedText style={styles.skillText}>MySQL</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="react" size={24} color="#61DAFB" />
            <ThemedText style={styles.skillText}>React</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="html5" size={24} color="#E34F26" />
            <ThemedText style={styles.skillText}>HTML</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="css3" size={24} color="#1572B6" />
            <ThemedText style={styles.skillText}>CSS</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="js-square" size={24} color="#F7DF1E" />
            <ThemedText style={styles.skillText}>JavaScript</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="bootstrap" size={24} color="#7952B3" />
            <ThemedText style={styles.skillText}>Bootstrap</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="git" size={24} color="#F05032" />
            <ThemedText style={styles.skillText}>Git</ThemedText>
          </ThemedView>

          <ThemedView style={styles.skillItem}>
            <FontAwesome5 name="github" size={24} color="black" />
            <ThemedText style={styles.skillText}>GitHub</ThemedText>
          </ThemedView>

        </ThemedView>
      </ThemedView>

    </ParallaxScrollView>
  );
}

// Estilos mejorados
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    position: 'absolute',
    borderRadius: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 6,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  expTitle: {
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  skillItem: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 12,
  },
  skillText: {
    marginTop: 4,
    fontSize: 14,
    color: '#333',
  },
});
