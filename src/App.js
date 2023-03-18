
import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Footer from "./components/Footer";
import Remaining from "./components/Remaining";
import Spent from "./components/Spent";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="w-screen min-h-screen flex flex-col  items-center   text-white bg-slate-900 z-0">
      <div className="gradient-02 z-10"/>
      <div className="gradient-03 z-10"/>
      
      <h1 className="text-3xl font-semibold mt-12"> Expense Tracker </h1>
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-12 z-20">
      <Budget/>
      <Remaining/>
      <Spent/>
      </div>
      <div className=" mt-12 mb-12 flex flex-col md:flex-row justify-center items-center w-full ">
        <div className="w-3/4 md:w-1/2 flex flex-col justify-center items-center mx-12">
        <h3 className="text-2xl  font-medium">Expenses</h3>
        <ExpenseList/>
        </div>
        <div className="w-3/4 md:w-1/3 flex flex-col justify-center items-center mx-12">
        <h3 className="text-2xl  font-medium">Add Expense</h3>
        <AddExpenseForm/>
        </div>
      </div>
      <Footer/>
    </div>
    </AppProvider>
    
  );
}

export default App;
