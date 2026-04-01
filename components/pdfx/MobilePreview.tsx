"use client";

import { pdf } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import IndexPage, { type FrontPageForm } from "./IndexPage";
import { toast } from "sonner";

interface MobilePreviewProps {
  form: FrontPageForm;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ form }) => {
  const handleOpen = () => {
    const promise = (async () => {
      const blob = await pdf(<IndexPage form={form} />).toBlob();

      if (!blob || blob.size === 0) {
        throw new Error("Invalid PDF");
      }

      const url = URL.createObjectURL(blob);

      const newTab = window.open();
      if (newTab) {
        newTab.location.href = url;
      } else {
        window.location.href = url;
      }

      return "PDF opened";
    })();

    toast.promise(promise, {
      loading: "Generating PDF...",
      success: "Preview opened",
      error: "Failed to generate PDF",
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <p className="text-sm text-muted-foreground text-center px-4">
        Mobile devices don’t support inline preview.
      </p>
      <Button onClick={handleOpen}>Open PDF Preview</Button>{" "}
    </div>
  );
};

export default MobilePreview;
