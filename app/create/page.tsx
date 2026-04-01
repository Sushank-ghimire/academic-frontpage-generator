"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import IndexPage, { FrontPageForm } from "@/components/pdfx/IndexPage";
import { useMobile } from "@/hooks/useMobile";
import MobilePreview from "@/components/pdfx/MobilePreview";
import { pdf, PDFViewer } from "@react-pdf/renderer";
import { toast } from "sonner";

const initialForm: FrontPageForm = {
  universityName: "TRIBHUVAN UNIVERSITY",
  instituteName: "Institute of Science and Technology",
  collegeName: "BHAKTAPUR MULTIPLE CAMPUS",
  collegeLocation: "DUDHPATI-17, BHAKTAPUR",
  reportType: "A PRACTICAL LAB REPORT OF",
  subjectName: "Data Structures And Algorithm",
  studentName: "Sushank Ghimire",
  program: "B.Sc. CSIT",
  department: "Department of B.Sc. CSIT",
  semester: "3rd Sem",
  rollNumber: "67",
  submittedTo: "Gaurav Bhattarai",
  submissionDate: new Date().toISOString().slice(0, 10),
  footerLeftText: "Bhaktapur Multiple Campus",
  footerRightText: "Tribhuvan University",
  image: null,
};

const CreateFrontPage = () => {
  const [draftForm, setDraftForm] = useState<FrontPageForm>(initialForm);
  const [previewForm, setPreviewForm] = useState<FrontPageForm | null>(null);

  const handleChange = <K extends keyof FrontPageForm>(
    field: K,
    value: FrontPageForm[K],
  ) => {
    setDraftForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    setPreviewForm({ ...draftForm });
  };

  const { isMobile } = useMobile();

  const handleDownload = () => {
    const promise = (async () => {
      const blob = await pdf(<IndexPage form={draftForm} />).toBlob();

      if (!blob || blob.size === 0) {
        throw new Error("Invalid PDF");
      }

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `front-page-${draftForm.program}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);

      return "PDF Generated";
    })();

    toast.promise(promise, {
      loading: "Generating PDF...",
      success: "PDF Download Started",
      error: "Failed to generate PDF",
    });
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden p-4 md:p-6 bg-linear-to-b from-background to-muted/30">
      <section className="h-fit w-full flex flex-col xl:flex-row gap-4">
        <div className="xl:w-1/2 w-full border rounded-xl bg-background p-4 md:p-6 shadow-sm">
          <h1 className="text-2xl font-bold mb-1">Create Lab Report Cover</h1>
          <p className="text-sm text-muted-foreground mb-5">
            Single-subject A4 cover. Edit fields, then click{" "}
            <strong>Generate Preview</strong>.
          </p>

          <div className="grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="universityName">University Name</Label>
                <Input
                  id="universityName"
                  value={draftForm.universityName}
                  onChange={(e) =>
                    handleChange("universityName", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="instituteName">Institute Name</Label>
                <Input
                  id="instituteName"
                  value={draftForm.instituteName}
                  onChange={(e) =>
                    handleChange("instituteName", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="collegeName">College Name</Label>
              <Input
                id="collegeName"
                value={draftForm.collegeName}
                onChange={(e) => handleChange("collegeName", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="collegeLocation">College Location</Label>
              <Input
                id="collegeLocation"
                value={draftForm.collegeLocation}
                onChange={(e) =>
                  handleChange("collegeLocation", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="reportType">Report Type</Label>
              <Input
                id="reportType"
                value={draftForm.reportType}
                onChange={(e) => handleChange("reportType", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="subjectName">Subject Name (single)</Label>
              <Input
                id="subjectName"
                value={draftForm.subjectName}
                onChange={(e) => handleChange("subjectName", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="studentName">Student Name</Label>
                <Input
                  id="studentName"
                  value={draftForm.studentName}
                  onChange={(e) => handleChange("studentName", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="program">Program</Label>
                <Input
                  id="program"
                  value={draftForm.program}
                  onChange={(e) => handleChange("program", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="semester">Semester</Label>
                <Input
                  id="semester"
                  value={draftForm.semester}
                  onChange={(e) => handleChange("semester", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input
                  id="rollNumber"
                  value={draftForm.rollNumber}
                  onChange={(e) => handleChange("rollNumber", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="submissionDate">Submission Date</Label>
                <Input
                  id="submissionDate"
                  type="date"
                  value={draftForm.submissionDate}
                  onChange={(e) =>
                    handleChange("submissionDate", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="submittedTo">Submitted To</Label>
              <Input
                id="submittedTo"
                value={draftForm.submittedTo}
                onChange={(e) => handleChange("submittedTo", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={draftForm.department}
                onChange={(e) => handleChange("department", e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="footerLeftText">Footer Left Text</Label>
                <Input
                  id="footerLeftText"
                  value={draftForm.footerLeftText}
                  onChange={(e) =>
                    handleChange("footerLeftText", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="footerRightText">Footer Right Text</Label>
                <Input
                  id="footerRightText"
                  value={draftForm.footerRightText}
                  onChange={(e) =>
                    handleChange("footerRightText", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="logo">Logo (optional)</Label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                multiple={false}
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  handleChange("image", file);
                }}
              />
            </div>

            <div className="flex gap-2 pt-2">
              <Button onClick={handleGenerate}>Generate Preview</Button>
              <Button onClick={handleDownload}>Download</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setDraftForm(initialForm);
                  setPreviewForm(null);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2 w-full h-[50vh] md:h-screen border rounded-xl bg-background overflow-hidden shadow-sm">
          {previewForm ? (
            isMobile ? (
              <MobilePreview form={previewForm} />
            ) : (
              <PDFViewer
                style={{ width: "100%", height: "100%", color: "black" }}
              >
                <IndexPage form={previewForm} />
              </PDFViewer>
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm px-6 text-center">
              Preview will appear here after clicking “Generate Preview”.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CreateFrontPage;
