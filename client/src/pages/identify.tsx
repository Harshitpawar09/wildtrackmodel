import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { UploadZone } from "@/components/identify/upload-zone";
import { AnalysisView } from "@/components/identify/analysis-view";

export default function Identify() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="container px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Identify Species
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload a clear photo of the animal footprint. For best results, ensure the photo is taken from directly above and includes a reference for scale if possible.
          </p>
        </div>

        <div className="min-h-[500px]">
          {!file ? (
            <UploadZone onImageSelect={setFile} />
          ) : (
            <AnalysisView 
              imageFile={file} 
              onReset={() => setFile(null)} 
            />
          )}
        </div>
      </main>
    </div>
  );
}
