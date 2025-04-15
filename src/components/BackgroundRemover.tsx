
import React, { useState } from 'react';
import { Button } from './ui/button';
import { removeBackground, loadImage } from '../utils/imageUtils';
import { toast } from 'sonner';

export const BackgroundRemover = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsProcessing(true);
      setOriginalImage(URL.createObjectURL(file));

      const image = await loadImage(file);
      const processedBlob = await removeBackground(image);
      const processedUrl = URL.createObjectURL(processedBlob);
      
      setProcessedImage(processedUrl);
      toast.success('Background removed successfully!');
    } catch (error) {
      console.error('Error processing image:', error);
      toast.error('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {originalImage && (
            <div>
              <h3 className="text-sm font-medium mb-2">Original Image</h3>
              <img
                src={originalImage}
                alt="Original"
                className="w-full h-auto rounded-lg border"
              />
            </div>
          )}

          {processedImage && (
            <div>
              <h3 className="text-sm font-medium mb-2">Processed Image</h3>
              <img
                src={processedImage}
                alt="Processed"
                className="w-full h-auto rounded-lg border"
              />
              <a
                href={processedImage}
                download="processed-image.png"
                className="mt-2 inline-block"
              >
                <Button>Download Processed Image</Button>
              </a>
            </div>
          )}
        </div>

        {isProcessing && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">Processing image...</p>
          </div>
        )}
      </div>
    </div>
  );
};
