
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Award, ChevronRight } from "lucide-react";

export const PhonePreview = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev === 0 ? 1 : 0));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto mt-12 lg:mt-0">
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] h-[580px] bg-[#111] rounded-[36px] p-3 shadow-xl transform rotate-0 lg:rotate-[5deg] transition-all hover:rotate-0 duration-300">
        <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[120px] h-[24px] bg-[#111] rounded-b-[16px] z-10"></div>
        
        {/* Phone screen */}
        <div className="w-full h-full bg-[#F9FAFC] rounded-[28px] overflow-hidden">
          {/* App header */}
          <div className="bg-[#3366FF] text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/862e4806-f7e8-408a-aaec-acf47b417eab.png" 
                alt="Scryptex Logo" 
                className="w-6 h-6 mr-2"
              />
              <span className="font-semibold">Scryptex</span>
            </div>
            <div className="text-xs">Telegram Mini App</div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b">
            <div 
              className={`flex-1 text-center py-2 text-sm font-medium cursor-pointer ${activeSlide === 0 ? 'text-[#3366FF] border-b-2 border-[#3366FF]' : 'text-gray-500'}`}
              onClick={() => setActiveSlide(0)}
            >
              Analyze
            </div>
            <div 
              className={`flex-1 text-center py-2 text-sm font-medium cursor-pointer ${activeSlide === 1 ? 'text-[#3366FF] border-b-2 border-[#3366FF]' : 'text-gray-500'}`}
              onClick={() => setActiveSlide(1)}
            >
              Airdrops
            </div>
          </div>
          
          {/* Content slides */}
          <div className="p-4 h-[460px] overflow-y-auto">
            {/* Analysis Form - Slide 1 */}
            <div className={`transition-opacity duration-500 ${activeSlide === 0 ? 'opacity-100' : 'opacity-0 hidden'}`}>
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold mb-3">Analyze Project</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Project Name</label>
                      <div className="flex border rounded-md overflow-hidden">
                        <input type="text" placeholder="e.g., LayerZero" className="flex-1 px-3 py-2 text-sm" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Website</label>
                      <div className="flex border rounded-md overflow-hidden">
                        <input type="text" placeholder="https://" className="flex-1 px-3 py-2 text-sm" />
                      </div>
                    </div>
                    <Button 
                      size="sm"
                      className="w-full bg-[#3366FF] hover:bg-[#3366FF]/90 mt-2"
                    >
                      Analyze <Search className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/60 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold mb-3">Analysis Results</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-md border">
                      <h4 className="text-xs font-medium text-gray-700">Team Summary</h4>
                      <p className="text-xs mt-1">Strong team with previous successful projects. Major VC backing.</p>
                    </div>
                    <div className="p-3 bg-white rounded-md border">
                      <h4 className="text-xs font-medium text-gray-700">Tokenomics</h4>
                      <p className="text-xs mt-1">Fair initial distribution, 30% reserved for community rewards.</p>
                    </div>
                    <div className="p-3 bg-[#E6F4EA] rounded-md border border-green-200">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-medium text-gray-700">Airdrop Potential</h4>
                        <span className="text-green-600 text-xs font-medium">Confirmed ✅</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Airdrops List - Slide 2 */}
            <div className={`transition-opacity duration-500 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
              <h3 className="text-sm font-semibold mb-3">Current Airdrops</h3>
              <div className="space-y-3">
                {[1, 2, 3].map(idx => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Award className="h-5 w-5 text-[#3366FF]" />
                          </div>
                          <div className="ml-3">
                            <h4 className="text-sm font-medium">Project {idx}</h4>
                            <p className="text-xs text-gray-500">Est. Value: $500-2000</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button 
                  variant="outline"
                  size="sm"
                  className="w-full border-dashed border-[#3366FF] text-[#3366FF] hover:bg-[#F5F9FF] mt-2"
                >
                  View All Airdrops <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div 
          className={`w-2 h-2 rounded-full ${activeSlide === 0 ? 'bg-[#3366FF]' : 'bg-gray-300'}`} 
          onClick={() => setActiveSlide(0)}
        ></div>
        <div 
          className={`w-2 h-2 rounded-full ${activeSlide === 1 ? 'bg-[#3366FF]' : 'bg-gray-300'}`}
          onClick={() => setActiveSlide(1)}
        ></div>
      </div>
    </div>
  );
};
export default PhonePreview;
