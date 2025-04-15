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
  return;
};