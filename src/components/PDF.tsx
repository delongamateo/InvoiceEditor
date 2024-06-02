import React, { FC } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    color: "black",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  downloadButton: {
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    borderRadius: 6,
    textAlign: "center",
  },
});

interface PDFProps {
  value: string;
}

const PDF: FC<PDFProps> = ({ value }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Name: {value}</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
};

interface DownloadPDFProps {
  document: JSX.Element;
  fileName: string;
}

export const DownloadPDF: FC<DownloadPDFProps> = ({ document, fileName }) => {
  return (
    <PDFDownloadLink
      document={document}
      fileName={fileName}
      style={styles.downloadButton}
    >
      Download PDF
    </PDFDownloadLink>
  );
};

export default PDF;
