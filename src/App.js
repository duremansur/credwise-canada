import React, { useState } from 'react';
import { 
  CreditCard, 
  DollarSign, 
  Users, 
  BookOpen, 
  ArrowRight,
  ArrowLeft,
  Check,
  Globe,
  Heart,
  Baby,
  GraduationCap,
  Home,
  Car,
  Plane,
  Moon,
  Sun,
  Menu,
  X,
  TrendingUp,
  Shield,
  Calculator,
  Send,
  PiggyBank,
  Target,
  Award,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Plus,
  Minus,
  Edit,
  Save,
  AlertCircle,
  CheckCircle,
  Settings,
  LogOut,
  Bell,
  Search
} from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    arrivalDate: '',
    familySize: '',
    goals: [],
    income: '',
    housing: '',
    creditGoal: ''
  });

  // Mock user data for dashboard
  const [userData, setUserData] = useState({
    creditScore: 680,
    budgetUsed: 1850,
    budgetTotal: 2500,
    savingsGoal: 5000,
    currentSavings: 1200,
    recentTransactions: [
      { id: 1, desc: 'Grocery Store', amount: -89.50, date: '2024-08-05' },
      { id: 2, desc: 'Salary Deposit', amount: 2800.00, date: '2024-08-01' },
      { id: 3, desc: 'Rent Payment', amount: -1200.00, date: '2024-08-01' },
      { id: 4, desc: 'Internet Bill', amount: -65.00, date: '2024-07-30' }
    ]
  });

  const countries = [
    'Pakistan', 'India', 'Philippines', 'China', 'Nigeria', 
    'Iran', 'Syria', 'Afghanistan', 'Bangladesh', 'Sri Lanka', 'Other'
  ];

  const goals = [
    { id: 'credit', label: 'Build Credit Score', icon: CreditCard },
    { id: 'budget', label: 'Budget Management', icon: Calculator },
    { id: 'transfer', label: 'Send Money Home', icon: Send },
    { id: 'education', label: 'Financial Education', icon: BookOpen },
    { id: 'housing', label: 'Buy a Home', icon: Home },
    { id: 'business', label: 'Start a Business', icon: TrendingUp }
  ];

  const steps = [
    'Welcome',
    'Personal Info', 
    'Background',
    'Goals',
    'Financial Status',
    'Complete'
  ];

  // Navigation items for logged-in users
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'credit', label: 'Credit Builder', icon: CreditCard },
    { id: 'budget', label: 'Budget', icon: Calculator },
    { id: 'transfer', label: 'Money Transfer', icon: Send },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoalToggle = (goalId) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId) 
        ? prev.goals.filter(g => g !== goalId)
        : [...prev.goals, goalId]
    }));
  };

  const completeOnboarding = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentStep(0);
    setCurrentPage('dashboard');
  };

  // Onboarding Components
  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${index <= currentStep 
                ? 'bg-blue-600 text-white' 
                : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
              }`}>
              {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-16 h-1 mx-2 ${
                index < currentStep ? 'bg-blue-600' : darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
      </p>
    </div>
  );

  const WelcomeStep = () => (
    <div className="text-center space-y-6">
      {/* Demo Notice */}
<div className={`p-4 rounded-xl border-l-4 border-blue-500 ${darkMode ? 'bg-blue-900/20 border-blue-600' : 'bg-blue-50 border-blue-500'} mb-6`}>
  <div className="flex items-start space-x-3">
    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
    <div>
      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Portfolio Demo Application</h4>
      <p className="text-sm text-blue-700 dark:text-blue-300">
        This is a demonstration of CredWise Canada built for portfolio purposes. 
        All data is simulated. You can explore features, skip to dashboard, or use demo walkthrough.
      </p>
    </div>
  </div>
</div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to CredWise Canada! 🇨🇦
        </h1>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Your financial journey in Canada starts here
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} border ${darkMode ? 'border-gray-700' : 'border-blue-100'}`}>
          <CreditCard className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
          <h3 className="font-semibold mb-2">Build Credit From Zero</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Even without Canadian credit history, we'll help you build a strong credit score
          </p>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-green-50'} border ${darkMode ? 'border-gray-700' : 'border-green-100'}`}>
          <Globe className="w-12 h-12 text-green-600 mb-4 mx-auto" />
          <h3 className="font-semibold mb-2">Cultural Context</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Financial advice tailored to your home country and Canadian experience
          </p>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-purple-50'} border ${darkMode ? 'border-gray-700' : 'border-purple-100'}`}>
          <Users className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
          <h3 className="font-semibold mb-2">Community Support</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Connect with other newcomers on similar financial journeys
          </p>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-orange-50'} border ${darkMode ? 'border-gray-700' : 'border-orange-100'}`}>
          <BookOpen className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
          <h3 className="font-semibold mb-2">Education First</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Learn the Canadian financial system with guided tutorials
          </p>
        </div>
      </div>

      <div className="space-y-4">
  <button
    onClick={handleNext}
    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium flex items-center mx-auto transition-all duration-200 transform hover:scale-105"
  >
    Get Started <ArrowRight className="w-5 h-5 ml-2" />
  </button>
  
  <div className="flex justify-center space-x-6">
    <button
      onClick={completeOnboarding}
      className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline transition-colors"
    >
      Skip to Dashboard →
    </button>
    
    <button
      onClick={() => {
        setFormData({
          name: 'Demo User',
          email: 'demo@example.com',
          country: 'Pakistan',
          arrivalDate: '6-months-to-1-year',
          familySize: 'couple',
          goals: ['credit', 'budget', 'transfer'],
          income: '4000-6000',
          housing: 'renting-apartment',
          creditGoal: 'good-credit'
        });
        handleNext();
      }}
      className="text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 underline transition-colors"
    >
      Demo Walkthrough →
    </button>
  </div>
