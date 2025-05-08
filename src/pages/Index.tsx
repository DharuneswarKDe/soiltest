
import { Button } from "@/components/ui/button";
import LocationSelector from "@/components/LocationSelector";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800">Soil Information Portal</h1>
          <nav>
            <Button variant="outline">Contact</Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12 py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Soil Information
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Select your district and village to discover soil type, suitable irrigation methods, 
              and recommended crops for your location.
            </p>
          </section>

          {/* Location Selector */}
          <section className="mb-16 flex justify-center">
            <LocationSelector />
          </section>

          {/* Features */}
          <div className="mb-8 text-center">
  <a
    href="https://aed.tn.gov.in/en/schemes/water-management/pmksy-mimis-swma/#" // Replace with the actual link if different
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
  >
    Explore TN Govt Irrigation Schemes
  </a>
</div>
          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Soil Analysis</h3>
              <p className="text-gray-600">Get detailed information about your local soil type</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Crop Recommendations</h3>
              <p className="text-gray-600">Discover which crops grow best in your soil</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Irrigation Methods</h3>
              <p className="text-gray-600">Learn about appropriate irrigation techniques</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Soil Information Portal. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-blue-200">Terms</a>
              <a href="#" className="text-white hover:text-blue-200">Privacy</a>
              <a href="#" className="text-white hover:text-blue-200">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
