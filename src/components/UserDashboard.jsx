import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { 
  FaClock, 
  FaUser, 
  FaSignOutAlt, 
  FaSun, 
  FaMoon, 
  FaCar, 
  FaTrafficLight,
  FaHistory,
  FaMoneyBillAlt,
  FaCalendarAlt,
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaChevronDown
} from "react-icons/fa";
import { MdOutlineQuiz, MdEdit, MdSave, MdOutlineDirectionsCar } from "react-icons/md";
import { RiDashboardLine, RiRoadMapLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("exam");
  const [theme, setTheme] = useState("light");
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+250 78X XXX XXX",
    photo: null,
    licenseType: "Provisional (Provisoire)",
    level: "beginner"
  });
  const [editMode, setEditMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [examStarted, setExamStarted] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [examQuestions, setExamQuestions] = useState([]);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showExamIntro, setShowExamIntro] = useState(true);
  const timerRef = useRef(null);

  // Different question sets based on user level
  const questionSets = {
    beginner: [
      {
        question: "What is the minimum age requirement for a provisional license in Rwanda?",
        options: ["16 years", "18 years", "21 years", "25 years"],
        correctAnswer: 1
      },
      {
        question: "What should you do when approaching a red traffic light?",
        options: [
          "Slow down but proceed if clear",
          "Stop completely until light turns green",
          "Speed up to pass before it changes",
          "Honk and proceed with caution"
        ],
        correctAnswer: 1
      },
      {
        question: "When can you use your hazard warning lights?",
        options: [
          "When parking illegally for a short time",
          "When your vehicle is stationary and causing an obstruction",
          "To thank other drivers",
          "When driving in heavy rain"
        ],
        correctAnswer: 1
      },
      {
        question: "What does a solid white line at the side of the road indicate?",
        options: [
          "You may overtake if safe",
          "No stopping or parking at any time",
          "Edge of the roadway",
          "Bicycle lane"
        ],
        correctAnswer: 2
      },
      {
        question: "When driving in fog, you should:",
        options: [
          "Use high beam headlights",
          "Increase your speed to get through quickly",
          "Use low beam headlights and reduce speed",
          "Flash your lights periodically"
        ],
        correctAnswer: 2
      },
      {
        question: "The maximum speed limit in urban areas in Rwanda is:",
        options: [
          "40 km/h",
          "60 km/h",
          "80 km/h",
          "100 km/h"
        ],
        correctAnswer: 1
      },
      {
        question: "When approaching a roundabout, you should:",
        options: [
          "Give way to vehicles coming from your right",
          "Accelerate to enter quickly",
          "Sound your horn to alert others",
          "Stop completely before entering"
        ],
        correctAnswer: 0
      },
      {
        question: "What does a yellow diamond-shaped sign indicate?",
        options: [
          "Warning of potential hazard",
          "Mandatory instruction",
          "Tourist information",
          "Priority road"
        ],
        correctAnswer: 0
      },
      {
        question: "When being overtaken by another vehicle, you should:",
        options: [
          "Increase your speed",
          "Move to the left if possible",
          "Flash your headlights",
          "Sound your horn"
        ],
        correctAnswer: 1
      },
      {
        question: "The legal blood alcohol concentration (BAC) limit for drivers in Rwanda is:",
        options: [
          "0.05%",
          "0.08%",
          "0.00%",
          "0.10%"
        ],
        correctAnswer: 2
      },
      {
        question: "What should you do when your vehicle starts to skid?",
        options: [
          "Brake hard",
          "Steer in the direction of the skid",
          "Accelerate slightly",
          "Turn the steering wheel sharply"
        ],
        correctAnswer: 1
      },
      {
        question: "When parking downhill, you should turn your front wheels:",
        options: [
          "Away from the curb",
          "Toward the curb",
          "Straight ahead",
          "It doesn't matter"
        ],
        correctAnswer: 1
      },
      {
        question: "What does a flashing yellow traffic light mean?",
        options: [
          "Stop if possible",
          "Proceed with caution",
          "Prepare to stop",
          "Speed up to clear the intersection"
        ],
        correctAnswer: 1
      },
      {
        question: "The minimum tread depth for tires in Rwanda is:",
        options: [
          "0.8 mm",
          "1.0 mm",
          "1.6 mm",
          "2.0 mm"
        ],
        correctAnswer: 2
      },
      {
        question: "When driving at night, you should:",
        options: [
          "Use parking lights only",
          "Use high beams at all times",
          "Dim your lights when approaching other vehicles",
          "Flash your lights periodically"
        ],
        correctAnswer: 2
      },
      {
        question: "What does this sign mean? (image of a triangle with an exclamation mark)",
        options: [
          "No entry",
          "Warning of potential hazard ahead",
          "Priority road",
          "No stopping"
        ],
        correctAnswer: 1
      },
      {
        question: "When approaching a school bus with flashing red lights, you must:",
        options: [
          "Slow down and proceed with caution",
          "Stop until the lights stop flashing",
          "Sound your horn and pass carefully",
          "Increase speed to pass quickly"
        ],
        correctAnswer: 1
      },
      {
        question: "The proper hand position on the steering wheel is:",
        options: [
          "10 and 2 o'clock",
          "9 and 3 o'clock",
          "8 and 4 o'clock",
          "Any of the above"
        ],
        correctAnswer: 1
      },
      {
        question: "What should you do when you see a pedestrian crossing the road?",
        options: [
          "Speed up to pass before they cross",
          "Slow down and be prepared to stop",
          "Sound your horn to alert them",
          "Flash your headlights"
        ],
        correctAnswer: 1
      },
      {
        question: "When making a right turn, you should:",
        options: [
          "Swing wide to the left first",
          "Stay as close to the right as possible",
          "Turn from the center of the road",
          "It doesn't matter"
        ],
        correctAnswer: 1
      }
    ],
    intermediate: [
      // ... (keep your intermediate questions)
    ],
    advanced: [
      // ... (keep your advanced questions)
    ]
  };

  // Sample exam history data
  const examHistory = [
    {
      id: 1,
      date: "2023-10-15",
      type: "Provisional License",
      score: 85,
      passed: true,
      details: "First attempt at provisional license exam"
    },
    {
      id: 2,
      date: "2023-09-28",
      type: "Provisional License",
      score: 65,
      passed: false,
      details: "Practice test before official exam"
    }
  ];

  const themeClasses = {
    light: {
      card: "bg-white text-gray-800",
      background: "bg-gray-50",
      text: "text-gray-800",
      border: "border-gray-200",
      button: "bg-yellow-500 hover:bg-yellow-600 text-white",
      secondaryButton: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    },
    dark: {
      card: "bg-gray-800 text-white",
      background: "bg-gray-900",
      text: "text-white",
      border: "border-gray-700",
      button: "bg-yellow-600 hover:bg-yellow-700 text-white",
      secondaryButton: "bg-gray-700 hover:bg-gray-600 text-white",
    },
  };

  // Initialize exam questions based on user level
  useEffect(() => {
    setExamQuestions(questionSets[profile.level] || questionSets.beginner);
  }, [profile.level]);

  // Countdown timer effect
  useEffect(() => {
    if (isTimerRunning && timeLeft > 0 && examStarted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timeLeft, examStarted]);

  const handleTimeUp = () => {
    clearInterval(timerRef.current);
    submitExam();
    alert("Time's up! Your provisional exam has been submitted.");
  };

  const startExam = () => {
    setShowExamIntro(false);
    setExamStarted(true);
    setIsTimerRunning(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setExamCompleted(false);
    setTimeLeft(30 * 60); // Reset timer
  };

  const submitExam = () => {
    setIsTimerRunning(false);
    setExamCompleted(true);
    setExamStarted(false);
    const percentage = Math.round((score / examQuestions.length) * 100);
    if (percentage >= 75) {
      alert(`Congratulations! You passed with ${percentage}%. You can now proceed to the practical test.`);
    } else {
      alert(`You scored ${percentage}%. You need at least 75% to pass the provisional exam. Please try again.`);
    }
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === examQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      submitExam();
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
    }
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const headerTimer = (
    <div
      className={`flex items-center ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-100"
      } px-3 py-2 rounded-lg`}
    >
      <FaClock className="text-blue-600 mr-2" />
      <span className="font-medium">{formatTime(timeLeft)}</span>
    </div>
  );

  const timeLeftCard = (
    <div
      className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${
        themeClasses[theme].border
      }`}
    >
      <div className="flex items-center">
        <div className="bg-yellow-100 p-3 rounded-full mr-4">
          <FaClock className="text-yellow-600 text-xl" />
        </div>
        <div>
          <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`}>
            Time Left
          </p>
          <p className="text-2xl font-bold">{formatTime(timeLeft)}</p>
        </div>
      </div>
    </div>
  );

  const pauseTestButton = (
    <button
      onClick={toggleTimer}
      className={`px-6 py-3 ${themeClasses[theme].card} border ${
        themeClasses[theme].border
      } rounded-xl shadow-sm hover:shadow-md transition duration-300 flex items-center`}
    >
      <FaClock className="mr-2 text-blue-600" />
      {isTimerRunning ? "Pause Test" : "Resume Test"}
    </button>
  );

  return (
    <div className={`min-h-screen ${themeClasses[theme].background}`}>
      {/* Header */}
      <header className={`py-4 px-6 shadow-sm ${themeClasses[theme].card}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="../src/assets/logo.png" 
              alt="Logo" 
              className="h-15 mr-2 w-19"
            />
          </div>
          <div className="flex items-center space-x-4">
            {examStarted && headerTimer}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${themeClasses[theme].card}`}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
            <button className="p-2 relative">
              <IoMdNotificationsOutline className="text-xl" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative">
              <button 
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                  <FaUser />
                </div>
                <span className="font-medium">{profile.name}</span>
                <FaChevronDown className={`text-sm transition-transform ${showProfileDropdown ? 'transform rotate-180' : ''}`} />
              </button>
              {showProfileDropdown && (
                <div className={`absolute right-0 mt-2 w-48 ${themeClasses[theme].card} rounded-md shadow-lg py-1 z-50 border ${themeClasses[theme].border}`}>
                  <div className="px-4 py-2 border-b ${themeClasses[theme].border}">
                    <p className="text-sm font-medium">{profile.name}</p>
                    <p className="text-xs text-gray-500 truncate">{profile.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab("profile");
                      setShowProfileDropdown(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-yellow-100 hover:text-yellow-600"
                  >
                    Profile Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-red-100 hover:text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div
              className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}
            >
              <nav className="space-y-2">
                <button
                  onClick={() => {
                    setActiveTab("exam");
                    setShowExamIntro(true);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                    activeTab === "exam"
                      ? "bg-yellow-100 text-yellow-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <MdOutlineQuiz className="mr-3" />
                  Itegure Exam
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                    activeTab === "history"
                      ? "bg-yellow-100 text-yellow-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FaHistory className="mr-3 text-yellow-500" />
                  Amakuru y'Ibizamini
                </button>
               
                <button
                  onClick={() => setActiveTab("resources")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                    activeTab === "resources"
                      ? "bg-yellow-100 text-yellow-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <RiRoadMapLine className="mr-3" />
                  Amasomo
                </button>
                <button
                  onClick={() => setActiveTab("payments")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                    activeTab === "payments"
                      ? "bg-yellow-100 text-yellow-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FaMoneyBillAlt className="mr-3" />
                  Ibishyurwa
                </button>
                <button
                  onClick={() => setActiveTab("appointments")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                    activeTab === "appointments"
                      ? "bg-yellow-100 text-yellow-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FaCalendarAlt className="mr-3" />
                  Igihe cy'Ubusabe
                </button>
                <button
                  onClick={() => setActiveTab("support")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                    activeTab === "support"
                      ? "bg-yellow-100 text-yellow-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <FaQuestionCircle className="mr-3" />
                  Ubufasha
                </button>
              </nav>

              <button
                onClick={handleLogout}
                className="w-full mt-6 px-4 py-3 bg-red-100 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-200"
              >
                <FaSignOutAlt className="mr-3" />
                Gusohoka
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            {activeTab === "exam" ? (
              <>
                {showExamIntro && !examStarted && !examCompleted ? (
                  <div className={`${themeClasses[theme].card} p-8 rounded-2xl shadow-sm border ${themeClasses[theme].border} text-center`}>
                    <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MdOutlineQuiz className="text-yellow-600 text-3xl" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Murakaza Neza Mu Itegeko Ry’Ubushoferi Bwa Provisoire!</h2><div className="mb-6">
  <p className="text-gray-700 mb-4">Iki ni ikizamini gikoreshwa mu kugenzura ubumenyi bwawe ku:</p>
  
  <div className="flex border-l-4 border-yellow-500 pl-4 mb-4">
    <div>
      <span className="font-semibold">Ibyerekezo by'umuhanda</span> 
      <span className="text-gray-600"> (Ibimenyetso, amabara y'amatara, n'ibimenyetso by'umuhanda)</span>
    </div>
  </div>

  <div className="flex border-l-4 border-yellow-500 pl-4 mb-4">
    <div>
      <span className="font-semibold">Amategeko y'umuhanda</span> 
      <span className="text-gray-600"> (Ibinyuranye, amahoro, imyitozo, n'ibindi)</span>
    </div>
  </div>

  <div className="flex border-l-4 border-yellow-500 pl-4">
    <div>
      <span className="font-semibold">Uko ukoresha imodoka mu buryo bwiza</span> 
      <span className="text-gray-600"> (Kwita ku mutekano, kwirinda impanuka, n'ubushobozi bwo kuyobora)</span>
    </div>
  </div>
</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className={`${themeClasses[theme].card} p-4 rounded-xl border ${themeClasses[theme].border} flex flex-col items-center`}>
                        <div className="bg-blue-100 p-3 rounded-full mb-3">
                          <FaTrafficLight className="text-blue-600 text-xl" />
                        </div>
                        <h3 className="font-semibold mb-1">Ibimenyetso By'umuhanda</h3>
                        <p className="text-sm text-gray-500">Menya Unasobanukirwe ibimenyetso byose by'umuhanda</p>
                      </div>
                      <div className={`${themeClasses[theme].card} p-4 rounded-xl border ${themeClasses[theme].border} flex flex-col items-center`}>
                        <div className="bg-green-100 p-3 rounded-full mb-3">
                          <FaCar className="text-green-600 text-xl" />
                        </div>
                        <h3 className="font-semibold mb-1">Amategeko y'umuhanda</h3>
                        <p className="text-sm text-gray-500">Menya Amategeko Y'umuhanda Byihuse Kandi Vuba</p>
                      </div>
                      <div className={`${themeClasses[theme].card} p-4 rounded-xl border ${themeClasses[theme].border} flex flex-col items-center`}>
                        <div className="bg-purple-100 p-3 rounded-full mb-3">
                          <RiRoadMapLine className="text-purple-600 text-xl" />
                        </div>
                        <h3 className="font-semibold mb-1">Uburyo Bwiza Bwo Gutwara</h3>
                        <p className="text-sm text-gray-500">Sobanukirwa Uburyo Bwiza Watrwaramo Ikinyabiziga Cyawe Kandi Bwizewe</p>
                      </div>
                    </div>

                    <div className={`${themeClasses[theme].card} p-6 rounded-xl border ${themeClasses[theme].border} mb-8 text-left max-w-2xl mx-auto`}>
                      <h3 className="text-lg font-semibold mb-4 text-center">Amategeko Y'Ikizamini</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Ikizamini kigomba gusozwa muminota 30
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          ikizamini kigizwe nibibazo {examQuestions.length} byoguhitamo
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Byibuze ugomba kugira 75% kugira ngo ufatwe nkuwatsinze
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Soma Ikibazo Neza Mbere Yuko Usubiza
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-600 mr-2">•</span>
                          Ushobora Kuba Wasubira Mubibazo Wasoje Ugahindura Igisubizo
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <button
                        onClick={startExam}
                        className={`px-8 py-4 ${themeClasses[theme].button} rounded-xl text-lg font-semibold flex-1 sm:flex-none`}
                      >
                        Tangira Ikizamini Nonaha
                      </button>
                      <button
                        onClick={() => setActiveTab("resources")}
                        className={`px-8 py-4 ${themeClasses[theme].secondaryButton} rounded-xl text-lg font-semibold flex-1 sm:flex-none`}
                      >
                        Reba Amasomo Yanjye
                      </button>
                    </div>
                  </div>
                ) : examCompleted ? (
                  <div className={`${themeClasses[theme].card} p-8 rounded-2xl shadow-sm border ${themeClasses[theme].border} text-center`}>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                      score >= examQuestions.length * 0.75 ? "bg-green-100" : "bg-red-100"
                    }`}>
                      {score >= examQuestions.length * 0.75 ? (
                        <FaCar className="text-green-600 text-3xl" />
                      ) : (
                        <FaTrafficLight className="text-red-600 text-3xl" />
                      )}
                    </div>
                    <h2 className="text-2xl font-bold mb-2">
                      {score >= examQuestions.length * 0.75 ? "Congratulations!" : "Try Again"}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      You scored {score} out of {examQuestions.length} ({Math.round((score / examQuestions.length) * 100)}%)
                    </p>
                    {score >= examQuestions.length * 0.75 ? (
                      <p className="text-green-600 font-medium mb-6">
                        You've passed the provisional exam! You can now proceed to the practical driving test.
                      </p>
                    ) : (
                      <p className="text-red-600 font-medium mb-6">
                        You need at least {Math.ceil(examQuestions.length * 0.75)} correct answers to pass.
                      </p>
                    )}
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => {
                          setExamCompleted(false);
                          setTimeLeft(30 * 60);
                          setShowExamIntro(true);
                        }}
                        className={`px-6 py-3 ${themeClasses[theme].button} rounded-xl`}
                      >
                        Retake Exam
                      </button>
                      <button
                        onClick={() => setActiveTab("resources")}
                        className={`px-6 py-3 ${themeClasses[theme].secondaryButton} rounded-xl`}
                      >
                        Study Materials
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {timeLeftCard}
                      <div
                        className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}
                      >
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <MdOutlineQuiz className="text-blue-600 text-xl" />
                          </div>
                          <div>
                            <p
                              className={`text-sm ${
                                theme === "dark" ? "text-gray-300" : "text-gray-500"
                              }`}
                            >
                              Questions Answered
                            </p>
                            <p className="text-2xl font-bold">{currentQuestionIndex}/{examQuestions.length}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}
                      >
                        <div className="flex items-center">
                          <div className="bg-green-100 p-3 rounded-full mr-4">
                            <MdOutlineQuiz className="text-green-600 text-xl" />
                          </div>
                          <div>
                            <p
                              className={`text-sm ${
                                theme === "dark" ? "text-gray-300" : "text-gray-500"
                              }`}
                            >
                              Current Score
                            </p>
                            <p className="text-2xl font-bold">{score}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">
                          Question {currentQuestionIndex + 1} of {examQuestions.length}
                        </h2>
                        {headerTimer}
                      </div>
                      <div className="mb-6">
                        <p className="mb-4 text-lg font-medium">{examQuestions[currentQuestionIndex].question}</p>
                        <div className="space-y-3">
                          {examQuestions[currentQuestionIndex].options.map((option, index) => (
                            <div 
                              key={index} 
                              className={`flex items-center p-4 rounded-lg border ${
                                selectedAnswer === index 
                                  ? "border-yellow-500 bg-yellow-50" 
                                  : themeClasses[theme].border
                              } cursor-pointer`}
                              onClick={() => handleAnswerSelect(index)}
                            >
                              <input
                                type="radio"
                                id={`option-${index}`}
                                name="answer"
                                checked={selectedAnswer === index}
                                onChange={() => handleAnswerSelect(index)}
                                className="mr-3"
                              />
                              <label htmlFor={`option-${index}`} className="cursor-pointer">{option}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button
                          onClick={goToPreviousQuestion}
                          disabled={currentQuestionIndex === 0}
                          className={`px-6 py-3 ${themeClasses[theme].secondaryButton} rounded-xl ${
                            currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          Previous
                        </button>
                        {pauseTestButton}
                        <button
                          onClick={goToNextQuestion}
                          disabled={selectedAnswer === null}
                          className={`px-6 py-3 ${themeClasses[theme].button} rounded-xl ${
                            selectedAnswer === null ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          {currentQuestionIndex === examQuestions.length - 1 ? "Submit Exam" : "Next"}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : activeTab === "history" ? (
              <div className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}>
                <h2 className="text-xl font-bold mb-6">Amakuru y'Ibizamini</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Exam Type</th>
                        <th className="px-4 py-3 text-left">Score</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {examHistory.map((exam) => (
                        <tr key={exam.id} className="border-b">
                          <td className="px-4 py-3">{exam.date}</td>
                          <td className="px-4 py-3">{exam.type}</td>
                          <td className="px-4 py-3">{exam.score}%</td>
                          <td className="px-4 py-3">
                            <span className={`${exam.passed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} px-2 py-1 rounded-full text-xs`}>
                              {exam.passed ? "Passed" : "Failed"}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <button className="text-blue-600 hover:underline">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : activeTab === "profile" ? (
              <div
                className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Profile Information</h2>
                  <button
                    onClick={() => setEditMode(!editMode)}
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      editMode
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {editMode ? (
                      <>
                        <MdSave className="mr-2" />
                        Save
                      </>
                    ) : (
                      <>
                        <MdEdit className="mr-2" />
                        Edit
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      className={`block mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Full Name
                    </label>
                    {editMode ? (
                      <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="w-full p-3 border rounded-lg"
                      />
                    ) : (
                      <p className="p-3 bg-gray-100 rounded-lg">{profile.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Email Address
                    </label>
                    {editMode ? (
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full p-3 border rounded-lg"
                      />
                    ) : (
                      <p className="p-3 bg-gray-100 rounded-lg">{profile.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Phone Number
                    </label>
                    {editMode ? (
                      <input
                        type="tel"
                        name="phone"
                        value={profile.phone}
                        onChange={handleProfileChange}
                        className="w-full p-3 border rounded-lg"
                      />
                    ) : (
                      <p className="p-3 bg-gray-100 rounded-lg">{profile.phone}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className={`block mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      License Type
                    </label>
                    <p className="p-3 bg-gray-100 rounded-lg">{profile.licenseType}</p>
                  </div>

                  {editMode && (
                    <div>
                      <label
                        className={`block mb-1 ${
                                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Skill Level
                      </label>
                      <select
                        name="level"
                        value={profile.level}
                        onChange={handleProfileChange}
                        className="w-full p-3 border rounded-lg"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label
                      className={`block mb-1 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Profile Photo
                    </label>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                        {profile.photo ? (
                          <img 
                            src={profile.photo} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <FaUser className="text-gray-400 text-xl" />
                        )}
                      </div>
                      {editMode && (
                        <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
                          Upload Photo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === "resources" ? (
              <div className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}>
                <h2 className="text-xl font-bold mb-6">Amasomo</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border} hover:shadow-md transition duration-300`}>
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaTrafficLight className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Traffic Signs and Signals</h3>
                        <p className="text-gray-600 mb-4">Learn all the traffic signs and signals used in Rwanda</p>
                        <button className="text-blue-600 hover:underline">Start Learning</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border} hover:shadow-md transition duration-300`}>
                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FaCar className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Road Safety Rules</h3>
                        <p className="text-gray-600 mb-4">Understand the essential road safety regulations</p>
                        <button className="text-blue-600 hover:underline">Start Learning</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border} hover:shadow-md transition duration-300`}>
                    <div className="flex items-start">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <RiRoadMapLine className="text-purple-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Defensive Driving</h3>
                        <p className="text-gray-600 mb-4">Techniques to anticipate and avoid hazards</p>
                        <button className="text-blue-600 hover:underline">Start Learning</button>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border} hover:shadow-md transition duration-300`}>
                    <div className="flex items-start">
                      <div className="bg-yellow-100 p-3 rounded-full mr-4">
                        <MdOutlineDirectionsCar className="text-yellow-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Vehicle Maintenance</h3>
                        <p className="text-gray-600 mb-4">Basic car maintenance you should know</p>
                        <button className="text-blue-600 hover:underline">Start Learning</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === "payments" ? (
              <div className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}>
                <h2 className="text-xl font-bold mb-6">Ibishyurwa</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FaMoneyBillAlt className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        You have no pending payments. All your exam fees are up to date.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Description</th>
                        <th className="px-4 py-3 text-left">Amount</th>
                        <th className="px-4 py-3 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3">2023-10-10</td>
                        <td className="px-4 py-3">Provisional License Exam Fee</td>
                        <td className="px-4 py-3">10,000 RWF</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Paid
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3">2023-09-25</td>
                        <td className="px-4 py-3">Learning Materials</td>
                        <td className="px-4 py-3">5,000 RWF</td>
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Paid
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : activeTab === "appointments" ? (
              <div className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}>
                <h2 className="text-xl font-bold mb-6">Igihe cy'Ubusabe</h2>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FaCalendarAlt className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        You have no upcoming appointments. Schedule your practical driving test when you're ready.
                      </p>
                    </div>
                  </div>
                </div>
                <button className={`px-6 py-3 ${themeClasses[theme].button} rounded-xl`}>
                  Schedule Practical Test
                </button>
              </div>
            ) : activeTab === "support" ? (
              <div className={`${themeClasses[theme].card} p-6 rounded-2xl shadow-sm border ${themeClasses[theme].border}`}>
                <h2 className="text-xl font-bold mb-6">Ubufasha</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FaQuestionCircle className="text-blue-600 text-xl" />
                      </div>
                      <h3 className="font-semibold">FAQ</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Find answers to common questions about the driving license process in Rwanda.
                    </p>
                    <button className="text-blue-600 hover:underline">View FAQs</button>
                  </div>
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <FaPhone className="text-green-600 text-xl" />
                      </div>
                      <h3 className="font-semibold">Contact Us</h3>
                    </div>
                    <p className="text-gray-600 mb-2">Phone: +250 788 123 456</p>
                    <p className="text-gray-600 mb-4">Hours: Mon-Fri, 8AM-5PM</p>
                    <button className="text-blue-600 hover:underline">Call Now</button>
                  </div>
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <FaEnvelope className="text-purple-600 text-xl" />
                      </div>
                      <h3 className="font-semibold">Email Support</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                    <button className="text-blue-600 hover:underline">Send Email</button>
                  </div>
                  <div className={`p-6 rounded-xl border ${themeClasses[theme].border}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-yellow-100 p-3 rounded-full mr-4">
                        <FaCar className="text-yellow-600 text-xl" />
                      </div>
                      <h3 className="font-semibold">Visit Office</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Kigali City Tower, 5th Floor, KN 5 Rd, Kigali
                    </p>
                    <button className="text-blue-600 hover:underline">Get Directions</button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;