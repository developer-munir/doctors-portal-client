import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';
import "react-day-picker/dist/style.css";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto overflow-hidden">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
