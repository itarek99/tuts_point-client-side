import { Document, Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  section: {
    margin: 15,
    padding: 20,
    flexGrow: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
  },

  topic: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: 400,
  },

  description: {
    fontSize: 14,
    fontWeight: 400,
  },
});

const Pdf = ({ title, image, description, topics }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          <Image src={image}></Image>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.heading}>What you'll learn</Text>
          {topics.map((topic, i) => (
            <Text key={i} style={styles.topic}>
              &#x2022; {topic}
            </Text>
          ))}
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Page>
    </Document>
  );
};
export default Pdf;
