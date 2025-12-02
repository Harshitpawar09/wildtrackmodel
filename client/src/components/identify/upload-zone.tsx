import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Upload, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface UploadZoneProps {
  onImageSelect: (file: File) => void;
}

export function UploadZone({ onImageSelect }: UploadZoneProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg", ".webp"],
    },
    maxFiles: 1,
  });

  if (preview) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl mx-auto"
      >
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
          <div className="relative aspect-video bg-black/5">
             <img src={preview} alt="Preview" className="w-full h-full object-contain" />
             <Button
               variant="destructive"
               size="icon"
               className="absolute top-2 right-2 rounded-full h-8 w-8"
               onClick={() => {
                 setPreview(null);
                 setFile(null);
               }}
             >
               <X className="h-4 w-4" />
             </Button>
          </div>
          <div className="p-6 bg-card border-t border-border flex justify-between items-center">
            <div>
              <p className="font-medium text-foreground">Image Selected</p>
              <p className="text-sm text-muted-foreground">Ready for analysis</p>
            </div>
            <Button onClick={() => file && onImageSelect(file)} size="lg" className="gap-2 rounded-full">
              Analyze Footprint <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={cn(
        "group relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-300 cursor-pointer w-full max-w-xl mx-auto",
        isDragActive
          ? "border-primary bg-primary/5 scale-[1.02]"
          : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30"
      )}
    >
      <input {...getInputProps()} />
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
        <Upload className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        Upload Footprint Image
      </h3>
      <p className="text-muted-foreground max-w-xs mx-auto mb-6">
        Drag and drop your image here, or click to browse. Supports JPG, PNG.
      </p>
      <Button variant="secondary" className="rounded-full pointer-events-none">
        Select Image
      </Button>
    </div>
  );
}