</div>
    </div>
  );

  const PersonalInfoStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Tell us about yourself</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          This helps us personalize your experience
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            placeholder="your.email@example.com"
          />
        </div>
      </div>
    </div>
  );

  const BackgroundStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Your Background</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Help us understand your journey to Canada
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Country of Origin
          </label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="">Select your country</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            When did you arrive in Canada?
          </label>
          <select
            value={formData.arrivalDate}
            onChange={(e) => setFormData({...formData, arrivalDate: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="">Select timeframe</option>
            <option value="less-than-6-months">Less than 6 months ago</option>
            <option value="6-months-to-1-year">6 months to 1 year ago</option>
            <option value="1-to-2-years">1 to 2 years ago</option>
            <option value="2-to-5-years">2 to 5 years ago</option>
            <option value="more-than-5-years">More than 5 years ago</option>
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Family Size
          </label>
          <select
            value={formData.familySize}
            onChange={(e) => setFormData({...formData, familySize: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="">Select family size</option>
            <option value="just-me">Just me</option>
            <option value="couple">Couple</option>
            <option value="family-with-children">Family with children</option>
            <option value="large-family">Large family (5+ people)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const GoalsStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">What are your financial goals?</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Select all that apply - we'll customize your experience
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = formData.goals.includes(goal.id);
          
          return (
            <div
              key={goal.id}
              onClick={() => handleGoalToggle(goal.id)}
              className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  : darkMode
                    ? 'border-gray-700 bg-gray-800 hover:border-gray-600'
                    : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-4">
                <Icon className={`w-8 h-8 ${isSelected ? 'text-blue-600' : darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <div>
                  <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {goal.label}
                  </h3>
                </div>
                {isSelected && <Check className="w-5 h-5 text-blue-600 ml-auto" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const FinancialStatusStep = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Financial Situation</h2>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          This helps us provide better recommendations
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Monthly Income Range (CAD)
          </label>
          <select
            value={formData.income}
            onChange={(e) => setFormData({...formData, income: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="">Select income range</option>
            <option value="under-2000">Under $2,000</option>
            <option value="2000-4000">$2,000 - $4,000</option>
            <option value="4000-6000">$4,000 - $6,000</option>
            <option value="6000-8000">$6,000 - $8,000</option>
            <option value="over-8000">Over $8,000</option>
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Housing Situation
          </label>
          <select
            value={formData.housing}
            onChange={(e) => setFormData({...formData, housing: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="">Select housing situation</option>
            <option value="renting-apartment">Renting an apartment</option>
            <option value="renting-room">Renting a room</option>
            <option value="living-with-family">Living with family/friends</option>
            <option value="own-home">Own a home</option>
            <option value="temporary-housing">Temporary housing</option>
          </select>
        </div>

        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Credit Score Goal
          </label>
          <select
            value={formData.creditGoal}
            onChange={(e) => setFormData({...formData, creditGoal: e.target.value})}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
          >
            <option value="">Select target credit score</option>
            <option value="basic-credit">Build basic credit (600+)</option>
            <option value="good-credit">Achieve good credit (700+)</option>
            <option value="excellent-credit">Reach excellent credit (800+)</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>
    </div>
  );

  const CompleteStep = () => (
    <div className="text-center space-y-6">
      <div className="mb-8">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Welcome to CredWise Canada!</h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Your personalized financial journey is ready to begin
        </p>
      </div>

      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-blue-50'} border ${darkMode ? 'border-gray-700' : 'border-blue-100'}`}>
        <h3 className="font-semibold mb-4">Your Personalized Plan Includes:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-blue-600" />
            <span className="text-sm">Credit building roadmap</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-green-600" />
            <span className="text-sm">Personalized budget tools</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <span className="text-sm">Educational resources</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-orange-600" />
            <span className="text-sm">Community connections</span>
          </div>
        </div>
      </div>

      <button
        onClick={completeOnboarding}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
      >
        Enter Your Dashboard
      </button>
    </div>
  );

  // Dashboard Components
  const Dashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, {formData.name || 'User'}!</h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Here's your financial overview
          </p>
        </div>
        <div className="flex space-x-2">
          <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Bell className="w-5 h-5" />
          </button>
          <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <CreditCard className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">{userData.creditScore}</span>
          </div>
          <p className="font-medium">Credit Score</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>+25 this month</p>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <Calculator className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-green-600">${userData.budgetUsed}</span>
          </div>
          <p className="font-medium">Budget Used</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>of ${userData.budgetTotal}</p>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <PiggyBank className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">${userData.currentSavings}</span>
          </div>
          <p className="font-medium">Savings</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Goal: ${userData.savingsGoal}</p>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8 text-orange-600" />
            <span className="text-2xl font-bold text-orange-600">92%</span>
          </div>
          <p className="font-medium">Financial Health</p>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Excellent</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {userData.recentTransactions.map(transaction => (
            <div key={transaction.id} className="flex justify-between items-center py-2">
              <div>
                <p className="font-medium">{transaction.desc}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{transaction.date}</p>
              </div>
              <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button 
            onClick={() => setCurrentPage('credit')}
            className="p-4 text-left rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
          >
            <CreditCard className="w-6 h-6 text-blue-600 mb-2" />
            <p className="font-medium">Check Credit Score</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">View your latest report</p>
          </button>
          
          <button 
            onClick={() => setCurrentPage('budget')}
            className="p-4 text-left rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
          >
            <Calculator className="w-6 h-6 text-green-600 mb-2" />
            <p className="font-medium">Update Budget</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Manage your spending</p>
          </button>
          
          <button 
            onClick={() => setCurrentPage('transfer')}
            className="p-4 text-left rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
          >
            <Send className="w-6 h-6 text-purple-600 mb-2" />
            <p className="font-medium">Send Money</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Transfer to home country</p>
          </button>
        </div>
      </div>
    </div>
  );

  const CreditBuilder = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Credit Builder</h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Build your Canadian credit history step by step
          </p>
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className={`p-4 rounded-xl border-l-4 border-yellow-500 ${darkMode ? 'bg-yellow-900/20 border-yellow-600' : 'bg-yellow-50 border-yellow-500'}`}>
        <div className="flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Important Disclaimer</h4>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Credit scores shown are estimates based on the information you provide and connected accounts. 
              Actual credit scores may vary and depend on multiple factors including payment history, credit utilization, 
              and data from credit bureaus (Equifax, TransUnion). This tool provides educational guidance only and 
              should not be considered as professional financial advice.
            </p>
          </div>
        </div>
      </div>

      {/* Data Sources & Connections */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Your Data Sources</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg`}>
            <h4 className="font-medium mb-3 flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              Connected Accounts
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">RBC Banking</span>
                <span className="text-xs text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded">Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">PC Financial Mastercard</span>
                <span className="text-xs text-green-600 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded">Connected</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Rent Reporting (RentTrack)</span>
                <span className="text-xs text-blue-600 bg-blue-100 dark:bg-blue-900/20 px-2 py-1 rounded">Pending</span>
              </div>
            </div>
            <button className="w-full mt-3 text-sm bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              + Connect New Account
            </button>
          </div>

          <div className={`p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg`}>
            <h4 className="font-medium mb-3 flex items-center">
              <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
              How We Build Your Profile
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Bank transactions analyze spending patterns</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Credit card payments track payment history</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Rent payments reported to credit bureaus</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Official credit reports from Equifax/TransUnion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Credit Score */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Your Estimated Credit Score</h3>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">{userData.creditScore}</div>
            <div className="text-sm text-green-600">+25 this month</div>
            <div className="text-xs text-gray-500">Last updated: Aug 5, 2024</div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(userData.creditScore / 850) * 100}%` }}
          ></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm text-gray-500">Poor</div>
            <div className="text-sm">300-579</div>
          </div>
          <div>
            <div className="text-sm text-blue-600 font-medium">Good</div>
            <div className="text-sm">580-739</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Excellent</div>
            <div className="text-sm">740-850</div>
          </div>
        </div>

        {/* Account Connection Options */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-medium mb-3">Connect More Accounts to Improve Accuracy</h4>
          <div className="grid md:grid-cols-2 gap-3">
            <button className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xs">RBC</span>
                </div>
                <span className="text-sm">Royal Bank of Canada</span>
              </div>
              <Plus className="w-4 h-4 text-blue-600" />
            </button>
            
            <button className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">TD</span>
                </div>
                <span className="text-sm">TD Bank</span>
              </div>
              <Plus className="w-4 h-4 text-blue-600" />
            </button>
            
            <button className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <div className="flex items-center space-x-3">
                <Home className="w-6 h-6 text-purple-600" />
                <span className="text-sm">Rent Reporting Services</span>
              </div>
              <Plus className="w-4 h-4 text-blue-600" />
            </button>
            
            <button className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <div className="flex items-center space-x-3">
                <CreditCard className="w-6 h-6 text-orange-600" />
                <span className="text-sm">Credit Cards</span>
              </div>
              <Plus className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Credit Building Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className="text-lg font-semibold mb-4">Quick Wins</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium">Set up rent reporting</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+15-30 points</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">Apply for secured credit card</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+20-40 points</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-medium">Pay all bills on time</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+10-25 points</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h3 className="text-lg font-semibold mb-4">Credit Factors</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Payment History</span>
                <span className="text-sm">95%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Credit Utilization</span>
                <span className="text-sm">23%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Credit Age</span>
                <span className="text-sm">8 months</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Content */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-lg font-semibold mb-4">Learn About Credit</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-medium mb-2">Credit Basics for Newcomers</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Understanding Canadian credit system</p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <Shield className="w-8 h-8 text-green-600 mb-2" />
            <h4 className="font-medium mb-2">Building Credit Safely</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avoid common mistakes</p>
          </div>
          
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-medium mb-2">Advanced Strategies</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Optimize your credit profile</p>
          </div>
        </div>
      </div>
    </div>
  );

  const BudgetManager = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Budget Manager</h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Track your spending and reach your financial goals
          </p>
        </div>
      </div>

      {/* Budget Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">${userData.budgetTotal - userData.budgetUsed}</div>
            <p className="font-medium">Remaining Budget</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">This month</p>
          </div>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">${userData.budgetUsed}</div>
            <p className="font-medium">Spent</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">of ${userData.budgetTotal}</p>
          </div>
        </div>
        
        <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{Math.round((userData.budgetUsed / userData.budgetTotal) * 100)}%</div>
            <p className="font-medium">Budget Used</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">On track</p>
          </div>
        </div>
      </div>

      {/* Budget Categories */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Budget Categories</h3>
        <div className="space-y-4">
          {[
            { name: 'Housing', budget: 1200, spent: 1200, color: 'blue' },
            { name: 'Food & Groceries', budget: 400, spent: 320, color: 'green' },
            { name: 'Transportation', budget: 300, spent: 180, color: 'purple' },
            { name: 'Entertainment', budget: 200, spent: 150, color: 'orange' },
            { name: 'Utilities', budget: 400, spent: 200, color: 'red' }
          ].map((category, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{category.name}</span>
                <span className="text-sm">${category.spent} / ${category.budget}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-${category.color}-500 h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${Math.min((category.spent / category.budget) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spending Tips */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-lg font-semibold mb-4">Money-Saving Tips for Newcomers</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Shop Smart</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Use apps like Flipp to compare grocery prices across stores</p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Public Transportation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Monthly passes often cheaper than daily tickets</p>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Banking Fees</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Look for newcomer banking packages with waived fees</p>
          </div>
          
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Winter Prep</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Buy winter clothes at end-of-season sales</p>
          </div>
        </div>
      </div>
    </div>
  );

  const MoneyTransfer = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Money Transfer</h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Send money home with the best rates
          </p>
        </div>
      </div>

      {/* Transfer Form */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Send Money</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                You Send (CAD)
              </label>
              <input
                type="number"
                defaultValue="1000"
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                To Country
              </label>
              <select className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}>
                <option>Pakistan</option>
                <option>India</option>
                <option>Philippines</option>
                <option>Bangladesh</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Recipient Gets (PKR)
              </label>
              <input
                type="text"
                value="205,000 PKR"
                readOnly
                className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} focus:outline-none`}
              />
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-sm">Exchange Rate:</span>
                <span className="text-sm font-medium">1 CAD = 205.00 PKR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Transfer Fee:</span>
                <span className="text-sm font-medium">$4.99</span>
              </div>
            </div>
          </div>
        </div>
        
        <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
          Continue Transfer
        </button>
      </div>

      {/* Rate Comparison */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Compare Transfer Services</h3>
        <div className="space-y-4">
          {[
            { name: 'Wise', rate: '205.00', fee: '$4.99', time: '1-2 days', rating: 4.8 },
            { name: 'Remitly', rate: '203.50', fee: '$3.99', time: '1-3 days', rating: 4.6 },
            { name: 'Western Union', rate: '201.20', fee: '$8.99', time: '1 day', rating: 4.2 },
            { name: 'MoneyGram', rate: '200.85', fee: '$7.99', time: '1-2 days', rating: 4.1 }
          ].map((service, index) => (
            <div key={index} className={`p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg hover:border-blue-500 transition-colors cursor-pointer`}>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{service.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Delivery: {service.time}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">1 CAD = {service.rate} PKR</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fee: {service.fee}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm">{service.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transfer Tips */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-lg font-semibold mb-4">Money Transfer Tips</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Best Times to Send</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Exchange rates fluctuate daily. Monitor rates for better deals.</p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Safety First</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Only use licensed money transfer services.</p>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Tax Considerations</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Large transfers may need to be reported to CRA.</p>
          </div>
          
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h4 className="font-medium mb-2">Documentation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Keep records of all international transfers.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Education = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Financial Education</h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Learn the Canadian financial system with real government resources
          </p>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Banking in Canada",
            description: "Open accounts, understand fees, and choose the right bank",
            lessons: [
              { name: "Opening Your First Canadian Bank Account", url: "https://www.canada.ca/en/financial-consumer-agency/services/banking/opening-bank-account.html", completed: true },
              { name: "Understanding Banking Fees", url: "https://www.canada.ca/en/financial-consumer-agency/services/banking/bank-fees.html", completed: true },
              { name: "Newcomer Banking Packages", url: "https://www.canada.ca/en/financial-consumer-agency/services/banking/newcomers-banking.html", completed: false },
              { name: "Online and Mobile Banking Safety", url: "https://www.canada.ca/en/financial-consumer-agency/services/banking/online-banking.html", completed: false },
              { name: "Choosing the Right Bank", url: "https://www.canada.ca/en/financial-consumer-agency/services/banking/choosing-account.html", completed: false }
            ],
            duration: "30 min",
            difficulty: "Beginner",
            color: "blue"
          },
          {
            title: "Credit Building 101",
            description: "Build credit from scratch as a newcomer to Canada",
            lessons: [
              { name: "Understanding Credit Scores in Canada", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/order-credit-report.html", completed: true },
              { name: "Getting Your First Credit Card", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/choose-credit-card.html", completed: false },
              { name: "Building Credit Without History", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/improve-credit-score.html", completed: false },
              { name: "Credit Report Basics", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-report-basics.html", completed: false },
              { name: "Secured vs Unsecured Credit Cards", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-cards/secured-credit-card.html", completed: false },
              { name: "Credit Monitoring and Protection", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-monitoring.html", completed: false },
              { name: "Common Credit Mistakes to Avoid", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/credit-score-myths.html", completed: false }
            ],
            duration: "45 min",
            difficulty: "Beginner",
            color: "green"
          },
          {
            title: "Canadian Tax System",
            description: "Complete guide to understanding and filing Canadian taxes",
            lessons: [
              { name: "Tax Basics for Newcomers", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/getting-ready/getting-ready-online.html", completed: false },
              { name: "Social Insurance Number (SIN)", url: "https://www.canada.ca/en/employment-social-development/services/sin.html", completed: false },
              { name: "Understanding Tax Slips (T4, T5, etc.)", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/personal-income/line-10100-employment-income/employment-income-received.html", completed: false },
              { name: "Filing Your First Tax Return", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/getting-ready.html", completed: false },
              { name: "Tax Credits and Benefits", url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html", completed: false },
              { name: "GST/HST Credit", url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html", completed: false },
              { name: "Provincial vs Federal Taxes", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html", completed: false },
              { name: "Tax Software and Free Filing", url: "https://www.canada.ca/en/revenue-agency/services/e-services/e-services-individuals/netfile-overview/certified-software-netfile-program.html", completed: false }
            ],
            duration: "90 min",
            difficulty: "Intermediate",
            color: "purple"
          },
          {
            title: "Investment & Retirement",
            description: "RRSPs, TFSAs, and building wealth in Canada",
            lessons: [
              { name: "TFSA (Tax-Free Savings Account) Basics", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/tax-free-savings-account.html", completed: false },
              { name: "RRSP (Retirement Savings Plan) Guide", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/rrsps-related-plans/registered-retirement-savings-plan-rrsp.html", completed: false },
              { name: "TFSA vs RRSP: Which to Choose?", url: "https://www.canada.ca/en/financial-consumer-agency/services/savings-investments/tax-free-savings-accounts.html", completed: false },
              { name: "CPP (Canada Pension Plan)", url: "https://www.canada.ca/en/services/benefits/publicpensions/cpp.html", completed: false },
              { name: "OAS (Old Age Security)", url: "https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html", completed: false },
              { name: "Investment Basics for Beginners", url: "https://www.canada.ca/en/financial-consumer-agency/services/savings-investments.html", completed: false },
              { name: "Mutual Funds and ETFs", url: "https://www.canada.ca/en/financial-consumer-agency/services/savings-investments/investing-basics.html", completed: false },
              { name: "Emergency Fund Planning", url: "https://www.canada.ca/en/financial-consumer-agency/services/budget-money/budget-planner.html", completed: false }
            ],
            duration: "120 min",
            difficulty: "Advanced",
            color: "orange"
          }
        ].map((module, index) => (
          <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-blue-500 transition-colors`}>
            <div className={`w-12 h-12 bg-${module.color}-100 dark:bg-${module.color}-900/20 rounded-lg flex items-center justify-center mb-4`}>
              <BookOpen className={`w-6 h-6 text-${module.color}-600`} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{module.description}</p>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{module.lessons.filter(l => l.completed).length}/{module.lessons.length}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className={`bg-${module.color}-500 h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${(module.lessons.filter(l => l.completed).length / module.lessons.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Lessons List */}
            <div className="space-y-2 mb-4">
              {module.lessons.slice(0, 3).map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {lesson.completed ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    )}
                    <span className="text-sm">{lesson.name}</span>
                  </div>
                  <a 
                    href={lesson.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
              {module.lessons.length > 3 && (
                <div className="text-sm text-gray-500">
                  +{module.lessons.length - 3} more lessons
                </div>
              )}
            </div>

            <div className="flex justify-between text-sm border-t border-gray-200 dark:border-gray-700 pt-3">
              <span>{module.lessons.length} lessons</span>
              <span>{module.duration}</span>
              <span className={`px-2 py-1 bg-${module.color}-100 dark:bg-${module.color}-900/20 text-${module.color}-600 rounded`}>
                {module.difficulty}
              </span>
            </div>
            
            <button className={`w-full mt-3 bg-${module.color}-600 hover:bg-${module.color}-700 text-white py-2 rounded-lg transition-colors`}>
              {module.lessons.filter(l => l.completed).length === 0 ? 'Start Module' : 'Continue Learning'}
            </button>
          </div>
        ))}
      </div>

      {/* In-Depth Tax Literacy Section */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">🍁 Complete Tax Literacy for Newcomers</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-purple-600">Tax Fundamentals</h4>
            <div className="space-y-2">
              {[
                { name: "What is Income Tax?", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return.html" },
                { name: "Resident vs Non-Resident Tax", url: "https://www.canada.ca/en/revenue-agency/services/tax/international-non-residents/individuals-leaving-entering-canada.html" },
                { name: "Tax Year in Canada", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/getting-ready.html" },
                { name: "Marginal Tax Rates", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html" }
              ].map((item, idx) => (
                <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors">
                  <span className="text-sm">{item.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-purple-600">Deductions & Credits</h4>
            <div className="space-y-2">
              {[
                { name: "Basic Personal Amount", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-30000-basic-personal-amount.html" },
                { name: "Medical Expenses", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/lines-33099-33199-eligible-medical-expenses-you-claim.html" },
                { name: "Public Transit Credit", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-36400-public-transit-amount.html" },
                { name: "Tuition Tax Credit", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-32300-your-tuition-education-textbook-amounts.html" }
              ].map((item, idx) => (
                <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors">
                  <span className="text-sm">{item.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-purple-600">Filing & Benefits</h4>
            <div className="space-y-2">
              {[
                { name: "Canada Child Benefit", url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html" },
                { name: "GST/HST Credit", url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html" },
                { name: "Working Income Tax Benefit", url: "https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-workers-benefit.html" },
                { name: "Free Tax Clinics", url: "https://www.canada.ca/en/revenue-agency/services/tax/individuals/community-volunteer-income-tax-program.html" }
              ].map((item, idx) => (
                <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2 rounded border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors">
                  <span className="text-sm">{item.name}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Provincial Tax Information */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Provincial Tax Rates & Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { province: "Ontario", rate: "5.05% - 13.16%", url: "https://www.ontario.ca/page/income-tax" },
            { province: "British Columbia", rate: "5.06% - 20.5%", url: "https://www2.gov.bc.ca/gov/content/taxes/income-taxes" },
            { province: "Alberta", rate: "10%", url: "https://www.alberta.ca/personal-income-tax" },
            { province: "Quebec", rate: "15% - 25.75%", url: "https://www.revenuquebec.ca/en/citizens/income-tax-return/" },
            { province: "Manitoba", rate: "10.8% - 17.4%", url: "https://www.gov.mb.ca/finance/taxation/taxes/personal.html" },
            { province: "Saskatchewan", rate: "10.5% - 14.5%", url: "https://www.saskatchewan.ca/residents/taxes-and-investments/income-and-property-tax" }
          ].map((prov, idx) => (
            <a key={idx} href={prov.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <div>
                <div className="font-medium">{prov.province}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{prov.rate}</div>
              </div>
              <ExternalLink className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Resources */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Quick Resources & Tools</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Government of Canada - Financial Services", url: "https://www.canada.ca/en/services/finance.html", icon: ExternalLink },
            { title: "Financial Consumer Agency of Canada", url: "https://www.canada.ca/en/financial-consumer-agency.html", icon: ExternalLink },
            { title: "Budget Calculator", url: "https://www.canada.ca/en/financial-consumer-agency/services/savings-investments/budget-planner.html", icon: Calculator },
            { title: "Credit Score Resources", url: "https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score.html", icon: CreditCard },
            { title: "Newcomer Banking Guide", url: "https://www.canada.ca/en/financial-consumer-agency/services/banking/newcomers-banking.html", icon: BookOpen },
            { title: "Canada Revenue Agency", url: "https://www.canada.ca/en/revenue-agency.html", icon: ExternalLink },
            { title: "Investment Calculator", url: "https://www.canada.ca/en/financial-consumer-agency/services/savings-investments/investment-calculator.html", icon: Calculator },
            { title: "Mortgage Calculator", url: "https://www.canada.ca/en/financial-consumer-agency/services/mortgages/mortgage-calculator.html", icon: Home },
            { title: "Insurance Guide", url: "https://www.canada.ca/en/financial-consumer-agency/services/insurance.html", icon: Shield }
          ].map((resource, index) => (
            <a key={index} href={resource.url} target="_blank" rel="noopener noreferrer" className={`p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg hover:border-blue-500 transition-colors cursor-pointer`}>
              <div className="flex items-center space-x-3">
                <resource.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">{resource.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Financial Glossary */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Essential Canadian Financial Terms</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { term: "Credit Score", definition: "A number (300-900) that represents your creditworthiness in Canada, used by lenders to assess loan applications." },
              { term: "RRSP", definition: "Registered Retirement Savings Plan - a tax-advantaged account for retirement savings where contributions are tax-deductible." },
              { term: "TFSA", definition: "Tax-Free Savings Account - an investment account where earnings grow tax-free and withdrawals are not taxed." },
              { term: "SIN", definition: "Social Insurance Number - a 9-digit number required for employment, government benefits, and tax filing in Canada." },
              { term: "Chequing Account", definition: "A bank account designed for daily transactions, bill payments, and accessing money frequently." },
              { term: "GIC", definition: "Guaranteed Investment Certificate - a low-risk investment that guarantees your principal plus interest after a set term." }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                <h4 className="font-medium mb-1">{item.term}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.definition}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {[
              { term: "Prime Rate", definition: "The interest rate that banks charge their most creditworthy customers, used as a benchmark for other rates." },
              { term: "Mortgage", definition: "A loan used to purchase real estate, where the property serves as collateral for the loan." },
              { term: "RESP", definition: "Registered Education Savings Plan - a savings account to help families save for a child's post-secondary education." },
              { term: "CPP", definition: "Canada Pension Plan - a government retirement pension program that provides monthly payments to eligible retirees." },
              { term: "EI", definition: "Employment Insurance - temporary financial assistance for unemployed Canadians while they look for work." },
              { term: "GST/HST", definition: "Goods and Services Tax/Harmonized Sales Tax - federal consumption taxes applied to most goods and services." }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                <h4 className="font-medium mb-1">{item.term}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newcomer-Specific Financial Tips */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">💡 Financial Tips for Newcomers</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-green-600">First 3 Months</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Open a chequing and savings account with a major Canadian bank</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Apply for a secured credit card to start building credit history</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Get your Social Insurance Number (SIN) from Service Canada</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Set up direct deposit for your salary</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-blue-600">First Year</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>File your first Canadian tax return to establish residency</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>Apply for government benefits (GST/HST credit, CCB if applicable)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>Consider opening TFSA and RRSP accounts</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>Build an emergency fund covering 3-6 months of expenses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const Community = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community</h1>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Connect with other newcomers on their financial journey
          </p>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: "Active Members", value: "12,847", icon: Users, color: "blue" },
          { label: "Success Stories", value: "1,205", icon: Award, color: "green" },
          { label: "Questions Answered", value: "8,934", icon: BookOpen, color: "purple" },
          { label: "Countries Represented", value: "45", icon: Globe, color: "orange" }
        ].map((stat, index) => (
          <div key={index} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Discussions */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Recent Discussions</h3>
        <div className="space-y-4">
          {[
            {
              title: "Best bank for newcomers from India?",
              author: "Priya K.",
              replies: 23,
              time: "2 hours ago",
              tags: ["Banking", "Newcomers"]
            },
            {
              title: "How long did it take to build your first credit score?",
              author: "Ahmed M.",
              replies: 15,
              time: "5 hours ago",
              tags: ["Credit Building"]
            },
            {
              title: "Money transfer to Philippines - best rates?",
              author: "Maria S.",
              replies: 8,
              time: "1 day ago",
              tags: ["Money Transfer", "Philippines"]
            },
            {
              title: "TFSA vs RRSP for newcomers - advice needed",
              author: "David L.",
              replies: 31,
              time: "2 days ago",
              tags: ["Investment", "Tax"]
            }
          ].map((discussion, index) => (
            <div key={index} className={`p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg hover:border-blue-500 transition-colors cursor-pointer`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium">{discussion.title}</h4>
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{discussion.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>by {discussion.author}</span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{discussion.replies} replies</span>
                </div>
                <div className="flex space-x-2">
                  {discussion.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              story: "Built my credit score from 0 to 720 in 18 months using CredWise tips!",
              author: "Sarah from Pakistan",
              achievement: "Credit Score: 720",
              timeframe: "18 months"
            },
            {
              story: "Saved $15,000 for my first home down payment with the budget tools.",
              author: "Carlos from Mexico",
              achievement: "Home Down Payment",
              timeframe: "2 years"
            }
          ].map((story, index) => (
            <div key={index} className={`p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800`}>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">"{story.story}"</p>
                  <div className="flex justify-between text-sm">
                    <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>- {story.author}</span>
                    <span className="text-green-600 font-medium">{story.achievement}</span>
                  </div>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Achieved in {story.timeframe}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Groups */}
      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className="text-xl font-semibold mb-4">Join Your Regional Community</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { country: "Pakistan", members: "2,847", flag: "🇵🇰" },
            { country: "India", members: "3,205", flag: "🇮🇳" },
            { country: "Philippines", members: "1,923", flag: "🇵🇭" },
            { country: "China", members: "1,456", flag: "🇨🇳" },
            { country: "Nigeria", members: "892", flag: "🇳🇬" },
            { country: "Bangladesh", members: "745", flag: "🇧🇩" }
          ].map((group, index) => (
            <div key={index} className={`p-4 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg hover:border-blue-500 transition-colors cursor-pointer`}>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{group.flag}</span>
                <div>
                  <h4 className="font-medium">{group.country}</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{group.members} members</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    switch(currentStep) {
      case 0: return <WelcomeStep />;
      case 1: return <PersonalInfoStep />;
      case 2: return <BackgroundStep />;
      case 3: return <GoalsStep />;
      case 4: return <FinancialStatusStep />;
      case 5: return <CompleteStep />;
      default: return <WelcomeStep />;
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'credit': return <CreditBuilder />;
      case 'budget': return <BudgetManager />;
      case 'transfer': return <MoneyTransfer />;
      case 'education': return <Education />;
      case 'community': return <Community />;
      default: return <Dashboard />;
    }
  };

  // Main App Layout
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900'
      }`}>
        {/* Header */}
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white/80'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-50`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold">CredWise Canada</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8`}>
            <ProgressBar />
            {renderStep()}
            
            {/* Navigation Buttons */}
            {currentStep > 0 && currentStep < 5 && (
              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  className={`px-6 py-3 rounded-lg border ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  } transition-colors flex items-center`}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" /> Back
                </button>
                
                <button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center"
                >
                  Continue <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} mt-16`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2024 CredWise Canada. Helping newcomers build financial success in Canada.
              </p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Privacy Policy
                </a>
                <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Terms of Service
                </a>
                <a href="#" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Logged-in Dashboard Layout
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold">CredWise Canada</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={logout}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                        currentPage === item.id
                          ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-600'
                          : darkMode
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              {renderPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;