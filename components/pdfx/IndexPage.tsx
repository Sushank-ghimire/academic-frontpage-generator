"use client";

import { useEffect, useState } from "react";
import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  View,
  Image,
} from "@react-pdf/renderer";
import { Text } from "@/components/pdfx/text/pdfx-text";

export type FrontPageForm = {
  universityName: string;
  instituteName: string;
  collegeName: string;
  collegeLocation: string;
  reportType: string;
  subjectName: string;
  studentName: string;
  program: string;
  department: string;
  semester: string;
  rollNumber: string;
  submittedTo: string;
  submissionDate: string;
  footerLeftText: string;
  footerRightText: string;
  image: File | null;
};

interface IndexPageProps {
  form: FrontPageForm;
}

const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontSize: 11,
  },
  card: {
    flex: 1,
    padding: 18,
    justifyContent: "flex-start",
  },
  center: {
    textAlign: "center",
    alignSelf: "center",
  },
  uni: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  institute: {
    fontSize: 13,
    marginTop: 2,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 8,
    alignSelf: "center",
    objectFit: "contain",
  },
  college: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 2,
  },
  location: {
    fontSize: 10,
    marginTop: 2,
  },
  dividerWrap: {
    marginTop: 10,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  lineShort: {
    width: 1.5,
    height: 65,
    backgroundColor: "black",
    borderRadius: 2,
  },
  lineLong: {
    width: 1.5,
    height: 100,
    backgroundColor: "black",
    borderRadius: 2,
  },
  lines: {
    width: 115,
    height: 115,
    marginVertical: 8,
    alignSelf: "center",
    objectFit: "contain",
  },
  reportType: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 14,
    fontWeight: "500",
  },
  subject: {
    textAlign: "center",
    fontSize: 14,
    marginVertical: 6,
  },
  infoSection: {
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  col: {
    width: "48%",
    borderRadius: 8,
    padding: 10,
  },
  colTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "left",
  },
  rowText: {
    marginTop: 3,
    fontSize: 11,
  },
  date: {
    marginTop: 12,
    fontSize: 10,
    marginLeft: 12,
  },
  footer: {
    marginTop: 28,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
  },
  capitalize: {
    textTransform: "capitalize",
  },
});

const IndexPage: React.FC<IndexPageProps> = ({ form }) => {
  const [logoSrc, setLogoSrc] = useState<string>("/tu.png");

  useEffect(() => {
    if (!form.image) {
      setLogoSrc("/tu.png");
      return;
    }

    const objectUrl = URL.createObjectURL(form.image);
    setLogoSrc(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [form.image]);

  return (
    <PDFViewer style={{ width: "100%", height: "100%", color: "black" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.card}>
            <Text
              style={{
                ...styles.center,
                ...styles.uni,
              }}
            >
              {form.universityName.toUpperCase()}
            </Text>
            <Text
              style={{
                ...styles.center,
                ...styles.institute,
              }}
            >
              {form.instituteName}
            </Text>

            <Image src={logoSrc} style={styles.logo} />

            <Text
              style={{
                ...styles.center,
                ...styles.college,
              }}
            >
              {form.collegeName}
            </Text>
            <Text
              style={{
                ...styles.center,
                ...styles.location,
              }}
            >
              {form.collegeLocation}
            </Text>

            <View style={styles.dividerWrap}>
              {/*<View style={styles.lineShort} />
              <View style={styles.lineLong} />
              <View style={styles.lineShort} />*/}

              <Image src={"/lines.png"} style={styles.lines} />
            </View>

            <Text style={styles.reportType}>{form.reportType}</Text>
            <Text style={styles.subject}>{form.subjectName}</Text>

            <View style={styles.infoSection}>
              <View style={styles.col}>
                <Text style={styles.colTitle}>Submitted By:</Text>
                <Text style={styles.rowText}>Name: {form.studentName}</Text>
                <Text style={styles.rowText}>Program: {form.program}</Text>
                <Text style={styles.rowText}>Semester: {form.semester}</Text>
                <Text style={styles.rowText}>Roll No.: {form.rollNumber}</Text>

                <Text style={styles.rowText}>
                  Submission Date: {form.submissionDate}
                </Text>
              </View>

              <View style={styles.col}>
                <Text style={styles.colTitle}>Submitted To:</Text>
                <Text style={styles.rowText}>{form.submittedTo}</Text>
                <Text style={styles.rowText}>{form.department}</Text>
                <Text
                  style={{
                    ...styles.rowText,
                    ...styles.capitalize,
                  }}
                >
                  {form.collegeName}
                </Text>
                <Text
                  style={{
                    ...styles.rowText,
                    ...styles.capitalize,
                  }}
                >
                  {form.universityName}
                </Text>
                <Text style={styles.rowText}>
                  .......................................
                </Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default IndexPage;
