
import { useState, useEffect } from "react";
import { getDistricts, getVillagesByDistrict, getSoilInfoByLocation } from "@/services/csvDataService";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "./ui/separator";

const LocationSelector = () => {
  const [districts, setDistricts] = useState<string[]>([]);
  const [villages, setVillages] = useState<string[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedVillage, setSelectedVillage] = useState<string>("");
  const [soilInfo, setSoilInfo] = useState<{ 
    soilType: string, 
    image: string,
    irrigationTypes: string[],
    suitableCrops: string[]
  } | null>(null);

  // Load districts when component mounts
  useEffect(() => {
    const availableDistricts = getDistricts();
    setDistricts(availableDistricts);
  }, []);

  // Update villages when district changes
  useEffect(() => {
    if (selectedDistrict) {
      const availableVillages = getVillagesByDistrict(selectedDistrict);
      setVillages(availableVillages);
      setSelectedVillage(""); // Reset village selection
      setSoilInfo(null); // Reset soil info
    } else {
      setVillages([]);
    }
  }, [selectedDistrict]);

  // Update soil info when village changes
  useEffect(() => {
    if (selectedDistrict && selectedVillage) {
      const info = getSoilInfoByLocation(selectedDistrict, selectedVillage);
      setSoilInfo(info);
    }
  }, [selectedDistrict, selectedVillage]);

  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
  };

  const handleVillageChange = (value: string) => {
    setSelectedVillage(value);
  };

  return (
    <Card className="w-full max-w-3xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl">Soil Information Lookup</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="district">District</Label>
          <Select value={selectedDistrict} onValueChange={handleDistrictChange}>
            <SelectTrigger id="district" className="w-full">
              <SelectValue placeholder="Select a district" />
            </SelectTrigger>
            <SelectContent>
              {districts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="village">Village</Label>
          <Select 
            value={selectedVillage} 
            onValueChange={handleVillageChange} 
            disabled={!selectedDistrict}
          >
            <SelectTrigger id="village" className="w-full">
              <SelectValue 
                placeholder={selectedDistrict ? "Select a village" : "First select a district"} 
              />
            </SelectTrigger>
            <SelectContent>
              {villages.map((village) => (
                <SelectItem key={village} value={village}>
                  {village}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedDistrict && selectedVillage && soilInfo && (
          <div className="mt-8 pt-4 border-t border-gray-100">
            <h3 className="text-xl font-bold text-center mb-5">{soilInfo.soilType.toUpperCase()} SOIL</h3>
            
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-md h-56 overflow-hidden rounded-md border border-gray-200">
                <img 
                  src={soilInfo.image} 
                  alt={`${soilInfo.soilType} soil`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 uppercase text-center">Types of Irrigation Suitable</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {soilInfo.irrigationTypes.map((item, index) => (
                    <li key={index} className="font-medium">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 uppercase text-center">Suitable Crops That Can Be Grown</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {soilInfo.suitableCrops.map((item, index) => (
                    <li key={index} className="font-medium">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-xs text-gray-500 text-center">
        <p>Data updated with Tamil Nadu soil information</p>
      </CardFooter>
    </Card>
  );
};

export default LocationSelector;
