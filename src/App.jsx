
import TempConverter from './components/temp_converter';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">Temperature Converter</h1>
        <TempConverter />
      </div>
    </div>
  );
}

export default App;

