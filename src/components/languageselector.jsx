function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(lang => lang.code === i18n.language) || languages[0]
  );

  // Handle language change
  const changeLanguage = async (langCode) => {
    try {
      await i18n.changeLanguage(langCode);
      localStorage.setItem('i18nextLng', langCode); // Persist language preference
      setSelectedLanguage(languages.find(lang => lang.code === langCode));
    } catch (err) {
      console.error('Error changing language:', err);
    }
    setShowDropdown(false);
  };

  // Update selected language when i18n language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];
      setSelectedLanguage(currentLang);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="relative" tabIndex={0} onBlur={() => setShowDropdown(false)}>
      <button
        className="flex items-center justify-between border border-gray-200 px-3 py-2 rounded-lg bg-white hover:bg-gray-50 shadow-sm w-48 transition-all duration-200 hover:shadow-md"
        onClick={() => setShowDropdown(!showDropdown)}
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        <div className="flex items-center space-x-2">
          <img 
            src={selectedLanguage.flag} 
            alt={selectedLanguage.name} 
            className="h-4 w-6 object-cover rounded" 
          />
          <span className="text-sm text-[#2A7B9B] font-medium">
            {selectedLanguage.name}
          </span>
        </div>
        <FiChevronDown className={`w-4 h-4 text-[#2A7B9B] transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`} />
      </button>

      {showDropdown && (
        <div className="absolute mt-2 bg-white rounded-lg shadow-xl w-full z-50 border border-gray-100 overflow-hidden transition-all duration-200">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer space-x-2 transition-colors ${
                selectedLanguage.code === lang.code ? 'bg-blue-50' : ''
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} alt={lang.name} className="h-4 w-6 object-cover rounded" />
              <span className="text-sm text-[#0d3547] font-medium">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}